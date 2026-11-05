import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import * as L from 'leaflet';
import { AppContextService } from '../../../../../core/app-context.service';
import { CoffeePlotService } from '../../../../../services/coffee-plot.service';

@Component({
  selector: 'app-locations',
  // imports: [],
  standalone: false,
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
})
export class LocationsComponent {

  // variables
  mProgress = signal(false)
  mPlots: any = {}

  @ViewChild('mapContainer') mapContainer!: ElementRef<HTMLDivElement>;
  private map!: L.Map;

  constructor(
    private mCoffeePlotService: CoffeePlotService,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
  ) {  }


  ngOnInit(): void {
    // Call
    // this.getItem()
  }

  ngAfterViewInit(): void {
    this.map = L.map(this.mapContainer.nativeElement, {
      preferCanvas: true
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    this.mProgress.set(true);
    this.mCoffeePlotService.unpaginatedItems().subscribe({
      next: (response) => {
        if(response){
          this.mPlots = (response as any).data.coffee_plots
          console.log('mPlots', this.mPlots)
          const features = (response as any).data.coffee_plots.map((plot: any) => ({
            type: 'Feature',
            properties: {
              id: plot.id,
              owner_id: plot.owner_id,
              area_ha: plot.size,
              coffee_species: plot.coffee_species?.name ?? 'N/A',
              deforestation_status_id: plot.deforestation_status_id,
              status_id: plot.status_id
            },
            geometry: JSON.parse(plot.geo_json_geometry)
          }));

          const geoJsonData = {
            type: 'FeatureCollection',
            features
          };

          const parcels = L.geoJSON(geoJsonData as any, {
            // style: {
            //   color: '#224326',
            //   weight: 2,
            //   fillColor: '#62a66b',
            //   fillOpacity: 0.5
            // },
            style: (feature) => ({
              color: feature?.properties?.deforestation_status_id===2 ? '#224326' : '#E2251D',
              weight: 2,
              fillColor: feature?.properties?.deforestation_status_id===2 ? '#62a66b' : '#F5B6B3',
              fillOpacity: 0.5
            }),
            onEachFeature: (feature, layer) => {
              const plot = feature.properties;
              layer.bindTooltip(
                `${plot.area_ha} ha`,
                {
                  permanent: true,
                  direction: 'center',
                  className: 'parcel-label'
                }
              );
              layer.bindPopup(`
                <strong>Coffee Plot</strong><br>
                Area: ${plot.area_ha} ha<br>
                Coffee Species: ${plot.coffee_species}
              `);
            }
          }).addTo(this.map);

          if (parcels.getBounds().isValid()) {
            this.map.fitBounds(parcels.getBounds());
          }

          this.mProgress.set(false);
        }
      },
      error: (error) => {
        if(error.error.message){
          this.mToastrService.warning(error.error.message)
        }
        this.mProgress.set(false);
      }
    });

  }

  ngOnDestroy(): void {
    this.map?.remove();
  }


}


