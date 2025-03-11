import "./style.css";
import { calculateZvE2023 } from "./Calculate2023/calculate23";
import { calculateTax } from "./Calculate2024/calculate24";

const submitBtn = document.getElementById("submit") as HTMLButtonElement;
const userInput = document.getElementById("user-input") as HTMLInputElement;
const output = document.getElementById("output") as HTMLDivElement;
const selectYear = document.getElementById("year") as HTMLSelectElement;

// selectYear.addEventListener("change", () => {
//   switch (selectYear.value) {
//     case "year23":
//       break;

//     case "year24":
//       submitBtn.addEventListener("click", () => {

//       });
//       break;

//     default:
//       console.log("nope");
//   }
// });
// let eingabe = userInput.value;

submitBtn.addEventListener("click", () => {
  if (selectYear.value === "year23") {
    output.innerHTML = calculateZvE2023(Number(userInput.value));
  } else if (selectYear.value === "year24") {
    output.innerHTML = `Die Einkommenssteuer für 2024 beträgt: ${calculateTax(
      Number(userInput.value),
      2024
    ).toString()} €`;
  }
});
