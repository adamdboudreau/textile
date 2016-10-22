import {Injectable} from '@angular/core';

@Injectable()

export class NewsService {
    getNewsItems() : {title:string, body:string}[] {
        return this.newsItems
    }
    newsItems = [
        {
            title: "test title",
            body: "test body"
        },
        {
            title: "test title 2",
            body: "test body 2"
        }
    ]
}