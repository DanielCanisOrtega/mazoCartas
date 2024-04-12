// Función para cargar las cartas desde el endpoint
async function cargarCartas() {
    try {
        const response = await fetch('https://carlosreneas.github.io/endpoints/cartas.json');
        const data = await response.json();

        const tablaCartas = document.getElementById('tabla').getElementsByTagName('tbody')[0];

        data.forEach(carta => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${carta.numero}</td>
                <td>${carta.carta}</td>
                <td>${carta.cantidad}</td>
            `;
            tablaCartas.appendChild(fila);
        });
    } catch (error) {
        console.error('Error al cargar las cartas:', error);
    }
}

// Llama a la función para cargar las cartas cuando la página esté completamente cargada
document.addEventListener('DOMContentLoaded', cargarCartas);

// Función para cargar imágenes desde un directorio
function cargarImagenes() {
    const directorio = '../img/'; // Directorio donde están las imágenes
    const imagenes = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png']; // Lista de nombres de archivo de imágenes

    const contenedorImagenes = document.getElementById('imagenes');

    imagenes.forEach(imagen => {
        const img = document.createElement('img');
        img.src = directorio + imagen;
        img.alt = 'Descripción de la imagen'; // Puedes cambiar esto según tus necesidades
        contenedorImagenes.appendChild(img);
    });
}

// Llama a la función para cargar las imágenes cuando la página esté completamente cargada
document.addEventListener('DOMContentLoaded', cargarImagenes);
