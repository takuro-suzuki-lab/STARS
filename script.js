// ------------------------
// STARS Ver.3
// 身体的暴力・性的暴力リスク評価
// ------------------------


const checklist = document.getElementById("checklist");


const violenceScoreDisplay =
document.getElementById("violenceScore");


const sexualScoreDisplay =
document.getElementById("sexualScore");


const violenceRiskDisplay =
document.getElementById("violenceRisk");


const sexualRiskDisplay =
document.getElementById("sexualRisk");


const resetButton =
document.getElementById("resetButton");



// ------------------------
// 項目設定
// ------------------------

const items = [

{
name:"<span class='badge badge-violence'>P1</span> 項目1",
score:3,
category:"violence",
class:"physical-item"
},

{
name:"<span class='badge badge-violence'>P2</span> 項目2",
score:3,
category:"violence",
class:"physical-item"
},

{
name:"<span class='badge badge-violence'>P3</span> 項目3",
score:3,
category:"violence",
class:"physical-item"
},

{
name:"<span class='badge badge-violence'>P4</span> 項目4",
score:3,
category:"violence",
class:"physical-item"
},

{
name:"<span class='badge badge-violence'>P5</span> 項目5",
score:3,
category:"violence",
class:"physical-item"
},

{
name:"<span class='badge badge-violence'>P6</span> 項目6",
score:3,
category:"violence",
class:"physical-item"
},


{
name:"<span class='badge badge-sexual'>S1</span> 項目1",
score:3,
category:"sexual",
class:"sexual-item"
},

{
name:"<span class='badge badge-sexual'>S2</span> 項目2",
score:3,
category:"sexual",
class:"sexual-item"
},

{
name:"<span class='badge badge-sexual'>S3</span> 項目3",
score:3,
category:"sexual",
class:"sexual-item"
},

{
name:"<span class='badge badge-sexual'>S4</span> 項目4",
score:3,
category:"sexual",
class:"sexual-item"
},


{
type:"notice",
text:
"※以下の項目（項目11、12）は、加害者が元親密関係にあった場合にお答えください。"
},


{
name:"<span class='badge badge-violence'>P7</span> 項目7",
score:3,
category:"violence",
class:"physical-item"
},


{
name:"<span class='badge badge-sexual'>S5</span> 項目5",
score:3,
category:"sexual",
class:"sexual-item"
}

];




// ------------------------
// 項目表示
// ------------------------

items.forEach((item)=>{

const row=document.createElement("div");


if(item.type==="title"){

row.className =
"category-title " + item.class;

row.innerHTML =
item.title;

}


else if(item.type==="notice"){


row.className="notice";

row.innerHTML =
`<p>${item.text}</p>`;


}


else{


row.className =
"item " + item.class;


row.innerHTML =

`
<label>

<input
type="checkbox"
class="riskItem"
data-score="${item.score}"
data-category="${item.category}"
>

${item.name}

</label>

<strong>${item.score}点</strong>

`;

}


checklist.appendChild(row);


});





// ------------------------
// 得点計算
// ------------------------

function calculateScore(){


let violenceScore = 0;

let sexualScore = 0;



document
.querySelectorAll(".riskItem")
.forEach((box)=>{


if(box.checked){


const score =
Number(box.dataset.score);



if(box.dataset.category==="violence"){


violenceScore += score;


}


else{


sexualScore += score;


}


}



});



violenceScoreDisplay.textContent =
violenceScore + " 点";



sexualScoreDisplay.textContent =
sexualScore + " 点";



// ------------------------
// 身体的暴力判定
// ------------------------

if(violenceScore <=3){


violenceRiskDisplay.textContent =
"🟢 低い";


violenceRiskDisplay.className="low";


}

else if(violenceScore ===4){


violenceRiskDisplay.textContent =
"🟡 高い";


violenceRiskDisplay.className="medium";


}

else{


violenceRiskDisplay.textContent =
"🔴 非常に高い";


violenceRiskDisplay.className="high";


}



// ------------------------
// 性的暴力判定
// ------------------------

if(sexualScore <=1){


sexualRiskDisplay.textContent =
"🟢 低い";


sexualRiskDisplay.className="low";


}

else if(sexualScore ===2){


sexualRiskDisplay.textContent =
"🟡 高い";


sexualRiskDisplay.className="medium";


}

else{


sexualRiskDisplay.textContent =
"🔴 非常に高い";


sexualRiskDisplay.className="high";


}



}



// ------------------------
// チェック時の処理
// ------------------------

document
.querySelectorAll(".riskItem")
.forEach((box)=>{


box.addEventListener(
"change",
calculateScore
);


});




// ------------------------
// リセット
// ------------------------

resetButton.addEventListener(
"click",
()=>{


document
.querySelectorAll(".riskItem")
.forEach((box)=>{


box.checked=false;


});


calculateScore();


});



calculateScore();
