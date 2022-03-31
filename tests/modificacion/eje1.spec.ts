import 'mocha';
import { expect } from 'chai';
import { isConvertible } from "../../src/isConvertible";
import { ImperialLength } from "../../src/ImperialLength";



describe('Tests for the modification', () => {
    //Longuitud
    enum unidadLonguitud { 
        m  = Math.pow(10, 0),
        dm = Math.pow(10, -1),
        cm = Math.pow(10, -2),
        mm = Math.pow(10, -3),
    }
    
    const longuitudAImperial = new ImperialLength(unidadLonguitud.mm, 500);
    // protected unidad1:number, protected unidMag:unidadLonguitud)
    describe('Longuitud', () => {
        it('7 dm = 70 cm', () => {
            expect(longuitudAImperial.convertir(unidadLonguitud.cm)).to.be.equal(70);
        });
    });

});