import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cep } from './interfaces/cep';
import { ServiceService } from './services/service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'desafio-cep';
  
  cepForm: FormGroup = this.fb.group({
    numeroCep: ['', [ Validators.required ]]
  })

  endereco!: cep

  constructor(
    private fb: FormBuilder,
    private cepService: ServiceService
  ) {}

  procurar(){
    const cep = this.cepForm.get('numeroCep')?.value

    this.cepService.procurarCep(cep).subscribe(
      (endereco) => {
        this.endereco = endereco
      })
  }
}