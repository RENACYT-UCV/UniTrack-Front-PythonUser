import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorreoPageRoutingModule } from './correo-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CorreoPageRoutingModule],
})
export class CorreoPageModule {}
