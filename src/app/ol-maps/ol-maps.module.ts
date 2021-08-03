import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlControlComponent } from './ol-control/ol-control.component';
import { OlMapComponent } from './ol-map/ol-map.component';
import { OlMapMarkerComponent } from './ol-map-marker/ol-map-marker.component';


const COMPONENTS=[
  OlControlComponent,
  OlMapComponent,
  OlMapMarkerComponent
]

@NgModule({
  declarations: [
    COMPONENTS
  ],
  exports: [
    COMPONENTS
  ],
  imports: [
    CommonModule
  ]
})
export class OlMapsModule { }
