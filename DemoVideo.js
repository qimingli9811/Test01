"use strict";

function main_DemoVideo()
{
	const params = new URLSearchParams(window.location.search);
	const type = params.get("demo")?.toLowerCase();
	if(type == "skin")
	{
		ShowVideoControls(true);
		document.getElementById("5").click();
		document.getElementById("101").click();
		//playVideo('01.mp4');
	}
	else if(type == "moviediy")
	{
		ShowVideoControls(true);
		document.getElementById("5").click();
		//playVideo('02.mp4');
		document.getElementById("102").click();
	}
	else
		ShowVideoControls(false);
}

let oldFile = '';
function playVideo(file)
{
  const video = document.getElementById("videoP");
  
  //const params5 = new URLSearchParams(window.location.search);
  if(oldFile != file)
  {
    oldFile = file;
	document.getElementById("videoS").src = file;
	video.load();
	//video.muted = true;
	//alert('ttt');
  }
  
  video.play();
}

function ShowVideoControls(bShow)
{
	const show = bShow ? "inline-block" : "none";
	document.getElementById("101").style.display = show;
	document.getElementById("102").style.display = show;
	document.getElementById("videoP").style.display = show;
	if(bShow == false)
	{
		const video = document.getElementById("videoP");
		video.pause();
		video.currentTime = 0; // rewind to beginning
	}
}
