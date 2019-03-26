import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PageStatusService } from './services/page-status';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './loader.scss'],
  animations: [
    trigger('Animation1', [
      transition('* => *', group([

        query(
          ':leave',
          [style({ 'margin-top': '0%' }), animate('0.3s', style({ 'margin-top': '100%' }))],
          { optional: true }
        ),
        query(
          ':enter',
          [style({ 'margin-top': '-100%' }), animate('0.3s', style({ 'margin-top': '0%' }))],
          { optional: true }
        ),
      ])),
    ]), 
    trigger('Animation2', [
      transition('* => *', group([

        query(
          ':leave',
          [style({ 'opacity': '1' }), animate('0.3s', style({ 'opacity': '0' }))],
          { optional: true }
        ),
        query(
          ':enter',
          [style({ 'opacity': '0' }), animate('0.3s', style({ 'opacity': '1' }))],
          { optional: true }
        ),
      ])),
    ]), 
  ]
})
export class AppComponent {
  title = 'cpg';
  filterData: FormGroup;
  search: string = null;
  isUserList: boolean = false;
  filterForm = new FormGroup({
    search: new FormControl(''),
    fromAge: new FormControl(''),
    toAge: new FormControl(''),
    position: new FormControl('0'),
    fromHeight: new FormControl(''),
    toHeight: new FormControl(''),
    fromWeight: new FormControl(''),
    toWeight: new FormControl(''),
    video: new FormControl(false),
  });

  constructor(private router: Router,
      private pageStatusService: PageStatusService) {
        // router.events.subscribe((val) => {
        //   if (this.pageStatusService.getStatus() == 'user-lists') this.isUserList = true;
        // });
      }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  onFilter(filterData) {
    console.log(filterData.value);
    this.filterForm = filterData;
    this.search = this.filterForm.value.search;
    this.router.navigate(['/user-lists/', this.filterForm.value]);
  }

  onSubmit() {
    this.router.navigate(['/user-lists/', this.filterForm.value]);
  }
}
