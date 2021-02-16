import { Observable } from 'rxjs';
import { Locale } from './locale';

export interface LocalisedText {
    /**
     * Retrieves a value based on a specified locale.
     * 
     * This is used for fields that can have multiple equivalent values
     * across languages. For example, the level "Glimmer" is called "Lueur" in
     * French. Neither are seen as the true name and are simply variations of
     * the one value.
     *
     * Locales are typically represented as an IETF language tag, for example
     * "en-gb", "ja" or "fr". There is no restriction on what keys are allowed,
     * but it is recommended that locales are treated in as case-insensitive
     * for simplicity towards end users.
     *
     * @param locale The locale as an IETF language tag
     */
    (locale: Locale): Observable<string>;
}
