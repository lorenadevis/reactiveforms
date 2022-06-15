import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormularioBasicoComponent } from "./ejercicio/formulario-basico.component";
import { FormularioReactivoComponent } from "./solucion/formulario-reactivo.component";

@NgModule({
  declarations: [
    AppComponent,
    FormularioBasicoComponent,
    FormularioReactivoComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
