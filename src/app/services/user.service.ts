import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { NavController } from '@ionic/angular';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private ApiBackEndUrl = environment.ApiBackEndUrl;
  public currentUser: any = null;

  constructor(private http: HttpClient, private navCtrl: NavController) {}

  // Crear un nuevo usuario
  createUser(
    nombres: string,
    apellidos: string,
    correo: string,
    codigo_estudiante: string,
    contrasena: string,
    correoA: string,
    carrera: string,
    ciclo: string,
    edad: string,
    sexo: string
  ): Observable<any> {
    const body = {
      nombres,
      apellidos,
      correo,
      codigoEstudiante: codigo_estudiante,
      contrasena,
      correoA,
      carrera,
      ciclo,
      edad,
      sexo,
    };
    return this.http.post(`${this.ApiBackEndUrl}/users`, body);
  }

  // Iniciar sesión de usuario
  loginUser(correo: string, contrasena: string): Observable<any> {
    const body = { correo, contrasena };
    return this.http.post(`${this.ApiBackEndUrl}/login`, body);
  }

  // Establecer el usuario actual
  setCurrentUser(user: any) {
    this.currentUser = user;
  }
}
