// script.js
document.addEventListener('DOMContentLoaded', function() {
    const glitch = document.querySelector('.glitch');
    
    // Дополнительный JS-глитч: случайные вспышки
    function randomGlitch() {
        glitch.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        setTimeout(() => {
            glitch.style.color = '#fff';
        }, 100);
    }
    
    // Запуск случайных глитчей
    setInterval(randomGlitch, 3000 + Math.random() * 2000);
    
    // Анимация появления
    glitch.style.opacity = '0';
    glitch.style.transform = 'scale(0.5)';
    setTimeout(() => {
        glitch.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        glitch.style.opacity = '1';
        glitch.style.transform = 'scale(1)';
    }, 200);
});