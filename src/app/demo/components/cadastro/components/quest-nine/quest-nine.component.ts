import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-quest-nine',
  templateUrl: './quest-nine.component.html',
  styleUrls: ['./quest-nine.component.scss']
})
export class QuestNineComponent {
    @Output() emailLoja = new EventEmitter<string>();
    validadeEmail : boolean = false;

    private _mailLoja : string;
    public get mailLoja() : string {
        return this._mailLoja;
    }
    public set mailLoja(v : string) {
        this._mailLoja = v;
        if(v){
            this.validarEmail(v);
        }

    }


    validarEmail(email: string) {
    // Usa uma expressão regular para validar o formato do e-mail
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if ( regex.test(email)) {
            this.validadeEmail=true
        } else {
            this.validadeEmail=false
        }
    }




}
