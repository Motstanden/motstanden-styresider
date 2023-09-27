# *Git* for deg som sliter

## Installasjon

### Windows
- [Git for Windows](https://gitforwindows.org/). 

### Linux
*Todo™*

## Anbefalinger

### Windows
Hvis du bruker terminal og ikke er kjent med å bruke terminal fra før, så anbefales det å bruke **Git Bash** som følger med Git for Windows.

### Linux
*Todo™*

## Git i Terminal

### Klone prosjektet
Når du kloner prosjektet får du en lokal kopi på pc-en din som du kan gjøre hva du vil med.
```shell
git clone https://github.com/Motstanden/motstanden-styresider.git
```

### Opprett branch
Det er god etikette å gjøre endringer på en dedikert branch. Å gjøre endringer på master branch er ofte uglesett.
```shell
git checkout -b min-nye-branch
```

### Lagre endringer
Når du har gjort endringer du vil lagre kan du gjøre det med følgende kommandoer:
```shell
git add . 
git commit -m "Write a short description of what you did here"
```
- `git add .` forteller git hvilke filer du har intensjon om å lagre. `.` betyr alle filer i mappen du er i.
- `git commit` lagrer endringene som du har intensjon om å lagre.

Når man beskriver en commit så er det god etikette å:
- Skrive på engelsk
- Skrive i [imperativ](https://www.sprakradet.no/sprakhjelp/Praktisk-grammatikk/Imperativ/). F.eks. "Add web page for 2030" eller "Fix typo".
- Unngå alt for lange beskrivelser.

### Publisere til GitHub
Først og fremst må du sørge for at du har skrivetilgang til GitHub. Se [Skrivetilgang på GitHub i Readme](README.md#skrivetilgang-på-github)

**Første gang** du skal publisere til GitHub må du kjøre følgende kommando:
```shell
git push --set-upstream origin min-nye-branch
``` 

**Alle andre ganger** du skal publisere til GitHub kan du kjøre følgende kommando:
```shell
git push
```

### Publiser til master
Når du er ferdig med å gjøre endringer på en branch og vil publisere endringene til master branch kan du gjøre det med følgende kommandoer:
```shell
git checkout master
git pull
git merge min-nye-branch
git push
```
Det er viktig at alle kommandoene kjøres i rekkefølge og uten feil.