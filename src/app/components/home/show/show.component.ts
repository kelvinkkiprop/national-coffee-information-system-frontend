import { Component } from '@angular/core';
// import
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-show',
  // imports: [],
  standalone: false,
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss',
})
export class ShowComponent {

  // variables
  mTitle: any

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.mTitle = data['title']
    });
    // call
    this.getItem()
  }

  getItem(){
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      let activeRoute = this.route;
      while (activeRoute.firstChild) {
        activeRoute = activeRoute.firstChild
      }
      activeRoute.data.subscribe(data => {
        // console.log(data['title'])
        this.mTitle = data['title']
      });
    });
  }

}
