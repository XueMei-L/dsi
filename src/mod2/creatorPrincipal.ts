import { ProductPokemon } from "./interfacePokemon"

/**
 * The Creator class declares the factory method that is supposed to return an
 * object of a Product class. The Creator's subclasses usually provide the
 * implementation of this method.
 */
export abstract class Creator {
    /**
     * Note that the Creator may also provide some default implementation of the
     * factory method.
     */
    public abstract factoryMethod(): ProductPokemon;

    /**
     * Also note that, despite its name, the Creator's primary responsibility is
     * not creating products. Usually, it contains some core business logic that
     * relies on Product objects, returned by the factory method. Subclasses can
     * indirectly change that business logic by overriding the factory method
     * and returning a different type of product from it.
     */
    public show():void{
        // Call the factory method to create a Product object.
        const product = this.factoryMethod();
        // Now, use the product.
        console.log(`>> Informacion de ` + product.getName() +
                  `\n>> Tipo: ` + product.getType() + 
                  `\n>> Peso: ` + product.getWeight() + 
                  `\n>> Altura: ` + product.getHeight() +
                  `\n>> HP: ` + product.getHP() +
                  `\n>> Ataque: ` + product.getAttack() +
                  `\n>> Defensa: ` + product.getDefense() +
                  `\n>> Velocidad: ` + product.getSpeed()
        );
    }
}