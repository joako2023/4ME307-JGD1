import { chartAbstractFactory } from "./abstract-factory";

export class donutFactory extends chartAbstractFactory{
    crearGrafico() {
        console.log("esta es la fabrica de donut")
    }
    
}