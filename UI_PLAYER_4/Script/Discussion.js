



export function Compenent_Discussion(backgroundImage,Avatar){
    let message_list = []
    let parent_class =".section-popup"
    
    let deleteMessageHandler = function (message) {
                let deletebutton = message.querySelector('.chat-message-button');
                deletebutton.addEventListener('click', function () {
                message.remove(); 
                });    
    }
    

    this.variable = "" + 
                        "<img  src = \"images/Popup/Close_popup_button.png\" id = \"close_button_animation\"></img>" + 
                        "<section class=\"chat_compenent\">" + 
                        "    <div class=\"image\"></div>" + 
                        "    <section class=\"chat\">" + 
                        "    <h1 class=\"visually-hidden\">Messenger</h1>" + 
                        "    <div class=\"chat-infos-wrapper_top\">" + 
                        "        <img src=\"./images/Header_Elements/FaceMage1.png\" ></img>" + 
                        "        <span class=\"chat-message-name\">Unidentified raccoon</span>" + 
                        "" + 
                        "    </div>" + 
                        "" + 
                        "    <span class=\"chat-seperation-line_top\"></span>" + 
                        "    <div class=\"chat-content\">" + 
                        "    " + 
                        "    </div>" + 
                        "    <span class=\"chat-seperation-line\"></span>" + 
                        "    <form class=\"chat-form\">" + 
                        "        <input class=\"chat-form-input\" type=\"text\" aria-label=\"Your message\" placeholder=\"Write something\" required>" + 
                        "    " + 
                        "    </form>" + 
                        "    </section>" + 
                        "    " + 
                        "    <template id=\"message-template\">" + 
                        "    <div class=\"chat-message\" tabindex=\"0\">" + 
                        "        <div class=\"chat-infos-wrapper\">" + 
                        "        <img src= "+Avatar+"></img>" + 
                        "        <div class=\"chat-infos-msgs-wrapper\">" + 
                        "            <span class=\"chat-message-name\">Unidentified raccoon</span>" + 
                        "            <p class=\"chat-message-text\"></p>" + 
                        "            <button class=\"chat-message-button\" type=\"button\">Delete</button>" + 
                        "        </div>" + 
                        "        </div>" + 
                        "        " + 
                        "    </div>" + 
                        "    </template>" + 
                        "" + 
                        "</section>" + 
                        "";

    this.show = function(){
      console.log(message_list)
      document.querySelector(parent_class).innerHTML = ""
      document.querySelector(parent_class).innerHTML =  document.querySelector(parent_class).innerHTML  + this.variable
      document.querySelector(".image").style.backgroundImage = backgroundImage.style.backgroundImage 
      let chatBox = document.querySelector('.chat-content');
      let messages = chatBox.children;
      let newMessageForm = document.querySelector('.chat-form');
      let newMessageInput = newMessageForm.querySelector('.chat-form-input');
      let messageTemplate = document.querySelector('#message-template').content;
      let newMessageTemplate = messageTemplate.querySelector('.chat-message');
      
      if(message_list.length >0){
        message_list.forEach(element => {
            chatBox.appendChild(element);
        });
      }
      newMessageForm.addEventListener('submit', function (evt) {
            evt.preventDefault();
            let messageText = newMessageInput.value;
            let newMessage = newMessageTemplate.cloneNode(true);
            newMessage.querySelector('.chat-message-text').textContent = messageText;
            deleteMessageHandler(newMessage);      
            chatBox.appendChild(newMessage);
            message_list.push(newMessage)
            newMessageInput.value = '';
      });
      for (let i = 0; i < messages.length;i++) {
         deleteMessageHandler(messages[i]);  
        }
    }
    
}    

