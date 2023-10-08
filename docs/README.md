# Motstandens Styresider
Kildekoden for [styret.motstanden.no](https://styret.motstanden.no)

## Oppsummering
Hensikten med dette prosjektet er å ha en egen nettside for hvert eneste styre som har vært i Motstanden. 

Når et nytt styre blir valgt opprettes det en nettside på `styret.motstanden.no/<Styrets årgang>`.
Til å begynne med inneholder nettsiden kun navnene til de i styret. Det er opp til det nye styret hva de vil gjøre med nettsiden i løpet av det neste året. 

# Kom i gang

## Skrivetilgang på GitHub
Gjør en av følgende for å få skrivetilgang:
- Opprett en issue på GitHub hvor du ber om skrivetilgang.
- Kontakt motstandenstyret via interne kanaler eller på [styret@motstanden.no](mailto:styret@motstanden.no)
- Kontakt [@torsteinws](https://github.com/Torsteinws) 

## Git
Trenger du hjelp med å komme i gang med git? Les gjennom [git for deg som sliter](git-for-deg-som-sliter.md).

## Rediger side
*Følgende eksempel går ut ifra at du vil redigere året 2020*

1. Gå til mappen [2020](/2020)
2. I denne mappen kan du **gjøre hva du vil!™**  
3. Sørg for at `index.html` er entry-point for nettsiden. Denne filen blir automatisk lastet inn når folk går til [styret.motstanden.no/2020](https://styret.motstanden.no/2020) 
4. Merge endringer til master branch på GitHub.
5. Endringene er synlige på nettsiden etter et lite minutt.

### Shoutout på motstanden.no
Vis til resten av Motstanden at du har gjort noe kult ved å oppdatere [projectData.json](/projectData.json). Motstanden.no vil automatisk oppdatere seg selv når denne filen endres.

Følgende felt kan endres:
- `updated`: Sett til dagens dato. Formatet er `yyyy-mm-dd`
- `isUpdated`: Sett til `true` for å vise at du har gjort en endring som er verdt å få med seg.

Eksempel:
```jsonc
{
    "pages": [
        // ... 
        {
            "year": "2019",
            // ... 
        },
        {
            "year": "2020",
            "relativeUrl": "2020/index.html",
            "created": "2020-10-15",
            "updated": "2020-11-30",        // Sett til dagens dato. Format: yyyy-mm-dd
            "isUpdated": "true"             // Sett til true 
        },
        {
            "year": "2021",
            // ...
        },
        // ...
    ]
}
```

Når du har endret `projectData.json` må du merge til master branch på GitHub. Endringene blir da synlige på [motstanden.no/styrets-nettsider](https://motstanden.no/styrets-nettsider) og [motstanden.no/hjem](https://motstanden.no/hjem) etter et lite minutt.

## Opprett ny side
Blir gjort av webingeniør etter generalvorssamling. 
Se [hvordan opprette ny side](opprett-ny-side.md).
