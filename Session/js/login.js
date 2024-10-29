class admin {
    constructor(nombre, apellido, correo, contraseña){
        this.id = crypto.randomUUID();
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.contraseña = contraseña;
        this.rol = "Admin";
    }
}
let admins = [
    new admin("", "", "@gmail.com", "")
]


let usuarios = JSON.parse(localStorage.getItem("users")) || [];

function loguear (){
    let user = document.getElementById("usuario").value;

    let pass = document.getElementById("contraseña").value;

    usuarios.forEach(usuario => {
        if(usuario.correo === user && usuario.contraseña === pass){
            if (usuario.rol === "usuario") {
                window.location = "";
            }

            else if(usuario.rol === "Admin"){
                window.location= "";
            }

            else if(usuario.rol === ""){

            }
        }
    });

}