import { Component, Input, OnInit } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { LocalisedText } from '../localised-text';
import { PreferencesService } from '../preferences.service';

@Component({
  selector: 'app-localised-text',
  templateUrl: './localised-text.component.html',
  styleUrls: ['./localised-text.component.sass']
})
export class LocalisedTextComponent implements OnInit {

  @Input('localText') localisedText: LocalisedText = (locale) => EMPTY;

  _preferredText$: Observable<string> = EMPTY;

  get preferredText$(): Observable<string> {
    return this._preferredText$;
  }

  constructor(private preferences: PreferencesService) { }

  ngOnInit(): void {
    this._preferredText$ = this.preferences.preferredLocale$.pipe(
      mergeMap((locale) => this.localisedText(locale))
    )
  }

}
