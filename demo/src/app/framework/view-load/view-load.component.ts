import {
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  Injector,
  Input, OnDestroy,
  ViewContainerRef
} from "@angular/core";
import {Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ComponentPortal, DomPortalHost} from "@angular/cdk/portal";
import {ViewSourceWrapperComponent} from "../view-wrapper/view-source-wrapper.component";

@Component({
  selector: 'demo-view-load',
  template: '正在加载...'
})
export class DemoViewLoadComponent implements OnDestroy{

  private loadSubscription: Subscription;

  private portals: DomPortalHost[] = [];

  @Input()
  set url(url: string) {
    this.render(url);
  }

  render(url: string): void {
    if (this.loadSubscription) {
      this.loadSubscription.unsubscribe();
    }
    this.loadSubscription = this.http.get(url, {responseType: 'text'})
      .subscribe(
        doc => this.updateDocument(doc),
        () => this.documentError(url)
      )
  }

  updateDocument(doc: string) {
    this.elementRef.nativeElement.innerHTML = doc;
    this.loadComponents('demo-component-example')
  }

  loadComponents(componentName: string): void {
    const exampleEles = this.elementRef.nativeElement.querySelectorAll(`[${componentName}]`);
    Array.from(exampleEles).forEach((element: Element) => {
      const portalHost = new DomPortalHost(element, this.componentFactoryResolver, this.appRef, this.injector);
      const sourceWrapperPortal = new ComponentPortal(ViewSourceWrapperComponent, this.viewContainerRef);
      const sorceWrapperComponentRef = portalHost.attach(sourceWrapperPortal);
      (sorceWrapperComponentRef.instance as ViewSourceWrapperComponent).example = element.getAttribute(componentName);
      this.portals.push(portalHost);
    });
  }

  documentError(url: string) {
    this.elementRef.nativeElement.innerText = `加载文档失败 ${url}`;
  }

  constructor(
    private http: HttpClient,
    private elementRef: ElementRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    private viewContainerRef: ViewContainerRef) {
  }

  ngOnDestroy(): void {
    if (this.loadSubscription) {
      this.loadSubscription.unsubscribe();
    }
    this.portals.forEach(item => item.dispose());
    this.portals = [];
  }
}
