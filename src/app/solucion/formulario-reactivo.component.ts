import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-formulario-reactivo",
  templateUrl: "./formulario-reactivo.component.html",
  styleUrls: ["./formulario-reactivo.component.css"]
})
export class FormularioReactivoComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  public formulario: FormGroup;

  public ngOnInit() {
    this.formulario = this.fb.group({
      name: "Lorena",
      email: ""
    });

  }

  onSubmit(_datos) {
    console.log(_datos.value);
  }
}
