import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TitreComponent} from './composants/titre/titre.component';
import {RechercheComponent} from './composants/recherche/recherche.component';
import {CocktailsComponent} from './composants/cocktails/cocktails.component';
import {CocktailComponent} from './composants/cocktail/cocktail.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TitreComponent,
    RechercheComponent,
    CocktailsComponent,
    CocktailComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
