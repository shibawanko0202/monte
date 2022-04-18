"use strict"

const header = document.getElementById("header");
const to_top = document.getElementById("to_top");

// 位置を確認してクラスを制御
function top_button(){
  if(header.getBoundingClientRect().y < 0){
    to_top.classList.add("show");
  } else {
    to_top.classList.remove("show");
  };
};

// スクロールするたびに判定
window.addEventListener("scroll",top_button);