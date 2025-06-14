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

  async ngOnInit() {
    await this.userService.loadUserFromPreferences();
    this.userService.getProfile().subscribe({
      next: (user) => {
        if (user) {
          this.userService.setCurrentUser(user);
          this.nombrecompleto = `${user.nombres} ${user.apellidos}`;
        }
      },
      error: (err) => {
        console.error('Error fetching profile in home page:', err);
      }
    });
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
