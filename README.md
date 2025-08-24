# wp-settemp-homey

## doel

Stel de settemp in op basis van buitentemperatuur en stookwaarde in combinatie met een stookwaarde correctie.

## inleiding

Het algoritme gebruikt om tot een nieuwe stel (setpoint) temperatuur te komen is bedacht door tweakers gebruiker [BerndGaykema](https://gathering.tweakers.net/forum/view_message/80573882).

Voorwaarde is dat de de stooklijn instelling op OFF (Sluiting) staat.
HomeyScript dient ook als applicatie geinstalleerd te zijn.

## instructies

Maak een *advanced flow* aan met volgende suggestieve naamgeving: **dynamische setpoint bepaling**
De kaartjes voorzien van een notitie dienen als template. Daaronder staat een voorbeeld uitgewerkt.

De Homeyscript **code** DAN Flow kaartjes verwijzen naar de respectievelijke scripts die je vooraf in je HomeyScript library hebt aangemaakt. Zie [kaartje 2](./setup_stookwaarde-temp.js) en [kaartje 3](./bepaal_setpoint-temp.js)

## temperatuur mapping

De volgende tabel toont de mapping tussen buitentemperatuur grenswaarden en bijbehorende stookwaarden:

| Buitentemperatuur (°C) | Stookwaarde (°C) |
|------------------------|------------------|
| > 15                   | 23               |
| > 12                   | 24               |
| > 9                    | 25               |
| > 6                    | 26               |
| > 3                    | 27               |
| > 0                    | 27               |
| > -3                   | 28               |
| > -6                   | 28               |
| > -9                   | 29               |
| > -12                  | 29               |
| > -15                  | 30               |
| ≤ -15                  | 30               |

*De uiteindelijke setpoint temperatuur wordt berekend als: stookwaarde + stookwaarde_correctie (standaard -2°C)*

## diagram

Hieronder staat een visuele weergave van de buitentemperatuur-afhankelijke setpoint bepaling:

![Buitentemperatuur afhankelijke setpoint bepaling](./buitentemperatuur%20afhankelijke%20setpoint%20bepaling%20.png)
