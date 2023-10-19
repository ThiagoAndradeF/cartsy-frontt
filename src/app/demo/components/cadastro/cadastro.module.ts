import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ChipsModule } from 'primeng/chips';
import { ProgressBarModule } from 'primeng/progressbar';



@NgModule({
  declarations: [

    CadastroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CadastroComponent }]),
    InputTextModule,
    InputTextareaModule,
    FormsModule,
    ButtonModule,
    ChipsModule,
    ProgressBarModule
    
  ]
})
export class CadastroModule { }
