import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable({providedIn: 'root'})
export class Api
{
  public static TmpValue: any;
  public static BASE_URL: string = environment.apiUrl

  url: string = environment.apiUrl
  constructor
    (private http: HttpClient)
  {

  }

  get( endpoint: string, params?: any, options?: HttpHeaders )
  {
    if ( !options )
    {
      options = new HttpHeaders( { 'Content-Type': 'application/json;charset=utf-8' } );
      options = options.append( 'Accept', 'application/json' );
    }

    if ( params )
    {
      const p = [];
      for ( const k in params )
      {
        p.push( k + '=' + params[k] );
      }
      endpoint = endpoint + '?' + ( p.join( '&' ) );
    }
    return this.http.get( `${this.url}/${endpoint}`, { headers: options} );
  }

  getCallbacks<T>( endpoint: string, params?: any, options?: HttpHeaders, callbackParam?: string )
  {
    if ( !options )
    {
      options = new HttpHeaders( { 'Content-Type': 'application/json;charset=utf-8' } );
      options = options.append( 'Accept', 'application/json' );
      options = options.append( 'dataType', 'jsonp' );
    }

    if ( params )
    {
      const p = [];
      for ( const k in params )
      {
        p.push( k + '=' + params[k] );
      }
      endpoint = endpoint + '?' + ( p.join( '&' ) );
    }
    return this.http.jsonp<T>( `${this.url}/${endpoint}`, callbackParam );
  }


}
