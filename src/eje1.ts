/**
 * The Creator class declares the factory method that is supposed to return an
 * object of a Product class. The Creator's subclasses usually provide the
 * implementation of this method.
 */
 abstract class Creator {
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

/**
 * Concrete Creators override the factory method with type ConcreteCreatorElectri
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
        return new ConcreteProductPikachu(this.name, this.weight, 
            this.height, this.type, this.info)
    }
}

/**
 * Concrete Creators override the factory method with type ConcreteCreatorFuego
 */
 export class ConcreteCreatorFuego extends Creator {
    constructor(private readonly name: string, private weight: number,
        private height: number, private type: string,
        private info:number[]){
        super();
      }
    /**
     * Note that the signature of the method still uses the abstract product
     * type, even though the concrete product is actually returned from the
     * method. This way the Creator can stay independent of concrete product
     * classes.
     */
    public factoryMethod(): ProductPokemon {
        return new ConcreteProductPikachu(this.name, this.weight, 
            this.height, this.type, this.info)
    }
}

/**
 * The Product interface declares the operations that all concrete products must
 * implement.
 */
interface ProductPokemon {
    getName():string;
    getWeight():number;
    getHeight():number;
    getType():string;
    getAttack():number;
    getDefense():number;
    getSpeed():number;
    getHP():number;
}

/**
 * Concrete Products provide various implementations of the Product interface.
 */
export class ConcreteProductPikachu implements ProductPokemon {
    constructor(private name:string,private weight:number, 
        private height:number, private type:string, 
        private info:number[]) {}

    // Getters of atributes of class ConcreteProductPikachu
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

/**
 * Concrete Products provide various implementations of the Product interface.
 */
export class ConcreteCreatorCharizard implements ProductPokemon {
    constructor(private name:string,private weight:number, 
        private height:number, private type:string, 
        private info:number[]) {}

    // Getters of atributes of class ConcreteCreatorCharizard
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


export function clientCode(creator: Creator) {
    // console.log(creator.show());
    creator.show();
    
  }


  
clientCode(new ConcreteCreatorFuego("charizard", 60, 55, "fire", [84, 78, 100, 78]));
clientCode(new ConcreteCreatorElectri("pikachu", 50, 45, "electric", [90, 55, 110, 60]));

