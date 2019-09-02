var app = document.getElementById('header');

var typeWriter = new Typewriter(app,{loop:true});

typeWriter.typeString('Welcome to TypeWriter')
          .pauseFor(2500)
          .deleteAll()
          .typeString("Its working awesome")
          .pauseFor(2500)
          .deleteChars(7)
          .typeString('<strong>amazing</strong>')
          .pauseFor(2500)
          .start();
