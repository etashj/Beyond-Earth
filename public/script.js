let x = 0

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