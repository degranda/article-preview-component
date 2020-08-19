const shareButton = document.getElementById("share");
const activate = document.getElementById("activate");
const disabled = document.getElementById("disabled");
const shareActive = document.getElementById("share__active");

shareButton.addEventListener("click", function () {
  activate.style.display = "grid";
  disabled.style.display = "none";
});

shareActive.addEventListener("click", function () {
  disabled.style.display = "grid";
  activate.style.display = "none";
});
