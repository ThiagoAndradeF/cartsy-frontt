import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-quest-seven',
  templateUrl: './quest-seven.component.html',
  styleUrls: ['./quest-seven.component.scss']
})
export class QuestSevenComponent {

    @Output() metodoEntrega = new EventEmitter<number>();
    constructor(){}
    emitirMetodoEntrega(value:number) {
        this.metodoEntrega.emit(value);
      }

}
