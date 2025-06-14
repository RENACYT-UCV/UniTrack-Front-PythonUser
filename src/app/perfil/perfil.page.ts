import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  nombrecompleto: string = '';
  codigo_estudiante: string = '';
  carreraE: string = '';
  cicloE: string = '';
  edadE: string = '';
  sexoE: string = '';
  correoE: string = '';
  correoA: string = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getProfile().subscribe({
      next: (user) => {
        if (user) {
          this.nombrecompleto = `${user.nombres} ${user.apellidos}`;
          this.codigo_estudiante = user.codigoEstudiante;
          this.carreraE = user.carrera;
          this.cicloE = user.ciclo;
          this.edadE = user.edad;
          this.sexoE = user.sexo;
          this.correoE = user.correo;
          this.correoA = user.correoA;
        }
      },
      error: (err) => {
        console.error('Error fetching profile:', err);
        // Handle error, e.g., redirect to login or show an alert
      }
    });
  }
}
