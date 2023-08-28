const popup = document.getElementById("myPopup");
const mobileIcons = document.querySelector(".share-icons-mobile");
const shareUser = document.querySelector(".share-user");
const shareContainer = document.querySelector(".share");
const shareIconBox = document.querySelector(".share-icon-box");

function myFunction() {
  if (window.innerWidth > 660) {
    popup.classList.toggle("show");
  }
  if (window.innerWidth <= 660) {
    shareUser.classList.toggle("hide");
    mobileIcons.classList.toggle("hide");
    shareContainer.classList.toggle("share-mobile");
    shareIconBox.classList.toggle("share-icon-box-mobile");
  }
}
