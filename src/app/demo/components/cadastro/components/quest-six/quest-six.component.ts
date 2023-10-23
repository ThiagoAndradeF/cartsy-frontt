import { Component } from '@angular/core';

@Component({
  selector: 'app-quest-six',
  templateUrl: './quest-six.component.html',
  styleUrls: ['./quest-six.component.scss']
})
export class QuestSixComponent {
    public ativarAgendamento: boolean =false;

    onOffAgenda(param: boolean){
        if(param==true){
            this.ativarAgendamento=true
        }else{
            this.ativarAgendamento=false
        }
    }
    
}
