import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CommonFunctionsService {

  constructor() { }

  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: Enviar el error al servidor para almacenarlo en un fichero de logs
      console.error(error);

      // TODO: Hacer el error más vistoso al usuario
      Swal.fire(
        'Error',
        `Operación ${operation} fallida: ${error.statusText}`,
        'error'
      );

      // Devolvemos un valor por defecto
      return of(result as T);
    };
  }
}
