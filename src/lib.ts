export function updateMessage() {
  const elMessage = document.getElementById("message");

  if (!elMessage) {
    return;
  }

  elMessage.innerHTML = "Hello, World !";
}
