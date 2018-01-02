import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServerlistComponent } from './serverlist/serverlist.component';
import { ServeraddComponent } from './serveradd/serveradd.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServerlistComponent,
    ServeraddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
