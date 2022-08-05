
function validate1() {
    var first = names(document.forms["Personal Info"]["first"].value, "first", "FirstName");
    var last = names(document.forms["Personal Info"]["last"].value, "last", "LastName");
    var gender = dropdowns(document.forms["Personal Info"]["gender"].value, "gender", "Gender");
    var state = dropdowns(document.forms["Personal Info"]["state"].value, "state", "State");
    nextPage(first, last, gender, state);
}

function nextPage(first, last, gender, state) {
    if(first === true && last === true && gender === true && state === true) {
        document.location.href = "validation2.html";
    }
}

function names(entry, id, elementId) {
    var result = alphanumericCheck(entry);
    var image = getImage(Boolean(result), id);
    var message = getMessage(Boolean(result), id);
    document.getElementById(elementId).appendChild(image);
    document.getElementById(elementId).appendChild(message);
    return result;
}

function dropdowns(entry, id, elementId) {
    var result = dropdownCheck(entry);
    var image = getImage(Boolean(result), id);
    var message = getMessage(Boolean(result), id);
    document.getElementById(elementId).appendChild(image);
    document.getElementById(elementId).appendChild(message);
    return result;
}

function dropdownCheck(entry) {
    if(entry === "Select") {
        return false;
    }
    else {
        return true;
    }
}

function alphanumericCheck(entry) {
    let lettersAndNums = /^[a-z0-9]+$/i;
    if (entry != null && entry.match(lettersAndNums)) {
        return true;
    }
    else {
        return false;
    }
}

function getImage(bool, id) {
    var image = document.getElementById("image" + id);
    if (image == null) {
        image = new Image(15, 15);
        image.id = "image" + id;
    }
    image.src = bool ? './correct.png' : './wrong.png';
    return image;
}

function getMessage(bool, id) {
    var label = document.getElementById("labelNotify" + id);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + id;
        label.setAttribute( 'class', 'errorMessage' );
    }
    if (id === "state" || id ==="gender") {
        label.innerHTML = bool ? "" : "Select from given list.";
    }
    else {
        label.innerHTML = bool ? "" : "Must contain only alphabetic or numeric characters.";
    }
    return label;
}