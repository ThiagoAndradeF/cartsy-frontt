import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginFirstComponent } from './components/login-first/login-first.component';
import { ButtonModule } from 'primeng/button';
import { ButtonDemoModule } from '../uikit/button/buttondemo.module';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@NgModule({
  declarations: [
    LoginFirstComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LoginComponent }]),
    ButtonModule
    // ButtonDemoModule

    
  ],
  providers: [
    LayoutService
  ]
})
export class LoginModule { }
