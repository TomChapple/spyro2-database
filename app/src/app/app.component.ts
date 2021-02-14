import { Component } from '@angular/core';
import { Spyro2Service } from './spyro2.service'
import { Level } from './level'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(private service: Spyro2Service) {  }

  title = 'app';

  get levels(): Iterable<Level> {
    return this.service.levels;
  }
}
