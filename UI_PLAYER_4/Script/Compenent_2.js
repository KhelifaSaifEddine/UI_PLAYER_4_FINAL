import { createlement } from "./main.js";
import {Compenent_Discussion} from "./Discussion.js";
var index = 0
var Discussion_objects = {}
function Photos_Cloner(url){
    this.photos=[]
    index++
    this.variable = '' + 
    '<div  index = "'+index+'" class="gallery_wrapper" style="background-image: url('+url+'); background-size: 100% 100%;">'+
    '  <canvas class="canvas1"></canvas> '+
    '  <canvas class="canvas0"></canvas> '+
     ' <canvas class="canvas3"></canvas> '+
     ' <canvas class="canvas2"></canvas>'+
    '</div>'
    
    this.add = function(){
      this.photos.push(photo_objet)
    }
    this.show = function(){
     
      document.querySelector(".wrapper_compenent").innerHTML =  document.querySelector(".wrapper_compenent").innerHTML  + this.variable

    }


}    
function add_event_to_all_photos(){
  document.querySelectorAll(".gallery_wrapper").forEach(element => {
      element.addEventListener("click",popup)
  });
}

function add_event_to_close_button(){
  const close_button = document.getElementById("close_button_animation")
  close_button.addEventListener("click",popup)
}
function popup(ev){
  let image = ev.target
  console.log(Discussion_objects)
  if(flip){
    let i = parseInt(ev.target.attributes.index.nodeValue)
    console.log(Discussion_objects.hasOwnProperty(i))
    if(Discussion_objects.hasOwnProperty(i)){
      ///IT EXIST//
      console.log(i)
      console.log(Discussion_objects[i])
      Discussion_objects[i].show()
    }else{
      ///IT DOESNT EXIST//
      ////YOU CAN PUT PHOTO OF WHO IS CURRUNTLY TALKING IN THE SECOND PARAM
      ////THE FIRST PARAMTRE IS TO SHOW THE IMAGE THAT YOU CLICKED ON , IN THE POPPUP WINDOW
      let discussion_object = new Compenent_Discussion(image,"./images/Header_Elements/FaceMage1.png");
      discussion_object.show()
      Discussion_objects[i] = discussion_object
    }
  }
  add_event_to_close_button()
  
 
  const popup = document.querySelector(".section-popup") 
  if(flip){ 
      popup.classList.add('open');
      flip = false
 }else{
      popup.classList.remove('open');
      flip = true
 }
}
let flip = true

let object1 = new Photos_Cloner("IMG_20220514_155555330.jpg")
object1.show()
let object2 = new Photos_Cloner("IMG_2903.jpg")
object2.show()

let object3 = new Photos_Cloner("IMG_2826.jpg")
object3.show()

let object4 = new Photos_Cloner("IMG_20220514_155555330.jpg")
object4.show()

let object5 = new Photos_Cloner("IMG_20220514_155555330.jpg")
object5.show()

let object6 = new Photos_Cloner("IMG_20220514_155555330.jpg")
object6.show()

let object7 = new Photos_Cloner("IMG_20220514_155555330.jpg")
object7.show()

let object8 = new Photos_Cloner("IMG_20220514_155555330.jpg")
object8.show()

add_event_to_all_photos()