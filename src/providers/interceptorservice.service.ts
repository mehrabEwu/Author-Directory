import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class InterceptorService implements HttpInterceptor
{
  constructor
    (
      private router: Router,
    )
  { }

  intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>>
  {

    return next.handle( request )
      .pipe(
        catchError( ( error: HttpErrorResponse ) =>
        {
          let errorMsg = '';
          if ( error.status === 401 )
          {
            errorMsg = 'Session expired<br/>Please Login again...';
          }
          else if ( error.status === 500 )
          {
            if ( error.error )
            {
              errorMsg = `${this.parseErrors( error.error )}`;
            }
            else
            {
              errorMsg = 'Internal Server Error...';
            }
          }
          else if ( error.status === 504 )
          {
            errorMsg = 'Server Error<br/>Gateway Timeout Error...';
          }
          else
          {
            if ( error.error instanceof ErrorEvent )
            {
              errorMsg = `${error.error.message}`;
            }
            else
            {
              if ( error.error )
              {
                if ( error.status === 0 && error.ok === false && error.statusText === 'Unknown Error' && error.message.indexOf( '/api/v1/' ) >= 0 )
                {
                  errorMsg = '<b>Server Error:</b> Api server is not running...';
                }
                else if ( error.error.returnMessage )
                {
                  errorMsg = `${this.parseErrors( error.error.returnMessage )}`;
                }
                else if ( error.error.errors )
                {
                  errorMsg = `${this.parseErrors( error.error.errors )}`;
                }
                else if ( error.error.validationErrors )
                {
                  errorMsg = `<b>Validation Errors</b><br/>${this.parseErrors( error.error.validationErrors )}`;
                }
                else if ( error.error.businessErrors )
                {
                  errorMsg = `<b>Business Validation Errors</b><br/>${this.parseErrors( error.error.businessErrors )}`;
                }
                else if ( error.message )
                {
                  errorMsg = `${error.message}`;
                }
              }
              else
              {
                errorMsg = `<b>Error Code: ${error.status}</b><br/>Message: ${error.message}`;
              }
            }
          }
          return throwError( errorMsg );
        } )
      );
  }



  parseErrors( errors: any )
  {
    let retVal = '';
    if ( errors )
    {
      for ( const propery in errors )
      {
        if ( propery === 'value' || propery === 'returnStatus' )
          continue;

        retVal += errors[propery] + '<br/>';
      }

      if ( retVal.endsWith( '<br/>' ) )
        retVal = retVal.substr( 0, ( retVal.length - 5 ) )
    }

    return retVal;
  }
}
