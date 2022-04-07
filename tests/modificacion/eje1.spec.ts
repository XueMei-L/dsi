import 'mocha';
import { expect } from 'chai';
import { ConcreteCreatorFuego, ConcreteCreatorElectri } from "../../src/eje1";
import { clientCode } from "../../src/eje1";



describe('Tests for the modification', () => {

    const fuegoCharizard = new ConcreteCreatorFuego("charizard", 60, 55, "fire", [84, 78, 100, 78]);
    const electricPikachu = new ConcreteCreatorElectri("pikachu", 50, 45, "electric", [90, 55, 110, 60]);

    it('Charizard', () => {
        expect(fuegoCharizard).not.to.be.null;
    });

    it('pikachu', () => {
        expect(electricPikachu).not.to.be.null;
    });


    // it('Charizard', () => {
    //     expect(clientCode(fuegoCharizard)).to.eq("");
    // });

    // it('Pikachu', () => {
    //     expect(clientCode(electricPikachu)).to.eq("");
    // });

});