import {Group} from "./group";

export abstract class ChartGroup extends Group{


  abstract render(args?: any): void;

}
