import { Injectable } from '@angular/core';
import { TrainingModule } from "../training.module";

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { Training } from "../models/training";

import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class TrainingService {
  constructor(
    private http: HttpClient) { }

  private trainingsUrl = 'api/trainings';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getTrainings(): Observable<Training[]> {
    return this.http.get<Training[]>(this.trainingsUrl)
      .pipe(
        tap(_ => console.log("Trainings fecthed")),
        catchError(this.handleError<Training[]>('GetTrainings', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
