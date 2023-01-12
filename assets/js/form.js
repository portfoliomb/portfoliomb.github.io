window.onload = loadJS;

function addEvent(element, event, func) {
  if (element.addEventListener) {
    element.addEventListener(event, func, false);
  } else {
    element.attachEvent("on" + event, func);
  }
}
function surligne(champ, erreur) {
  if (erreur) {
    champ.style.backgroundColor = "#fba";
  } else {
    champ.style.backgroundColor = "";
  }
}
function verifEmail(champ) {
  let erreur = true;

  var validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (champ.value.match(validRegex)) {
    erreur = false;
  }
  surligne(champ, erreur);
  return !erreur;
}
function blurEmail(event) {
  return verifEmail(event.target);
}
function verifMessage(champ) {
  let erreur = false;

  if (champ.value.length < 2 || champ.value.length > 500) {
    erreur = true;
  }

  surligne(champ, erreur);
  return !erreur;
}
function blurMessage(event) {
  return verifMessage(event.target);
}
function verifForm(event) {
  let email = document.getElementById("email");
  let message = document.getElementById("message");
  let emailOk = verifEmail(email);
  let messageOk = verifMessage(message);

  if (emailOk && messageOk) {
    message.innerHTML = "Message en cours d'envoi";
    return true;
  } else {
    event.preventDefault();
    message.innerHTML = "Veuillez remplir correctement tous les champs requis";
    return false;
  }
}
function loadJS() {
  let email = document.getElementById("email");
  let form = document.getElementById("form");
  let message = document.getElementById("message");

  addEvent(email, "blur", blurEmail);
  addEvent(message, "blur", blurMessage);
  addEvent(form, "submit", verifForm);
}
