var numSquares=6;
var colors=getRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickedColors();
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;
var messageDisplay=document.getElementById("messageDisplay");
var display=document.querySelector("h1");
var reset=document.getElementById("reset");
var hardBtn=document.getElementById("hardBtn");
var easyBtn=document.getElementById("easyBtn");

//easy button click
easyBtn.addEventListener("click",function(){
    // generate color array
    numSquares=3;
    colors=getRandomColors(numSquares);
    //generate the pick color
    pickedColor=pickedColors();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
      if(colors[i]){
          squares[i].style.background=colors[i];
      }
        else{
            squares[i].style.display="none";
        }
        
    }
    display.style.backgroundColor="steelblue";
    reset.textContent="New Colors";
    messageDisplay.textContent="";
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
})

//hard button click

hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    // generate color array
    numSquares=6;
    colors=getRandomColors(numSquares);
    //generate the pick color
    pickedColor=pickedColors();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
      squares[i].style.background=colors[i];
      squares[i].style.display="block";         
    }
    display.style.backgroundColor="steelblue";
    reset.textContent="New Colors";
    messageDisplay.textContent="";
    
})

//work on the squares
for(var i=0;i<squares.length;i++)
    {
      squares[i].style.background=colors[i];
        
        //add click event
      squares[i].addEventListener("click", function(){
          var clickedColor=this.style.background;
        
        //check 
          if(clickedColor===pickedColor){
             messageDisplay.textContent="Correct";  
             changeColors(clickedColor);  
             display.style.backgroundColor=clickedColor; 
             reset.textContent="Play Again!";
          }
          else{
             messageDisplay.textContent="Wrong"; 
             this.style.background="#232323";  
          } 
      });    
    }

//change all Colors after correct click function
function changeColors(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.background=color;
    }
}

// select a pick color
function pickedColors(){
    var ran=Math.floor(Math.random() *colors.length);
    return(colors[ran]);
}

//generate random color array
function getRandomColors(num){
    var arr= [];
    for(i=0;i<num;i++)
        {
           arr[i]=getColor(); 
        }
    return arr;
}

//generate random colors
function getColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}

reset.addEventListener("click",function(){
    // generate color array
    colors=getRandomColors(numSquares);
    //generate the pick color
    pickedColor=pickedColors();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
      squares[i].style.background=colors[i];
    }
    display.style.backgroundColor="steelblue";
    reset.textContent="New Colors";
    messageDisplay.textContent="";
});



