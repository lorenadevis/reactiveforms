import { FormularioBasicoComponent } from "./ejercicio/formulario-basico.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
  {
    path: "contacto",
    component: FormularioBasicoComponent
  },
  { path: "", redirectTo: "/contacto", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
