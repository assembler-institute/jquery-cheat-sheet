function removeMe(btn1, par) {
  let x = document.getElementById("vanilla");

  x.removeChild(btn1);
}

function createVanilla(btn1, par) {
  let r = document.createElement("p");
  r.innerText = "I´m Mr Meeseeks look at me! ";
  par.appendChild(r);
}

function appendVanilla(btn1, par) {
  let z = document.createElement("p");
  z.innerText = "I´m a child!... Element ";
  par.appendChild(z);
}

function prependVanilla(btn1, par) {
  par.insertBefore(x, btn1);
}

function createAddVanilla(btn1, par) {
  par.appendChild(document.createElement("p")).innerText = "Father, I´m alive!";
}

function createAddbeforeVanilla(btn1, par) {
  par.insertBefore(document.createElement("p"), btn1).innerText =
    "Ninja Attack!";
}

function clonate(btn1, par) {
  let cl = btn1.cloneNode(true);
  par.appendChild(cl);
}

function addClassVanilla(btn1, par) {
  btn1.setAttribute("class", "trial");
}

function removeClassVanilla(btn1, par) {
  btn1.classList.remove("trial2");
}

function vanillaClassToogle(btn1, par) {
  btn1.classList.toggle("trial2");
}

function disabledVanilla(btn1, par) {
  btn1.setAttribute("disabled", "true");
}

function fixDisabledVanilla(btn1, par, x) {
  document.getElementById("dummy").disabled = false;
}

function vanillaHideF(btn1, par) {
  document.getElementById("dark").style.visibility = "hidden";
}

function vanillaShowF(btn1, par, h) {
  h.style.display = "block";
}

function painInTheAss(btn1, par, m) {
  let cry = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
  let i = 0;
  let x = setInterval(() => {
    i++;
    m.style.opacity = cry[i];
    console.log("I work");
    console.log(i);
    if (i === 10) {
      clearInterval(x);
    }
  }, 1000);
}

function painInTheRear(btn1, par, m) {
  let cry = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0];
  let i = 0;
  let x = setInterval(() => {
    i++;
    m.style.opacity = cry[i];
    console.log("I work");
    console.log(i);
    if (i === 10) {
      clearInterval(x);
    }
  }, 100);
}

function dontKnowWhatImDoing(btn1, par) {
  let x = Array.from(document.querySelectorAll("p"));

  x.forEach((element) => {
    element.style.background = "blue";
  });
}

function vanillaParents(btn1, par) {
  let x = btn1.parentElement;
  x.style.color = "blue";
}

function killThemKids(btn1, par) {
  let x = par.childNodes;
  let z = Array.from(x);
  console.log(z);
  z.forEach((element) => {
    if (element !== z[0]) par.removeChild(element);
  });
}

function classChange(btn1, par) {
  Array.from(document.querySelectorAll("p")).forEach((element) => {
    element.style.background = "purple";
  });
}

function shootAPaintBall(btn1, par) {
  document.getElementById("Star").style.color = "blue";
}
function dynamite(btn1, par) {
  Array.from(document.querySelectorAll(".ninjas")).forEach((element) => {
    element.style.display = "block";
    element.style.color = "green";
  });
}

function displaySelection(btn1, par) {
  let r = document.getElementById("rockets").value;
  let z = document.createElement("p");
  z.innerText = r;
  par.appendChild(z);
}

function changeTheLink(btn1, par) {
  Array.from(document.querySelectorAll("a"))[0].href =
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
}

function showInputs(par, event) {
  alert(document.querySelector("input").value);
}

function vanillaBodyDelete(btn1, par) {
  console.log("j");
  while (par.firstChild) {
    par.removeChild(par.childNodes[0]);
  }
}

function timeOfYourLife(btn1, par) {
  let timing = setTimeout(() => {
    let cry = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0];
    let i = 0;
    let x = setInterval(() => {
      let m = document.getElementById("meh");
      i++;
      m.style.opacity = cry[i];
      console.log("I work");
      console.log(i);
      if (i === 10) {
        clearInterval(x);
      }
    }, 100);
  }, 2000);
}

function loadCheck(btn1, par) {
  console.log("before");
  if (document.readyState === "complete") {
    console.log("after");
    let j = document.createElement("p");
    j.innerText = "Of course it is loaded... YOU´RE SEEING THE PAGE";
    par.appendChild(j);
  }
}

function createButton(btn1, par) {
  let x = document.createElement("button");
  x.innerText = "Okay, yeah, I have the code now.";
  par.appendChild(x);

  x.addEventListener("click", (e) => {
    let k = document.createElement("p");
    k.innerText = "I´m alive";
    par.appendChild(k);
  });
}

function doubleClickChekerVanilla(btn1, par) {
  let x = document.createElement("button");
  x.innerText = "Twice, pls";
  par.appendChild(x);

  x.addEventListener("dblclick", (e) => {
    x.style.background = "blue";
  });
}

function keyDownEvents(btn1, par) {
  document.addEventListener("keydown", (e) => {
    btn1.style.color = "blue";
  });
}

function mouseMoveEvents(btn1, par) {
  document.addEventListener("mousemove", (e) => {
    btn1.style.color = "green";
  });
}

function createValueCopy(btn1, par) {
  let x = document.getElementById("copy");

  x.addEventListener("change", (e) => {
    let pp = document.createElement("p");
    pp.innerText = x.value;
    par.appendChild(pp);
  });
}

function loadThatImage(btn1, par) {
  let x = document.createElement("img");
  x.setAttribute("src", "images/coding.jpg");
  par.appendChild(x);

  x.addEventListener("load", (e) => {
    par.style.color = "blue";
  });
}

function createThemForms(btn1, par) {
  $(par).append(
    "<form class=elementals id=elementals><label for=fname>Random form</label> <input type=text id=fnames  name=fnames> <button class=ops>Execute</button></form>"
  );
  console.log(document.getElementById("elementals"));
  document.getElementById("elementals").addEventListener("submit", (e) => {
    event.preventDefault();
    par.style.color = "blue";
  });
}

function changeInputType(btn1, par) {
  $(par).append(
    "<label for=cars>Choose a car</label><select name=cars id=cars class=cars><option value=Tesla>Tesla</option><option value=Ferrari>Ferrari</option>"
  );
  let k = document.getElementById("cars");
  k.addEventListener("change", (e) => {
    let x = document.createElement("p");
    x.innerText = k.value;
    par.appendChild(x);
  });
}

function absolutism(btn1, par) {
  par.addEventListener("mouseover", (e) => {
    par.style.color = "red";
  });
}

function whoChecksThechekers(btn1, par) {
  $(par).append(
    "<input type=checkbox id=car1 name=car1 value=Car> <button id=checkings>Check</button><label for=car1>Just check me</label>"
  );

  document.getElementById("checkings").addEventListener("click", (e) => {
    if (document.getElementById("car1").checked) {
      par.style.background = "pink";
    } else {
      par.style.background = "yellow";
    }
  });
}

function letsGetToWork(btn1, par) {
  let x = document.createElement("ul");
  par.appendChild(x);
  let k = ["Element1", "Element2", "Element3"];

  k.forEach((element) => {
    l = document.createElement("li");
    let m = (l.innerText = element);
    par.appendChild(l);

    l.addEventListener("click", (e) => {
      if (m === "Element1") {
        let w = document.createElement("p");
        w.innerText = m;
        par.appendChild(w);
      }
      if (m === "Element2") {
        let w = document.createElement("p");
        w.innerText = m;
        par.appendChild(w);
      }
      if (m === "Element3") {
        let w = document.createElement("p");
        w.innerText = m;
        par.appendChild(w);
      }
    });
  });
}
