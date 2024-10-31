const toggleButton = document.getElementById('toggleTheme');

function applyTheme(theme) {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(theme);
}

const savedTheme = localStorage.getItem('theme') || 'light-theme';
applyTheme(savedTheme);

if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        const currentTheme = document.body.classList.contains('light-theme') ? 'dark-theme' : 'light-theme';
        applyTheme(currentTheme);
        localStorage.setItem('theme', currentTheme); // Salva o tema selecionado no localStorage
    });
}

window.addEventListener('storage', (event) => {
    if (event.key === 'theme') {
        applyTheme(event.newValue); // Aplica o novo tema quando detectado
    }
});


let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;

}