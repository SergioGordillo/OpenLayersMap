import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OlControlComponent } from './ol-maps/ol-control/ol-control.component';
import { OlMapMarkerComponent } from './ol-maps/ol-map-marker/ol-map-marker.component';
import { OlMapComponent } from './ol-maps/ol-map/ol-map.component';
import { OlMapsModule } from './ol-maps/ol-maps.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OlMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
