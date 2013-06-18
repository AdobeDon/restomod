f<!-- configurable script -->
<script type="text/javascript"> 
//###########################################
window.onload=function(){
 
	//preload images into browser
	preloadSlide();
 
	//set the first slide
	SetSlide(0);
 
}
 
//###########################################
function SetSlide(num) {
	//too big
	i=num%theimage.length;
	//too small
	if(i<0)i=theimage.length-1;
 
	//switch the image
	document.images.imgslide.src=theimage[i][0];
 
	//if they want name of current slide
	document.getElementById('slidebox').innerHTML=theimage[i][2];
 
	//if they want current slide number and total
	document.getElementById('slidecount').innerHTML= "Image "+(i+1)+" of "+theimage.length;
 
}
 
 
//###########################################
function PlaySlide() {
	if (!window.playing) {
		PlayingSlide(i+1);
		if(document.slideshow.play){
			document.slideshow.play.value="   Stop   ";
		}
	}
	else {
		playing=clearTimeout(playing);
		if(document.slideshow.play){
			document.slideshow.play.value="   Play   ";
		}
	}
	// if you have to change the image for the "playing" slide
	if(document.images.imgPlay){
		setTimeout('document.images.imgPlay.src="'+imgStop+'"',1);
		imgStop=document.images.imgPlay.src
	}
}
 
 
//###########################################
function PlayingSlide(num) {
	playing=setTimeout('PlayingSlide(i+1);SetSlide(i+1);', playspeed);
}
 
 
//###########################################
function preloadSlide() {
	for(k=0;k<theimage.length;k++) {
		theimage[k][0]=new Image().src=theimage[k][0];
	}
}
 
 
</script>
