"use strict"


// ---------- ↓TOPへ戻るボタン↓ ---------

const header = document.getElementById("header");
const to_top = document.getElementById("to_top");

// 位置を確認してクラスを制御
function top_button(){
  if(header.getBoundingClientRect().y < -100){
    to_top.classList.add("show");
  } else {
    to_top.classList.remove("show");
  };
};

// スクロールするたびに判定
window.addEventListener("scroll",top_button);



// ---------- ↓カーニング自動変換↓ ---------

const h2 = document.getElementsByTagName("h2");
const p = document.getElementsByTagName("p");
const dt = document.getElementsByTagName("dt");
const dd = document.getElementsByTagName("dd");
const small = document.getElementsByTagName("small");

function translate24px(tag){
  // <h2>の"「　」"を変換
  
  const left_bracket_24 = "<span class=\"left-bracket-24px\">「</span>";
  const right_bracket_24 = "<span class=\"right-bracket-24px\">」</span>";
  
  for(let i = 0;i < tag.length;i++){
    tag[i].innerHTML = tag[i].innerHTML.replace(/「/g,left_bracket_24);
    tag[i].innerHTML = tag[i].innerHTML.replace(/」/g,right_bracket_24);
  };
};

translate24px(h2);

function translate16px(tag){
  // <p><dd><small>の"、「　」"を変換
  
  const left_bracket_16 = "<span class=\"left-bracket-16px\">「</span>";
  const right_bracket_16 = "<span class=\"right-bracket-16px\">」</span>";
  const punctuation = "<spna class=\"punctuation\">、</spna>";
  
  for(let i = 0;i < tag.length;i++){
    tag[i].innerHTML = tag[i].innerHTML.replace(/「/g,left_bracket_16);
    tag[i].innerHTML = tag[i].innerHTML.replace(/」/g,right_bracket_16);
    tag[i].innerHTML = tag[i].innerHTML.replace(/、/g,punctuation);
  };
};

translate16px(p);
translate16px(dt);
translate16px(dd);
translate16px(small);
