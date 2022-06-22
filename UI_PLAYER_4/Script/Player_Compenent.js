import { createlement } from "./main.js";
var counter = -1
var Precentages = []
console.log("jjjjjjjjjjjjj")
function Compenent_Player_Status(class_name,Number,Message,counters){
  
    this.variable = '' +   
    '<div class="'+class_name+'">' + 
    '            <canvas class="canvas12"></canvas>' + 
    '            <h1>MARK DIAZ</h1>' + 
    '            <img class = "'+class_name+'_level" src="images/Status_Elements/level.png" alt="">' + 
    '            <div class ="'+class_name+'_level-text">' + 
    '                <p>Lv. 12</p>' + 
    '            </div>' + 
    '            <div class ="'+class_name+'_progress-text">' + 
    '                <p>9,984/11,505 XP</p>' + 
    '            </div>' + 
    '            <div class ="'+class_name+'_streaks-text">' + 
    '                <p>'+Number+'</p>' + 
    '                <p>Daily Streak</p>' + 
    '            </div>' + 
    '            <div id = "status_fire" class ="'+class_name+'_streak"></div>' + 
    '            <div id = "slide_profile" class ="slide_profile_animation"></div>' + 
    '            <div class = "'+class_name+'_icon-status-avatar">' + 
    '                <img src="images/Header_Elements/Avatar.png" alt="">' + 
    '            </div>' + 
    '            <img class ="'+class_name+'_big_circle" src="images/Status_Elements/Circle_big.png" alt="">' + 
                      '' + 
    '            <img class ="'+class_name+'_small_circle" src="images/Status_Elements/Circle_small.png" alt="">' +                   
          '            ' + 
    '            <img class ="'+class_name+'_strike_circle" src="images/Status_Elements/Circle_Strike.png" alt="">' +       
           '           ' + 
    '            <img class="'+class_name+'_bar" src="images/Status_Elements/bar.png" alt="">' +        
          '            ' + 
    '           <a href="#####">'+Message+'</a> <!--YOU CAN ADD LINKS TO EXTERNAL DOCUMENTS HERE-->' +       
    '        </div>'     + 
    '';

    this.show = function(percent){
      counter  = counter + 1
      document.querySelector(".wrapper_compenent_player").innerHTML =  document.querySelector(".wrapper_compenent_player").innerHTML  + this.variable
      Precentages.push(percent)
    }
}    

let object1 = new Compenent_Player_Status("status","127","ll",0)
object1.show(100)

const array_canvas = document.querySelectorAll(".status canvas");
var i = 0
array_canvas.forEach(element=>{
    createlement(Precentages[i],element)
    i = i +1
})