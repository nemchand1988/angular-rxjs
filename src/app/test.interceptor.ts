import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable()
export class httpinte implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const tok = '787uyuy';
    let apiurl = req.clone({
      headers: req.headers.set('Authorisation', `Bearer ${tok}`),
    });

    return next.handle(apiurl).pipe(
      tap((evt) => {
        if (evt instanceof HttpResponse) {
          if (evt.body && evt.body.success) {
            console.log('success');
          }
        }
      })
    );
  }
}
