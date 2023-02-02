import { chartAbstractFactory } from "./abstract-factory";

export class lineFactory extends chartAbstractFactory{
    crearGrafico() {
        console.log("esta es la fabrica de line")
    }
    
}