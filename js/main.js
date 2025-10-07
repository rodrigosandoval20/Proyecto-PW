// Funcionalidad básica
document.addEventListener('DOMContentLoaded', function() {
    
    const loginForm = document.getElementById('login');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
            alert('Login enviado');
        });
    }
    
    const spectatorBtn = document.querySelector('button[type="button"]');
    if (spectatorBtn) {
        spectatorBtn.addEventListener('click', function() {
            alert('Modo espectador');
        });
    }
    
});
