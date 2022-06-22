
export function createlement(Precentages,element){
    const canvas12 = element
    const context = canvas12.getContext("2d");
    const width = canvas12.width = 430;
    const height = canvas12.height = 46;
    const frameWidth = 430;
    const frameHeight = 46;
    const xPos = 0;
    const yPos = 0;
    const scale = 1;
    const fps = 30;
    const secondsToUpdate = 0.06 * fps;
    let frameIndex = 0;
    let count = 0;
    var req 

    const spriteSheet = new Image();
    spriteSheet.src = "./images/spritesheet.png";

    const State = {
      states: {},
      generateState: function(name, startIndex, endIndex) {
        if (!this.states[name]) {
          this.states[name] = {
            frameIndex: startIndex,
            startIndex: startIndex,
            endIndex: endIndex
          };
        }
      },
      getState: function(name) {
        if (this.states[name]) {
          return this.states[name];
        }
      }
    };
    ///41 = 100%//
    ///10% --> ? ;  4*41/100 = 1.64
    let endframe = (Precentages*41)/100
    State.generateState("breath", 0, endframe);
    frame();
    function animate(state) {
      context.drawImage(
        spriteSheet,
        state.frameIndex * frameWidth,
        0,
        frameWidth,
        frameHeight,
        xPos,
        yPos,
        frameWidth * scale,
        frameHeight * scale
      );
    
      count ++;
      if (count > secondsToUpdate) {
        state.frameIndex ++;
        count = 0;
      }
    
      if (state.frameIndex > state.endIndex) {
        state.frameIndex = state.startIndex;
        cancelAnimationFrame();
      }
    }
    
    function frame() {
      context.clearRect(0, 0, width, height);
      animate(State.getState("breath"));
      // animate(State.getState("angry"));
      // animate(State.getState("jump"));
    
       req = requestAnimationFrame(frame);
    }
    
    
}
