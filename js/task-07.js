const inputRange = document.querySelector("#font-size-control");
const textStyle = document.querySelector("#text");

inputRange.addEventListener("input", onChangeFontSize);

function onChangeFontSize(event) {
  textStyle.style.fontSize = event.currentTarget.value + "px";
}
