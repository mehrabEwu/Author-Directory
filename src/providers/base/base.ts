export class Base {
  static parseErrors( errors: any ) {
    let retVal = '';
    if ( errors ) {
      for ( const propery in errors ) {
        retVal += propery + ': ' + errors[propery] + '\r\n';
      }
    }

    return retVal;
  }
}
