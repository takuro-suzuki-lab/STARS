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

const violenceComment =
document.getElementById("violenceComment");

const sexualComment =
document.getElementById("sexualComment");

const sexualRiskDisplay =
document.getElementById("sexualRisk");


const resetButton =
document.getElementById("resetButton");



// ------------------------
// 項目設定
// ------------------------

const items = [

{
name:`
<div class="item-row">

<div class="badge badge-violence">

P1

</div>

<div class="item-content">

相手から乱暴な言動を受けた。

<span class="example">

例：大声で「バカヤロー」等と怒鳴られた。<br>
「コノヤロー」等の粗暴なメールが送られた。<br>
あなたの家の前で車のクラクションを鳴らしたりされた。

</span>

</div>

</div>
`,
score:1,
category:"violence",
class:"physical-item"
},

{
name:`
<div class="item-row">

<div class="badge badge-violence">P2</div>

<div class="item-content">

相手に名誉を傷つけられた。

<span class="example">

例：あなたを中傷するような内容を他者に告げた。<br>
あなたの名誉を傷付けるような内容をネット上に載せた。

</span>

</div>

</div>
`,
score:1,
category:"violence",
class:"physical-item"
},

{
name:`
<div class="item-row">

<div class="badge badge-violence">P3</div>

<div class="item-content">

相手にあなたの所有物を壊されたり，盗まれたりした。

<span class="example">

例：あなたの洋服，バッグ，持ち物，自宅の窓ガラス，車などを故意に壊されたり，傷つけられたりした。<br>
あなたの所有物が勝手に持ち去られたり，盗まれたりした。

</span>

</div>

</div>
`,
score:3,
category:"violence",
class:"physical-item"
},
  
{
name:`
<div class="item-row">

<div class="badge badge-violence">P4</div>

<div class="item-content">

相手からつきまとい行為を受けていたとき，あなたの自宅や職場の住所は公に公開された状態だった。

<span class="example">

例：インターネット上であなたの名前と職場の所属部署が紹介されていた。<br>
自宅と職場が同じ建物であった。

</span>

</div>

</div>
`,
score:1,
category:"violence",
class:"physical-item"
},

{
name:`
<div class="item-row">

<div class="badge badge-violence">P5</div>

<div class="item-content">

相手からつきまとい行為を受けていたとき，あなたは周囲に相談できる人や頼れる人がいなかった。

</div>

</div>
`,
score:1,
category:"violence",
class:"physical-item"
},

{
name:`
<div class="item-row">

<div class="badge badge-violence">P6</div>

<div class="item-content">

相手からつきまとい行為を受けていた頃，相手は違法な薬物や市販薬を乱用していた。

<span class="example">

例：違法薬物（大麻、有機溶剤、覚せい剤、コカイン、ヘロイン、LSDなど）や危険ドラッグ（ハーブ、リキッド、パウダーなど）を使用していた。<br>
市販薬や処方薬を大量に服薬していた。

</span>

</div>

</div>
`,
score:2,
category:"violence",
class:"physical-item"
},


{
name:`
<div class="item-row">

<div class="badge badge-sexual">

S1

</div>

<div class="item-content">

乱暴な言動をされた。～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～

<span class="example">

例：大声で「バカヤロー」等と怒鳴る。<br>
「コノヤロー」等の粗暴なメールを送信する。<br>
あなたの家の前で車のクラクションを鳴らしたりする。

</span>

</div>

</div>
`,
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
name:`
<div class="item-row">

<div class="badge badge-violence">P7</div>

<div class="item-content">

交際中または婚姻中に，相手から身体的な暴力を振るわれたことがある。

<span class="example">

例：暴力を振るわれたり，身体を傷つけられたりした。<br>
物（家具，鈍器など）で殴られた。<br>
物を投げつけられた。

</span>

</div>

</div>
`,
score:5,
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
<label class="item-label">

<div class="check-area">

<input
type="checkbox"
class="riskItem"
data-score="${item.score}"
data-category="${item.category}"
>

<div class="score-small">

${item.score}点

</div>

</div>

<div class="item-content">

${item.name}

</div>

</label>

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
violenceComment.textContent =
"身体的暴力に発展するリスクは比較的低いと考えられます。引き続き状況の変化に注意してください。";

violenceRiskDisplay.className="low";


}

else if(violenceScore ===4){


violenceRiskDisplay.textContent =
"🟡 高い";
violenceComment.textContent =
"身体的暴力に発展する可能性があります。対象者の状況を慎重に観察してください。";

violenceRiskDisplay.className="medium";


}

else{


violenceRiskDisplay.textContent =
"🔴 非常に高い";
violenceComment.textContent =
"身体的暴力へ発展するリスクが非常に高いと考えられます。速やかな安全確保と関係機関との連携を検討してください。";

violenceRiskDisplay.className="high";


}



// ------------------------
// 性的暴力判定
// ------------------------

if(sexualScore <=2){


sexualRiskDisplay.textContent =
"🟢 低い";
sexualComment.textContent =
"性的暴力に発展するリスクは比較的低いと考えられます。引き続き状況の変化に注意してください。";

sexualRiskDisplay.className="low";


}

else if(sexualScore ===3){


sexualRiskDisplay.textContent =
"🟡 高い";
sexualComment.textContent =
"性的暴力に発展する可能性があります。対象者の状況を慎重に観察してください。";

sexualRiskDisplay.className="medium";


}

else{


sexualRiskDisplay.textContent =
"🔴 非常に高い";
sexualComment.textContent =
"性的暴力へ発展するリスクが非常に高いと考えられます。速やかな安全確保と関係機関との連携を検討してください。";

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
