function draw(x) {
  const canvas = document.getElementById("fejecske");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#FFFFFF";
    ctx.moveTo(75+x, 75);
    ctx.beginPath();
    ctx.arc(75+x, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110+x, 75);
    ctx.arc(75+x, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
    ctx.moveTo(60+x, 65);
    ctx.arc(60+x, 65, 5, 0, Math.PI * 2, true); // Left eye
    ctx.moveTo(90+x, 65);
    ctx.arc(90+x, 65, 5, 0, Math.PI * 2, true); // Right eye
    ctx.stroke();
  }
}

function moveSmiley(e) {
    e = e || window.event;
    const canvas = document.getElementById("fejecske");
    if (e.keyCode == '38') {
        // up arrow fel nyil
      cy=canvas.style.top;
      cy=parseInt( cy.substring(0, cy.length-2) );
      if (cy > stepY){
        cy=cy-stepY;
        canvas.style.top=cy+"px";
      }

    }
    else if (e.keyCode == '40') {
        // down arrow
      cy=canvas.style.top;
      cy=parseInt( cy.substring(0, cy.length-2) );
      if (cy < window.screen.availHeight-150-stepY){
        cy=cy+stepY;
        canvas.style.top=cy+"px";
      }

    }
    else if (e.keyCode == '37') {
       // left arrow
      var cx=canvas.style.left;
      cx=parseInt( cx.substring(0, cx.length-2) );
      if (cx > stepX) {
          cx=cx-stepX;
          canvas.style.left=cx+"px";
      }

    }
    else if (e.keyCode == '39') {
       // right arrow
      cx=canvas.style.left;
      cx=parseInt( cx.substring(0, cx.length-2)) ;
      if (cx < window.screen.availWidth-150-stepX) {
          cx=cx+stepX;
          canvas.style.left=cx+"px";
      }
    }
}

function run() {
    draw(0);
    document.onkeydown = moveSmiley;
}

function dismissWelcome() {
        const welcome = document.getElementById("welcome");
    welcome.style="display:none";
}

stepX=10;
stepY=10;
