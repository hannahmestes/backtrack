import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { TermsandconditonsPage } from '../termsandconditons/termsandconditons.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page],
  exports: [TermsandconditonsPage],
  entryComponents: [TermsandconditonsPage]
    
})
export class Tab3PageModule {}
