import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { NavController } from '@ionic/angular';
import { environment } from '../../environments/environment';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private ApiBackEndUrl = environment.ApiBackEndUrl;
  public currentUser: any = null;

  constructor(private http: HttpClient, private navCtrl: NavController) {
    this.loadUserFromPreferences();
  }

  private async loadUserFromPreferences() {
    const { value } = await Preferences.get({ key: 'currentUser' });
    if (value) {
      this.currentUser = JSON.parse(value);
    }
  }

  async setPreferences(key: string, value: string) {
    await Preferences.set({ key, value });
  }

  async getPreferences(key: string): Promise<string | null> {
    const { value } = await Preferences.get({ key });
    return value;
  }

  async removePreferences(key: string) {
    await Preferences.remove({ key });
  }

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
    return this.http.post(`${this.ApiBackEndUrl}/users/login`, body);
  }

  // Establecer el usuario actual
 async setCurrentUser(user: any) {
    this.currentUser = user;
  }

  getProfile(): Observable<any> {
    return new Observable(observer => {
      this.getPreferences('access_token').then(token => {
        if (token) {
          this.http.get(`${this.ApiBackEndUrl}/users/profile`, {
            headers: { Authorization: `Bearer ${token}` }
          }).subscribe({
            next: (response) => {
              observer.next(response);
              observer.complete();
            },
            error: (error) => {
              observer.error(error);
            }
          });
        } else {
          observer.error('No access token found');
        }
      }).catch(error => {
        observer.error(error);
      });
    });
  }
}
