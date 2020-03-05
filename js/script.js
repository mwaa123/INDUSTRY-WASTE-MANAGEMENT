$(document).ready(function() {
  //determine if passwords match
  let pass;
  let pass2;
  let companyEmail;
  $("#register").click(function() {
    pass = document.getElementById("psw").value;
    pass2 = document.getElementById("psw-repeat").value;
    // get inputted email
    email = document.getElementById("email").value;
    console.log(email);
    companyEmail = email;

    //get company details
    if (pass != pass2) {
      alert("passwords don't match");
      event.preventDefault();
    } else if (pass == null) {
    } else {
      alert(`welcome`);
    }

    localStorage.setItem("companyEmail", email);
    // const person = localStorage.getItem('person')
    // localStorage.removeItem('person')
  });
  // $(`#submit`).click(function(){
  //   var non = localStorage.getItem("company")
  //   alert(non)
  // })

  //store company details
  let cName;
  let cAddress;
  let cContact;
  let cWaste;
  let cType;
  $("#submit").click(function() {
    name = document.getElementById("name").value;
    localStorage.setItem("cName", name);
    address = document.getElementById("address").value;
    localStorage.setItem("cAddress", address);
    contact = document.getElementById("contact").value;
    localStorage.setItem("cContact", contact);
    waste = document.getElementById("waste").value;
    localStorage.setItem("cWaste", waste);
    type = $("select")
      .children("option:selected")
      .val();
    localStorage.setItem("cType", type);
  });

  //display related industries
  $("button#choose-industry").click(function() {
    var type = localStorage.getItem("cType");
    var name = localStorage.getItem("cName");

    if (type == "primary") {
      $("#prim").fadeIn();
      $("ul").append("<li><a href = 'links/new.html'>" + name + "</a></li>");
    } else {
      $("#sec").fadeIn();
      $("ul").append("<li><a href = 'links/new.html'>" + name + "</a></li>");
    }
  });
  //delivery option
  $("button#delivery").click(function() {
    var mat = prompt("specify Material needed");
    var deli = prompt("Enter delivery location...");
    alert(mat + " will be delivered to " + deli);
  }); //fix
  $("button#start").click(function() {
    $(".card").fadeIn(1000);
    $("#start").hide();
  });
  $("button#close").click(function() {
    $(".card").fadeOut();
    $("#start").show(500);
  });
  $("a#new").click(function() {
    var list = localStorage.getItem("cWaste");
    var add = localStorage.getItem("cAddress");
    var ax = localStorage.getItem("cContact");
    $("ul").append("<li>" + add + "</li>");
  });
});
