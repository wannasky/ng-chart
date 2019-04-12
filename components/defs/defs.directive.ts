import {Directive, Host, OnInit} from "@angular/core";
import {Container} from "../common/container";
import {DefsContainer} from "./defs-container";


@Directive({
  selector: 'nc-defs',
  providers: [
    {provide: DefsContainer, useExisting: DefsDirective}
  ]
})
export class DefsDirective extends DefsContainer implements OnInit {

  private child_index = 0;


  generateId(): string{
    return 'child-' + (++this.child_index)
  }

  constructor(@Host() private container: Container) {
    super();
  }

  ngOnInit(): void {
    this.defs = this.container.root.append('defs');
  }
}
