let isMousePressed = false;

export const Behaviors = superclass =>
  class extends superclass {
    handleMouseDown() {
      isMousePressed = true;
   
      if (!this.isWall){
        this.isWall = true;
        event.currentTarget.classList.add("node-wall");

      }else{
        this.isWall = false;
        event.currentTarget.classList.remove("node-wall");

      }
    }

    handleMouseEnter() {
      if (!isMousePressed) return;
      if (!this.isWall) {
        this.isWall = true;
        event.currentTarget.classList.add("node-wall");

      }else{
         this.isWall = false;
         event.currentTarget.classList.remove("node-wall");
      }
    }

    handleMouseUp() {
      isMousePressed = false;
    }
  };
