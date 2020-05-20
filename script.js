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
	b.pause("appearance");
	d.pause("appearance");
	f.pause("appearance");
	h.pause("appearance");
	a.classList.remove("appearance");
	c.classList.remove("appearance");
	e.classList.remove("appearance");
	g.classList.remove("appearance");
}
function nextImage(){
	if (i.src.match("images/trippie.jpg")){
		resetImages();
		 i.src = "images/sob.jpg";
		 a.src = "images/hitboy.jpg";
		 c.src = "images/rbe.jpg";
		 e.src = "images/gangin.jpg";
		 g.src = "images/gangintwo.jpg";
		 d.src = "videos/anti.mp4";
		 f.src = "videos/lane.mp4";
		 h.src = "videos/intro.mp4";
		 b.src = "videos/family.mp4";
		 k.innerHTML = "SOBxRBE" ;
		 l.innerHTML = "SOB x RBE consists of Yhung T.O., DaBoii, Slimmy B, and Lul G. SOB x RBE, often called simply SOB, originate from Vallejo, CA, and have been mentored by rapper Sage the Gemini. The groups name stands for Strictly Only Brothers. Slimmy B, DaBoii, and Lul G were all part of SOB. RBE stands for Real Boy Entertainment and was Yhung T.O.’s groups. The 2 groups combined into SOB x RBE when they were in high school and started recording music together." ;
	} else if ( i.src.match("images/sob.jpg")){
		resetImages();
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
	} else if ( i.src.match("images/dsavage.jpg")){
		resetImages();
		 i.src = "images/trippie.jpg";
		 a.src = "images/mark.jpg";
		 c.src = "images/loveletter.jpg";
		 e.src = "images/lovelettertwo.jpg";
		 g.src = "images/loveletterthree.jpg";
		 d.src = "videos/limit.mp4";
		 f.src = "videos/hellboy.mp4";
		 h.src = "videos/q&p.mp4";
		 b.src = "videos/snakeskin.mp4";
		 k.innerHTML = "Trippie Redd" 
		 l.innerHTML = "Hailing from Canton, Ohio, Trippie Redd, real name Michael White IV (born June 18, 1999), who is well known for his singles, “Love Scars/You hurt me” and “Romeo and Juliet”. Influenced by Lil Wayne, A$AP Rocky, T-Pain, and even popular rock band KISS. In the interview, Trippie explains that the reason he began rapping to begin with was to honor his older brother, who he looked up to as a role model and had passed away while Trippie was still young. Trippie’s original name was Hippie Redd. He had then changed it to Trippy Hippie, and chose to combine the two thus forming the name Trippie Redd. So far, Redd has released five mixtapes and collaborated with the likes of Kodie Shane, 6ix9ine, XXXTENTACION, Famous Dex, and Uno The Activist."
	}else {
		// do nothing
	}
}
