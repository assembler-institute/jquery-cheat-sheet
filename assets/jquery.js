function appendWithBtn() {
  let btn = $("#btn1").click(function () {
    let section1 = $("#section1").append(
      "<p id='textParagraph0'>bien clicado bro</p>"
    );
    console.log(section1);
  });
}

//appendWithBtn();

// Functionality Section 1

var functionToggleWithBtnToString = `function toggleWithBtn() {
    $("#btn1").click(function () {
      let textParagraph1 = $("#textParagraph1");
      if (textParagraph1.length) {
        textParagraph1.toggle();
        textParagraph1.addClass("code");
        textParagraph1.text(functionToggleWithBtnToString);
      } else {
        $("#section1").append("<p id='textParagraph1'>Sigue clickando bro</p>");
      }
    });
  }`;
function toggleWithBtn() {
  $("#btn1").click(function () {
    let textParagraph1 = $("#textParagraph1");
    if (textParagraph1.length) {
      textParagraph1.toggle();
      textParagraph1.addClass("code");
      textParagraph1.text(functionToggleWithBtnToString);
    } else {
      $("#section1").append("<p id='textParagraph1'>Sigue clickando bro</p>");
    }
  });
}

toggleWithBtn();

// Functionality Section 2

$("#btn2").dblclick(function () {
  alert("double");
});
