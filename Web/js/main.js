let usuario = ""
let visitas = 0

const bienvenidos = document.getElementById("usuario")

function identificarUsuario(){
    usuario = prompt("Ingresar nombre")
    localStorage.setItem("usuario",usuario);
    bienvenidos.innerHTML = `Bienvenido/a ${usuario}`
}
let usuarioAnterior =  localStorage.getItem("usuario")
console.log(usuarioAnterior);
if (usuarioAnterior == null){
    usuarioAnterior = ""
} 
else{
    bienvenidos.innerHTML = `Bienvenido/a ${usuarioAnterior}`
}
bienvenidos.addEventListener("click",identificarUsuario)


const Visitas = document.getElementById("visitas")

function contador(){
    visitas = localStorage.getItem("Suma")
    visitas ++ 
    localStorage.setItem("Suma",visitas)
    Visitas.innerHTML = `Visitas : ${visitas}`
}
contador()
