# Opprett ny side
**Dette eksempelet går ut ifra at du vil opprette ny side i året 2030**

## Lag siden
1. Lag en kopi av mappen [0000](/0000)
2. Navngi den nye mappen 2030
3. Åpne filen 2030/index.html
4. Erstatt "*0000*" med "*2030*".
5. Erstatt "*Navn Navnesen*" med Navnene til de som har blitt valgt inn i styret.

## Publisere siden

6. Oppdater [projectData.json](/projectData.json) ved å følge mønsteret som allerede er i filen. 
<br/>
Dette vil gjøre nettsiden synlig på [styret.motstanden.no](https://styret.motstanden.no) og [motstanden.no/styrets-nettsider](https://motstanden.no/styrets-nettsider). 
<br/>
<br/>
**Eksempel:** Gitt at datoen er 15 oktober 2030 vil filen se ut som dette
    ```json
    {
        "pages": [
            
            // ... data fra tidligere år

            {
                "year": "2029",
            
                // ... data fra i fjor
            
            },

            // Data du skal legge til:
            {
                "year": "2030",
                "relativeUrl": "2030/index.html",
                "created": "2030-10-15",    // format: yyyy-mm-dd
                "updated": "2022-10-15",    // format: yyyy-mm-dd
                "isUpdated": "false"
            }
        ]
    }
    ```	 

    - **Nb:** Husk at kommentarer ikke er lov i json. Kommentarene her er bare for å gjøre eksempelet lettere å forstå.
    - *isUpdated* skal være false når siden opprettes. Feltet skal settes til true når styret velger å oppdatere siden.

7. Merge til master branch på GitHub
8. Nettsiden er nå tilgjengelig på [styret.motstanden.no/2030](https://styret.motstanden.no/2030). Den skal også være synlig på [motstanden.no/styrets-nettsider](https://motstanden.no/styrets-nettsider).
