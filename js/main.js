window.onload = () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);

  // Aqui debemos agregar nuestro fetch

  async function listarPeliculas() {

    try {
      let respuesta = await fetch("http://localhost:3030/movies");
      let peliculas = await respuesta.json()

      peliculas.forEach((movie) => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");

        const h1 = document.createElement("h1");
        h1.textContent = movie.title;

        const p = document.createElement("p");
        p.textContent = `Rating: ${movie.rating}`;

        const duracion = document.createElement("p");
        duracion.textContent = `Duración: ${movie.length}`;

        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(p);
        if (movie.genero !== null) {
          const genero = document.createElement("p");
          genero.textContent = `Genero: ${movie.genero.name}`;
          card.appendChild(genero);
        }
        card.appendChild(duracion);
      });
    } catch (error) {
      alert(error.message)

    }


  }
  listarPeliculas();

};
