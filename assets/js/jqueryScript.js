/* 
This function returns the text to display on the console mock for each
list element
*/
function jqueryListItems(tag) {
  let line = "----------jQuery-------------------~";
  switch (tag) {
    case 0:
      line += "To get the first parent of a ¿ use ¿.parent()~";
      line += "To get the all the parents of a ¿ use ¿.parents()";
      break;
    case 1:
      line += "To get all the children of a ¿ use ¿.children()~";
      line += "This method only travels a single level down the DOM tree";
      break;
    case 2:
      line += `The class selector is $(".class")~`;
      line +=
        "It returns a collection or a single ¿ depending on what it finds";
      break;
    case 3:
      line += `The id selector is $("#id")~`;
      line += `It returns a ¿ with matching id`;
      break;
    case 4:
      line += `To get ¿ with a certain class and attribute the selector is $(".class[attribute='value']")~`;
      line += `If you don't want to filter per value you can use $(".class[attribute]")~`;
      line += `It's also possible tu use the negation on values like $(".class[attribute!='value']")`;
      break;
    case 5:
      line += `To execute a function when the HTML has loaded you can use $(document).ready(handler) or $(window).on("load", handler ) but they are deprecated.~`;
      line += `The correct way is $( handler ) ...it's a strange notation`;
      break;
    case 6:
      line += `To add an event when an element was clicked you can use ¿.on("click", handler)`;
      break;
    case 7:
      line += `To add an event when an element was double clicked you can use ¿.on("dblclick", handler)`;
      break;
    case 8:
      line += `To add an event when the mouse is moved in an element you can use ¿.on("mousemove", handler)~`;
      line += `Be cautious because it may impact in performance`;
      break;
    case 9:
      line += `To add an event when the mouse is moved from outside to inside an element you can use ¿.on("mouseover", handler)`;
      break;
    case 10:
      line += `To add an event when a key is pressed you can use $(document).on('keypress', handler)`;
      break;
    case 11:
      line += `To know when an image loaded we use the same method as in document loading.~`;
      line += `It would be $( "img" ).on("load", handler )`;
      break;
    case 12:
      line += `To know when an image failed to load we can use ¿.on("error", handler) or the .error() shorthand`;
      break;
    case 13:
      line += `To know if a form has been submitted you can use ¿.on("submit",handler) or the .submit() shorthand`;
      break;
    case 14:
      line += `To know if the user changes a value of an input we can use ¿.on("change",handler) or the .change() shorthand~`;
      line += `This event is limited to <input> elements, <textarea> boxes and <select> elements`;
      break;
    case 15:
      line += `To create an HTML element you have to use $("<element tag>") as in $("<p>")`;
      line += `To add some text you can use $("<p>").text("some text")`;
      break;
    case 16:
      line += `To remove an element from the DOM you can use ¿.remove() as in vanilla JS`;
      break;
    case 17:
      line += `To create a deep copy of the set of matched elements you can use ¿.clone()~`;
      line += `It copies the matched elements as well as all of their descendant elements and text nodes`;
      break;
    case 18:
      line += `The ¿.append(content) method inserts the specified content as the last child of each element in the jQuery collection`;
      break;
    case 19:
      line += `The ¿.prepend() method inserts the specified content as the first child of each element in the jQuery collection`;
      break;
    case 20:
      line += `With .after(), we can add an element after another one like $(target).after(contentToBeInserted)~`;
      line += `There is another method called .insertAfter() and the use is different $(contentToBeInserted).insertAfter(target)`;
      break;
    case 21:
      line += `With .before(), we can add an element before another one like $(target).before(contentToBeInserted)~`;
      line += `There is another method called .insertBefore() and the use is different $(contentToBeInserted).insertBefore(target)`;
      break;
    case 22:
      line += `To add a class you can use ¿.addClass("classToAdd")~`;
      line += `You can also add multiple classes separated by spaces as in ¿.addClass("class1 class2")`;
      break;
    case 23:
      line += `To remove a class you can use ¿.removeClass("classToRemove")`;
      break;
    case 24:
      line += `This method takes one or more classes as its parameter. In the first version, if an element in the matched set of elements already has the class, then it is removed; if an element does not have the class, then it is added~`;
      line += `To use it you can use ¿.toggleClass("class")`;
      break;
    case 25:
      line += `To disable an element with the disable attribute you can do ¿.prop("disabled", true)`;
      break;
    case 26:
      line += `To remove a disabled attribute you can use ¿.prop("disabled", false)`;
      break;
    case 27:
      line += `The data-src attribute has nothing to do with the data attribute, they just share part of their name~`;
      line += `To add a data-src attribute you can use ¿.data("src", value)`;
      break;
    case 28:
      line += `To remove a data-src attribute you can use ¿.removeData("src)`;
      break;
    case 29:
      line += `To change href attribute you can use ¿.attr("href", link)`;
      break;
    case 30:
      line += `To hide an element you can use ¿.hide()~`;
      line += `The matched elements will be hidden immediately, with no animation. `;
      break;
    case 31:
      line += `To show a hidden element you can use ¿.show()~`;
      line += `The matched elements will be shown immediately, with no animation. `;
      break;
    case 32:
      line += `To make an element fade in you can simply use ¿.fadeIn()`;
      break;
    case 33:
      line += `To make an element fade out you can simply use ¿.fadeOut()`;
      break;
    case 34:
      line += `To make a delayed animate after page load we need the page load event first~`;
      line += `The code would be:~`;
      line += `$(window).on("load",function () {
        setTimeout(delay, function () {
          ¿.animate(animation details);
        });
      });`;
      break;
    case 35:
      line += `To iterate thru a collection of elements you can use jQueryCollection.each(handler)~`;
      line += `But if you want to affect a single property like the style you can use jQueryCollection.css("color", "blue") or the property you want to affect`;
      break;
    case 36:
      line += `To get the selected elements of a select html element you can use ¿.val() ~`;
      line += `If there are multiple elements selected it will return an array of the options`;
      break;
    case 37:
      line += `To know the value of an input it is as easy as ¿.val()`;
      break;
    case 38:
      line += `To remove multiple items in a selector it is the same as to remove a single one~`;
      line += `Just use collection.remove() and it removes all items in the collection`;
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
function jqueryImplementation(tag) {
  let code, demo;
  const button = $("#test1");
  switch (tag) {
    case 0:
      code = `$("#child1").parent().css("font-weight", "bold");`;
      demo = `<div class="mid-boxes" id="grandparent1">
      Grandparent
      <div class="mid-boxes" id="parent1">Parent
      <div class="mid-boxes" id="child1">Child</div>
      </div>
      </div>
      </div>`;
      button.on("click", function () {
        $("#child1").parent().css("font-weight", "bold");
        button.prop("disabled", true);
      });
      break;

    case 1:
      code = `$("#parent").children().css("font-weight", "bold");`;
      demo = `<div class="mid-boxes" id="parent1">Parent
                    <div class="brother-boxes">Bro</div>
                    <div class="brother-boxes">Bro</div>
                    <div class="brother-boxes">Bro</div>
                  </div>`;
      button.on("click", function () {
        $("#parent1").children().css("font-weight", "bold");
        button.prop("disabled", true);
      });
      break;
    case 2:
      code = `$(".mid-opacity").css("font-weight", "bold");`;
      demo = `<div class="mid-boxes" id="parent1">Parent
                    <div class="brother-boxes mid-opacity">Bro</div>
                    <div class="brother-boxes mid-opacity">Bro</div>
                    <div class="brother-boxes mid-opacity">Bro</div>
                    </div>`;
      button.on("click", function () {
        $(".mid-opacity").css("font-weight", "bold");
        button.prop("disabled", true);
      });
      break;
    case 3:
      code = `$("#child1").css("font-weight", "bold");`;
      demo = `<div class="mid-boxes" id="grandparent1">
      Grandparent
      <div class="mid-boxes" id="parent1">Parent
      <div class="mid-boxes" id="child1">Child</div>
      </div>
      </div>
      </div>`;
      button.on("click", function () {
        $("#child1").css("font-weight", "bold");
        button.prop("disabled", true);
      });
      break;
    case 4:
      code = `$(".mid-opacity[style*='display: none']").css("color", "red");
      
      // We use the *= to specify that it contains this attribute, but it may have more`;
      demo = `<div class="mid-boxes" id="parent1">Parent
                    <div class="brother-boxes mid-opacity" style="display: none;">Brother</div>
                    <div class="brother-boxes mid-opacity" style="display: none;">Brother</div>
                    <div class="brother-boxes mid-opacity" style="display: none;">Brother</div>
                  </div>`;
      button.on("click", function () {
        $(".mid-opacity[style*='display: none']").css("color", "red");
        button.prop("disabled", true);
      });
      break;
    case 6:
      code = `button.on("click", function () {
        $("#demo1").children().css("background-color", "blue");
      });`;
      demo = `<p>Just click the 'Test it!' button to try</p>`;
      button.on("click", function () {
        $("#demo1").children().css("background-color", "blue");
        button.prop("disabled", true);
      });
      break;
    case 7:
      code = `button.on("dblclick", function () {
        $("#demo1").children().css("background-color", "blue");
      });`;
      demo = `<p>Just double click the 'Test it!' button to try</p>`;
      button.on("dblclick", function () {
        $("#demo1").children().css("background-color", "blue");
        button.prop("disabled", true);
      });
      break;
    case 8:
      code =
        `$("#parent1").on("mousemove", function (event) {
          $(this).text(
            'The mouse position is X ` +
        "${event.pageX}, Y ${event.pageY}" +
        `'
          );
        });`;
      demo = `<div class="mid-boxes" id="parent1">Parent</div>`;
      button.on("click", function () {
        $("#parent1").on("mousemove", function (event) {
          $(this).text(
            `The mouse position is X ${event.pageX}, Y ${event.pageY}`
          );
        });
        button.prop("disabled", true);
      });

      break;
    case 9:
      code =
        `$("#parent1").on("mouseover", function (event) {
          $(this).text(
            'The mouse entered from X ` +
        "${event.pageX}, Y ${event.pageY}" +
        `'
          );
        });`;
      demo = `<div class="mid-boxes" id="parent1">Parent</div>`;
      button.on("click", function () {
        $("#parent1").on("mouseover", function (event) {
          $(this).text(
            `The mouse entered from X ${event.pageX}, Y ${event.pageY}`
          );
        });
        button.prop("disabled", true);
      });
      break;
    case 10:
      code = `$(document).on("keypress", function (event) {
          $("#parent1").text("The key pressed was: " + event.key);
        });`;
      demo = `<div class="mid-boxes" id="parent1">Press a key to see a change</div>`;
      button.on("click", function () {
        $(document).on("keypress", function (event) {
          $("#parent1").text("The key pressed was: " + event.key);
        });
        button.prop("disabled", true);
      });

      break;
    case 11:
      code = `$("#parent1 img").on("load", function () {
          $("#parent1 p").text("Image has loaded");
        });`;
      demo = `<div class="mid-boxes" id="parent1"><p>Image not loaded</p><img></div>`;

      button.on("click", function () {
        $("#parent1 img").on("load", function () {
          $("#parent1 p").text("Image has loaded");
        });
        $("#parent1 img").prop("src", "./assets/img/logo.png");
        button.prop("disabled", true);
      });
      break;
    case 12:
      code = `$("#parent1 img").on("error", function () {
          $("#parent1 p").text("Image has failed to load");
        });`;
      demo = `<div class="mid-boxes" id="parent1"><p>Image not loaded</p><img></div>`;
      button.on("click", function () {
        $("#parent1 img").on("error", function () {
          $("#parent1 p").text("Image has failed to load");
        });
        $("#parent1 img").prop("src", "./assets/img/logo");
        button.prop("disabled", true);
      });

      break;
    case 13:
      code = `$("#parent1 form").on("submit", function (event) {
          $("#parent1").append($("<p>").text("Form submitted"));
          event.preventDefault();
          $("#formButton1").prop("disabled", true);
        });`;
      demo = ``;
      button.on("click", function () {
        $("#demo1").html(`<div class="mid-boxes" id="parent1">Parent
                    <form>
                      <label for="fname">First name:</label>
                      <input type="text" id="fname" name="fname"><br><br>
                      <label for="lname">Last name:</label>
                      <input type="text" id="lname" name="lname"><br><br>
                      <input type="submit" id="formButton1" value="Submit">
                    </form>
                  </div>`);
        $("#parent1 form").on("submit", function (event) {
          $("#parent1").append($("<p>").text("Form submitted"));
          event.preventDefault();
          $("#formButton1").prop("disabled", true);
        });
        button.prop("disabled", true);
      });
      break;
    case 14:
      code = `$("#fname1, #lname1").on("change", function () {
          $("#parent1 p").text(
            "First: " + $("#fname1").val() + " Last: " + $("#lname1").val()
          );
        });`;
      demo = ``;
      button.on("click", function () {
        $("#demo1").html(`<div class="mid-boxes" id="parent1">Parent
                    <form>
                      <label for="fname">First name:</label>
                      <input type="text" id="fname1" name="fname"><br><br>
                      <label for="lname">Last name:</label>
                      <input type="text" id="lname1" name="lname"><br><br>
                    </form>
                  <p></p></div>`);
        $("#fname1, #lname1").on("change", function () {
          $("#parent1 p").text(
            "First: " + $("#fname1").val() + " Last: " + $("#lname1").val()
          );
        });
        button.prop("disabled", true);
      });
      break;
    case 16:
      code = `$("#child1").remove();`;
      demo = `<div class="mid-boxes" id="parent1">Parent
      <div class="mid-boxes" id="child1">Child</div>
      </div>
      </div>`;
      button.on("click", function () {
        $("#child1").remove();
        button.prop("disabled", true);
      });
      break;
    case 18:
      code = `$("#child1").append($("<p>").text("Appended p element"));`;
      demo = `<div class="mid-boxes" id="parent1">Parent
      <div class="mid-boxes" id="child1">Child</div>
      </div>
      </div>`;
      button.on("click", function () {
        $("#child1").append($("<p>").text("Appended p element"));
        button.prop("disabled", true);
      });
      break;
    case 19:
      code = `$("#child1").prepend($("<p>").text("Prepended p element"));`;
      demo = `<div class="mid-boxes" id="parent1">Parent
      <div class="mid-boxes" id="child1">Child</div>
      </div>
      </div>`;
      button.on("click", function () {
        $("#child1").prepend($("<p>").text("Prepended p element"));
        button.prop("disabled", true);
      });
      break;
    case 20:
      code = `$("#child1 p").after($("<p>").text("Added after p element"));`;
      demo = `<div class="mid-boxes" id="parent1">Parent
      <div class="mid-boxes" id="child1">Child<p>Text</p></div>
      </div>
      </div>`;
      button.on("click", function () {
        $("#child1 p").after($("<p>").text("Added after p element"));
        button.prop("disabled", true);
      });
      break;
    case 21:
      code = `$("#child1 p").before($("<p>").text("Added before p element"));`;
      demo = `<div class="mid-boxes" id="parent1">Parent
      <div class="mid-boxes" id="child1">Child<p>Text</p></div>
      </div>
      </div>`;
      button.on("click", function () {
        $("#child1 p").before($("<p>").text("Added before p element"));
        button.prop("disabled", true);
      });
      break;
    case 22:
      code = `$(".mid-boxes").addClass("mid-opacity");`;
      demo = `<div class="mid-boxes" id="parent1">Parent
      <div class="mid-boxes">Child<div class="mid-boxes"></div></div>
      </div>`;
      button.on("click", function () {
        $("#parent1 .mid-boxes").addClass("mid-opacity");
        button.prop("disabled", true);
      });
      break;
    case 23:
      code = `$("#parent1 .mid-boxes").removeClass("mid-opacity");`;
      demo = `<div class="mid-boxes" id="parent1">Parent
      <div class="mid-boxes mid-opacity">Child<div class="mid-boxes mid-opacity"></div></div>
      </div>`;
      button.on("click", function () {
        $("#parent1 .mid-boxes").removeClass("mid-opacity");
        button.prop("disabled", true);
      });
      break;
    case 24:
      code = `$("#parent1 .mid-boxes").toggleClass("mid-opacity");`;
      demo = `<div class="mid-boxes" id="parent1">Parent
      <div class="mid-boxes mid-opacity">Child<div class="mid-boxes mid-opacity"></div></div>
      </div>`;
      button.on("click", function () {
        $("#parent1 .mid-boxes").toggleClass("mid-opacity");
      });
      break;
    case 25:
      code = `$("#button1").prop("disabled", true);`;
      demo = `Just click the button to see it disabled!`;
      button.on("click", function () {
        button.prop("disabled", true);
      });
      break;
    case 29:
      code = `$("#link1").attr("href", "https://duckduckgo.com/").text("Not Google");`;
      demo = `<a href="https://www.google.com/ id="link1">Google</a>`;
      button.on("click", function () {
        $("#link1").attr("href", "https://duckduckgo.com/").text("Not Google");
        button.prop("disabled", true);
      });
      break;
    case 30:
      code = `$("#parent1").hide();`;
      demo = `<div class="mid-boxes" id="parent1" style="background-color:red;">Box</div>`;
      button.on("click", function () {
        $("#parent1").hide();
        button.prop("disabled", true);
      });
      break;
    case 31:
      code = `$("#parent1").show();`;
      demo = `<div class="mid-boxes" id="parent1" style="background-color:red;display:none;">Box</div>`;
      button.on("click", function () {
        $("#parent1").show();
        button.prop("disabled", true);
      });
      break;
    case 32:
      code = `$("#parent1").fadeIn(3000);`;
      demo = `<div class="mid-boxes" id="parent1" style="display:none;background-color:red;transition:none;">Box</div>`;
      button.on("click", function () {
        $("#parent1").fadeIn(3000);
        button.prop("disabled", true);
      });
      break;
    case 33:
      code = `$("#parent1").fadeOut(3000);`;
      demo = `<div class="mid-boxes" id="parent1" style="background-color:red;transition:none;">Box</div>`;
      button.on("click", function () {
        $("#parent1").fadeOut(3000);
        button.prop("disabled", true);
      });
      break;
    /*     case 34:
      code = ``;
      demo = ``;
      button.on("click", function () {
        button.prop("disabled", true);
      });
      break; */
    case 35:
      code = `$("#parent1 .brother-boxes").css("background-color", "red");`;
      demo = `<div class="mid-boxes" id="parent1">Parent
                    <div class="brother-boxes">Bro</div>
                    <div class="brother-boxes">Bro</div>
                    <div class="brother-boxes">Bro</div>
                  </div>`;
      button.on("click", function () {
        $("#parent1 .brother-boxes").css("background-color", "red");
        button.prop("disabled", true);
      });
      break;
    case 36:
      code = `$("#carSelected1").text("The selected option is: " + $("#cars1").val());`;
      demo = `<label for="cars">Choose a car:</label>
              <select name="cars" id="cars1">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
              <p id="carSelected1"></p>`;
      button.on("click", function () {
        $("#carSelected1").text("The selected option is: " + $("#cars1").val());
      });
      break;
    case 37:
      code = `$("#inputContent1").text("The input contains: " + $("#fname1").val());`;
      demo = `<label for="fname">First name:</label>
  <input type="text" id="fname1" name="fname"><br><p id="inputContent1"></p>`;
      button.on("click", function () {
        $("#inputContent1").text("The input contains: " + $("#fname1").val());
      });
      break;
    case 38:
      code = `$("#parent1 .brother-boxes").remove();`;
      demo = `<div class="mid-boxes" id="parent1">Parent
                    <div class="brother-boxes">Bro</div>
                    <div class="brother-boxes">Bro</div>
                    <div class="brother-boxes">Bro</div>
                  </div>`;
      button.on("click", function () {
        $("#parent1 .brother-boxes").remove();
        button.prop("disabled", true);
      });
      break;
    default:
      break;
  }
  $("#code1").html(code);
  $("#demo1").html(demo);
}
