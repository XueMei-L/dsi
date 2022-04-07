/**
 * The Product interface declares the operations that all concrete products must
 * implement.
 */
export interface ProductPokemon {
    getName():string;
    getWeight():number;
    getHeight():number;
    getType():string;
    getAttack():number;
    getDefense():number;
    getSpeed():number;
    getHP():number;
}