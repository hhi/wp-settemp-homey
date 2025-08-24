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

## diagram

Hieronder staat een visuele weergave van de buitentemperatuur-afhankelijke setpoint bepaling:

![Buitentemperatuur afhankelijke setpoint bepaling](./buitentemperatuur%20afhankelijke%20setpoint%20bepaling%20.png)
