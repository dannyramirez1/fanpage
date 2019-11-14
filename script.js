a = document.getElementById("album-four");
b = document.getElementById("video-four");
c = document.getElementById("album-one");
d = document.getElementById("video-one");
e = document.getElementById("album-two");
f = document.getElementById("video-two");
g = document.getElementById("album-three");
h = document.getElementById("video-three");
i = document.getElementById("trippie-image");
//var goodSound = document.getElementById('songfour');

function playboxfour(){
	songfour.play();
}

function videoFour(){
	a.classList.add("appearance");
	b.classList.remove("appearance");
}
function videoOne(){
	c.classList.add("appearance");
	d.classList.remove("appearance");
}
function videoTwo(){
	e.classList.add("appearance");
	f.classList.remove("appearance");
}
function videoThree(){
	g.classList.add("appearance");
	h.classList.remove("appearance");
}
function resetImages(){
	b.classList.add("appearance");
	d.classList.add("appearance");
	f.classList.add("appearance");
	h.classList.add("appearance");
	a.classList.remove("appearance");
	c.classList.remove("appearance");
	e.classList.remove("appearance");
	g.classList.remove("appearance");
}
function nextArtist(){
	i.src = "images/sob.jpg";
	if (i.src.match("images/sob.jpg")){
		 a.src = "images/hitboy.jpg";
		 c.src = "images/rbe.jpg";
		 e.src = "images/gangin.jpg";
		 g.src = "images/gangintwo.jpg";
		 d.src = "videos/anti.mp4";
	} else {
		// do nothing
	}
}
