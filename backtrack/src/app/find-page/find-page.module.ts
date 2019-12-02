import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { FindPagePage } from './find-page.page';
import { ModalPagePage } from '../modal-found-page/modal-found-page.page';



const routes: Routes = [
  {
    path: '',
    component: FindPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
entryComponents: [ModalPagePage],
  declarations: [FindPagePage, ModalPagePage]
})
export class FindPagePageModule {}
