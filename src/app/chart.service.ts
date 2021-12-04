import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  private chartsUrl = 'api/charts/';

  constructor(private http: HttpClient) { }

  getCharts(): Observable<any[]> {
    return this.http.get<any[]>(this.chartsUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  getInformations(): Observable<any[]> {
    return this.http.get<any[]>('api/informations/').pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

}