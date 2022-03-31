import { RestType } from "typedoc";
import { ImplementsPlugin } from "typedoc/dist/lib/converter/plugins";
import { convert } from "typedoc/dist/lib/utils/options/declaration";

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
    constructor(protected num:number) {
    }

    setMeter(unidadM:unidadMetric) {
        return this.num / unidadMetric.yardas /unidadM / unidadLonguitud.m;
    }
    setCMeter(unidadM:unidadMetric) {
        return this.num / unidadMetric.yardas /unidadM / unidadLonguitud.cm;
    }
    setKMeter(unidadM:unidadMetric) {
        return this.num / unidadMetric.yardas /unidadM / unidadLonguitud.km;
    }
}

/**
 * class Imperial
 */
export class Imperial{
    constructor(private num:number) {
    }
    setMeter(unidadM:unidadMetric) {
        return this.num / unidadMetric.yardas /unidadM / unidadLonguitud.m;
    }
}

/**
 * Class adapter
 */
export class adapter{
    constructor(private imp:Imperial) {
        // super();
    }
    getValue(){
        return this.imp.convertir();
    }
}

// Instancias
const imperialLength = new ImperialLength(1);
imperialLength.setMeter(unidadMetric.pulgadas);
console.log(imperialLength.setMeter(unidadMetric.pulgadas));
console.log(imperialLength.setCMeter(unidadMetric.pulgadas));

// const imperial = new Imperial(100);
// console.log(adap.getValue());

// const adap = new adapter(imperial);