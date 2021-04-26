/* 
This function returns the text to display on the console mock for each
list element
*/
function vanillaListItems(tag) {
  let line = "----------Vanilla JS---------------~";
  switch (tag) {
    case 0:
      line +=
        "To get the first parent element of an element use ç.parentElement~";
      line += "To get the first parent node of an element use ç.parentNode~¡";
      break;
    case 1:
      line += `To get a collection of the children of an ç you can use the method ç.children~`;
      line += `It returns a collection of child elements~¡`;
      break;
    case 2:
      line += `The class selector is document.getElementsByClassName("class")~`;
      line += `It returns a collection of elements~`;
      line += `An alternative is to use document.querySelector(".class") for single elements or document.querySelectorAll(".class") to get a NodeList object~¡`;
      break;
    case 3:
      line += `The id selector is document.getElementById("id")~`;
      line += `An alternative is the document.querySelector("#id")~¡`;
      break;
    case 4:
      line += `To get a collection by class and attribute you can use document.querySelectorAll(".class[attr="value"]")~`;
      line += `It returns a NodeList~¡`;
      break;
    case 5:
      line += `The event when a page has loaded is window.addEventListener("load", handler)`;
      break;
    case 6:
      line += `To add an event when an element was clicked you can use ç.addEventListener("click", handler)~¡`;
      break;
    case 7:
      line += `To add an event when an element was clicked you can use ç.addEventListener("dblclick", handler)~¡`;
      break;
    case 8:
      line += `The mousemove event is fired at an element when a pointing device (usually a mouse) is moved while the cursor's hotspot is inside it.~`;
      line += `To use it ç.addEventListener("mousemove", handler)~¡`;
      break;
    case 9:
      line += `To add an event when the mouse is moved from outside to inside an element you can use ç.addEventListener("mouseover", handler)~¡`;
      break;
    case 10:
      line += `To add an event when a key is pressed you can use document.addEventListener('keypress', handler)~¡`;
      break;
    case 11:
      line += `In vanilla there is a specific method and it is htmlImageElement.complete~`;
      line += `This method returns a true if the image has completely loaded; otherwise, the value is false~`;
      line += `There's an alternative and it is the ç.addEventListener("load", handler)~¡`;
      break;
    case 12:
      line += `To know if an image failed to load you can use ç.addEventListener("error", handler)~¡`;
      break;
    case 13:
      line += `To know if a form has been submitted you can use form.addEventListener('submit', handler)~¡`;
      break;
    case 14:
      line += `The change event works on <input>, <select> and <textarea> when the user changes the input~`;
      line += `To use it ç.addEventListener('change',handler)~¡`;
      break;
    case 15:
      line += `To create an element you can use document.createElement("element tag") as in document.createElement("p")`;
      line += `To add some text you can use document.createElement("p").textContent("some text")`;
      break;
    case 16:
      line += `To remove an element from the DOM you can use ç.remove()~¡`;
      break;
    case 17:
      line += `To create a clone you can use ç.cloneNode(true)`;
      break;
    case 18:
      line += `The ç.append() method inserts a set of Node objects or DOMString objects after the last child of the Element~¡`;
      break;
    case 19:
      line += `The ç.prepend() method inserts a set of Node objects or DOMString objects before the first child of the Element~¡`;
      break;
    case 20:
      line += `The ChildNode.after() method inserts a set of Node or DOMString objects in the children list of this ChildNode's parent, just after this ChildNode~¡`;
      break;
    case 21:
      line += `The ChildNode.before() method inserts a set of Node or DOMString objects in the children list of this ChildNode's parent, just before this ChildNode~¡`;
      break;
    case 22:
      line += `To add a class you can ç.classList.add("classToAdd")~¡`;
      break;
    case 23:
      line += `To remove a class you can ç.classList.remove("classToRemove")~¡`;
      break;
    case 24:
      line += `To toggle a class you can ç.classList.toggle("classToRemove")~¡`;
      break;
    case 25:
      line += `To disable an element you can do ç.disabled = true~¡`;
      break;
    case 26:
      line += `To remove a disabled attribute you can use ç.disabled = false`;
      break;
    case 27:
      line += `To add a data-src attribute you can use ç.setAttribute('data-src',value)`;
      break;
    case 28:
      line += `To remove a data-src attribute you can use ç.removeAttribute('data-src')`;
      break;
    case 29:
      line += `To change href attribute you can use ç.setAttribute('href', link)~¡`;
      break;
    case 30:
      line += `To hide an element you can use ç.style.display = "none" ~¡`;
      break;
    case 31:
      line += `To show a hidden element you can use ç.style.display = "block" or the type of element that it has to be ~¡`;
      break;
    case 32:
      line += `This feature doesn't exist in Vanilla JavaScript~¡`;
      break;
    case 33:
      line += `This feature doesn't exist in Vanilla JavaScript~¡`;
      break;
    case 34:
      line += `The code would be:~`;
      line += `document.addEventListener("load", function() {
        setTimeout(delay, function () {
          ¿.animate(animation details);
        });});`;
      break;
    case 35:
      line += `To iterate thru a collection of elements you can use collection.forEach(handler)~`;
      line += `An alternative is to use a for (element of collection) {element.style.color = "blue"}~¡`;
      break;
    case 36:
      line += `To get the selected elements on a multiple select element it is a little more tedious~`;
      line += `To get the selected value if it isn't a multiple select you can use ç.value~¡`;
      break;
    case 37:
      line += `To know the value of an input you can do ç.value~¡`;
      break;
    case 38:
      line += `To remove multiple items in a selector you have to iterate thru the collection as in collection.forEach(element => {
    element.parentNode.remove();
});~¡`;
      break;
    default:
      break;
  }
  return line;
}
/* 
This function injects in DOM the demo for the jquery examples
depending of the list item
*/
function vanillaImplementation(tag) {
  let code, demo;
  const button = document.getElementById("test2");
  switch (tag) {
    case 0:
      code = `document.getElementById("child2").parentElement.style.fontWeight =
          "bold";`;
      demo = `<div class="mid-boxes" id="grandparent2">
      Grandparent
      <div class="mid-boxes" id="parent2">Parent
      <div class="mid-boxes" id="child2">Child</div>
      </div>
      </div>
      </div>`;
      button.addEventListener("click", function () {
        document.getElementById("child2").parentElement.style.fontWeight =
          "bold";
        button.disabled = true;
      });
      break;

    case 1:
      code = `Array
              .from(document.getElementById("parent2").children)
              .forEach((element) => (element.style.fontWeight = "bold")
        );`;
      demo = `<div class="mid-boxes" id="parent2">Parent
                    <div class="brother-boxes">Bro</div>
                    <div class="brother-boxes">Bro</div>
                    <div class="brother-boxes">Bro</div>
                  </div>`;
      button.addEventListener("click", function () {
        Array.from(document.getElementById("parent2").children).forEach(
          (element) => (element.style.fontWeight = "bold")
        );
        button.disabled = true;
      });
      break;
    case 2:
      code = `Array.from(document.getElementsByClassName("half-opacity")).forEach(
          (element) => (element.style.fontWeight = "bold")
        );`;
      demo = `<div class="mid-boxes" id="parent2">Parent
        <div class="brother-boxes half-opacity">Bro</div>
        <div class="brother-boxes half-opacity">Bro</div>
        <div class="brother-boxes half-opacity">Bro</div>
        </div>`;
      button.addEventListener("click", function () {
        Array.from(document.getElementsByClassName("half-opacity")).forEach(
          (element) => (element.style.fontWeight = "bold")
        );
        button.disabled = true;
      });
      break;
    case 3:
      code = `document.getElementById("child2").style.fontWeight = "bold";`;
      demo = `<div class="mid-boxes" id="grandparent2">
      Grandparent
      <div class="mid-boxes" id="parent2">Parent
      <div class="mid-boxes" id="child2">Child</div>
      </div>
      </div>
      </div>`;
      button.addEventListener("click", function () {
        document.getElementById("child2").style.fontWeight = "bold";
        button.disabled = true;
      });
      break;
    case 4:
      code = `document
          .querySelectorAll(".half-opacity[style*='display: none']")
          .forEach((element) => (element.style.color = "red"));
          // HINT: to see the changes open the browser developer tools`;
      demo = `<div class="mid-boxes" id="parent1">Parent
                    <div class="brother-boxes half-opacity" style="display: none;">Brother</div>
                    <div class="brother-boxes half-opacity" style="display: none;">Brother</div>
                    <div class="brother-boxes half-opacity" style="display: none;">Brother</div>
                  </div>`;
      button.addEventListener("click", function () {
        document
          .querySelectorAll(".half-opacity[style*='display: none']")
          .forEach((element) => (element.style.color = "red"));
        button.disabled = true;
      });
      break;
    case 6:
      code = `button.addEventListener("click", function () {
        document.getElementById("demo2").firstChild.style.backgroundColor =
          "red";
      });`;
      demo = `<p>Just click the 'Test it!' button to try</p>`;
      button.addEventListener("click", function () {
        document.getElementById("demo2").firstChild.style.backgroundColor =
          "red";
        button.disabled = true;
      });
      break;
    case 7:
      code = `button.addEventListener("dblclick", function () {
        document.getElementById("demo2").firstChild.style.backgroundColor =
          "red";
      });`;
      demo = `<p>Just double click the 'Test it!' button to try</p>`;
      button.addEventListener("dblclick", function () {
        document.getElementById("demo2").firstChild.style.backgroundColor =
          "red";
        button.disabled = true;
      });
      break;
    case 8:
      code =
        `document
          .getElementById("parent2")
          .addEventListener("mousemove", function (event) {
            this.textContent = 'The mouse position is X $` +
        "{event.pageX}, Y ${event.pageY}" +
        `;
          });`;
      demo = `<div class="mid-boxes" id="parent2">Parent</div>`;
      button.addEventListener("click", function () {
        document
          .getElementById("parent2")
          .addEventListener("mousemove", function (event) {
            this.textContent = `The mouse position is X ${event.pageX}, Y ${event.pageY}`;
          });
        button.disabled = true;
      });
      break;
    case 9:
      code =
        `document
          .getElementById("parent2")
          .addEventListener("mouseover", function (event) {
            this.textContent = 'The mouse entered from X $` +
        "{event.pageX}, Y ${event.pageY}" +
        `;
          });`;
      demo = `<div class="mid-boxes" id="parent2">Parent</div>`;
      button.addEventListener("click", function () {
        document
          .getElementById("parent2")
          .addEventListener("mouseover", function (event) {
            this.textContent = `The mouse entered from X ${event.pageX}, Y ${event.pageY}`;
          });
        button.disabled = true;
      });
      break;
    case 10:
      code = `document.addEventListener("keypress", function (event) {
          document.getElementById("#parent2").textContent =
            "The key pressed was: " + event.key;
        });`;
      demo = `<div class="mid-boxes" id="parent2">Parent</div>`;
      button.addEventListener("click", function () {
        $(document).on("keypress", function (event) {
          document.getElementById("parent2").textContent =
            "The key pressed was: " + event.key;
        });
        button.disabled = true;
      });
      break;
    case 11:
      code = `document
          .querySelector("#parent2 img")
          .addEventListener("load", function () {
            document.querySelector("#parent2 p").textContent =
              "Image has loaded";
          });`;
      demo = `<div class="mid-boxes" id="parent2"><p>Image not loaded</p><img></div>`;
      button.addEventListener("click", function () {
        document
          .querySelector("#parent2 img")
          .addEventListener("load", function () {
            document.querySelector("#parent2 p").textContent =
              "Image has loaded";
          });
        document.querySelector("#parent2 img").src = "./assets/img/logo.png";
        button.disabled = true;
      });
      break;
    case 12:
      code = `document
          .querySelector("#parent2 img")
          .addEventListener("error", function () {
            document.querySelector("#parent2 p").textContent =
              "Image has failed to load";
          });`;
      demo = `<div class="mid-boxes" id="parent2"><p>Image not loaded</p><img></div>`;
      button.addEventListener("click", function () {
        document
          .querySelector("#parent2 img")
          .addEventListener("error", function () {
            document.querySelector("#parent2 p").textContent =
              "Image has failed to load";
          });
        document.querySelector("#parent2 img").src = "./assets/img/logo";
        button.disabled = true;
      });

      break;
    case 13:
      code = `document
          .querySelector("#parent2 form")
          .addEventListener("submit", function (event) {
            let newElem = document.createElement("p");
            newElem.textContent = "Form submitted";
            document.getElementById("parent2").appendChild(newElem);
            event.preventDefault();
            document.getElementById("formButton2").disabled = true;
          });`;
      demo = ``;
      button.addEventListener("click", function () {
        document.getElementById(
          "demo2"
        ).innerHTML = `<div class="mid-boxes" id="parent2">Parent
                    <form>
                      <label for="fname">First name:</label>
                      <input type="text" id="fname" name="fname"><br><br>
                      <label for="lname">Last name:</label>
                      <input type="text" id="lname" name="lname"><br><br>
                      <input type="submit" id="formButton2" value="Submit">
                    </form>
                  </div>`;
        document
          .querySelector("#parent2 form")
          .addEventListener("submit", function (event) {
            let newElem = document.createElement("p");
            newElem.textContent = "Form submitted";
            document.getElementById("parent2").appendChild(newElem);
            event.preventDefault();
            document.getElementById("formButton2").disabled = true;
          });
        button.disabled = true;
      });
      break;
    case 14:
      code = `document
          .querySelector("#fname2")
          .addEventListener("change", function () {
            document.getElementById("parent2").lastChild.textContent =
              "First: " +
              document.getElementById("fname2").value +
              " Last: " +
              document.getElementById("lname2").value; // And the same for the other id
          });`;
      demo = ``;
      button.addEventListener("click", function () {
        document.getElementById(
          "demo2"
        ).innerHTML = `<div class="mid-boxes" id="parent2">Parent
                    <form>
                      <label for="fname">First name:</label>
                      <input type="text" id="fname2" name="fname"><br><br>
                      <label for="lname">Last name:</label>
                      <input type="text" id="lname2" name="lname"><br><br>
                    </form>
                  <p></p></div>`;
        document
          .querySelector("#fname2")
          .addEventListener("change", function () {
            document.getElementById("parent2").lastChild.textContent =
              "First: " +
              document.getElementById("fname2").value +
              " Last: " +
              document.getElementById("lname2").value;
          });
        document
          .querySelector("#lname2")
          .addEventListener("change", function () {
            document.getElementById("parent2").lastChild.textContent =
              "First: " +
              document.getElementById("fname2").value +
              " Last: " +
              document.getElementById("lname2").value;
          });
        button.disabled = true;
      });
      break;
    case 16:
      code = `document.getElementById("child2").remove();`;
      demo = `<div class="mid-boxes" id="parent2">Parent
      <div class="mid-boxes" id="child2">Child</div>
      </div>
      </div>`;
      button.addEventListener("click", function () {
        document.getElementById("child2").remove();
        button.disabled = true;
      });
      break;
    case 18:
      code = `let newElem = document.createElement("p");
        newElem.innerText = "Appended p element";
        document.getElementById("child2").append(newElem);`;
      demo = `<div class="mid-boxes" id="parent2">Parent
      <div class="mid-boxes" id="child2">Child</div>
      </div>
      </div>`;
      button.addEventListener("click", function () {
        let newElem = document.createElement("p");
        newElem.innerText = "Appended p element";
        document.getElementById("child2").append(newElem);
        button.disabled = true;
      });
      break;
    case 19:
      code = `let newElem = document.createElement("p");
        newElem.innerText = "Prepended p element";
        document.getElementById("child2").prepend(newElem);`;
      demo = `<div class="mid-boxes" id="parent2">Parent
      <div class="mid-boxes" id="child2">Child</div>
      </div>
      </div>`;
      button.addEventListener("click", function () {
        let newElem = document.createElement("p");
        newElem.innerText = "Prepended p element";
        document.getElementById("child2").prepend(newElem);
        button.disabled = true;
      });
      break;
    case 20:
      code = `let newElem = document.createElement("p");
        newElem.innerText = "Added after p element";
        document.querySelector("#child2 p").after(newElem);`;
      demo = `<div class="mid-boxes" id="parent2">Parent
      <div class="mid-boxes" id="child2">Child<p>Text</p></div>
      </div>
      </div>`;
      button.addEventListener("click", function () {
        let newElem = document.createElement("p");
        newElem.innerText = "Added after p element";
        document.querySelector("#child2 p").after(newElem);
        button.disabled = true;
      });
      break;
    case 21:
      code = `let newElem = document.createElement("p");
        newElem.innerText = "Added before p element";
        document.querySelector("#child2 p").before(newElem);`;
      demo = `<div class="mid-boxes" id="parent2">Parent
      <div class="mid-boxes" id="child2">Child<p>Text</p></div>
      </div>
      </div>`;
      button.addEventListener("click", function () {
        let newElem = document.createElement("p");
        newElem.innerText = "Added before p element";
        document.querySelector("#child2 p").before(newElem);
        button.disabled = true;
      });
      break;
    case 22:
      code = `document.getElementById("parent2").classList.add("mid-opacity");`;
      demo = `<div class="mid-boxes" id="parent2">Parent
      <div class="mid-boxes">Child<div class="mid-boxes"></div></div>
      </div>`;
      button.addEventListener("click", function () {
        document.getElementById("parent2").classList.add("mid-opacity");
        button.disabled = true;
      });
      break;
    case 23:
      code = `document.getElementById("parent2").classList.remove("mid-opacity");`;
      demo = `<div class="mid-boxes mid-opacity" id="parent2">Parent
      <div class="mid-boxes">Child<div class="mid-boxes"></div></div>
      </div>`;
      button.addEventListener("click", function () {
        document.getElementById("parent2").classList.remove("mid-opacity");
        button.disabled = true;
      });
      break;
    case 24:
      code = `document
                  .getElementById("parent2")
                  .classList.toggle("mid-opacity");`;
      demo = `<div class="mid-boxes mid-opacity" id="parent2">Parent
      <div class="mid-boxes">Child<div class="mid-boxes"></div></div>
      </div>`;
      button.addEventListener("click", function () {
        document.getElementById("parent2").classList.toggle("mid-opacity");
      });
      break;
    case 25:
      code = `document.getElementById("button2").disabled = true;`;
      demo = `Just click the button to see it disabled!`;
      button.addEventListener("click", function () {
        button.disabled = true;
      });
      break;
    case 29:
      code = ``;
      demo = `<a href="https://www.google.com/" id="link2">Google</a>`;
      button.addEventListener("click", function () {
        document
          .getElementById("link2")
          .setAttribute("href", "https://duckduckgo.com/");
        document.getElementById("link2").textContent = "Not Google";
        button.disabled = true;
      });
      break;
    case 30:
      code = `document.getElementById("parent2").style.display = "none";`;
      demo = `<div class="mid-boxes" id="parent2" style="background-color:red;">Box</div>`;
      button.addEventListener("click", function () {
        document.getElementById("parent2").style.display = "none";
        button.disabled = true;
      });
      break;
    case 31:
      code = `document.getElementById("parent2").style.display = "block";`;
      demo = `<div class="mid-boxes" id="parent2" style="background-color:red;display:none;">Box</div>`;
      button.addEventListener("click", function () {
        document.getElementById("parent2").style.display = "block";
        button.disabled = true;
      });
      break;
    case 32:
      code = `This feature doesn't exist in Vanilla JavaScript`;
      demo = `This feature doesn't exist in Vanilla JavaScript`;
      button.disabled = true;
      break;
    case 33:
      code = `This feature doesn't exist in Vanilla JavaScript`;
      demo = `This feature doesn't exist in Vanilla JavaScript`;
      button.disabled = true;
      break;
    /* case 34:
      code = ``;
      demo = ``;
      button.addEventListener("click", function () {
        button.disabled = true;
      });
      break; */
    case 35:
      code = `document.querySelectorAll("#parent2 .brother-boxes").forEach((element) => {
          element.style.backgroundColor = "red";
        });`;
      demo = `<div class="mid-boxes" id="parent2">Parent
                    <div class="brother-boxes">Bro</div>
                    <div class="brother-boxes">Bro</div>
                    <div class="brother-boxes">Bro</div>
                  </div>`;
      button.addEventListener("click", function () {
        document
          .querySelectorAll("#parent2 .brother-boxes")
          .forEach((element) => {
            element.style.backgroundColor = "red";
          });
        button.disabled = true;
      });
      break;
    case 36:
      code = ` document.getElementById("carSelected2").textContent =
          "The selected option is: " + document.getElementById("cars2").value;`;
      demo = `<label for="cars">Choose a car:</label>

<select name="cars" id="cars2">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
<p id="carSelected2"></p>`;
      button.addEventListener("click", function () {
        document.getElementById("carSelected2").textContent =
          "The selected option is: " + document.getElementById("cars2").value;
      });
      break;
    case 37:
      code = `document.getElementById("inputContent2").textContent =
          "The input contains: " + document.getElementById("fname2").value;
      });`;
      demo = `<label for="fname">First name:</label>
  <input type="text" id="fname2" name="fname"><br><p id="inputContent2"></p>`;
      button.addEventListener("click", function () {
        document.getElementById("inputContent2").textContent =
          "The input contains: " + document.getElementById("fname2").value;
      });
      break;
    case 38:
      code = ` document.querySelectorAll("#parent2 .brother-boxes").forEach(element => {element.remove();});`;
      demo = `<div class="mid-boxes" id="parent2">Parent
                    <div class="brother-boxes">Bro</div>
                    <div class="brother-boxes">Bro</div>
                    <div class="brother-boxes">Bro</div>
                  </div>`;
      button.addEventListener("click", function () {
        document
          .querySelectorAll("#parent2 .brother-boxes")
          .forEach((element) => {
            element.remove();
          });
        button.disabled = true;
      });
      break;

    default:
      break;
  }
  document.getElementById("code2").innerHTML = code;
  document.getElementById("demo2").innerHTML = demo;
}
