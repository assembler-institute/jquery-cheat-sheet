import { pageMainTemplate } from "../templates.js";
import { getFooter } from "./footer.js";
import { getHeader } from "./header.js";
import {
	insertTemplate,
	updateLocalStorage,
	getExampleIdKey,
	getExample,
} from "../functions.js";
import { wrapper } from "../main.js";
import { dropOnArea } from "./sidebar.js";
import { goToHome } from "../router.js";

function pageDisplay() {
	getHeader();

	document
		.getElementById("page-header-logo")
		.addEventListener("click", goToHome);

	insertTemplate(wrapper, pageMainTemplate, "page-main-temp");
	getFooter();
	if (document.querySelectorAll("div[draggable=true]")) {
		eventsGrabbing();
		dropOnArea();
	}
}

function eventsGrabbing() {
	let areDraggables = document.querySelectorAll("div[draggable=true]");
	areDraggables.forEach((element) => {
		element.addEventListener("dragstart", startDragging);
		element.addEventListener("dragend", stopDragging);
	});
}

function startDragging(e) {
	e.dataTransfer.setData("text", e.currentTarget.id);
	updateLocalStorage("codeOption", e.target.id);
	e.target.classList.add("is-dragging");

	//Actualizar con el texto que trae el objeto con el id de la card
	let id = getExampleIdKey()[1];
	let key = getExampleIdKey()[0];

	if (localStorage.getItem("codeOption") === "jquery-code") {
		updateLocalStorage("code", getExample(key, id).jquery_code);
	} else if (localStorage.getItem("codeOption") === "js-code") {
		updateLocalStorage("code", getExample(key, id).js_code);
	}
}

function stopDragging(e) {
	e.target.classList.remove("is-dragging");
}

//*TODO audio when dragged on drop on

export { pageDisplay };
