$(document).ready(function(){
    
    fillPattern();
    
    $(".key-btn").click(buttonClick);
   
    $(document).keypress(function(e){
        var a = getChar(e);
        if (a!=null)
            processInput(a.toUpperCase());
    });
    
});


theChars=['D','F','J','K'];



function  fillPattern(){
    
    var theChar= theChars[Math.floor((Math.random() * theChars.length))];
    var otherChars= theChars[Math.floor((Math.random() * theChars.length))];
    
    var lr=otherChars+otherChars+otherChars;
    
    $("#pattern").text(lr+theChar+lr);
}

function processInput(input){
    
    $(".key-btn").attr("disabled", true);
    
    var pattern = $("#pattern").text();
    var theChar = pattern[Math.floor(pattern.length/2)];
    if (input == theChar){
        $("#result").text("Correct!");
    }
    else{
        $("#result").text("Be careful!");
    }
    window.setTimeout(function(){
        addOneToTheCounter();
        fillPattern();
        $("#result").text(" ");
        $(".key-btn").removeAttr("disabled");
    },500);
    
    
}


function buttonClick(){
    processInput(this.innerText);
}

function addOneToTheCounter(){
    var counterVal = parseInt($("#counter").text());
    $("#counter").text((counterVal+1)+'');
}

function getChar(event) {
  if (event.which == null) {
    return String.fromCharCode(event.keyCode) // IE
  } else if (event.which!=0 && event.charCode!=0) {
    return String.fromCharCode(event.which)   // the rest
  } else {
    return null // special key
  }
}
