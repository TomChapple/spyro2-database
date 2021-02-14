import { Injectable } from '@angular/core';
import { Level } from "./level";
import { Locale } from "./locale";
import { Spyro2Service } from './spyro2.service';
import { Observable, from, EMPTY } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalisedText } from './localised-text';

@Injectable({
  providedIn: 'root'
})
export class StaticFileSpyro2Service extends Spyro2Service {

  database$: Observable<any>;
  _levels$: Observable<Iterable<Level>>;
  _locales$: Observable<Set<Locale>>;

  constructor() {
    super();

    this.database$ = from([{
      locales: [
        {
          id: 'en-gb',
          name: 'English'
        }
      ],
      levels: [
        {
          name: {
            'en-gb': 'Summer Forest'
          }
        },
        {
          name: {
            'en-gb': 'Glimmer'
          }
        },
        {
          name: {
            'en-gb': 'Idol Spring'
          }
        },
        {
          name: {
            'en-gb': 'Colossus'
          }
        },
        {
          name: {
            'en-gb': 'Hurricos'
          }
        },
        {
          name: {
            'en-gb': 'Sunny Beach'
          }
        },
        {
          name: {
            'en-gb': 'Aquaria Towers'
          }
        }
      ]
    }])

    this._levels$ = this.database$.pipe(
      map(db => db.levels.map(jsonToLevel))
    );
    this._locales$ = this.database$.pipe(
      map(db => db.locales),
      map(locales => new Set(locales))
    );
  }

  get levels$(): Observable<Iterable<Level>> {
    return this._levels$;
  };

  get locales$(): Observable<Set<Locale>> {
    return this._locales$;
  }
}

function jsonToLevel(obj: any): Level {
  return {
    name: obj.name ? jsonToLocalisedText(obj.name) : undefined
  }
}

function jsonToLocalisedText(obj: any): LocalisedText {
  return (locale) => obj[locale.id] ? from([obj[locale.id]]) : EMPTY;
}