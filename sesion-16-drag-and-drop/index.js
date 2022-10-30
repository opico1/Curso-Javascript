const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion")
const papeleras = document.querySelectorAll(".papelera")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        //console.log("Inicio de arrastre");
        console.log("Estoy arrastrando el parrafo: " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })

    parrafo.addEventListener("dragend", () => {
        //console.log("He terminado de arrastrar")
        parrafo.classList.remove("dragging")
    })

    
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy"
    })

    seccion.addEventListener("drop", event => {
        const id_parrafo = event.dataTransfer.getData("id")
        //console.log("Parrafo id", id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })

    
})

/*papeleras.forEach(papelera => {
    papelera.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy"
    })

    papelera.addEventListener("drop", event => {
        const id_parrafo = event.dataTransfer.getData("id")
        //console.log("Parrafo id", id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        
        event.dataTransfer.clearData(papelera.appendChild(parrafo)  )
    })
    
    papelera.addEventListener("dragover", event => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy"
    })

    papelera.addEventListener("drop", event => {
        const id_parrafo2 = event.dataTransfer.getData("id");
        event.dataTransfer.clearData(id_parrafo2);
        
    })
})*/