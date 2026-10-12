# Payload CMS for Docker-containere

(PS: Work in progress.)

Dette repositoryet inneholder en remikset variant av Payload sin starter-template, spesifikt ment for å brukes til å lage en Docker-container som kan kjøres. Du må ha Docker Desktop, eventuelt Docker Engine, installert på din maskin for å bygge og kjøre dette prosjektet. Du må fylle ut alle miljøvariablene i `payload.env` og `postgres.env` for at dette skal fungere; bruk template-filene som ligger i prosjektet. Når alt er riktig satt opp har du Payload CMS og en tilknyttet Postgres-database kjørende i en Docker-container som du kan bruke lokalt eller deploye. 