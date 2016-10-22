import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class TextileService {
    constructor(private http:Http) {}

    //samples = ["./textile/samples/circles.png", "./samples/hex.jpg", "./samples/triangle.png"]
    samples: Object[]
    getTextiles() { //: {title:string, imageUrl:string}[] {
        return this.http.get("/app/textile/samples.json")
            .map((res:Response) => res.json())
            .catch((error:Any) =>  Observable.throw(error.json().error || 'Server error'))
        //this.http.get("/app/textile/samples.json").then(response =>
        //{
        //    this.samples = response.json()
        //},
        //error => {
        //    console.log("Error finding smaples.json " + error)
        //})
        //return this.samples
    }
    //getNewsItems() {
    //    return this.http.get("/directive-test/news_data.json")
    //}
    //newsItems = [
    //    {
    //        title: "test title",
    //        body: "test body"
    //    },
    //    {
    //        title: "test title 2",
    //        body: "test body 2"
    //    }
    //]
}