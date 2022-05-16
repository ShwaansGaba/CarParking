canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

greencar_width=75;
greencarheight=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencarx=5;
greencary=225;

function add() {
	background_imageTag=new Image();
	background_imageTag.onload=uploadBackground;
	background_imageTag.src=background_image;

	greencar_imageTag=new Image();
	greencar_imageTag.onload=uploadgreencar;
	greencar_imageTag.src=greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imageTag,greencarx,greencary,greencar_width,greencarheight);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		if(greencary>=250 || greencary<=50){
			document.getElementById("h1").innerHTML="You hit the Walk Path!";
		}
		else{
			document.getElementById("h1").innerHTML="⠀";
		}
		if(greencarx>=400 && greencary<=120 && greencarx<=470){
			document.getElementById("h1").innerHTML="Parked Succesfully!";
		}
		if(greencarx>=670 && greencary<=120 && greencarx<=730){
			document.getElementById("h1").innerHTML="Parked Succesfully!";
		}
		
}

function up()
{
	if(greencary >= 50){
		greencary=greencary- 5;
		console.log("Greencar x=" + greencarx +"and greencary=" + greencary);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(greencary <=250){
		greencary=greencary + 5;
		console.log("Greencar x=" + greencarx +"and greencary=" + greencary);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if(greencarx >=0){
		greencarx=greencarx - 5;
		console.log("Greencar x=" + greencarx +"and greencary=" + greencary);
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(greencarx <=730){
		greencarx=greencarx + 5;
		console.log("Greencar x=" + greencarx +"and greencary=" + greencary);
		uploadBackground();
		uploadgreencar();
	}
}
