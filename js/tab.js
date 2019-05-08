function openProfile(profileName) {
  var i;
  var x = document.getElementsByClassName("profile");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(profileName).style.display = "block";  
}