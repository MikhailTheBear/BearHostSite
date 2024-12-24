let username = document.querySelector('#username');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirmation');
let submit = document.querySelector('#submit')
let submitLog = document.querySelector('#submitLog')
let register = document.querySelector('#register')
let login = document.querySelector('#login')
let remember = document.querySelector('#remember')
let email = document.querySelector('#email')
let loadavatar = document.querySelector('#load-avatar')
let settings = document.querySelector('#settings-btn')
let accountsettings = document.querySelector('#account-settings')
let gotopanel = document.querySelector('#gotopanel')
let quit = document.querySelector('#logout-btn')
let savechanges = document.querySelector('#savechanges')
let deleteaccount = document.querySelector('#delete-account-btn')
let home = document.querySelector('#home')
let whyus = document.querySelector('#whyus')
let servercontrol = document.querySelector('#servercontrol')
let start = document.querySelector('#startServerBtn')
let restart = document.querySelector('#restartServerBtn')
let stop = document.querySelector('#stopServerBtn')
let welcomeback = document.querySelector('#welcomeback')
let ahaa = document.querySelector('#ahaa')
let dhaa = document.querySelector('#dhaa')

function User(username, password, confirmpassword) {
    this.username = username;
    this.password = password;
    this.confirmPassword = confirmPassword;
}

function createId(users){
    return Object.keys(users).length;
}

/*
(function(){
    if(!submit) return;
    submit.addEventListener('click', () => {
        const usernameUser = username.value;
        const passwordUser = password.value;
        const confirmPasswordUser = confirmPassword.value;

        if(passwordUser !== confirmPasswordUser){
            alert ('Passwords don\'t match!')
        }
        else{
            console.log('Succes:');
            console.log("Username: " + usernameUser);
            console.log("Password: " + passwordUser);
            console.log("Confirmation: " + confirmPasswordUser);
            
        }

        
    })
})();
*/



const translations = {
    "ru": {
        "register": "Пожалуйста, зарегистрируйтесь",
        "please rogin": "Пожалуйста, войдите",
        "username": "Имя пользователя",
        "password": "Пароль",
        "confirmPassword": "Повтор пороля",
        "submit": "Зарегистрироваться",
        "submitLog": "Войти",
        "remember": "Запомнить Меня",
        "login": "Пожалуйста, войдите",
        "email": "Почта",
        "gotopanel": "В панель",
        "quit": "Выйти",
        "savechanges": "Сохранить Изменения",
        "deleteaccount": "Удалить Аккаунт",
        "accountsettings": "Настройки Аккаунта",
        "settings": "Настройки",
        "loadavatar": "Загрузить Аватарку",
        "home": "Домой",
        "whyus": "Почему мы?",
        "welcomeback": "Добро пожаловать! ",
        "start": "Запустить",
        "restart": "Перезагрузить",
        "stop": "Остановить",
        "servercontrol": "Управление Сервером",
        "dhaa": "Нет аккаунта?",
        "ahaa": "Уже есть аккаунт?",
    },
    "en": {
        "register": "Please register",
        "please rogin": "Please login",
        "username": "Username",
        "password": "Password",
        "confirmPassword": "Confirm Password",
        "submit": "Register",
        "submitLog": "Login",
        "remember": "Remember Me",
        "login": "Please Login",
        "email": "Email",
        "gotopanel": "Go to panel",
        "quit": "Quit",
        "savechanges": "Save Changes",
        "deleteaccount": "Delete Account",
        "settings": "Settings",
        "accountsettings": "Account Settings",
        "loadavatar": "Load Avatar",
        "home": "Home",
        "whyus": "Why us?",
        "welcomeback": "Welcome back! ",
        "start": "Start",
        "restart": "Restart",
        "stop": "Stop",
        "servercontrol": "Server Control",
        "dhaa": "Dont have an account?",
        "ahaa": "Already have an account?",
    },
    "es": {
        "register": "Por favor regístrese",
        "please rogin": "Por favor inicia sesión",
        "username": "Nombre de usuario",
        "password": "Contraseña",
        "confirmPassword": "confirmar Contraseña",
        "submit": "Registro",
        "submitLog": "Acceso",
        "remember": "Acuérdate de mí",
        "login": "Por favor inicia sesión",
        "email": "Correo electrónico",
        "gotopanel": "Ir al panel",
        "quit": "Abandonar",
        "savechanges": "Guardar cambios",
        "deleteaccount": "Eliminar cuenta",
        "settings": "Ajustes",
        "accountsettings": "Configuraciones de la cuenta",
        "loadavatar": "Cargar avatar",
        "home": "Hogar",
        "whyus": "¿Por qué nosotros?",
        "welcomeback": "Bienvenido de nuevo! ",
        "start": "Comenzar",
        "restart": "Reanudar",
        "stop": "Detener",
        "servercontrol": "Control del Servidor",
        "dhaa": "¿No hay cuenta?",
        "ahaa": "¿Ya tienes una cuenta?",
    },
}


function setLanguageRegister(language) {
    username.placeholder = translations[language].username;
    email.placeholder = translations[language].email;
    password.placeholder = translations[language].password;
    confirmPassword.placeholder = translations[language].confirmPassword;
    register.innerText = translations[language].register;
    submit.innerText = translations[language].submit;
    submitLog.innerText = translations[language].submitLog;
    ahaa.innerText = translations[language].ahaa;
}

function setLanguageLogin(language) {
    username.placeholder = translations[language].username;
    password.placeholder = translations[language].password;
    login.innerText = translations[language].login;
    submit.innerText = translations[language].submit;
    submitLog.innerText = translations[language].submitLog;
    remember.innerText = translations[language].remember;
    dhaa.innerText = translations[language].dhaa;
}

function setLanguageMain(language) {
    submitLog.innerText = translations[language].submitLog;
    submit.innerText = translations[language].submit;
    home.innerText = translations[language].home;
    whyus.innerText = translations[language].whyus;
}

function setLanguageDash(language) {
    settings.innerText = translations[language].settings;
    welcomeback.innerText = translations[language].welcomeback;
    start.innerText = translations[language].start;
    restart.innerText = translations[language].restart;
    stop.innerText = translations[language].stop;
    servercontrol.innerText = translations[language].servercontrol;
}

function setLanguageSettings(language) {
    username.innerText = translations[language].username;
    password.innerText = translations[language].password;
    confirmPassword.innerText = translations[language].confirmPassword;
    email.innerText = translations[language].email;
    savechanges.innerText = translations[language].savechanges;
    quit.innerText = translations[language].quit;
    deleteaccount.innerText = translations[language].deleteaccount;
    gotopanel.innerText = translations[language].gotopanel;
    accountsettings.innerText = translations[language].accountsettings;
    loadavatar.innerText = translations[language].loadavatar;
}


document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value; // Получаем email

    // Получаем текущий массив пользователей из localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Проверка, существует ли пользователь с таким именем
    const userExists = users.some(user => user.username === username);
    const emailExists = users.some(user => user.email === email);

    if (userExists) {
        alert('A user with the same name already exists');
        return;
    }

    if (emailExists) {
        alert('A user with the same email already exists');
        return;
    }

   


    // Добавляем нового пользователя в массив
    users.push({
        username: username,
        password: password,
        email: email
    });

    // Сохраняем обновленный массив в localStorage
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful!');
    // Перенаправление на страницу входа
    window.location.href = 'login.html';
});

// Вход пользователя
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Получаем массив пользователей из localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Ищем пользователя с соответствующим username и password
    const foundUser = users.find(user => user.username === username && user.password === password);

    if (foundUser) {
        alert(`Welcome, ${foundUser.username}!`);
        localStorage.setItem('loggedInUser', username);
        // Дополнительная логика (например, перенаправление на главную страницу)
        window.location.href = 'dash.html'; // Пример перенаправления
    } else {
        alert('Invalid username or password!');
    }
});



// Инициализация EmailJS с вашим USER_ID
// (function(){
//     emailjs.init("ZDTkfWOWpOxuKilCC"); // Замените на ваш USER_ID
// })();


function generateToken(length = 32) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < length; i++) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
}


// Обработка формы и отправка письма
(function(){
    let contactForm = document.querySelector('#contactForm');
    if(!contactForm) return;

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;

        // Получаем пользователей из localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Ищем пользователя по email
        const foundUser = users.find(user => user.email === email);

        if (foundUser) {
            const resetToken = generateToken();
            foundUser.resetToken = resetToken;

            // Сохраняем токен для пользователя в localStorage
            localStorage.setItem('users', JSON.stringify(users));

            // Генерируем ссылку для сброса пароля
            const resetLink = `http://192.168.105.5:8080/reset_password.html?token=${resetToken}`;
        
            // Отправляем email с resetLink
            fetch('http://192.168.105.5:3000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    toEmail: email,
                    subject: 'Password Reset',
                    message: resetLink
                })
            })
            .then(response => response.text())
            .then(data => console.log(data), alert("Mail Success sent!"))
            .catch(error => {
                console.error('Error:', error);
                alert('An error has occurred...', error);
            });
        }
        else{
            alert("User not exist...")
        }
    });
})();


(function(){
    const avatarInput = document.querySelector('#avatarInput');
    if(!avatarInput) return;
    avatarInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            const avatarBase64 = e.target.result;
            const user = users.find(user => user.username === loggedInUser);
            user.avatar = avatarBase64; // Сохраняем аватарку как Base64 строку
            localStorage.setItem('users', JSON.stringify(users)); // Обновляем данные в localStorage
        };

        reader.readAsDataURL(file);
    });
    
}());


function getChatKey(user1, user2) {
    // Сортируем имена пользователей, чтобы ключ был одинаковым независимо от порядка
    const sortedUsers = [user1, user2].sort();
    return `chat_${sortedUsers[0]}_${sortedUsers[1]}`;
}

// Функция для загрузки сообщений из localStorage
function loadChatHistory(user1, user2) {
    const chatKey = getChatKey(user1, user2);
    return JSON.parse(localStorage.getItem(chatKey)) || [];
}

// Функция для сохранения сообщений в localStorage
function saveChatHistory(user1, user2, messages) {
    const chatKey = getChatKey(user1, user2);
    localStorage.setItem(chatKey, JSON.stringify(messages));
}


// Функция для отображения сообщений
function displayMessages() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.innerHTML = ''; // Очищаем окно перед обновлением

    let chatHistory = loadChatHistory(loggedInUser, selectedUser);

    chatHistory.forEach(message => {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('message-container');

        const avatarImg = document.createElement('img');
        avatarImg.src = getUserAvatar(message.sender);
        avatarImg.alt = 'avatar';
        avatarImg.classList.add('avatar');

        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        
        if (message.sender === loggedInUser) {
            messageElement.classList.add('user');
        } else {
            messageElement.classList.add('other');
        }

        messageElement.textContent = message.text;

        messageContainer.appendChild(avatarImg); // Добавляем аватар
        messageContainer.appendChild(messageElement); // Добавляем текст сообщения
        chatWindow.appendChild(messageContainer); // Добавляем в окно чата
    });

    chatWindow.scrollTop = chatWindow.scrollHeight; // Прокручиваем к последнему сообщению
}