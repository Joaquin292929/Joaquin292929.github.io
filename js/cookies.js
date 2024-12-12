const cookieDialog = document.getElementById("cookie-dialog");
const acceptCookiesButton = document.getElementById("accept-cookies");

if (!localStorage.getItem("cookiesAccepted")) {
  cookieDialog.showModal();
}

acceptCookiesButton.addEventListener("click", () => {
  localStorage.setItem("cookiesAccepted", "true");
  cookieDialog.close();
});