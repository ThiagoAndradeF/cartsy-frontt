import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-quest-four',
  templateUrl: './quest-four.component.html',
  styleUrls: ['./quest-four.component.scss']
})
export class QuestFourComponent {
    public fotoProduto !: string;
    constructor(
        private messageService: MessageService
        ) {}
    onUpload(event) {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    }

}
