// import
import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

import * as L from 'leaflet'

@Component({
  selector: 'app-show',
  // imports: [],
  standalone: false,
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss',
})
export class ShowComponent   implements AfterViewInit, OnDestroy {

  @ViewChild('mapContainer') mapContainer!: ElementRef<HTMLDivElement>;

  private map!: L.Map;

  ngAfterViewInit(): void {
    this.map = L.map(this.mapContainer.nativeElement, {
      preferCanvas: true
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    // fetch('assets/coffee_farms_datasets/kericho_county_greater_than_4ha_joined_copy.geojson')
    fetch('assets/coffee_farms_datasets/kericho_county_greater_than_4ha_joined.geojson')
      .then(response => response.json())
      .then(data => {
        const parcels = L.geoJSON(data, {
          style: {
            color: '#224326',
            weight: 1,
            fillColor: '#62a66b',
            fillOpacity: 0.5
          },
          // onEachFeature: (feature, layer) => {
          //   const label = feature.properties?.area_ha
          //     ? `${feature.properties.area_ha} ha`
          //     : 'Coffee Farm';

          //   layer.bindTooltip(label, {
          //     permanent: true,
          //     direction: 'center',
          //     className: 'parcel-label'
          //   });
          // }
        }).addTo(this.map);

        if (parcels.getBounds().isValid()) {
          this.map.fitBounds(parcels.getBounds());
        }
      })
      .catch(error => console.error('GeoJSON error:', error));
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }
}
