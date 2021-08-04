import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import VectorSource from 'ol/source/Vector';
import {Icon, Style} from 'ol/style';
import OSM from 'ol/source/OSM';

@Component({
  selector: 'app-ol-map-marker',
  templateUrl: './ol-map-marker.component.html',
  styleUrls: ['./ol-map-marker.component.css']
})
export class OlMapMarkerComponent implements OnInit {

  map:any;
  youtubeUrl = 'https://www.youtube.com/watch?v=WQFjZymnF3M';
  youtubeVideoId = 'WQFjZymnF3M';
  chicago:any;
  vectorSource:any;
  vectorLayer:any;
  rasterLayer:any;
  london: any;
  madrid: any;


  constructor() { }

  ngOnInit(): void {
    this.initilizeMap();
  }

  initilizeMap() {

    this.chicago = new Feature({
      geometry: new Point(fromLonLat([	-87.623177, 41.881832]))
    });

    this.chicago.setStyle(new Style({
      image: new Icon(({
        color: '#8959A8',
        crossOrigin: 'anonymous',
        src: './assets/marker.png',
        imgSize: [20, 20]
      }))
    }));

    this.london = new Feature({
      geometry: new Point(fromLonLat([-0.12755, 51.507222]))
    });

    this.madrid = new Feature({
      geometry: new Point(fromLonLat([-3.683333, 40.4]))
    });

    this.london.setStyle(new Style({
      image: new Icon(({
        color: '#4271AE',
        crossOrigin: 'anonymous',
        src: './assets/marker.png',
        imgSize: [20, 20]
      }))
    }));

    this.madrid.setStyle(new Style({
      image: new Icon(({
        color: [113, 140, 0],
        crossOrigin: 'anonymous',
        src: './assets/marker.png',
        imgSize: [20, 20]
      }))
    }));

    this.vectorSource = new VectorSource({
      features: [this.chicago, this.madrid, this.london]
    });

    this.vectorLayer = new VectorLayer({
      source: this.vectorSource
    });

    this.map = new Map({
      target: 'map',
      layers: [ new TileLayer({
        source: new OSM()
      }), this.vectorLayer ],
      view: new View({
        center: fromLonLat([2.896372, 44.60240]),
        zoom: 3
      })
    });
  }

}









