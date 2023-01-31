import React from "react";
// import {game} from './app.jsx';

const child1 = document.createElement("span")
const child2 = document.createElement("span")
const children = [child1, child2]

function SetSelectedStyle(divList, color) {

  if (divList.length > 0) {
  
    divList.forEach(div => {
      document.getElementById(div.id).style.backgroundColor = color       
  
    })
  }
}

function SetAvailableStyle(divList) {
  if (divList.length > 0) {
    
    for (let i=0; i<divList.length; i++) {
      divList[i].appendChild(children[i]).classList.add("avail")
    }
  }
}

function RemoveStyleAndResetLength(divList) {
    
  if (divList.length > 0) {
    for (let i=0; i<divList.length; i++) {
      divList[i].removeAttribute("style")
    }
    divList.length = 0
  }

}

function RemoveStyle(divList) {
    
  if (divList.length > 0) {
    for (let i=0; i<divList.length; i++) {
      divList[i].removeAttribute("style")
    }
  }

}



function RemoveChildDivs(divList) {
  for (let i = 0; i<divList.length; i++) {
    while (divList[i].hasChildNodes()) {
      divList[i].removeChild(divList[i].firstChild)
    } 
  }
}

export {SetSelectedStyle, SetAvailableStyle, RemoveStyle, RemoveStyleAndResetLength, RemoveChildDivs}