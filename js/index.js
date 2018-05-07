/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown-new").classList.toggle("show");
}

$("#menu-icon").click(function(){
$("#dropdown-content").toggle();
});
