import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Level } from "./level";
import { Locale } from "./locale";

@Injectable()
export abstract class Spyro2Service {

    readonly abstract levels$: Observable<Iterable<Level>>;

    readonly abstract locales$: Observable<Set<Locale>>;
}
