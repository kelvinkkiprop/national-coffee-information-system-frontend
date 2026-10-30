// import
import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-show',
  // imports: [],
  standalone: false,
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss',
})
export class ShowComponent  implements AfterViewInit, OnDestroy {

  @ViewChild('mapContainer')
  mapContainer!: ElementRef<HTMLDivElement>;

  private map!: L.Map;
  private parcelLayer?: L.GeoJSON;

  // ngAfterViewInit(): void {
  //   this.initializeMap();
  //   // this.loadGeoJSON();
  // }

  private initializeMap(): void {
    this.map = L.map(this.mapContainer.nativeElement, {
      preferCanvas: true
    }).setView([-0.13, 35.46], 9);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19
    }).addTo(this.map);
  }

  private async loadGeoJSON(): Promise<void> {
    try {
      const response = await fetch(
        // 'assets/coffee_farms_datasets/kericho_county_greater_than_4ha_joined_copy.geojson'
        'assets/coffee_farms_datasets/less_than_4ha_centroids.geojson'
      );

      if (!response.ok) {
        throw new Error(`Unable to load GeoJSON: HTTP ${response.status}`);
      }

      const data = await response.json();

      console.log('GeoJSON loaded:', data);
      console.log('Number of features:', data.features?.length);

      if (!data.features?.length) {
        console.error('The GeoJSON file contains no features.');
        return;
      }

      this.parcelLayer = L.geoJSON(data, {
        style: () => ({
          color: '#ff0000', //'#224326'
          weight: 1,
          fillColor: '#ff0000', // '#62a66b',
          fillOpacity: 0.6
        }),

        onEachFeature: (feature, layer) => {
          layer.bindPopup(
            `<strong>Coffee Farm</strong><br>
             ${Object.entries(feature.properties ?? {})
               .map(([key, value]) =>
                 `${key}: ${String(value ?? '')}`
               )
               .join('<br>') || 'No parcel attributes available'}`
          );
        }
      }).addTo(this.map);

      const bounds = this.parcelLayer.getBounds();

      if (bounds.isValid()) {
        this.map.fitBounds(bounds, { padding: [20, 20] });
      } else {
        console.error('GeoJSON has no valid geographic bounds.');
      }

      setTimeout(() => this.map.invalidateSize(), 200);

    } catch (error) {
      console.error('Failed to display coffee farms:', error);
    }
  }

  ngAfterViewInit(): void {
  this.initializeMap();

  setTimeout(() => {
    this.map.invalidateSize({ pan: false });
    // this.loadGeoJSON();
  }, 200);
}

  ngOnDestroy(): void {
    this.map?.remove();
  }
}
