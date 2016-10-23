import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs/Rx';
//import { Observable} from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';

@Injectable()
export class TextileListService {
  textiles:Observable<Response>;

  constructor(private http:Http) {
    //this.http = http
    this.textiles = http.get("../../assets/samples.json")
      .catch(this.onError);
  }
  onError(res: any) {
    console.log('on error has been called')
    let msg = res.status + ":" + res.statusText
    console.log(msg);
    return Observable.throw(msg);
  }
  getTextiles() { //: {title:string, imageUrl:string}[] {
    //return this.http.get("/app/textile/samples.json")
    //  .map((res:Response) => res.json())
    //  .catch((error:Any) =>  Observable.throw(error.json().error || 'Server error'))
    //this.http.get("/app/textile/samples.json").then(response =>
    //{
    //    this.samples = response.json()
    //},
    //error => {
    //    console.log("Error finding smaples.json " + error)
    //})
    //return this.samples

    //return this.http.get("/app/textile/samples.json")

    //return [
    //  {"title": "test1", "imageUrl": "/angular/samples/circles.png"},
    //  {"title": "test2", "imageUrl": "/angular/samples/hex.jpg"},
    //  {"title": "test3", "imageUrl": "/angular/samples/triangle.png"}
    //]
  }

}
