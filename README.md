# Payload CMS + Docker starterprosjekt (versjon 1.1.0)

Dette repositoryet inneholder en tilpasset variant av Payload sin starter-template, der vi bruker Docker til å lage en PostgreSQL-database i en container. Dette gjør at det er raskt og enkelt å komme i gang med prosjektet. I tillegg kan Docker brukes til å lage produksjonsklare containere, slik at når du skal ut i produksjon med det du har laget, er det enkelt å komme i gang.

Du må ha Docker Desktop, eventuelt Docker Engine om du kjører Linux, installert på din maskin for å bygge og kjøre dette prosjektet. Du må fylle ut alle miljøvariablene nevnt i `.env.example` for at dette skal fungere; for kjøring lokalt på din egen maskin kan du lage en fil kalt `.env`, mens for produksjonssetting bør du bruke hostingplattformens foretrukne måte å legge inn miljøvariabler. 


## Instruksjoner

### Starte et prosjekt basert på denne starteren

**Du skal ikke bruke `git clone` for å laste ned denne starteren!** For å ta utgangspunkt i dette prosjektet når du lager et nytt Payload CMS-prosjekt, gjør følgende:

+ Åpne terminalen din og lag deg en mappe der du ønsker at prosjektet skal ligge. F.eks: `mkdir mitt-payload-prosjekt`
+ Naviger deg inn i mappen. F.eks: `cd mitt-payload-prosjekt`
+ Kjør følgende kommando for å kopiere filene fra starteren inn i ditt eget prosjekt: `npx degit vegarcodes/payload-cms-docker-starter`
+ Sjekk at filene nå ligger i mappen du laget. F.eks: `ls -la`
+ Herfra kan du starte et git-repository med `git init` og sjekke det inn på GitHub på vanlig måte.

### Jobbe med prosjektet lokalt

Når du skal jobbe med prosjektet på din egen maskin, skal du bruke Docker til å starte databasecontaineren, og Node.js + npm til å starte Payload CMS-applikasjonen.

+ Før du begynner må du ha laget en `.env`-fil og installert avhengigheter med `npm install`.
+ Naviger deg til prosjektmappa i terminalen din.
+ Kjør kommandoen `docker compose up -d` for å starte databasecontaineren. Denne lages automatisk hvis den ikke finnes fra før. For å stoppe databasecontaineren, kjør `docker compose down`.
+ Når databasecontaineren har startet, kan du kjøre `npm run dev` for å starte Payload CMS sin utviklingsserver. Når denne kjører, kan du starte å jobbe med koding og utvikling som du vanligvis gjør i et Next.js-prosjekt.

### Lag et produksjonsbygg

For å lage et produksjonsbygg som kjører i en container, skal du bruke kommandoen `docker compose -f compose.production.yaml` slik at den bruker riktig Compose-fil. Når du skal bygge for deployment på en server, må du lese dokumentasjonen til hostingplattformen du bruker slik at du sikrer at den leser riktig Compose-fil: i produksjon skal du ikke bruke `compose.yaml`, men `compose.production.yaml`.

### Kjør migrasjoner

Når du har gjort endringer i content collections, må du lage en migrasjonsfil slik at applikasjonen vet hvordan den skal gjøre endringer i databasen for å matche dette. Kjør kommandoen `npm run migrate:create` for å lage en migrasjonsfil. Migrasjoner blir kjørt automatisk i produksjon når containeren starter på nytt, hvis den ser at det er behov for dette.

Les mer i [Payloads dokumentasjon om migrasjoner](https://payloadcms.com/docs/database/migrations), spesielt avsnittet om arbeidsflyten når man jobber mot en Postgres-database, for mer informasjon om hvordan det er lurt å lage og kjøre migrasjoner.

## Forskjeller mellom versjon 1.0.0 og 1.1.0

Dersom du går inn i `package.json` kan du se hvilken versjon av starteren du kjører, forutsatt at du ikke har endret dette feltet selv.

Hvis du kjører en starter som har versjon 1.0.0, og du vil oppgradere til 1.1.0, se på filene `compose.yaml` og `.env.example` for å se hvilke endringer som er gjort. `compose.yaml` er betraktelig mindre i den nye versjonen, mens `.env.example` inneholder en miljøvariabel du bare skal kopiere uten å endre. Utover dette skal prosjektet fungere likt.