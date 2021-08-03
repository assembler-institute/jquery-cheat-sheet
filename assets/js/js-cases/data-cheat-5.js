import { cases } from "../cases.js";

function js5() {
  let view = document.getElementById("view");
  let c = cases[5];
  view.classList.add("view--0");

  //---------------------------------HINT
  let hint = document.createElement("div");
  hint.textContent = c.hint;
  hint.className = "hint";

  //---------------------------------GHOSTS
  let bunch = document.createElement("div");
  bunch.classList.add("div--icons");
  let g1 = document.createElement("div");
  g1.textContent = "👻";
  let g2 = document.createElement("div");
  g2.textContent = "👹";
  let g3 = document.createElement("div");
  g3.textContent = "🤖";
  bunch.appendChild(g1);
  bunch.appendChild(g2);
  bunch.appendChild(g3);

  //---------------------------------SPELL
  let spell = document.createElement("input");
  spell.classList.add("input");
  let def = document.createAttribute("value");
  def.value = "ben zi bena, bluot zi bluoda.";
  spell.setAttributeNode(def);

  view.appendChild(bunch);
  view.appendChild(spell);
  view.appendChild(hint);

  //---------------------------------DISSAPEAR
  let ghosts = document.querySelector(".div--icons");
  spell.addEventListener("input", () => (ghosts.style.display = "none"));
}

export { js5 };
