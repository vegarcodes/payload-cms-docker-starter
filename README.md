# Payload CMS + Docker starterprosjekt

Dette repositoryet inneholder en tilpasset variant av Payload sin starter-template, spesifikt ment for å brukes til å lage en Docker-container som kan kjøres. 

Du må ha Docker Desktop, eventuelt Docker Engine om du kjører Linux, installert på din maskin for å bygge og kjøre dette prosjektet. Du må fylle ut alle miljøvariablene nevnt i `.env.example` for at dette skal fungere; for kjøring lokalt på din egen maskin kan du lage en fil kalt `.env`, mens for produksjonssetting bør du bruke hostingplattformens foretrukne måte å legge inn miljøvariabler. 

Når alt er riktig satt opp har du Payload CMS og en tilknyttet Postgres-database kjørende i Docker-containere. For produksjonsmiljøer settes filopplastinger opp slik at de legges i et Docker-volum; for utviklingsmiljøer legges filopplastinger i en statisk mappe i prosjektet. Dersom du lager flere innholdssamlinger der filer kan lastes opp, må du selv besørge at disse filene havner i riktige mapper og/eller volumer.

## Instruksjoner

### Starte et prosjekt basert på denne starteren

**Du skal ikke bruke `git clone` for å laste ned denne starteren!** For å ta utgangspunkt i dette prosjektet når du lager et nytt Payload CMS-prosjekt, gjør følgende:

+ Åpne terminalen din og lag deg en mappe der du ønsker at prosjektet skal ligge. F.eks: `mkdir mitt-payload-prosjekt`
+ Naviger deg inn i mappen. F.eks: `cd mitt-payload-prosjekt`
+ Kjør følgende kommando for å kopiere filene fra starteren inn i ditt eget prosjekt: `npx degit vegarcodes/payload-cms-docker-starter`
+ Sjekk at filene nå ligger i mappen du laget. F.eks: `ls -la`
+ Herfra kan du starte et git-repository med `git init` og sjekke det inn på GitHub på vanlig måte.

### Jobbe med prosjektet lokalt

Når du skal jobbe med prosjektet på din egen maskin, skal du bruke Docker Compose i stedet for å skrive `npm run dev`. Gjør følgende:

+ Naviger deg til prosjektmappa i terminalen din.
+ Kjør kommandoen `docker compose up` for å bygge og starte prosjektet i en container. Du vil da se hva som kommer i loggene; dersom du ikke har behov for dette, kan du heller kjøre `docker compose up -d` for å kjøre den i detached mode.
+ For å stoppe containeren, kjør `docker compose down`.

### Lag et produksjonsbygg

For å lage et produksjonsbygg som kjører i en container, skal du bruke kommandoen `docker compose -f compose.production.yaml` slik at den bruker riktig Compose-fil. Når du skal bygge for deployment på en server, må du lese dokumentasjonen til hostingplattformen du bruker slik at du sikrer at den leser riktig Compose-fil: i produksjon skal du ikke bruke `compose.yaml`, men `compose.production.yaml`.

### Kjør migrasjoner

Når du har gjort endringer i content collections, må du lage en migrasjonsfil slik at applikasjonen vet hvordan den skal gjøre endringer i databasen for å matche dette. Kjør kommandoen `npm run migrate:create` for å lage en migrasjonsfil. Migrasjoner blir kjørt automatisk i produksjon når containeren starter på nytt, hvis den ser at det er behov for dette.

Les mer i [Payloads dokumentasjon om migrasjoner](https://payloadcms.com/docs/database/migrations), spesielt avsnittet om arbeidsflyten når man jobber mot en Postgres-database, for mer informasjon om hvordan det er lurt å lage og kjøre migrasjoner.