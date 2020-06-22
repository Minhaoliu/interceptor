import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import { catchError, retry, finalize } from 'rxjs/operators';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Add Auth Token
    // In production server we get the token from an auth service

    const hardcodedToken = '1d34234-2345-4121-a2345l567n80';
    const reqWithAuth = req.clone({
      setHeaders: { Authorization: `Bearer ${hardcodedToken}` }
    });
    return next.handle(reqWithAuth)
                .pipe(

                  retry(2),

                  // handle errors
                  catchError((error: HttpErrorResponse) => {
                    alert(`HTTP Error: ${req.url}`);
                    return _throw(error);
                  }),
                  // Profiling
                  finalize(() => {
                    const profilingMsg = `${req.method} **${req.urlWithParams}**`
                    console.log(profilingMsg);
                  })
                );
  }

}
