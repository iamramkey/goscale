/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-05-26 18:08:07
 * @modify date 2019-05-26 18:08:07
 * @desc [Updates the browser title based on route in which you are in]
 */

import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

const APP_TITLE = 'Questions & Answers ';
const SEPARATOR = ' | ';

@Injectable()
export class AppTitleService {
  public static ucFirst(string: string) {
    if (!string) {
      return string;
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) {}

  init() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .map(data => {
        if (data.title) {
          // If a route has a title set (e.g. data: {title: "Foo"}) then we use it
          return data.title;
        } else {
          // If not, we do a little magic on the url to create an approximation
          return this.router.url.split('/').reduce((acc, frag) => {
            if (acc && frag) {
              acc += SEPARATOR;
            }
            return acc + AppTitleService.ucFirst(frag);
          });
        }
      })
      .subscribe(pathString => this.titleService.setTitle(`${APP_TITLE} ${pathString}`));
  }
}
