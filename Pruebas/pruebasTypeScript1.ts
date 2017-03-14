/**
 * Tipos de datos en TypeScript(tipados de datos)
 * Strings
 * number (integers)
 * Boolean
 * Array
 * Tuplas
 * Enums
 * Any
 * Void
 * 
 * 
 * Formas de declara variable: let, var y const
 * let (javacript6)
 * var (variables global) // mala practica declarar variables globales.
 * const (constantes)
 */
let nombre_variable: string ="Nombre";

let edad:number=24;

//array's
let lista: number[] = [1,2,3];
let lista2: Array<number> = [1,2,3];
//las tuplas crea relacion entre variable diferentes. En ejemplo asocia nombre a edad
let tupla:[string, number];
tupla =["david",25];

enum Animales{Perro,Gato,Pajaro};
let animal: Animales = Animales.Gato;

// para solbentar problemas con falta de tipado, variables que no sabes lo que te llegara.
let any = true;
// guarda varaibles que devuelva vacio, solo permite 2 tipos de datso undefined o null.
let nada: void = undefined;
//TypeScript añade clases de javascript6, se declaran
class NombreClase{
   // propiedad: string;
    _propiedad: string;
    private _propiedade2: number;
    //constructores (Solo uno)
    constructor(propiedad: string){
        this._propiedad=propiedad
    }
    //getter y setter
    get propiedad(): string{
        return this._propiedad;
    }
    set propiedad(propiedad: string) {
        this._propiedad = propiedad;
    }
    printMsg(): string{
        return "Esta clase tiene:" +this._propiedad;
    }
}
/*Interfaces */
interface LogInterface{
    msg: string;
    date?: number;
}

function Logger(log: LogInterface){
    console.log(log.msg);
}

/*Módulos y Namespace */
import {Validator} from './path';

export class Validator{
    Validator(n: number): boolean{
        return n > 5;
    }      
}
