$("document").ready(function () {

  var scroll =this.scrollY;
  console.log(scroll);
  if (scroll > introlength){
      console.log(“fade”)
      $(“#intro”).removeClass(“headline”)
      $(“#intro”).addClass(“headlinescroll”)
  }
  if (introlength > scroll){
      console.log(“fade”)
      $(“#intro”).removeClass(“headlinescroll”)
      $(“#intro”).addClass(“headline”)
  }