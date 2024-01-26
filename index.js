// Open the pop-up box when the page loads
var value = document.getElementById("home");
window.onload = function () {
    document.getElementById('popup-box').style.display = 'block';
   document.getElementById('home').style.filter= 'blur(10px)';
};

// Close the pop-up box
function closePopup() {
    document.getElementById('popup-box').style.display = 'none';
    document.getElementById('home').style.filter= 'blur(0px)';
}
