// drums med keybord tangenter

document.addEventListener("keydown", function(evt){
    if (evt.key == "1") {
        var sound = document.getElementById("myAudio");
        sound.play(); 
    }
    else if(evt.key == "2"){
        var soundTwo = document.getElementById("myAudiotwo")
        soundTwo.play();
    }
    else if(evt.key == "3"){
        var soundThree = document.getElementById("myAudiothree")
        soundThree.play();
    }
    else if(evt.key == "4"){
        var soundFour = document.getElementById("myAudiofour")
        soundFour.play();
    }
    else if(evt.key == "5"){
        var soundfive = document.getElementById("myAudiofive")
        soundfive.play();
    }
    else if(evt.key == "6"){
        var soundSix = document.getElementById("myAudiosix")
        soundSix.play();
    }
    else if(evt.key == "7"){
        var soundSeven = document.getElementById("myAudioseven")
        soundSeven.play();
    }
    else if(evt.key == "8"){
        var soundEight = document.getElementById("myAudioeight")
        soundEight.play();
    }
    else if(evt.key == "9"){
        var soundNine = document.getElementById("myAudionine")
        soundNine.play();
    }
});

// Piano Men keyboard tangenter

document.addEventListener("keydown", function(evt){

    if (evt.key == "q") {
        var piano_note_a = document.getElementById("note_a");
        piano_note_a.play(); 
    }
    else if (evt.key == "w") {
        var piano_note_b = document.getElementById("note_b");
        piano_note_b.play(); 
    }
    else if (evt.key == "e") {
        var piano_note_c = document.getElementById("note_c");
        piano_note_c.play(); 
    }
    else if (evt.key == "r") {
        var piano_note_d = document.getElementById("note_d");
        piano_note_d.play(); 
    }
    else if (evt.key == "t") {
        var piano_note_e = document.getElementById("note_e");
        piano_note_e.play(); 
    }
    else if (evt.key == "y") {
        var piano_note_f = document.getElementById("note_f");
        piano_note_f.play(); 
    }
    else if (evt.key == "u") {
        var piano_note_g = document.getElementById("note_g");
        piano_note_g.play(); 
    }
    
}); 


// click evnet med Synth

document.getElementById("box_2_note_a").addEventListener("click", function(){
document.getElementById("note_a").play();
});
document.getElementById("box_2_note_b").addEventListener("click", function(){
document.getElementById("note_b").play();
});
document.getElementById("box_2_note_c").addEventListener("click", function(){
document.getElementById("note_c").play();
});
document.getElementById("box_2_note_d").addEventListener("click", function(){
document.getElementById("note_d").play();
});
document.getElementById("box_2_note_e").addEventListener("click", function(){
document.getElementById("note_e").play();
});
document.getElementById("box_2_note_f").addEventListener("click", function(){
document.getElementById("note_f").play();
});
document.getElementById("box_2_note_g").addEventListener("click", function(){
document.getElementById("note_g").play();
});