import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Locale } from './locale';
import { Spyro2Service } from './spyro2.service';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  constructor(private service: Spyro2Service) {
    this.preferredLocale$ = this.locales$.pipe(
      map(locales => locales.values().next().value)
    );
  }

  get locales$(): Observable<Set<Locale>> {
    return this.service.locales$;
  }

  preferredLocale$: Observable<Locale>;
}

