if (document.readyState === 'complete') {
  
}


//run show with rotate function
let runShow, runIncrease;
runIncrease = 0;
document.querySelector("#runFunction").style.width = "60%";
function runRotate(speed){
  document.querySelector("#runFunction").style.transform = "rotate("+runIncrease*(runIncrease-1)+"deg)";
  runShow = setTimeout('runRotate('+ speed +')',speed);
  runIncrease++;
}
document.querySelector("#runFunction").addEventListener("mouseover",function(){
  runRotate(30);
});
document.querySelector("#runFunction").addEventListener("mouseout",function(){
  document.querySelector("#runFunction").style.zIndex = "-1";
  clearTimeout(runShow);
});



//<iframe src="demo_iframe.htm" height="200" width="300"></iframe>
document.querySelector("#ruleButton").addEventListener("click",function(){
  const rulePage = document.createElement("iframe");
  rulePage.src="html/rule.html";
  rulePage.width = "80%";
  rulePage.height = "90%";
  rulePage.style.border = "none";
  rulePage.style.marginTop = "7%";
  document.querySelector("#ruleIframe").appendChild(rulePage);
  document.querySelector("#ruleIframe").style.display = "block";
  
});