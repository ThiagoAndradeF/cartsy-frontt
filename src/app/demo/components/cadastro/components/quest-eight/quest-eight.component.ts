import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quest-eight',
  templateUrl: './quest-eight.component.html',
  styleUrls: ['./quest-eight.component.scss']
})
export class QuestEightComponent {
    @Input() _entrega: boolean = true;
    @Input() _retirada: boolean = true;
    valorTaxaEntrega : number;
    instrucoesRetirada: string;
    adicionarValor:boolean;
    infoRetirada:string;


    cobrarEntrega(value:number){
        switch(value){
            case 1:
                this.adicionarValor = true;
                break;
            case 2:
                this.adicionarValor = true;
                break;
            case 3:
                this.adicionarValor = false;
                break;
        }

    }
}
