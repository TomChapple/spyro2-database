import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) {
    super();

    this.database$ = this.http.get('https://raw.githubusercontent.com/TomChapple/spyro2-database/main/spyro2.pal.json');

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