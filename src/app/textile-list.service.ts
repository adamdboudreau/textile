import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs/Rx';

@Injectable()
export class TextileListService {
  textiles:Observable<Response>;

  constructor(private http:Http) {
    this.textiles = http.get("../assets/samples.json")
      .catch(this.onError);
  }
  onError(res: any) {
    console.log('on error has been called')
    let msg = res.status + ":" + res.statusText
    console.log(msg);
    return Observable.throw(msg);
  }

}
