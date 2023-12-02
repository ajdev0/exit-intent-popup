document.addEventListener("DOMContentLoaded", function () {
  var exitIntentShown = false;

  document.addEventListener("mouseleave", function (e) {
    if (!exitIntentShown) {
      showExitIntentPopup();
      exitIntentShown = true;
    }
  });

  function showExitIntentPopup() {
    if (document.cookie.indexOf("exitIntentShown=true") === -1) {
      // the exit-intent popup content
      var popupHtml =
        '<div id="exit-intent-popup" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #fff; padding: 20px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); z-index: 9999;">';
      popupHtml += "<h2>Welcome to Our Website!</h2>";
      popupHtml +=
        "<p>We have a special offer for you. Click the button below to find out more.</p>";
      popupHtml +=
        '<button onclick="closeExitIntentPopup()">Claim Offer</button>';
      popupHtml += "</div>";

      document.body.insertAdjacentHTML("beforeend", popupHtml);

      // Set a cookie to prevent showing the popup for the next 30 days
      var date = new Date();
      date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
      var expires = "expires=" + date.toUTCString();
      document.cookie = "exitIntentShown=true; " + expires + "; path=/";
    }
  }
  console.log("Script loaded successfully");

  window.closeExitIntentPopup = function () {
    // Close the popup
    var exitIntentPopup = document.getElementById("exit-intent-popup");
    if (exitIntentPopup) {
      exitIntentPopup.remove();
    }
  };
});
