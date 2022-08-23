export class persona{
    id?: number; // el "?" indica que el dato del id no es necesario
    nombre: String;
    apellido: String;
    img: String;

    constructor(nombre: String,apellido: String, img: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
    }

}