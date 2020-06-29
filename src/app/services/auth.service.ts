import { API_CONFIG } from './../config/api.config';
import { CredentialsDTO } from './../model/credentials';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { LocalUser } from '../model/local_user';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

  helperJwt = new JwtHelperService();

  constructor(
    public http: HttpClient,
    public storage: StorageService) {
  }

  authenticate(creds: CredentialsDTO): Observable<HttpResponse<string>> {
    return this.http.post(
        `${API_CONFIG.base_url}/login`,
        creds,
        {
          observe: 'response',
          responseType: 'text'
        });
  }

  successfulLogin(authorizationValue: string): void {
    const tok = authorizationValue.substring(7);
    const user: LocalUser = {
        token: tok,
        email: this.helperJwt.decodeToken(tok).sub
    };
    this.storage.setLocalUser(user);
  }

  logout(): void {
    this.storage.setLocalUser(null);
  }
}
