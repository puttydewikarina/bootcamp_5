import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { ApiService } from './api.service';

import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventMasterComponent } from './event-master/event-master.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventMasterComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule,
    RouterModule.forRoot([
      { path: 'event-list', component: EventListComponent },
      { path: 'event-master', component: EventMasterComponent }
    ])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
