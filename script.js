document.addEventListener('DOMContentLoaded', function () {
    let slideIndex = 0;
    mostrarSlides();

    function mostrarSlides() {
        let slides = document.getElementsByClassName('slideshow')[0].getElementsByTagName('img');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = 'block';
        setTimeout(mostrarSlides, 3000); // Cambia la imagen cada 3 segundos
    }
})

document.addEventListener("DOMContentLoaded", function () {
    // Obtener la referencia al campo de búsqueda
    var searchInput = document.getElementById("searchInput");

    // Agregar un event listener para el evento de entrada en el campo de búsqueda
    searchInput.addEventListener("input", function () {
        // Obtener el valor del campo de búsqueda
        var searchTerm = searchInput.value.toLowerCase();

        // Obtener todas las filas de la tabla
        var rows = document.querySelectorAll("tbody tr");

        // Iterar sobre cada fila y mostrar u ocultar según la búsqueda
        rows.forEach(function (row) {
            // Obtener el contenido de la celda del jugador y convertir a minúsculas
            var playerCell = row.querySelector("td:nth-child(3)");
            var playerText = playerCell.textContent.toLowerCase();

            // Mostrar u ocultar la fila según si coincide con el término de búsqueda
            row.style.display = playerText.includes(searchTerm) ? "table-row" : "none";
        });
    });
});

