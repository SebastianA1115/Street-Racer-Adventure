//
$(".RST").hide();
$(".Option").hide();
$(".New").hide();
$(".Option1").hide();
$(".Continue3").hide();
$(".CarChoicez").hide();
$(".CarChoice").hide();
$(".choice1").hide();
$(".choice2").hide();
$(".Choice1").hide();
$(".Choice2").hide();
$(".choiceA").hide();
$(".choiceB").hide();
$(".civic").hide();
$(".sti").hide();
$(".SC").hide();
$(".TC").hide();
$(".Bag").hide();
$(".Keep1").hide();
$(".Keep2").hide();
$(".Win").hide();
$(".Lose").hide();
$(".Coil").hide();
$(".UG").hide();
$(".Cue").hide();
$(".Cue1").hide();
$(".Cue2").hide();
$(".Choice1z").hide();
$(".Choice2z").hide();
$(".choiceAz").hide();
$(".choiceBz").hide();
$(".Cuez").hide();
$(".Cue1z").hide();
$(".Cue2z").hide();
//Buttons

$(".A").hover(function() {
    $(".A").css("color", "red");
    $(".A").css("background-color", "#8ABAAE");
});
$(".A").mouseleave(function() {
    $(".A").css("color", "#5800a1");
     $(".A").css("background-color", "#ff5900");
});
$(".B").hover(function() {
    $(".B").css("color", "red");
     $(".B").css("background-color", "#8ABAAE");
});

$(".B").mouseleave(function() {
    $(".B").css("color", "#5800a1");
     $(".B").css("background-color", "#ff5900");
});

$(".C").hover(function() {
    $(".C").css("color", "red");
     $(".C").css("background-color", "#8ABAAE");
});

$(".C").mouseleave(function() {
    $(".C").css("color", "#5800a1");
     $(".C").css("background-color", "#ff5900");
});
//Buttons

//scene

$(".start").click(function() {
    $(".choice1").fadeIn(300);
    $(".choice2").slideDown(300);
    $(".start").fadeOut(300);
    $(".brian").fadeOut(300);
    $("h3").text("So start your racing journey you most now get a proper car you searched online and asked around the car meets and found two cars that interest you The Subaru WRX STI and the Honda Civic Type R. What car will you Choose??");
});
//Choice Type R
$(".choice2").click(function() {
    $(".civic").slideDown(750);
    $(".choice1").hide();
    $(".choice2").hide();
    $(".Cuez").slideDown(750);
    $("h3").text("You have bought a 2021 Honda Civic Type R now you most modify it to win some races!!");
});

$(".Cuez").click(function() {
    $(".Cuez").hide(750);
    $(".civic").slideUp(750);
    $(".sti").fadeOut(750);
    $(".choiceAz").fadeIn(300);
    $(".choiceBz").fadeIn(300);
    $("h3").text("To Start off your modifications you have to options for EXTRA Power a SuperCharger or a TurboCharger");
});

$(".choiceAz").click(function() {
    $(".Cue1z").slideDown(300);
    $(".SC").slideDown(300);
    $(".choiceAz").fadeOut(750);
    $(".choiceBz").slideUp(750);
    $("h3").text("You Chose the SuperCharger and gained 35hp");
});

$(".choiceBz").click(function() {
    $(".Cue1z").fadeIn(300);
    $(".TC").fadeIn(300);
    $(".choiceAz").slideUp(750);
    $(".choiceBz").fadeOut(750);
    $("h3").text("You Chose the TurboCharger and gained 45hp");
});
$(".Cue1z").click(function() {
    $(".Choice1z").slideDown(300);
    $(".Choice2z").slideDown(300);
    $(".Cue1z").slideUp(750);
    $(".TC").fadeOut(750);
    $(".SC").hide();
    $("h3").text("Ur Next mod will be the Suspension you can choose Coils or Bags <Air Suspension>");
});
$(".Choice1z").click(function() {
    $(".Cue2z").fadeIn(300);
    $(".Coil").fadeIn(300);
    $(".Choice1z").slideUp(750);
    $(".Choice2z").fadeOut(750);
    $("h3").text("You Chose the Coils a Great Choice!!");
});

$(".Choice2z").click(function() {
    $(".Cue2z").slideDown(300);
    $(".Bag").slideDown(300);
    $(".Choice2z").fadeOut(750);
    $(".Choice1z").slideUp(750);
    $("h3").text("You Chose the Bags a Great Choice!!");
});
$(".Cue2z").click(function() {
    $(".Cue2z").fadeOut(750);
    $(".Bag").slideUp(750);
    $(".Coil").hide();
    $(".CarChoicez").fadeIn(300);
    $(".New").fadeIn(300);
    $("h3").text("After A few Months of Racing you have made enough money to upgrade to something nicer will you upgrade or stay with the Honda Civic Type R");

    $(".CarChoicez").click(function() {
        $(".CarChoicez").slideUp(750);
        $(".New").fadeOut(750);
        $(".Continue3").slideDown(300);
        $(".Keep2").slideDown(300);
        $("h3").text("You Kept your Car nice!!");
    });
});
//Choice Sti
$(".choice1").click(function() {
    $(".sti").fadeIn(300);
    $(".choice2").fadeOut(750);
    $(".choice1").slideUp(750);
    $(".Cue").fadeIn(300);
    $("h3").text("You have bought a 2021 Subaru WRX STI now you most modify it to win some races!!");
});

$(".Cue").click(function() {
    $(".Cue").fadeOut(750);
    $(".civic").slideUp(750);
    $(".sti").hide();
    $(".choiceA").slideDown(300);
    $(".choiceB").slideDown(300);
    $("h3").text("To Start off your modifications you have to options for EXTRA Power a SuperCharger or a TurboCharger");
});

$(".choiceA").click(function() {
    $(".Cue1").fadeIn(300);
    $(".SC").fadeIn(300);
    $(".choiceA").slideUp(750);
    $(".choiceB").fadeOut(750);
    $("h3").text("You Chose the SuperCharger and gained 35hp");
});

$(".choiceB").click(function() {
    $(".Cue1").slideDown(300);
    $(".TC").slideDown(300);
    $(".choiceA").fadeOut(750);
    $(".choiceB").slideUp(750);
    $("h3").text("You Chose the TurboCharger and gained 45hp");
});
$(".Cue1").click(function() {
    $(".Choice1").fadeIn(300);
    $(".Choice2").fadeIn(300);
    $(".Cue1").slideUp(750);
    $(".TC").fadeOut(750);
    $(".SC").hide();
    $("h3").text("Ur Next mod will be the Suspension you can choose Coils or Bags <Air Suspension>");
});
$(".Choice1").click(function() {
    $(".Cue2").slideDown(300);
    $(".Coil").slideDown(300);
    $(".Choice1").slideUp(750);
    $(".Choice2").fadeOut(750);
    $("h3").text("You Chose the Coils a Great Choice!!");
});

$(".Choice2").click(function() {
    $(".Cue2").fadeIn(300);
    $(".Bag").fadeIn(300);
    $(".Choice2").fadeOut(750);
    $(".Choice1").slideUp(750);
    $("h3").text("You Chose the Bags a Great Choice!!");
});
$(".Cue2").click(function() {
    $(".Cue2").hide();
    $(".Bag").fadeOut(750);
    $(".Coil").slideUp(750);
    $(".CarChoice").slideDown(300);
    $(".New").slideDown(300);
    $("h3").text("After A few Months of Racing you have made enough money to upgrade to something nicer will you upgrade or stay with the Subaru WRX STI");
});

$(".CarChoice").click(function() {
    $(".CarChoice").fadeOut(750);
    $(".New").slideUp(750);
    $(".Continue3").fadeIn(300);
    $(".Keep1").fadeIn(300);
    $("h3").text("You Kept your Car nice!!");
});

//combine
$(".New").click(function() {
    $(".Continue3").slideDown(300);
    $(".New").slideUp(750);
    $(".CarChoice").hide();
    $(".CarChoicez").fadeOut(750);
    $(".UG").slideDown(300);

    $("h3").text("New sweet Ride You Found An Illegal R34 Skyline and bought it, Big moves!!");
});
$(".Continue3").click(function() {
    $(".Continue3").hide();
    $(".New").fadeOut(750);
     $(".UG").hide();
    $(".Keep2").slideUp(750);
    $(".Keep1").slideUp(750);
    $(".Option1").fadeIn(300);
    $(".Option").fadeIn(300);

    $("h3").text("arriving at the location for the race you are greeted by the right hand of the boss and indicated to the lineup of the race. the route is downloaded onto your GPS all you have to do now is wait for the boss and race. 3...2...1...GO!!! the race started you get a great start and right away take the lead. But you notice the others catching up what will you do use the N2O early on or reserve it for later");
});
$(".Option").click(function() {
    $(".Option").hide();
    $(".Option1").slideUp(750);
   $(".Win").slideDown(300);
    $(".RST").slideDown(300);
    $("h3").text("Towards the end of the race you used the N2O and it gave you the extra boost to push your car forward winning by a hair!!");
});
$(".Option1").click(function() {
    $(".Option").hide();
    $(".Option1").hide();
    $(".Lose").fadeIn(300);
        $(".RST").fadeIn(300);
    $("h3").text("You Used the N2O too early, you got a great distance but the other races managed to catch up!!");
});
$(".RST").click(function() {
    $(".RST").slideUp(750);
    $(".start").slideDown(300);
$(".Lose").hide();
    $(".Win").hide();
    $(".brian").slideDown(300);
    $("h3").text("Ur Name is Brian Earl Spilner and ur freash blood to the racing life your goal is to drive with some of the best drives in town!!");
});

//scene
