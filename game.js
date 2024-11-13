var buttoncolors = ["blue","green","red","yellow"];
var user_pattern = [];
var genrated_pattern =[];
var result = true;

function playsound(color) {
    switch (color) {
        case "blue":
            var audio1 = new Audio("blue.mp3");
            audio1.play();
         break;   
        case "red":
            var audio1 = new Audio("red.mp3");
            audio1.play();
         break;
        case "yellow":
            var audio1 = new Audio("yellow.mp3");
            audio1.play();
         break;
        case "green":
            var audio1 = new Audio("green.mp3");
            audio1.play();  
         break;
       default:
        console.log("sometihng unexpected happended");
    }
}

function animate(butn) {
    $("."+butn).addClass("pressed");
    setTimeout(function() {$("."+butn).removeClass("pressed");},100);
}

function play(color) {
    animate(color);
    playsound(color);
}

$("body").keypress(next_level);

function next_level() {
      if(result===true) {
        user_pattern.length = 0;
      var nun = Math.random();
      var random_number = Math.floor(nun*4);
      var random_color = (buttoncolors[random_number]);
      genrated_pattern.push(random_color);
      for (let y = 0; y<genrated_pattern.length; y++) {
       setTimeout(function() {
             play(genrated_pattern[y]);
         },500*y);
      }
      for ( var l = 0; l< genrated_pattern.length; l++ ) {
      $("#level-title").text("level "+(l+1));
    }
      }
}

function next_sequence() {
    if (user_pattern.length == genrated_pattern.length) {
            if (result === true){
                setTimeout(next_level,1000);
                for (var x = 0; x<genrated_pattern.length; x++) {
                    if((genrated_pattern[x])!==(user_pattern[x])) {
                        $("#level-title").text("GAME OVER");
                        result = false; 
                        genrated_pattern.length = 0; 
                        var audiow = new Audio("wrong.mp3");
                        audiow.play();
                        $("body").addClass("game-over");
                    }
                }
            }
    }
 }

$(".btn").click(function(){
    var idi = $(this).attr("id");
    user_pattern.push(idi);
    playsound(idi);
    animate(idi);
    next_sequence();
  }
)



