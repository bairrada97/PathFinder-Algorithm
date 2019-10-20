let isMousePressed = false;

export const Behaviors = superclass =>
  class extends superclass {
    handleMouseDown() {
      isMousePressed = true;
      this.isWall = true;
      event.currentTarget.classList.add("node-wall");
    }

    handleMouseEnter() {
      if (!isMousePressed) return;
      this.isWall = true;
      event.currentTarget.classList.add("node-wall");
    }

    handleMouseUp() {
      isMousePressed = false;
    }
  };
