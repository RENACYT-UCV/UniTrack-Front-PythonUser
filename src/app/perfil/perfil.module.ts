import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { UserService } from '../services/user.service';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PerfilPageRoutingModule],
  providers: [UserService],
})
export class PerfilPageModule {}
