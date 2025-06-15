import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  editando: boolean = false;
  nombres: string = '';
  apellidos: string = '';
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
          this.nombres = user.nombres;
          this.apellidos = user.apellidos;
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
      },
    });
  }

  toggleEditarPerfil() {
    this.editando = !this.editando;
    if (!this.editando) {
      console.log('Guardando cambios...');
      this.userService.updateProfile({
        nombres: this.nombres,
        apellidos: this.apellidos,
        correo: this.correoE,
        codigoEstudiante: this.codigo_estudiante,
        correoA: this.correoA,
        carrera: this.carreraE,
        ciclo: this.cicloE,
        edad: this.edadE,
        sexo: this.sexoE
      }).subscribe({
        next: (response) => {
          console.log('Perfil actualizado:', response);
          // Optionally, refresh profile data or show success message
        },
        error: (err) => {
          console.error('Error actualizando perfil:', err);
          // Handle error, e.g., show error message
        }
      });
    }
  }
}
