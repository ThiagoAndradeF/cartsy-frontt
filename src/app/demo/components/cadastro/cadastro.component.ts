import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  nomeLoja:string;
  constructor() { }
  
  private _progresso : number = 0;
  public get progresso() : number {
    return this._progresso;
  }
  public set progresso(v : number) {
    if(v==99){
      v=100
    }
    this._progresso = v;
 
  }
  
  public avancarUmUndecimo(){
  console.log('avançando')
  const novoValor = this.progresso + (100 / 9);
  novoValor <= 100 ? this.progresso = Math.round(novoValor) :  this.progresso = 100;
  }

  public retrocederUmUndecimo(){
  console.log('retrocedendo')
  const novoValor = this.progresso - (100 / 9);
  this.progresso >= 0 ? this.progresso = Math.round(novoValor) : this.progresso = 0;
  }

}
