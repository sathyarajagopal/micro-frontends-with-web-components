function tellComponents() {
  const name = document.getElementById("yourName").value;

  const reactEl = document.createElement("react-el");
  reactEl.setAttribute("name", name);
  reactEl.setAttribute("onHelloEvt", "onHelloEvt");
  reactEl.addEventListener("onHelloEvt", (e) => helloEvent("React"));

  const reactElContainer = document.getElementById("react-container");
  if (reactElContainer.children.length > 0) {
    reactElContainer.removeChild(reactElContainer.children[0]);
  }
  reactElContainer.appendChild(reactEl);

  const ngEl = document.createElement("ng-el");
  ngEl.setAttribute("name", name);
  ngEl.addEventListener("helloEvt", (e) => helloEvent("Angular"));

  const ngElContainer = document.getElementById("ng-container");
  if (ngElContainer.children.length > 0) {
    ngElContainer.removeChild(ngElContainer.children[0]);
  }
  ngElContainer.appendChild(ngEl);

  logMessage("You", `my name is ${name}`);
}

function helloEvent(who) {
  logMessage(who, "hello");
}

function logMessage(source, msg) {
  const msgContainer = document.getElementById("messages");
  msgContainer.innerHTML += `<p><strong>${source}</strong> said ${msg}`;
}
