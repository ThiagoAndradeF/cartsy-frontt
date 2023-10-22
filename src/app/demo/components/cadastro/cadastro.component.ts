import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  nomeLoja:string = 'a';
  desabAvancar:boolean = false;
  desabRetroceder:boolean = true;
  habilitaBotaoContinuar:boolean = true;
  constructor() { }

  private _progresso : number = 12.5;
  public get progresso() : number {
    return this._progresso;
  }
  public set progresso(v : number) {
    this.desabAvancar = false;
    this.desabRetroceder = false;

    if(v > 85 ){
        this.desabAvancar = true;
    }else if(v === 12.5 ){
        this.desabRetroceder = true;
    }

    this._progresso = v;
  }

  private _indexProgresso : number = 4;
  public get indexProgresso() : number {
    return this._indexProgresso;
  }
  public set indexProgresso(v : number) {
    if(v === 3 || v === 1){
        this.habilitaBotaoContinuar = true;
    }else{
        this.habilitaBotaoContinuar = false;
    }
    this.progresso = (v * 12.5)
    this._indexProgresso = v;
  }

  public avancar(){
    this.indexProgresso <= 7 ? this.indexProgresso++ : this.indexProgresso = 7;
  }

  public retroceder(){
    this.indexProgresso >= 1 ? this.indexProgresso-- : this.indexProgresso = 1;
  }

}
