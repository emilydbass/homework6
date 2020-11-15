var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

//play
document.querySelector("#play").addEventListener("click", function() {
	video.play()
	console.log("Play Video");
	var x = document.querySelector("#volumeSlider").value;
	document.querySelector("#volume").innerHTML = x + '%'
	
});

//pause
document.querySelector("#pause").addEventListener("click", function() {
	video.pause()
	console.log("Pause Video")
});

//slow down
document.querySelector("#slower").addEventListener("click",function(){
	video.playbackRate -= .10;
	console.log(video.playbackRate)
});

//speed up
document.querySelector("#faster").addEventListener("click",function(){
	video.playbackRate = video.playbackRate + (video.playbackRate * 0.10);
	console.log(video.playbackRate)
});

//skip

document.querySelector("#skip").addEventListener("click",function(){
	video.currentTime += 5;
	if (video.currentTime >= video.duration){
		video.currentTime = 0
		video.play()
	}
	console.log("Current Location "+video.currentTime)
	video.play()
});

//mute
document.querySelector("#mute").addEventListener("click",function(){
	if(video.muted === false){
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	else{
		document.querySelector("#mute").addEventListener("click",function(){
			video.muted = false;
			document.querySelector("#mute").innerHTML = "Mute";
		});
	}
});

//old school 
document.querySelector("#old").addEventListener("click",function(){
	document.querySelector("#myVideo").className = "oldTime"
});


//original
document.querySelector("#original").addEventListener("click",function(){
	document.querySelector("#myVideo").className = ""
});


//volume slider
document.querySelector("#volumeSlider").oninput = function() {
	sliderChange()
	setVolume()
};

function sliderChange(val) {
	var val = document.querySelector("#volumeSlider").value;
	document.querySelector('#volume').innerHTML = val + '%';
}

function setVolume(){
	video.volume = document.querySelector("#volumeSlider").value / 100;
}
