import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-first',
  templateUrl: './login-first.component.html',
  styleUrls: ['./login-first.component.scss']
})
export class LoginFirstComponent {
  constructor(private router: Router) { }
  
  public redirectCadastro(){
    this.redirectTo('cadastro')
  }
  
  
  public redirectTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
