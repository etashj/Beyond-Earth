let x = 1

function change_back() {
	main = document.getElementById("main-title");
	if (x==0) {
		main.style.backgroundImage = "url('assets/shuttle_imgs/starship-1.jpg')";
	}
	else if (x==1) {
		main.style.backgroundImage = "url('assets/cover/space-settlement.jpg')"; 
	}
  else if (x==2) {
		main.style.backgroundImage = "url('assets/cover/moonbase_spacex.jpg')";
	}
  else if (x==3) {
		main.style.backgroundImage = "url('assets/cover/moonbase-2.jpeg')"; 
		x=-1;
	}
	x++; 
}

let y = setInterval(change_back, 5000);


function fadeOut(element) {
    var op = 1;
    var timer = setInterval(() => {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function fadeIn(element) {
  var op = 0.1;
  element.style.display = 'block';
  var timer = setInterval(() => {
      if (op >= 1) clearInterval(timer);
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.1;
  }, 10);
}