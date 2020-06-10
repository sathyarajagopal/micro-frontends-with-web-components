import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
    AppComponent
  ]
})
export class AppModule {

  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {

    const { injector } = this;

    // create custom elements from angular components
    const ngCustomElement = createCustomElement(AppComponent, { injector });

    // define in browser registry
    customElements.define('ng-el', ngCustomElement);

  }
}
