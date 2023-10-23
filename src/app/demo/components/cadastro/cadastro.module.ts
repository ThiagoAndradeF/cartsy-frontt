import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ChipsModule } from 'primeng/chips';
import { ProgressBarModule } from 'primeng/progressbar';
import { QuestOneComponent } from './components/quest-one/quest-one.component';
import { QuestTwoComponent } from './components/quest-two/quest-two.component';
import { QuestThreeComponent } from './components/quest-three/quest-three.component';
import { QuestFourComponent } from './components/quest-four/quest-four.component';
import { QuestFiveComponent } from './components/quest-five/quest-five.component';
import { QuestSixComponent } from './components/quest-six/quest-six.component';
import { QuestSevenComponent } from './components/quest-seven/quest-seven.component';
import { QuestEightComponent } from './components/quest-eight/quest-eight.component';
import { CardModule } from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { QuestNineComponent } from './components/quest-nine/quest-nine.component';
import { AnimateModule } from 'primeng/animate';

@NgModule({
    declarations: [
        CadastroComponent,
        QuestOneComponent,
        QuestTwoComponent,
        QuestThreeComponent,
        QuestFourComponent,
        QuestFiveComponent,
        QuestSixComponent,
        QuestSevenComponent,
        QuestEightComponent,
        QuestNineComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild([{ path: '', component: CadastroComponent }]),
      InputTextModule,
      InputTextareaModule,
      FormsModule,
      ButtonModule,
      ChipsModule,
      ProgressBarModule,
      CardModule,
      SplitterModule,
      OverlayPanelModule,
      ToastModule,
      FileUploadModule,
      InputNumberModule,
      InputMaskModule,
      AnimateModule

    ],
    providers:[MessageService]
  })
export class CadastroModule { }
