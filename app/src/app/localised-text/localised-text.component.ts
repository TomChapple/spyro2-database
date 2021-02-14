import { Component, Input, OnInit } from '@angular/core';
import { LocalisedText } from '../localised-text';
import { PreferencesService } from '../preferences.service';

@Component({
  selector: 'app-localised-text',
  templateUrl: './localised-text.component.html',
  styleUrls: ['./localised-text.component.sass']
})
export class LocalisedTextComponent implements OnInit {

  @Input('localText') localisedText: LocalisedText = (locale) => "";

  get preferredText(): String {
    return this.localisedText(this.preferences.preferredLocale?.id ?? "");
  }

  constructor(private preferences: PreferencesService) { }

  ngOnInit(): void {
  }

}
