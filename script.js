document.body.onkeyup = function(e) {
  if(e.keycode == 68) {
    document.body.classlist.toggle("dark");
  }
}