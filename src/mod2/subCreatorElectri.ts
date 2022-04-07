import { ProductPokemon } from "./interfacePokemon"
import { Creator } from "./creatorPrincipal"
import { ConcretePokemonCharizard } from "./concretePokemonCharizard"

/**
 * Concreate Creators override the factory method with type ConcreteCreatorElectri
 */
export class ConcreteCreatorElectri extends Creator {

    constructor(private readonly name: string, private weight: number,
        private height: number, private type: string,
        private info:number[]){
        // private attack:number, private defense:number,
        // private speed:number, private hp:number) {
        super();
      }
    /**
     * Note that the signature of the method still uses the abstract product
     * type, even though the concrete product is actually returned from the
     * method. This way the Creator can stay independent of concrete product
     * classes.
     */
    public factoryMethod(): ProductPokemon {
        return new ConcretePokemonCharizard(this.name, this.weight, 
            this.height, this.type, this.info)
    }
}