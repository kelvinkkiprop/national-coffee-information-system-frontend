import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import * as L from 'leaflet';
import { AppContextService } from '../../../../../core/app-context.service';
import { CoffeePlotService } from '../../../../../services/coffee-plot.service';
import { ActivatedRoute } from '@angular/router';
import { CoffeeTransactionService } from '../../../../../services/coffee-transaction.service';

@Component({
  selector: 'app-trace',
  // imports: [],
  standalone: false,
  templateUrl: './trace.component.html',
  styleUrl: './trace.component.scss',
})
export class TraceComponent {


  // // variables
  // mProgress = signal(false)

  // item:any ={}
  // serialNumber:any

  // constructor(
  //   private mCoffeeTransactionService: CoffeeTransactionService,
  //   private mToastrService: ToastrService,
  //   private route: ActivatedRoute,
  //   private router: Router,
  // ) {  }

  // ngOnInit(): void {
  //   // Call
  //   this.getItem();
  // }

  // // getItem
  // getItem(): void{
  //   this.serialNumber = this.route.snapshot.paramMap.get(decodeURIComponent('serial_number')) || '';
  //   // console.log('Serial Number:', this.serialNumber);
  //   const item: any = {
  //     serial_number: this.serialNumber,
  //   }

  //   this.mProgress.set(true);
  //   this.mCoffeeTransactionService.traceItem(item).subscribe({
  //     next: (response) => {
  //       if(response){
  //         this.item = response as any
  //         this.mProgress.set(false)
  //         // console.log('Trace Item Response:', this.item);
  //       }
  //     },
  //     error: (error) => {
  //       if(error.error.message){
  //         this.mToastrService.warning(error.error.message)
  //       }
  //       this.mProgress.set(false)
  //     }
  //   });
  // }






  // variables
  mProgress = signal(false)
  mPlots: any = {}

  @ViewChild('mapContainer') mapContainer!: ElementRef<HTMLDivElement>;
  private map!: L.Map;

   item:any ={}
  serialNumber:any

  constructor(
    private mCoffeePlotService: CoffeePlotService,
    private mCoffeeTransactionService: CoffeeTransactionService,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
    private route: ActivatedRoute,
  ) {  }


  ngOnInit(): void {
    // Call
    // this.getItem()
    this.serialNumber = this.route.snapshot.paramMap.get(decodeURIComponent('serial_number')) || '';
  }

  ngAfterViewInit(): void {
    this.map = L.map(this.mapContainer.nativeElement, {
      preferCanvas: true
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);


      const item: any = {
        serial_number: this.serialNumber,
      }
    this.mProgress.set(true);
    this.mCoffeeTransactionService.traceItem(item).subscribe({
    // this.mCoffeePlotService.unpaginatedItems().subscribe({
      next: (response) => {
        if(response){
          console.log('Trace Item Response:', (response as any).data.lot.lots);
          // this.mPlots = (response as any).data.coffee_plots
          const mLots = (response as any).data.lot.lots
          let mPlots = mLots.map((lot: any) => {
            return lot.deliveries
          });
          // console.log('mPlots:', mPlots);

          const features = mPlots
            .flat()
            .filter((delivery: any) => delivery.plot?.geo_json_geometry)
            .map((delivery: any) => {
              const plot = delivery.plot;

              return {
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
              };
            });

          const geoJsonData = {
            type: 'FeatureCollection',
            features
          };

          const parcels = L.geoJSON(geoJsonData as any, {
            style: {
              color: '#224326',
              weight: 2,
              fillColor: '#62a66b',
              fillOpacity: 0.5
            },
            // onEachFeature: (feature, layer) => {
            //   const plot = feature.properties;
            //   layer.bindTooltip(
            //     `${plot.area_ha} ha`,
            //     {
            //       permanent: true,
            //       direction: 'center',
            //       className: 'parcel-label'
            //     }
            //   );
            //   layer.bindPopup(`
            //     <strong>Coffee Plot</strong><br>
            //     Area: ${plot.area_ha} ha<br>
            //     Coffee Species: ${plot.coffee_species}
            //   `);
            // }
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


