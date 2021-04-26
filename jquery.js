const scriptFinish = document.createElement('script');
scriptFinish.src = './vanilla.js';
document.head.append(scriptFinish);

let events2 = ['When the HTML document has been loaded and you can manipulate it with JavaScript', 'When an HTML item has been clicked', 'When an HTML item has been double clicked', 'When the user presses a key on the keyboard',
    'When the user moves the mouse cursor', 'When the user changes a value of an text input', 'When an image is loaded', 'When an image fails to load', 'When a form is submitted', 'When the user changes the option of a select element', 'When you position the mouse over an element',
    'When a checkbox is checked or unchecked', 'When a ul list item is clicked, show the item that was clicked', 'Create an HTML element with any text value', 'Remove an HTML element with any text value', 'Append an HTML element with any text value to a parent element', 'Prepend an HTML element with any text value to a parent element',
    'Create and add an HTML element with any text value after another element', 'Create and add an HTML element with any text value before another element', 'Clone an HTML element within other element',
    'Add a class to an HTML item', 'Remove a class to an HTML item', 'Toggle a class of an HTML item', 'Add a disabled attribute to an HTML button', 'Remove the disabled attribute of an HTML button',
    'Set a data-src attribute to a img element', 'Remove the data-src attribute of the img element', 'Hide an HTML element on click (display: none)', 'Show an HTML element on click (display: block)',
    'Fade in an HTML element using jQuery', 'Fade out an HTML element using jQuery', 'Iterate a collection of elements and apply a change of style on them', 'Get the parent element of a certain element and change its font weight', 'Get the collection of children of a certain element and change its font weight', 'Get all the elements that have a certain class and change their font weight',
    'Get an item by id and change its font weight', 'Get all the elements that have a certain class and the display property of none and change their font color', 'Get the options of a select element that are selected (attribute selected)',
    'Change the href attribute of the first link element', 'Show an alert with the value of the first input of the page',
    'Remove all items from a specific selector', 'Animate an item after 2 seconds from the initial page load',];

//Animación Search
$('body').animate({ opacity: 1 }, 2000);
loadData();

//Carga de elementos de las listas
function loadData() {
    let list1, list2, list3;
    let items = [], items1 = [], items2 = [];

    list1 = $('<ul>');
    list1.attr('id', 'eventList');
    $('#eventFunctions').append(list1);

    list2 = $('<ul>');
    list2.attr('id', 'dataList');
    $('#listFunctions').append(list2);

    list3 = $('<ul>');
    list3.attr('id', 'selectorList');
    $('#selectFunctions').append(list3);

    for (let i = 0; i < events2.length; i++) {
        if (i <= 12) {
            localStorage.setItem("e" + i, events2[i]);
            items.push($('<li id="event' + i + '">' + events2[i] + '</li>'));
            $('#eventList').append(items);
        } else if (i <= 31 && i > 12) {
            localStorage.setItem("f" + i, events2[i]);
            items1.push($('<li id="data' + i + '">' + events2[i] + '</li>'));
            $('#dataList').append(items1);
        } else if (i <= 41 && i >= 32) {
            localStorage.setItem("s" + i, events2[i]);
            items2.push($('<li id="select' + i + '">' + events2[i] + '</li>'));
            $('#selectorList').append(items2);
        }
    }

    setData('#eventList');
    setData('#dataList');
    setData('#selectorList');
}

//Set data attribute to be the content for the search
function setData(ulID) {
    $(ulID + ' li').each(function () {
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });
}

//Funcionalidad Search
$('input').on('keyup', function () {
    var searchTerm = $(this).val().toLowerCase();
    $('#eventList li').each(function () {
        if (searchTerm && searchTerm != '\u0020') {
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        } else {
            $(this).show();
        }
    });

    $('#dataList li').each(function () {
        if (searchTerm && searchTerm != '\u0020') {
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        } else {
            $(this).show();
        }
    });

    $('#selectorList li').each(function () {
        if (searchTerm && searchTerm != '\u0020') {
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        } else {
            $(this).show();
        }
    });
});

//Creation and appending of the modal template
function showModal() {
    let newModal = document.querySelector("template.templateModal");
    const importNewEvent = document.importNode(newModal.content, true);
    $("body").append(importNewEvent);

    var coll = document.getElementsByClassName("collapsible");

    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }

    $('#closeButton').click(function () {
        closeModal();
    });
}

//Function for close de modal
function closeModal() {
    document.querySelector("body").removeChild(document.getElementById("modal"))
    document.querySelector("body").removeChild(document.getElementById("backBlocked"));
}

//Switch case for each function in selectors list
$('#selectorList li').each(function () {
    $(this).click(function () {
        showModal();
    });

    var selectElement = '<select id="selectOptions"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="mercedes">Mercedes</option><option value="audi">Audi</option></select>';
    var divElement = '<div id="resultFunction"></div>';
    var linkElement = '<p>GitHub link: </p><a href="https://github.com/">https://github.com/</a><p>React link: </p><a href="https://reactjs.org/">https://reactjs.org/</a>';
    var inputElement = '<p>User name</p><input placeholder="User"><p>Password</p></input><input placeholder="Password"></input>'

    var codeJq;
    var codeJs;

    var itemId = $(this).attr('id');
    $(this).click(function () {
        console.log(itemId);
        switch (itemId) {
            case 'select32':
                $('#runID').css({ 'font-weight': 'normal' });
                dynamicCode('s32', codeJs, codeJq, jqChangeCollectionWeight, jsChangeCollectionWeight);
                break;
            case 'select33':
                $('#runID').css({ 'font-weight': 'normal' });
                dynamicCode('s33', codeJs, codeJq, jqChangeCollectionWeight, jsChangeCollectionWeight);
                break;
            case 'select34':
                $('#runID').css({ 'font-weight': 'normal' });
                dynamicCode('s34', codeJs, codeJq, jqChangeClassWeight, jsChangeClassWeight);
                break;
            case 'select35':
                $('#runID').css({ 'font-weight': 'normal' });
                dynamicCode('s35', codeJs, codeJq, jqChangeIdWeight, jsChangeIdWeight);
                break;
            case 'select36':
                $('.changeWeight').css({ 'display': 'none' });

                dynamicCode('s36', codeJs, codeJq, jqClassAndDisplay, jsClassAndDisplay);
                break;
            case 'select37':
                $('#runID').empty();
                $('#runID').append(selectElement);
                $('#runID').append(divElement);

                dynamicCode('s37', codeJs, codeJq, jqGetFromSelect, jsGetFromSelect);
                break;
            case 'select38':
                $('#runID').empty();
                $('#runID').append(linkElement);

                dynamicCode('s38', codeJs, codeJq, jqChangeLink, jsChangeLink);
                break;
            case 'select39':
                $('#runID').empty();
                $('#runID').append(inputElement);

                dynamicCode('s39', codeJs, codeJq, jqAlertInput, jsAlertInput);
                break;
            case 'select40':
                $('#runID').empty();
                $('#runID').append(selectElement);

                dynamicCode('s40', codeJs, codeJq, jqRemoveOption, jsRemoveOption);
                break;
            case 'select41':
                //codeJs = 
                dynamicCode('s41', codeJs, codeJq, jqAnimateLoad, jsAnimateLoad);
                break;
        }
    });
});

//Switch case for each function in functions list
$('#listFunctions li').each(function () {
    $(this).click(function () {
        showModal();
    });

    $('#runID').css({ 'font-weight': 'bold' });
    var codeJs;
    var codeJq;

    var itemId = $(this).attr('id');
    $(this).click(function () {
        switch (itemId) {
            case 'data13':
                dynamicCode('f13', codeJs, codeJq, jqAppendElement, jsAppendElement);
                break;
            case 'data14':
                dynamicCode('f14', codeJs, codeJq, jqRemoveElement, jsRemoveElement);
                break;
            case 'data15':
                dynamicCode('f15', codeJs, codeJq, jqAppendParentElement, jsAppendParentElement);
                break;
            case 'data16':
                dynamicCode('f16', codeJs, codeJq, jqPrependParentElement, jsPrependParentElement);
                break;
            case 'data17':
                dynamicCode('f17', codeJs, codeJq, jqApppendAfterElement, jsApppendAfterElement);
                break;
            case 'data18':
                dynamicCode('f18', codeJs, codeJq, jqApppendBeforeElement, jsApppendBeforeElement);
                break;
            case 'data19':
                dynamicCode('f19', codeJs, codeJq, jqCloneElement, jsCloneElement);
                break;
            case 'data20':
                dynamicCode('f20', codeJs, codeJq, jqAddClass, jsAddClass);
                break;
            case 'data21':
                dynamicCode('f21', codeJs, codeJq, jqRemoveClass, jsRemoveClass);
                break;
            case 'data22':
                dynamicCode('f22', codeJs, codeJq, jqToggleClass, jsToggleClass);
                break;
            case 'data23':
                $('#runID').empty();
                $('#runID').css({ 'padding': '120px' });

                var button = $('<button>');
                button.html('Start');
                $('#runID').append(button);

                dynamicCode('f23', codeJs, codeJq, jqAddDisabled, jsAddDisabled);
                break;
            case 'data24':
                $('#runID').empty();
                $('#runID').css({ 'padding': '120px' });

                var button = $('<button>');
                button.html('Start');
                $('#runID').append(button);
                $("#runID button").attr("disabled", true);

                dynamicCode('f24', codeJs, codeJq, jqRemoveDisabled, jsRemoveDisabled);
                break;
            case 'data25':
                $('#rightModalContent').empty();
                $('#rightModalContent').css({ 'background-color': 'white' });
                var img = $('<img>');
                img.attr('src', 'https://i.pinimg.com/originals/bd/c0/99/bdc099373d6acbce20fe7179ba9372e4.jpg');
                $('#rightModalContent').append(img);

                dynamicCode('f25', codeJs, codeJq, jqSetData, jsSetData);
                break;
            case 'data26':
                $('#rightModalContent').empty();
                $('#rightModalContent').css({ 'background-color': 'white' });
                var img = $('<img>');
                img.attr('src', 'https://i.pinimg.com/originals/bd/c0/99/bdc099373d6acbce20fe7179ba9372e4.jpg');
                img.attr('data-src', 'This is the DATA-SRC: https://i.pinimg.com/originals/bd/c0/99/bdc099373d6acbce20fe7179ba9372e4.jpg');
                $('#rightModalContent').append(img);

                dynamicCode('f26', codeJs, codeJq, jqRemoveData, jsRemoveData);
                break;
            case 'data27':
                $('#runID').empty();
                var p = $('<p>');
                p.html('Hide clicking on me');
                p.css('display', 'block');
                
                dynamicCode('f27', codeJs, codeJq, jqHideElement, jsHideElement);
                break;
            case 'data28':
                $('#runID').empty();
                var p = $('<p>');
                p.html('Hey! it was dark back there, Thanks!');
                p.css('display', 'none');
                $('#runID').append(p);
                dynamicCode('f28', codeJs, codeJq, jqShowElement, jsShowElement);
                break;
            case 'data29':
                $('#runID').css({ 'display': 'none' });
                $('#jsButton').css({ 'display': 'none' });
                dynamicCode('f29', codeJs, codeJq, jqFadeIn, jsFadeIn);
                break;
            case 'data30':
                $('#jsButton').css({ 'display': 'none' });
                dynamicCode('f30', codeJs, codeJq, jqFadeOut, jsFadeOut);
                break;
            case 'data31':
                $('#runID').empty();
                var items = [];
                var list = $('<ul class="generated">');
                for (let i = 1; i < 5; i++) {
                    items.push($('<li>Element ' + i + '</li>'));
                }
                list.append(items);
                $('#runID').append(list);
                dynamicCode('f31', codeJs, codeJq, jqIterateStyle, jsIterateStyle);
                break;
        }
    });
});

$('#eventFunctions li').each(function () {
    $(this).click(function () {
        showModal();
        $('#runID').empty();
        elementsCreator();
    });
    $('#runID').css({ 'font-weight': 'bold' });
    var codeJs;
    var codeJq;

    var itemId = $(this).attr('id');
    $(this).click(function () {
        $('#modal').css({ 'top': '9%' });
        $('#rightModalContent').css({ 'height': 'fit-content' });
        switch (itemId) {
            case 'event0':
                dynamicCode('e0', codeJs, codeJq, jqLoadPage, jsLoadPage);
                break;
            case 'event1':
                dynamicCode('e1', codeJs, codeJq, jqClickedElement, jsClickedElement);
                break;
            case 'event2':
                dynamicCode('e2', codeJs, codeJq, jqDobleClicked, jsDobleClicked);
                break;
            case 'event3':
                dynamicCode('e3', codeJs, codeJq, jqPressKey, jsPressKey);
                break;
            case 'event4':
                dynamicCode('e4', codeJs, codeJq, jqMouseMoved, jsMouseMoved);
                break;
            case 'event5':
                dynamicCode('e5', codeJs, codeJq, jqInputChange, jsInputChange);
                break;
            case 'event6':
                dynamicCode('e6', codeJs, codeJq, jqLoadImage, jsLoadImage);
                break;
            case 'event7':
                $("#eventsForm img").attr('src', '/img/develop.jpg');
                dynamicCode('e7', codeJs, codeJq, jqFailLoadImage, jsFailLoadImage);
                break;
            case 'event8':
                dynamicCode('e8', codeJs, codeJq, jqSubmitedForm, jsSubmitedForm);
                break;
            case 'event9':
                dynamicCode('e9', codeJs, codeJq, jqChangeOption, jsChangeOption);
                break;
            case 'event10':
                dynamicCode('e10', codeJs, codeJq, jqMouseHover, jsMouseHover);
                break;
            case 'event11':
                dynamicCode('e11', codeJs, codeJq, jqCheckedBox, jsCheckedBox);
                break;
            case 'event12':
                $('img:first-child')[3].remove();
                var item = $('<li>Full Stack</li>');
                var item2 = $('<li>Dev Ops</li>');
                $('#eventsForm ul').append(item);
                $('#eventsForm ul').append(item2);

                dynamicCode('e12', codeJs, codeJq, jqListClicked, jsListClicked);
                break;
        }
    });
});

//Function constructor
function dynamicCode(key, code1, code2, jqFunction, jsFunction) {
    $('#itemTitle').html(localStorage.getItem(key));
    $('#jqCode').html(jqFunction.toString());
    $('#jsCode').html(jsFunction.toString());

    $('#jqButton').one('click', function () {
        $('#runCode').one('click', function () {
            jqFunction();
        })
    });

    $('#jsButton').one('click', function () {
        $('#runCode').one('click', function () {
            jsFunction();
        })
    });
}

var fString = elementsCreator.toString();
console.log(fString);

//__________Events Functions_________//
//
//---------- Elements Constructor ----------//
function elementsCreator() {
    let newElements = document.querySelector("template.eventsElements");
    const importNewElement = document.importNode(newElements.content, true);
    $("#runID").append(importNewElement);
}
//---------- On Load HTML Document ---------//
function jqLoadPage() {
    $('#eventsForm').ready(function () {
        $('#eventsForm p').append('Form loaded');
    });
}
//---------- On Clicked HTML ---------------//
function jqClickedElement() {
    $('#eventsForm img').click(function () {
        $('#eventsForm img').css({ 'display': 'none' });
        $('#eventsForm').css({ 'width': '100%' });
    });
}
//---------- On Double Clicked HTML --------//
function jqDobleClicked() {
    $('#eventsForm img').dblclick(function () {
        $('#eventsForm img').css({ 'display': 'none' });
        $('#eventsForm').css({ 'width': '100%' });
    });
}
//---------- On Press Keyboard Key ---------//
function jqPressKey() {
    $(document).keypress(function () {
        $('#eventsForm img').css({ 'display': 'none' });
        $('#eventsForm').css({ 'width': '100%' });
    });
}
//---------- On Mouse Move -----------------//
function jqMouseMoved() {
    $(document).mousemove(function (event) {
        $("#eventsForm p").html("Pos X: " + event.pageX + " | Pos Y: " + event.pageY + "");
        $("#eventsForm p").css({ 'margin-top': '10px' })
    });
}
//---------- On Input Change ---------------//
function jqInputChange() {
    $("#eventsForm input").change(function () {
        $("#eventsForm #nameInput").css({ 'border': '2px solid rgb(0, 94, 255)' });
    });
}
//---------- On Load Image -----------------//
function jqLoadImage() {
    $("#eventsForm img").ready(function () {
        $('#eventsForm img').css({ 'display': 'none' });
        $('#eventsForm').css({ 'width': '100%' });
    });
}
//---------- On Fail Load Image ---------//
function jqFailLoadImage() {
    $("#eventsForm img").attr('src', 'vanilla.js');
    $('img').on('error', function () {
        $("#eventsForm p").html("Image loading error");
    });
}
//---------- On Submit Form --------//
function jqSubmitedForm() {
    $('#eventsForm').submit(function (event) {
        $("#eventsForm p").html("Sended!");
        event.preventDefault();
    });
}
//---------- On Change Select Option ---------//
function jqChangeOption() {
    $('#eventsForm select').on('change', function () {
        var valueSelected = $(this).val();
        $("#eventsForm p").html(valueSelected);
    });
}
//---------- On Mouse Element Hover -----------------//
function jqMouseHover() {
    $('#eventsForm #nameInput').mouseover(function () {
        $('#eventsForm #nameInput').css({ 'border': '2px solid rgb(0, 94, 255)' })
    });
}
//---------- On CheckBox Change ---------------//
function jqCheckedBox() {
    $('#eventsForm #check').on('change', function () {
        if ($('#eventsForm #check').is(':checked')) {
            $("#eventsForm p").css({ 'color': '#000000' });
            $("#eventsForm p").html('Policy accepted');
        }
        else {
            $("#eventsForm p").css({ 'color': '#ff4d4d' });
            $("#eventsForm p").html('Please accept the policy');
        }
    });
}
//---------- On li Element Clicked -----------------//
function jqListClicked() {
    $('#eventsForm li').each(function () {
        $(this).on('click', function () {
            $("#eventsForm p").html($(this).text());
        })
    });
}

//________________Selector Functions__________________//
//
//---------- Change Weight of Element Parent ---------//
function jqChangeParentWeight() {
    $('#pId').parent().css({ 'font-weight': 'bold' });
}
//---------- Change Weight of Collection ---------//
function jqChangeCollectionWeight() {
    $('#runID').children().css({ 'font-weight': 'bold' });
}
//---------- Change Weight of Element Class ---------//
function jqChangeClassWeight() {
    $('.changeWeight').css({ 'font-weight': 'bold' });
}
//---------- Change Weight of Element ID ---------//
function jqChangeIdWeight() {
    $('#pId').css({ 'font-weight': 'bold' });
}
//---------- Display a Hide Element ---------//
function jqClassAndDisplay() {
    if ($('.changeWeight').css('display') == 'none') {
        $('.changeWeight').css({ 'display': 'block' });
        $('.changeWeight').css({ 'color': 'blue' });
    }
}
//---------- Get Option From Select ---------//
function jqGetFromSelect() {
    $("select").change(function () {
        $('#resultFunction').children().last().remove();
        var selected = $(this).children("option:selected").val();
        $('#resultFunction').html('Option: ' + selected);
    });
}
//---------- Change Link ---------//
function jqChangeLink() {
    $('a').first().attr('href', 'https://es.wikipedia.org/wiki/GitHub');
    $('#runID p').first().html("GitHub wiki: ");
    $('a').first().html("https://es.wikipedia.org/wiki/GitHub");
}
//---------- Alert of Input Value ---------//
function jqAlertInput() {
    var value = $('#runID input').first().val();
    alert(value);
}
//---------- Remove Options From List ---------//
function jqRemoveOption() {
    $('#selectOptions').find('option').remove();
}
//---------- Animation on Ready Element ---------//
function jqAnimateLoad() {
    $('#runID').ready(function () {
        setTimeout(function () {
            $("#runID p").animate({
                "width": "50%"
            }, 2000);
        }, 2000);
    })
}

//__________Function List Functions_________//
//
//---------- Paragraph Constructor ---------//
let parag;
function addTextContent(text, className,) {
    parag = $('<p>');
    parag.attr('class', className);
    parag.html(text);
}
//---------- Append Element ---------//
function jqAppendElement() {
    $('#runID').find('.newParag1').remove();
    addTextContent('- Enric Juliana -', '.newParag1');
    $('#runID').append(parag);
}
//---------- Remove Any Element ---------//
function jqRemoveElement() {
    $('#pId').remove();
}
//---------- Append Element to Parent Element ---------//
function jqAppendParentElement() {
    $('#runID').find('.newParag').remove();
    addTextContent('- Enric Juliana -', '.newParag');
    $('#pId').parent().append(parag);
}
//---------- Preprend to Parent Element ---------//
function jqPrependParentElement() {
    $('#runID').find('.newParag2').remove();
    addTextContent('Filosofía y Letras', '.newParag2');
    $('#runID').prepend(parag);
}
//---------- Append Element After Element ---------//
function jqApppendAfterElement() {
    $('#rightModalContent').find('.newParag1').remove();
    addTextContent('Empezando por ti mismo', '.newParag1');
    $('#runID').after(parag);
}
//---------- Append Element Before Element ---------//
function jqApppendBeforeElement() {
    $('#rightModalContent').find('.newParag2').remove();
    addTextContent('Filosofía y Letras', '.newParag2');
    $('#runID').before(parag);
}
//---------- Clone HTML element ---------//
function jqCloneElement() {
    if ($('#rightModalContent').children().length > 1) {
        $('#rightModalContent').children().last().remove();
    }
    $('#rightModalContent').children().last().css({ 'color': '#005eff' });
    $('#runID').clone().appendTo('#rightModalContent');
}
//---------- Add a New Class ---------//
function jqAddClass() {
    $('#runID p').addClass("newClass");
    $('.newClass').css({ 'color': '#005eff' });
}
//---------- Remove Class ---------//
function jqRemoveClass() {
    $('#runID p').removeClass("changeWeight");
}
//---------- Toogle Class ---------//
function jqToggleClass() {
    $('#runID p').toggleClass('newClass');
}
//---------- Set Disabled Attribute ---------//
function jqAddDisabled() {
    $('#runID button').attr('disabled', true);
}
//---------- Remove Disabled Attribute ---------//
function jqRemoveDisabled() {
    $('#runID button').attr('disabled', false);
}
//---------- Set Data Attribute ------------------//
function jqSetData() {
    $('#rightModalContent img').attr('data-src', 'This is the DATA-SRC: https://i.pinimg.com/originals/bd/c0/99/bdc099373d6acbce20fe7179ba9372e4.jpg')
}
//---------- Remove Data Attribute ---------------//
function jqRemoveData() {
    $("#rightModalContent img").removeAttr("data-src");
}
//---------- Hide Element On Click ---------------//
function jqHideElement() {
    $('#runID').append(p);
    $('#runID p').on('click', function () {
        $('#runID p').hide();
    });
}
//---------- Show Element On HTML -----------------//
function jqShowElement() {
    $('#runID p').show();
}
//---------- FadeIn Function ----------------------//
function jqFadeIn() {
    $('#runID').fadeIn();
}
//---------- FadeOut Function ---------------------//
function jqFadeOut() {
    $('#runID').fadeOut();
}
//---------- Iterate Style On Options List---------//
function jqIterateStyle() {
    $('#runID li').each(function () {
        $(this).css({ 'color': '#005eff' });
    });
}