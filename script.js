a = document.getElementById("album-four");
b = document.getElementById("video-four");
c = document.getElementById("album-one");
d = document.getElementById("video-one");
e = document.getElementById("album-two");
f = document.getElementById("video-two");
g = document.getElementById("album-three");
h = document.getElementById("video-three");
i = document.getElementById("main-image");
j = document.getElementById("video-five");
k = document.getElementById("title-one");
l = document.getElementById("text-one");
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
function nextImage(){
	if (i.src.match("images/trippie.jpg")){
		 i.src = "images/sob.jpg";
		 a.src = "images/hitboy.jpg";
		 c.src = "images/rbe.jpg";
		 e.src = "images/gangin.jpg";
		 g.src = "images/gangintwo.jpg";
		 d.src = "videos/anti.mp4";
		 f.src = "videos/lane.mp4";
		 h.src = "videos/intro.mp4";
		 b.src = "videos/family.mp4";
		 k.innerHTML = "SOBxRBE" 
		 l.innerHTML = "SOB x RBE consists of Yhung T.O., DaBoii, Slimmy B, and Lul G. SOB x RBE, often called simply SOB, originate from Vallejo, CA, and have been mentored by rapper Sage the Gemini. The groups name stands for Strictly Only Brothers. Slimmy B, DaBoii, and Lul G were all part of SOB. RBE stands for Real Boy Entertainment and was Yhung T.O.’s groups. The 2 groups combined into SOB x RBE when they were in high school and started recording music together." 
	} else if ( i.src.match("images/sob.jpg")){
		 i.src = "images/dsavage.jpg";
		 a.src = "images/know.jpg";
		 c.src = "images/dphoenix.jpg";
		 e.src = "images/trustnoone.jpg";
		 g.src = "images/gardena.jpg";
		 d.src = "videos/ready.mp4";
		 f.src = "videos/pill.mp4";
		 h.src = "videos/wytd.mp4";
		 b.src = "videos/iknow.mp4";
		 k.innerHTML = "D.Savage" 
		 l.innerHTML = "Fresh out of high school from Gardena, California, D Savage is already showing promise in his skills as a young rapper. With close ties to Instagram icons John Ross and Ian Connor, he also has close ties to fellow rappers such as Tyler, The Creator, A$AP Rocky and many more." 
	} else {
		// do nothing
	}
}