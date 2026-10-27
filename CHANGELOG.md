# Endringslogg

## Versjon 1.1.0 (27. oktober, 2026)

Flere studenter har rapportert inn et par bugs ved starteren:

- De som sitter på Windows-maskiner rapporterer ofte om at HMR ikke fungerer i det hele tatt, og at de må stoppe og starte containerene for hver endring de gjør.
- Noen ganger stanser Payload-appen helt fordi den forventer brukerinput gjennom et interaktivt CLI. Dette medfører at man ikke får svart fordi Payload-appen kjører i en container og ikke har input gjennom stdin knyttet til seg.

For å fikse begge disse problemene, kommer vi nå til å endre på hvordan prosjektet kjøres opp for lokal utvikling. Tidligere kjørte prosjektet i to containere: en for databasen, og en for applikasjonen. Fremover kommer vi til å bare kjøre opp containeren som inneholder databasen, siden dette har fungert feilfritt og lar oss kjøre flere Payload CMS-prosjekter på samme maskin uten at de må dele en felles Postgres-database.

Applikasjonen vil ikke kjøres i en container heretter. Dette medfører at studentene først må starte databasecontaineren med `docker compose up`, og når databasen kjører, skal studentene kjøre `npm run dev` for å starte applikasjonen. Dette vil føre til at HMR fungerer som tiltenkt, at man får brukt det interaktive CLIet hvis det skulle dukke opp i terminalen, og at man ikke trenger å stoppe og starte databasecontaineren hver gang man egentlig bare trenger å stoppe/starte applikasjonen. 

Endringen medfører litt endringer i hvilke kommandoer som kjøres, men vil også gjøre at utviklingsprosessen blir bedre for alle som bruker starteren, spesielt de som bruker Windows. README.md endres for å reflektere disse endringene.

Det gjøres ingen endringer i compose.production.yaml ettersom bygging for produksjon er en separat prosess som ikke påvirkes av hvordan utviklingsmiljøet settes opp.