import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tasting} from "../domain/tasting";

@Injectable({
  providedIn: 'root'
})
export class TastingsService {

  constructor(private http: HttpClient) { }

  getTastings(): Observable<Tasting> {
    let tastings: Observable<any> = this.http.get('assets/mock-responses/tastings.json');

    return tastings;
  }
}
