# Übung Server Side JavaScript

Schreibe eine einfache CRUD (Create, Read, Update, Delete) Applikation.
Nutze ein einfaches Datenschema deiner Wahl, z.B. Personaldaten oder Wetterdaten aus der vorgängigen Übung.

## Aufgabenbeschreibung

- Anbindung des Frontends über eine REST-API.
- Beschreibung des Verhaltens mit Akzeptanz Tests ([BBD](https://en.wikipedia.org/wiki/Behavior-driven_development))
- Testabdeckung mittels (sinnvollen!) Unit-Tests von mindestens 80%.
- Persistierung mit einer gängigen relationalen Datenbank (MySQL/MariaDB, PostgresQL)
- Einfaches Frontend um Einträge anzuzeigen, zu erstellen, editieren und löschen
- Dokumentation der API mit OpenAPI

Teste die API mit Jest und Supertest. 
Bei Tests sollte die öffentliche Schnittstelle des Systems getestet werden.
Bei Unit-Tests sind das die public Methoden, bei einer REST API die HTTP Schnittstelle.
Deshalb sollte Supertest mit `request('https://localhost')` genutzt werden, und nicht das Express-Objekt übergeben 
werden.

Dokumentiere die API mit einem [OpenAPI](https://www.openapis.org/) Dokument. Visualisiere dieses mit [Swagger UI](https://swagger.io/tools/swagger-ui/).

## Tech-Stack

- Backendsprache: Node.JS
- Backend-Framework: [Express.js](http://expressjs.com/)
- Unit-Test-Framework: [Jest](https://jestjs.io/)
- API-Test-Framework: [Supertest](https://www.npmjs.com/package/supertest)
- Akzeptanztests: [Gauge+Taiko](https://gauge.org/)

## Vorgehen

Folgende Punkte müssen in dieser Reihenfolge erledigt werden:
1. Beschreibe die Funktionalität mittels Akzeptanztests.
2. Schreibe Integrations-Tests für die API.
3. Setze einen Container auf, der die Node Applikation ausführt.
4. Implementiere die API bis die Tests nicht mehr fehlschlagen. Nutze dazu statische Dummy-Daten. Erstelle die 
   OpenAPI Spezifikation gleichzeitig anhand des Codes.
5. Implementiere das Swagger UI.
6. Erstelle die Datenbankanbindung.
7. Erstelle die Frontend-Applikation mit einem gängigen Framework, z.B [Svelte](https://svelte.dev/) mit [SvelteKit]
   (https://kit.svelte.dev).

### Begründung der Reihenfolge
Unit-Tests zuerst zu schreiben zwingt uns Entwickler:innen, uns zuerst Gedanken zu machen, wie die Schnittstelle des 
Systems sinnvoll gestaltet wird. 
Das ist sinnvoll, denn damit wird vermieden, dass die Schnittstelle 
durch die Implementierung definiert wird.

Gleiches gilt für Akzeptanz- und Integrationstests. 
Werden Akzeptanztests vor der Implementierung formuliert dienen dies als präzise ausführbare Spezifikation, die mit 
den Kunden erarbeitet und von diesen freigeben werden können.
So können Missverständnisse bei der Formulierung der Anforderungen vermieden werden.

Die restliche Reihenfolge hat didaktische Gründe, sie folgt dem Unterrichtsprogramm.
