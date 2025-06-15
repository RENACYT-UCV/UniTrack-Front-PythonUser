import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QrService {
  private apiUrl = `${environment.ApiBackEndUrl}/qr`;

  constructor(private http: HttpClient) {}

  getQrUrlByUserId(idUsuario: number): Observable<{ qrUrl: string }> {
    return this.http.post<{ qrUrl: string }>(`${this.apiUrl}/usuario-por-qr`, {
      idUsuario,
    });
  }

  generateQrCode(hash: string): Observable<{ mensaje: string }> {
    return this.http.get<{ mensaje: string }>(
      `${this.apiUrl}/generar?hash=${hash}`
    );
  }
}
