import { Inject, Injectable } from "@nestjs/common";
import { chartAbstractFactory } from "./abstract-factory";

export class barFactory extends chartAbstractFactory{
   



    crearGrafico() {
        console.log("esta es la fabrica de barra")
    }


}