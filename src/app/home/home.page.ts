import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  nombrecompleto: string = 'Nombre Completo';
  isEntrada: boolean = true;

  constructor(private userService: UserService) {}

  ngOnInit() {
    if (this.userService.currentUser) {
      this.nombrecompleto = `${this.userService.currentUser.nombres} ${this.userService.currentUser.apellidos}`;
    }
  }

  onToggleChange() {
    // Logic to handle the toggle change
    console.log('Toggle changed. isEntrada:', this.isEntrada);
  }

  generarQR() {
    // Logic to generate QR code
    console.log('Generar QR button clicked.');
  }
}
