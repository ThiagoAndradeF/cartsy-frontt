import { Component } from '@angular/core';

@Component({
  selector: 'app-quest-two',
  templateUrl: './quest-two.component.html',
  styleUrls: ['./quest-two.component.scss']
})
export class QuestTwoComponent {
    public tipoProduto?: string;
    public produtosDisponiveis?: string[] = ['Alimentos e Bebidas','Artesanato','Vestuário e Acessórios', 'Beleza e Cuidados Pessoais', 'Outro' ];





}
