import { cases } from "../cases.js";

function jq15() {
  let clue = cases[15].hint;
  $("#view").addClass("view--0");
  $("#view").append($("<div></div>").addClass("div--icons"));
  $(".div--icons").append($("<div></div>").text("🧛🏼‍♀️").addClass("vampire"));
  $(".div--icons").append($("<div></div>").text("🧛🏼‍♀️").addClass("vampire"));
  $(".div--icons").append($("<div></div>").text("🧛🏻‍♂️").addClass("vampire"));

  $("#view").append(
    $("<button></button>")
      .text("✝️ Abbandone this world! ✝️")
      .addClass("button--good")
  );
  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $(".button--good").on("click", () => {
    $(".div--icons").append($("<div></div>").text("🧄"));
    $(".vampire").remove();
  });
}

export { jq15 };
