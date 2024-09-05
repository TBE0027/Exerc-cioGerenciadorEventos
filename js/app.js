
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {

    event.preventDefault();

    console.log(formulario);
    

    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;

    adicionarEvento(nome, data);
    mostrarEventos();
});

function adicionarEvento(nome, data) {
    const eventos = JSON.parse(localStorage.getItem('eventos')) || [];

    // console.log(eventos);

    eventos.push({ nome, data});
    // console.log(eventos);
    localStorage.setItem('eventos', JSON.stringify(eventos));
    
    
}

function mostrarEventos() {
    const eventos = JSON.parse(localStorage.getItem('eventos')) || [];
    const lista = document.getElementById('lista');
    lista .innerHTML = '';

    eventos.forEach(evento => {
        const item = document.createElement('li');
        item.textContent = event.nome + " - " + evento.data;
        lista.appendChild(item);
    });
}

mostrarEventos();