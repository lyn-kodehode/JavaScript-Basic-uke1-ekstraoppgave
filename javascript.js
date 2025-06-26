/******************************************************************************
EKSTRAOPPGAVE 1 – KOMBINERT BETINGELSE

Du jobber med et adgangssystem. Lag følgende variabler:

- `age` (tall)
- `hasTicket` (boolean)
- `isVIP` (boolean)
- `hour` (tall mellom 0 og 23)

Skriv en IF/ELSE som gir adgang hvis:
- personen er 18 år eller eldre, **og**
- har billett, **eller** er VIP, **og**
- klokken er mellom 18 og 23 (inkludert)

Hvis personen får adgang, skriv ut "Velkommen inn!"
Ellers: "Du har ikke adgang."

TIPS: Husk parenteser for å styre rekkefølgen i logikken!

******************************************************************************/

let age = 18;
let hasTicket = true;
let isVIP = false;
let hour = 19;

// Skriv koden for ekstraoppgave 1 her

// NESTED LOOP
if (hasTicket || isVIP) {
  if (age >= 18 && hour >= 18 && hour <= 23) {
    console.log("Velkommen inn!");
  } else {
    console.log("Du har ikke adgang.");
  }
} else {
  console.log("Du har ikke adgang.");
}

// PARENTHESIS IF STATEMENT
if ((hasTicket || isVIP) && age >= 18 && hour >= 18 && hour <= 23) {
  console.log("Velkommen inn!");
} else {
  console.log("Du har ikke adgang.");
}

/******************************************************************************
EKSTRAOPPGAVE 2 – FLERE OPERASJONER

Lag en variabel `startValue` og sett den til et vilkårlig tall, f.eks. 8.

Utfør disse trinnene i rekkefølge:
1. Legg til 5
2. Multipliser med 2
3. Trekk fra 4
4. Del på 3

Deretter:
- Hvis det endelige tallet er et helt tall og mindre enn 10: skriv ut "Liten helt"
- Hvis det er 10 eller mer: skriv ut "Stor helt"
- Hvis det ikke er et helt tall: skriv ut "Desimalhelt"

TIPS: Du kan sjekke om et tall er helt med: `number % 1 === 0`

******************************************************************************/

let startValue = 12;

// Skriv koden for ekstraoppgave 2 her

startValue += 5;
console.log(startValue);
startValue *= 2;
console.log(startValue);
startValue -= 4;
console.log(startValue);
startValue /= 3;
console.log(startValue);
if (startValue % 1 === 0) {
  if (startValue < 10) {
    console.log(startValue);
    console.log("Liten helt");
  } else {
    console.log(startValue);
    console.log("Stor helt");
  }
} else {
  console.log("Desimalhelt");
  console.log(startValue);
}

/******************************************************************************
EKSTRAOPPGAVE 3 – SWITCH MED INNEBYGD SJEKK

Lag en variabel `weatherType` med én av disse tekstverdiene:
"sol", "regn", "snø", "tåke", "vind", "hagl"

Lag også en variabel `temperature` som representerer temperaturen ute.

Bruk en `switch` for å bestemme tekst som skal vises, og gjør følgende:

- Hvis det er "sol": 
    - Hvis temperaturen er over 20: skriv ut "Perfekt dag for strand!"
    - Ellers: skriv ut "Lys, men kjølig dag."
- Hvis det er "regn" eller "hagl": skriv ut "Ta med regntøy!"
- Hvis det er "snø": 
    - Hvis temperaturen er under 0: skriv ut "Tid for akebrett!"
    - Ellers: skriv ut "Slaps, ikke ideelt."
- Hvis det er "vind": skriv ut "Hold på hatten!"
- Hvis det er "tåke": skriv ut "Sikt dårlig, kjør forsiktig."
- Alt annet: skriv ut "Ukjent værtype."

******************************************************************************/

let weatherType = "idk";
let temperature = 30;

// Skriv koden for ekstraoppgave 3 her
switch (weatherType) {
  case "sol":
    if (temperature > 20) {
      console.log("Perfekt dag for strand!");
    } else {
      console.log("Lys, men kjølig dag");
    }
    break;
  case "regn":
    console.log("Ta med regntøy!");

    break;
  case "hagl":
    console.log("Ta med regntøy!");

    break;
  case "snø":
    if (temperature < 0) {
      console.log("Tid for akebrett!");
    } else {
      console.log("Slaps, ikke ideelt.");
    }
    break;
  case "vind":
    console.log("Hold på hatten!");

    break;
  case "tåke":
    console.log("Sikt dårlig, kjør forsiktig.");

    break;
  default:
    console.log("Ukjent værtype.");
}
