import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({

  imports: [
    CommonModule,
    ReactiveFormsModule 
  ],
})
export class ClientModule { }