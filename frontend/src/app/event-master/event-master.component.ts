import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-event-master',
  templateUrl: './event-master.component.html',
  styleUrls: ['./event-master.component.css']
})
export class EventMasterComponent implements OnInit {

  constructor(private api:ApiService) { }

  name:string = "";
  date:string = "";
  venue:string = "";
  ticket_price:string = "";
  qty:string = "";

  event:object[];

  ngOnInit() {
  }

  addEvent() {
    this.api.addEvent(this.name, this.date, this.venue, this.ticket_price, this.qty)
            .subscribe(result => this.event = result);
    this.name = "",
    this.date = "",
     this.venue = "",
     this.ticket_price = "",
     this.qty = ""
  }
}
