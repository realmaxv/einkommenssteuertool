export function calculateZvE2023(userInputZvE: number): string {
  let y, z: number;
  let est: number = 0;

  if (userInputZvE <= 10908) {
    return `Sie müssen keine Einkommenssteuer zahlen, da der Grundfreibetrag zu hoch ist.`;
  } else if (userInputZvE > 10908 && userInputZvE <= 15999) {
    y = (userInputZvE - 10908) / 10000;
    est = Math.round((979.18 * y + 1400) * y);
    return `Die Einkommenssteuer beträgt: ${est.toString()} €`;
  } else if (userInputZvE > 15999 && userInputZvE <= 62809) {
    z = (userInputZvE - 15999) / 10000;
    est = Math.round((192.59 * z + 2397) * z + 966.53);
    return `Die Einkommenssteuer beträgt: ${est.toString()} €`;
  } else if (userInputZvE > 62809 && userInputZvE <= 277825) {
    est = Math.round(0.42 * userInputZvE - 9972.98);
    return `Die Einkommenssteuer beträgt: ${est.toString()} €`;
  } else if (userInputZvE >= 277826) {
    est = Math.round(0.45 * userInputZvE - 18307.73);
    return `Die Einkommenssteuer beträgt: ${est.toString()} €`;
  } else {
    return "Sie haben noch nichts eingegeben...";
  }
}
