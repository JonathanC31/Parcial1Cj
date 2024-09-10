

document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('cambiotext').addEventListener('click', function() {
    document.getElementById('text1').textContent = "Nuevo contenido para el primer párrafo.";
    document.getElementById('text2').textContent = "Nuevo contenido para el segundo párrafo.";
    document.getElementById('text3').textContent = "Nuevo contenido para el tercer párrafo.";
});
