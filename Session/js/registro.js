class Usuario {
    constructor(nombre, apellido, correo, contraseña) {
        this.id = usuarios.length > 0 ? usuarios.at(-1).id + 1 : 1;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.contraseña = contraseña;
        this.rol = "Usuario";
    }
}


let usuarios = JSON.parse(localStorage.getItem("users")) || [];

const guardarUsuarios = () => {
    localStorage.setItem("users", JSON.stringify(usuarios));
    window.location = "../index.html"
};



const agregarUsuario = (event) => {
    event.preventDefault();
    let nombre = document.querySelector("#nombre");
    let apellido = document.querySelector("#apellido");
    let correo = document.querySelector("#correo");
    let contraseña = document.querySelector("#contraseña");

    let user = new Usuario(nombre.value, apellido.value, correo.value, contraseña.value);

    usuarios.push(user);
    guardarUsuarios();
    alert("El usuario se registró de manera correcta");
    nombre.value = "";
    apellido.value = "";
    correo.value = "";
    contraseña.value = "";
    document.querySelector("#registro").reset();
    nombre.focus();
};

document.querySelector("#registro").addEventListener("submit", agregarUsuario);


