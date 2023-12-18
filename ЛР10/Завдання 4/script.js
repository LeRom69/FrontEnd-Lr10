class Shape {
    static total = 0;
    
    constructor(a) {
      this.a = a;
    }

    static fill() {
      Shape.total = 100;
      console.log("Paint filled to 100%");
    }

    draw() {
      if (Shape.total <= 0) {
        console.error("Out of paint!");
        return;
      }

      const canvas = document.getElementById("canvas");
      const shape = document.createElement("div");
      shape.className = "shape";
      shape.style.width = this.a + "px";
      shape.style.height = this.a + "px";
      shape.style.backgroundColor = `rgba(0, 179, 179, ${Shape.total}%)`;
      shape.style.left = `${20 * document.querySelectorAll('.shape').length}px`;
      canvas.appendChild(shape);

      Shape.total -= 20;
      console.log(`Drawing a shape. Paint left: ${Shape.total}%`);
    
    }
  }

  function fill() {
    Shape.fill();
  }

  function draw() {
    const shape = new Shape(20);
    shape.draw();
  }