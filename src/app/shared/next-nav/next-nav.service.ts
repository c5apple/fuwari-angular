import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NextNavService {
  private url: string = './app/shared/next-nav/next-nav.json';

  constructor(private http: Http) { }

  public get(): Promise<any> {
    return this.http.get(this.url).toPromise();
  }
}
