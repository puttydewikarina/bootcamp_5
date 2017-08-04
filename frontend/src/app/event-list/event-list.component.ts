import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(private api:ApiService) { }

  name:string = "";
  date:string = "";
  venue:string = "";
  ticket_price:string = "";
  qty:string = "";

  event:object[];

  ngOnInit() {

    this.api.getEvent()
            .subscribe(result => this.event = result);
  }
}
