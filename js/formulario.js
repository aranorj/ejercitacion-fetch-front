window.onload = () => {

    let idPelicula = prompt("Ingresa el id de la pelicula a modificar");
    let form = document.querySelector(".formulario");

    async function getPeliculaBy(id) {
        let resultado = await fetch(`http://localhost:3030/movies/${id}`)
        return await resultado.json()
    }

    async function completarFormulario() {
        try {
            let data = await getPeliculaBy(idPelicula);
            if (!data) throw new Error("No hay data");
            form.title.value = data.title;
        } catch (error) {
            alert(error.message);
        }
    }

    completarFormulario();

    let btnEditar = document.querySelector(".botonAgregar");

    async function editPeliculaBy(id, settings) {
        try {
            let resultado = await fetch(`http://localhost:3030/movies/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(settings)
        })
        return await resultado.json()
        } catch (error) {
            alert(error.message);
        }
        
    }

    btnEditar.addEventListener("click", (e) => {
        e.preventDefault();

        let data = {
            title : form.title.value
        }
        editPeliculaBy(idPelicula, data)
        .then((respuesta) => alert(respuesta))
    }

    )

}