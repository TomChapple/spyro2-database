import { Component, OnInit, Input } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Level } from '../level';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.sass']
})
export class LevelComponent implements OnInit {

  constructor() {}

  @Input() level: Level = { name(locale) { return EMPTY } };

  ngOnInit(): void {
  }

}
