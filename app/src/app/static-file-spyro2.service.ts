import { Injectable } from '@angular/core';
import { Level } from "./level";
import { Locale } from "./locale";
import { Spyro2Service } from './spyro2.service';

@Injectable({
  providedIn: 'root'
})
export class StaticFileSpyro2Service extends Spyro2Service {

  get levels(): Level[] {
    return [{name(string) { return "Summer Forest"; }}];
  };

  get locales(): Set<Locale> {
    return new Set([{id: 'en-gb', name: 'English'}]);
  }
}
