import { API_CONFIG } from '../config/api.config';
import { StorageService } from '../services/storage.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(public storage: StorageService){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const localUser = this.storage.getLocalUser();

    const N = API_CONFIG.base_url.length;
    const requestToAPI = request.url.substring(0, N) === API_CONFIG.base_url;

    if (localUser && requestToAPI) {
      const authReq = request.clone({headers: request.headers.set('Authorization', 'Bearer ' + localUser.token)});
      return next.handle(authReq);
    }
    else {
        return next.handle(request);
    }

  }
}

export const AuthInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
};
