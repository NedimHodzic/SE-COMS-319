function validate2() {
    emailCheck(document.forms["Contact Info"]["email"].value, "email", "Email");
    numberCheck(document.forms["Contact Info"]["phone"].value, "phone", "Number");
    addressCheck(document.forms["Contact Info"]["address"].value, "address", "Address");
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

function alphaCheck(entry) {
    let letters = /^[a-z]+$/i;
    if (entry != null && entry.match(letters)) {
        return true;
    }
    else {
        return false;
    }
}

function numericCheck(entry) {
    let nums = /^[0-9]+$/;
    if (entry != null && entry.match(nums)) {
        return true;
    }
    else {
        return false;
    }
}

function emailCheck(email, id, elementId) {
    var result;
    aSplit = email.split('@');
    if (aSplit.length == 2 && alphanumericCheck(aSplit[0])) {
        pSplit = aSplit[1].split('.')
        if (pSplit.length == 2 && alphanumericCheck(pSplit[0] + pSplit[1])) {
            result = true;
        }
    }
    else {
        result = false;
    }
    var image = getImage(Boolean(result), id);
    var message = getMessage(Boolean(result), id);
    document.getElementById(elementId).appendChild(image);
    document.getElementById(elementId).appendChild(message);
}

function numberCheck(number, id, elementId) {
    var result;
    numSplit = number.split('-');
    if(numSplit.length == 3 && numericCheck(numSplit[0]) && numericCheck(numSplit[1]) && numericCheck(numSplit[2])) {
        if(numSplit[0].length == 3 && numSplit[1].length == 3 && numSplit[2].length == 4) {
            result = true;
        }
    }
    else if(number.length == 10 && numericCheck(number)) {
        result = true;
    }
    else {
        result = false;
    }
    var image = getImage(Boolean(result), id);
    var message = getMessage(Boolean(result), id);
    document.getElementById(elementId).appendChild(image);
    document.getElementById(elementId).appendChild(message);
}

function addressCheck(address, id, elementId) {
    var result;
    addressSplit = address.split(',');
    if(addressSplit.length == 2 && alphaCheck(addressSplit[0] + addressSplit[1])) {
        if(addressSplit[1].length == 2) {
            result = true;
        }
    }
    else {
        result = false;
    }
    var image = getImage(Boolean(result), id);
    var message = getMessage(Boolean(result), id);
    document.getElementById(elementId).appendChild(image);
    document.getElementById(elementId).appendChild(message);
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
    if (id === "email") {
        label.innerHTML = bool ? "" : "Must be in the form xxx@xxx.xxx. x should be alphanumeric (e.g. no special symbols).";
    }
    else if(id === "phone") {
        label.innerHTML = bool ? "" : "Must be in the form xxx-xxx-xxxx or xxxxxxxxxx. x should be numeric";
    }
    else {
        label.innerHTML = bool ? "" : "Must be in the form of city & state. example: Ames,IA";
    }
    return label;
}