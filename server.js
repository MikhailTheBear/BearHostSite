const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process');

const app = express();
const port = 3000;
let minecraftProcess = null;
const crypto = require('crypto');

// Включаем CORS
app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is running on local IP');
});

const localIP = '192.168.105.5'

const users = [];

// Запуск сервера Minecraft
app.post('/start-server', (req, res) => {
    if (!minecraftProcess) {
        minecraftProcess = spawn('java', ['-jar', 'server.jar'], { cwd: '/Users/mikhailthebear/Projects/Html-JS-CSS/' });

        minecraftProcess.stdout.on('data', (data) => {
            console.log(`Minecraft server output: ${data}`);
        });

        minecraftProcess.stderr.on('data', (data) => {
            console.error(`Minecraft server error: ${data}`);
        });

        minecraftProcess.on('close', (code) => {
            console.log(`Minecraft server exited with code ${code}`);
            minecraftProcess = null; // Сбрасываем переменную после завершения
        });

        res.send('Minecraft сервер запущен');
    } else {
        res.send('Minecraft сервер уже запущен');
    }
});

// Остановка сервера Minecraft
app.post('/stop-server', (req, res) => {
    if (minecraftProcess) {
        minecraftProcess.stdin.write('stop\n');  // Отправляем команду "stop" в Minecraft сервер
        minecraftProcess = null;  // Очищаем переменную
        res.send('Minecraft сервер остановлен');
    } else {
        res.send('Minecraft сервер не был запущен');
    }
});


app.post('/restart-server', (req, res) => {
    if (minecraftProcess) {
        // Если сервер запущен, сначала его останавливаем
        minecraftProcess.kill('SIGTERM');
        minecraftProcess.on('close', () => {
            // После остановки запускаем заново
            minecraftProcess = spawn('java', ['-jar', 'server.jar'], { cwd: '/Users/mikhailthebear/Projects/Html-JS-CSS/' });
            minecraftProcess.stdout.on('data', (data) => {
                console.log(`Minecraft: ${data}`);
            });
            minecraftProcess.stderr.on('data', (data) => {
                console.error(`Minecraft error: ${data}`);
            });
            minecraftProcess.on('close', (code) => {
                console.log(`Minecraft server stopped with code ${code}`);
                minecraftProcess = null;
            });
            res.send('Minecraft server restarted!');
        });
    } else {
        // Если сервер не запущен, просто стартуем его
        minecraftProcess = spawn('java', ['-jar', 'server.jar'], { cwd: '/Users/mikhailthebear/Projects/Html-JS-CSS/' });
        minecraftProcess.stdout.on('data', (data) => {
            console.log(`Minecraft: ${data}`);
        });
        minecraftProcess.stderr.on('data', (data) => {
            console.error(`Minecraft error: ${data}`);
        });
        minecraftProcess.on('close', (code) => {
            console.log(`Minecraft server stopped with code ${code}`);
            minecraftProcess = null;
        });
        res.send('Minecraft server started!');
    }
});

app.listen(port, localIP, () => {
    console.log(`Server running at http://${localIP}:${port}/`);
});



const nodemailer = require('nodemailer');


// Middleware для обработки данных в формате JSON
app.use(express.json());

// Настраиваем транспорт для отправки почты
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'bear.os.official@gmail.com',
        pass: 'nqeygqfgkbcvbvdc'
    }
});

// Маршрут для отправки письма
app.post('/send-email', (req, res) => {
    const { toEmail, subject, message } = req.body;

    let mailOptions = {
        from: 'BearHost',
        to: toEmail,
        subject: subject,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            alert("test")
            return res.status(500).send('Ошибка отправки письма: ' + error.message);
        }
        res.status(200).send('Письмо успешно отправлено!');
    });
});


function generateToken(length = 20) {
    return crypto.randomBytes(length).toString('hex');
}

// Регистрация пользователя
app.post('/register', (req, res) => {
    const { username, password, email } = req.body;

    // Проверка, существует ли пользователь
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        return res.status(400).json({ message: 'Email уже используется.' });
    }

    // Генерация токена верификации
    const verificationToken = generateToken();

    // Сохранение пользователя
    users.push({
        username,
        password,
        email,
        isVerified: false,
        verificationToken,
    });

    // Ссылка для верификации
    const verificationLink = `http://localhost:${port}/verify-email?token=${verificationToken}`;

    // Отправка письма
    transporter.sendMail({
        from: '"Verification Service" <your_email@gmail.com>',
        to: email,
        subject: 'Подтверждение почты',
        text: `Перейдите по ссылке, чтобы подтвердить свою почту: ${verificationLink}`,
        html: `<p>Перейдите по <a href="${verificationLink}">этой ссылке</a>, чтобы подтвердить свою почту.</p>`,
    });

    res.status(200).json({ message: 'Регистрация успешна! Проверьте свою почту для подтверждения.' });
});

app.get('/verify-email', (req, res) => {
    const { token } = req.query;

    const user = users.find(user => user.verificationToken === token);
    if (!user) {
        return res.status(400).json({ message: 'Неверный или устаревший токен.' });
    }

    // Подтверждение email
    user.isVerified = true;
    user.verificationToken = null; // Удаляем токен после использования

    res.status(200).send('Почта успешно подтверждена!');
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
        return res.status(400).json({ message: 'Неверный email или пароль.' });
    }

    if (!user.isVerified) {
        return res.status(403).json({ message: 'Почта не подтверждена. Проверьте свой email.' });
    }

    res.status(200).json({ message: `Добро пожаловать, ${user.username}!` });
});