
    const loginForm = document.querySelector('.auth-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Отменяем стандартную отправку формы
            window.location.href = 'profile.html'; // Переходим на страницу профиля
        });
    }
