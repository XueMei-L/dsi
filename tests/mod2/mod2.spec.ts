import 'mocha';
import { expect } from 'chai';
import { ConcretePokemonCharizard } from "../../src/mod2/concretePokemonCharizard"
import { ConcretePokemonPikachu } from "../../src/mod2/concretePokemonPikachu"
import { ConcreteCreatorElectri } from "../../src/mod2/subCreatorElectri"
import { ConcreteCreatorFire } from "../../src/mod2/subCreatorFire"


describe('Tests for the modification', () => {

    const fuegoCharizard = new ConcreteCreatorFire("charizard", 60, 55, "fire", [84, 78, 100, 78]);
    const electricPikachu = new ConcreteCreatorElectri("pikachu", 50, 45, "electric", [90, 55, 110, 60]);

    const charizard = new ConcretePokemonCharizard("charizard", 60, 55, "fire", [84, 78, 100, 78]);
    const pikachu = new ConcretePokemonPikachu("pikachu", 50, 45, "electric", [90, 55, 110, 60]);
    
    it('Charizard', () => {
        expect(fuegoCharizard).not.to.be.null;
    });

    it('pikachu', () => {
        expect(electricPikachu).not.to.be.null;
    });
    
    it('inst charizard', () => {
        expect(charizard).not.to.be.null;
    });
    
    it('inst pikachu', () => {
        expect(pikachu).not.to.be.null;
    });


    it('Charizard name', () => {
        expect(fuegoCharizard.factoryMethod().getName()).to.eq("charizard");
    });

    it('Charizard getweight', () => {
        expect(fuegoCharizard.factoryMethod().getWeight()).to.eq(60);
    });
    
    it('Charizard getheight', () => {
        expect(fuegoCharizard.factoryMethod().getHeight()).to.eq(55);
    });
    
    it('Charizard get attack', () => {
        expect(fuegoCharizard.factoryMethod().getAttack()).to.eq(84);
    });

    it('Charizard getdefense', () => {
        expect(fuegoCharizard.factoryMethod().getDefense()).to.eq(78);
    });

    it('Charizard getspeed', () => {
        expect(fuegoCharizard.factoryMethod().getSpeed()).to.eq(100);
    });

    it('Charizard gethp', () => {
        expect(fuegoCharizard.factoryMethod().getHP()).to.eq(78);
    });

    it('Charizard type', () => {
        expect(fuegoCharizard.factoryMethod().getType()).to.eq("fire");
    });

});