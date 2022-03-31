import { RestType } from "typedoc";
import { convert } from "typedoc/dist/lib/utils/options/declaration";
import { Convertible } from "./isConvertible";

/**
 * Funcion que calcula la unidad de longuitud
 * m = metro
 * cm = centimetro
 * km = kilometro
 */
enum unidadLonguitud {  m  = Math.pow(10, 0),
                        cm = Math.pow(10, -2),      
                        km = Math.pow(10, -3),
}

enum unidadMetric {     pulgadas = 36,
                        pies = 3,
                        yardas = 1,
                        millas = 0.00049,
}

// centímetros, metros y kilómetros;
export class ImperialLength {
    constructor(protected num:number, protected unidMetric:unidadMetric) {
    }

    getValue(){
        return this.num * unidadLonguitud
    }
    // ImperialLength - pulgadas, pies, yardas y millas.
    convertirM(unidad2:unidadLonguitud):number {
        let resultUnidad = this.num * unidadMetric.yardas / this.unidMetric;
        let resultLonguitud = resultUnidad / unidadLonguitud.m / unidad2;
        return resultLonguitud;
    }
}

export class Imperial


let a = new ImperialLength(1, unidadMetric.yardas);
a.convertirM(unidadLonguitud.cm);
console.log(a.convertirM(unidadLonguitud.cm));

export class adapter extends ImperialLength {
    constructor(private Imperial:Imperial) {
        super();
    }
}


// export class adapter extends ImperialLength {
//     constructor(private num:number, private ImperialLength:ImperialLength) {
//         super();
//     }
// }