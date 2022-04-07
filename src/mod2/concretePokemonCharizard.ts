import { ProductPokemon } from "./interfacePokemon"

/**
 * Concrete Products provide various implementations of the Product interface.
 */
 export class ConcretePokemonCharizard implements ProductPokemon {
    constructor(private name:string,private weight:number, 
        private height:number, private type:string, 
        private info:number[]) {}

    // Getters of atributes of class ConcretePokemonCharizard
    getName() { 
        return this.name; 
    }
    getWeight() { 
        return this.weight; 
    }
    getHeight() { 
        return this.height; 
    }
    getType() { 
        return this.type; 
    }
    getAttack() { 
        return this.info[0]; 
    }
    getDefense() { 
        return this.info[1]; 
    }
    getSpeed() { 
        return this.info[2]; 
    }
    getHP() { 
        return this.info[3]; 
    }
}