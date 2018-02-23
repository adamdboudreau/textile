import { Component, OnInit } from '@angular/core';
import { TextileListService } from '../textile-list.service';

@Component({
  selector: 'app-textile-list',
  providers: [TextileListService],
  templateUrl: './textile-list.component.html',
  styleUrls: ['./textile-list.component.css']
})
export class TextileListComponent implements OnInit {

  textiles: Object[]
  constructor(private texSvc:TextileListService) {
    texSvc.textiles.subscribe(
      data => {
        console.log(data);
        this.textiles = data.json()
      },
      error => console.error('Error: ' + error)
    );
  }

  ngOnInit() {
    console.log('on init...')
  }

}
