import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";

import { AcercaComponent } from "./components/acerca/acerca.component";
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';


const routes: Routes = [
  { path: "", component: HeroComponent },
  { path: "proyectos", component: ProyectosComponent },
  { path: "acerca", component: AcercaComponent },
 // { path: "articulo/:id", component: ArticuloComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AcercaComponent,
    HeaderComponent,
    HeroComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
