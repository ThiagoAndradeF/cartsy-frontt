import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  public nomeLoja:string = 'a';
  public desabAvancar:boolean = false;
  public desabRetroceder:boolean = true;
  public habilitaBotaoContinuar:boolean = true;
  public retirada:boolean;
  public entrega:boolean;
  public emailLoja: string;
  public habFormulario: boolean =  false;


  private _metodoEntregaRecebido : number;
  public get metodoEntregaRecebido() : number {

    return this._metodoEntregaRecebido;
  }
  public set metodoEntregaRecebido(v : number) {
    this._metodoEntregaRecebido = v;
    console.warn('O método de entrega selecionado foi ' + v)
    this.definirMetodoEntrega(v);
  }

  private _progresso : number = 10;
  public get progresso() : number {
    return this._progresso;
  }
  public set progresso(v : number) {
    this.desabAvancar = false;
    this.desabRetroceder = false;

    if(v >= 90 ){
        this.desabAvancar = true;
    }else if(v === 10){
        this.desabRetroceder = true;
    }
    this._progresso = v;
  }

  private _indexProgresso : number =1;
  public get indexProgresso() : number {
    return this._indexProgresso;
  }
  public set indexProgresso(v : number) {
    if(v === 3 || v === 1){
        this.habilitaBotaoContinuar = true;
    }else{
        this.habilitaBotaoContinuar = false;
    }
    this.progresso = (v * 10)
    this._indexProgresso = v;

  }

  constructor() { }

  public avancar(){
    this.indexProgresso <= 8 ? this.indexProgresso++ : this.indexProgresso = 9;
  }

  public retroceder(){
    this.indexProgresso > 1 ? this.indexProgresso-- : this.indexProgresso = 1;
  }
  public definirMetodoEntrega( param:number){
        switch(param){
            case 1:
                this.retirada = false;
                this.entrega =  true;
                break;
            case 2:
                this.retirada = true;
                this.entrega =  false;
                break;
            case 3:
                this.retirada = true;
                this.entrega =  true;
                break;
        }
    }


    public receberMetodoEntrega(value: number) {
        this.metodoEntregaRecebido = value;
        }


}
