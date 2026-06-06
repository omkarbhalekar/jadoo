function onLoad(arg) {
    document.addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
      toggleFullScreen();
    }
  });
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    function launchIntoFullscreen(element) {
      if(element.requestFullscreen) {
        element.requestFullscreen();
      } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if(element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if(element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }
    launchIntoFullscreen(document.documentElement);
  }

  document.querySelector('.enter-text').classList.add('nodisplay');
  document.querySelector('.background-image').classList.add('nodisplay');
  document.querySelector('.quote-text').style.display = 'none';
  document.querySelector('#monitor').style.backgroundColor = "#000";

  var splash = document.getElementById('jadoo-splash');
  splash.style.cssText = 'display:flex; position:fixed; top:0; left:0; width:100vw; height:100vh; background:#000; z-index:999999; justify-content:center; align-items:center;';

  setTimeout(function() {
    splash.style.display = 'none';
    document.querySelector('#monitor').style.backgroundColor = "#161913";
    var nodisplays = document.querySelectorAll('.nodisplay');
    nodisplays.forEach(function(el) { el.classList.remove('nodisplay'); });

    document.querySelector('.enter-text').classList.add('nodisplay');
    document.querySelector('.background-image').classList.add('nodisplay');
    document.querySelector('.quote-text').style.display = 'none';

    var promptKey = document.querySelector('.prompt-key');
    promptKey.innerHTML = "O M A K";
    promptKey.innerHTML += "\tO M K R";
    promptKey.innerHTML += "\tO M A K R K";
  }, 1000);
}
