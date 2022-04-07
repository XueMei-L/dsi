import { ConcreteCreatorCharizard } from "./subCreatorElectri"
import { ConcreteCreatorElectri } from "./subCreatorFire"

import { Creator } from "./creatorPrincipal"

/**
 * print date de pokemon
 * @param creator object type creator
 */
export function clientCode(creator: Creator) {
    // console.log(creator.show());
    creator.show();    
}
  
clientCode(new ConcreteCreatorElectri("charizard", 60, 55, "fire", [84, 78, 100, 78]));
clientCode(new ConcreteCreatorElectri("pikachu", 50, 45, "electric", [90, 55, 110, 60]));

