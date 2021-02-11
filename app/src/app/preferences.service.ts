import { Injectable, OnInit } from '@angular/core';
import { Locale } from './locale';
import { Spyro2Service } from './spyro2.service';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService implements OnInit {

  constructor(private service: Spyro2Service) {  }

  get locales(): Set<Locale> {
    return this.service.locales;
  }

  preferredLocale?: Locale;

  ngOnInit() {
    if (!this.preferredLocale) {
      this.preferredLocale = this.locales.values().next().value;
    }
  }
}

