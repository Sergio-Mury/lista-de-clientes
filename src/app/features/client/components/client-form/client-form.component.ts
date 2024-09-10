import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.scss'
})
export class ClientFormComponent implements OnInit{
  clientForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      nome: ["", Validators.required],
      email: ["",[Validators.required, Validators.email]],
      telefone: ["", Validators.pattern("[0-9]*")]
    });
  }

  onSubmit(): void{
    if(this.clientForm.valid){
      const client = this.clientForm.value;
      this.clientService.addClient(client);
      this.clientForm.reset();
    }
  }

}
