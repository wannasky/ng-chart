import {Selection} from "d3-selection";

export abstract class DefsContainer {

  defs: Selection<SVGGElement, any, Element, any>;

  abstract generateId(): string;
}
