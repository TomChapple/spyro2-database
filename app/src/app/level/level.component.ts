import { Component, OnInit, Input } from '@angular/core';
import { Level } from '../level';
import { PreferencesService } from '../preferences.service';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.sass']
})
export class LevelComponent implements OnInit {

  constructor(private preferences: PreferencesService) {}

  @Input() level: Level = {name(string) { return ''; }}

  ngOnInit(): void {
  }

}
