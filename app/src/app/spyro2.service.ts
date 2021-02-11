import { Injectable } from "@angular/core";
import { Level } from "./level";
import { Locale } from "./locale";

@Injectable()
export abstract class Spyro2Service {

    readonly abstract levels: Iterable<Level>;

    readonly abstract locales: Set<Locale>;
}
