import { Component } from '@angular/core';
// import
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  // imports: [],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
  standalone: false
})
export class IndexComponent {

  // variables
  mParam1:any
  mParam2:any

  constructor(
    private route: ActivatedRoute,
    private location: Location,

  ) { }

  ngOnInit(): void {
    this.mParam1 = this.route.snapshot.paramMap.get('param1');
    this.mParam2 = this.route.snapshot.paramMap.get('param2');
  }

  //  onGoBack
   onGoBack(){
    this.location.back();
  }

}
