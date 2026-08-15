const parametros = new URLSearchParams(window.location.search);

const especie = parametros.get("especie");

const animal = animales.find(function(animal){
    return animal.id === especie;
});
if (animal){
    document.getElementById("animal-nombre").textContent = animal.nombre;

    document.getElementById("animal-cientifico").textContent = animal.cientifico;

    document.getElementById("animal-imagen").src = animal.imagen;
   
    document.getElementById("animal-dieta").textContent = animal.dieta;
    
    document.getElementById("animal-origen").textContent = animal.origen;
    
    document.getElementById("animal-temperatura").textContent = animal.temperatura;
   
    document.getElementById("animal-humedad").textContent = animal.humedad;
   
    document.getElementById("animal-descripcion").textContent = animal.descripcion;
} else {
    document.getElementById("animal-nombre").textContent = "Animal no encontrado";
}