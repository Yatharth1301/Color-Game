var correct_color;
var cardcolor=[];
var clickedcolor=[0,0,0,0,0,0];
var cards=["cardone","cardtwo","cardthree","cardfour","cardfive","cardsix"]
var gd;
var easymode;
var toughmode;
var gameover=false;

function hover(element,colour){
    document.getElementById(element).style.color=colour;
    document.getElementById(element).style.cursor="pointer";
}

function hoveraway(element,colour){
    document.getElementById(element).style.color=colour;
    document.getElementById(element).style.cursor="auto";
}


function generate_color() {
    var r = Math.round(Math.random() * 256);
    var g = Math.round(Math.random() * 256);
    var b = Math.round(Math.random() * 256);
    var rgbcolor = "rgb(" + r + "," + g + "," + b + ")";
    return rgbcolor;
}

function create_color_cards(element, cardcolor) {
    var ele = document.getElementById(element);
    ele.style.backgroundColor = cardcolor;
}

function easy() {
    gameover=false;
    document.getElementById("PlayAgain").innerHTML="";
    clickedcolor=[0,0,0,0,0,0];
    var mode = 3;
    for (var i = 0; i < 3; i++) {
        cardcolor[i] = generate_color();
    }
    
    create_color_cards("cardone", cardcolor[0]);
    create_color_cards("cardtwo", cardcolor[1]);
    create_color_cards("cardthree", cardcolor[2]);
    create_color_cards("cardfour", "antiquewhite");
    create_color_cards("cardfive", "antiquewhite");
    create_color_cards("cardsix",  "antiquewhite");

    correct_color = Math.round((Math.random() * mode));
    
    if (correct_color >= mode) {
        correct_color = 2;
    }

    console.log(correct_color);

    document.getElementById("description").innerHTML="Select The Correct Color Based On The RGB Value";
    document.getElementById("gamedetails").style.backgroundColor="rgb(150, 245, 126)";
    document.getElementById("targetcolor").innerHTML = "RGB VALUE: " + cardcolor[correct_color].substring(3);

    easymode=true;
    toughmode=false;

}

function tough() {
    document.getElementById("PlayAgain").innerHTML="";
    gameover=false;
    clickedcolor=[0,0,0,0,0,0];
    var mode = 6;
    for (var i = 0; i < 6; i++) {
        cardcolor[i] = generate_color();
    }
    
    create_color_cards("cardone", cardcolor[0]);
    create_color_cards("cardtwo", cardcolor[1]);
    create_color_cards("cardthree", cardcolor[2]);
    create_color_cards("cardfour", cardcolor[3]);
    create_color_cards("cardfive", cardcolor[4]);
    create_color_cards("cardsix", cardcolor[5]);
    
    correct_color = Math.round((Math.random() * mode));
    
    
    if (correct_color >= mode) {
        correct_color = mode-1;
    }

    document.getElementById("description").innerHTML="Select The Correct Color Based On The RGB Value";
    document.getElementById("gamedetails").style.backgroundColor="rgb(150, 245, 126)";
    document.getElementById("targetcolor").innerHTML = "RGB VALUE: " + cardcolor[correct_color].substring(3);

    easymode=false;
    toughmode=true;
   
}

function changeColors(){
    gameover=false;
    document.getElementById("PlayAgain").innerHTML="";
    if(easymode){
        easy();
    }
    else{
        tough();
    }
}


tough();

function card_clicked(cardnum, cardname) {
    if (cardnum == correct_color) {
        gameover=true;
        document.getElementById("gamedetails").style.backgroundColor = cardcolor[cardnum];
        document.getElementById("description").innerHTML = "CORRECT !"
        document.getElementById("targetcolor").innerHTML = "";
        document.getElementById("description").style.textAlign="center";
        document.getElementById("tryagain").innerHTML="";
        document.getElementById("PlayAgain").innerHTML="PLAY AGAIN";
        document.getElementById("PlayAgain").style.color="rgb(3, 102, 28)";
        if(easymode){
            for(var i=0 ; i<3 ; i++){
                if(clickedcolor[i]==0){
                    document.getElementById(cards[i]).style.backgroundColor=cardcolor[cardnum];
                }
            }
        }
        else{
            for(var i=0 ; i<6 ; i++){
                if(clickedcolor[i]==0){
                    document.getElementById(cards[i]).style.backgroundColor=cardcolor[cardnum];
                }
            }
        }
    }
    else {
        if(gameover==false){
            document.getElementById(cardname).style.backgroundColor = "antiquewhite";
            clickedcolor[cardnum]=1;
            document.getElementById("tryagain").innerHTML="TRY AGAIN !"
        }
    }
}