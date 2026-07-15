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

相手から乱暴な言動をされた。

<span class="example">

例：大声で「バカヤロー」等と怒鳴られた。<br>
「コノヤロー」等の粗暴なメールが送られた。<br>
あなたの家の前で車のクラクションを鳴らされた。

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

相手にあなたの評判や信用を傷つけられた。

<span class="example">

例：あなたを中傷するような内容を他者に告げられた。<br>
あなたを悪く言う内容をネット上で拡散された。

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

相手にあなたの持ち物を壊されたり、盗まれたりした。

<span class="example">

例：あなたの洋服、持ち物、自宅の窓ガラス、車などを故意に壊されたり、傷つけられたりした。<br>
あなたの所有物が勝手に持ち去られたり、盗まれたりした。

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

あなたの自宅や職場の所在地を、相手は容易に知ることができる。

<span class="example">

例：インターネット上であなたの名前と勤務先が紹介されている。<br>
自宅と職場が同じ建物である。

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

つきまとい行為について、あなたは周囲に相談できる人や頼れる人がいない。

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

相手は違法な薬物や市販薬、処方薬を乱用している。

<span class="example">

例：覚せい剤、大麻、危険ドラッグなどの違法薬物を使用している。<br>
市販薬や処方薬を大量に服用している。

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

性的に恥ずかしい思いをさせられた。（性的しゅう恥心を侵害する行為）

<span class="example">

例：わいせつな写真や画像を送り付けられた。<br>
電話や手紙，テキストメッセージなどで、卑わいな言葉を告げられた。 

</span>

</div>

</div>
`,
score:2,
category:"sexual",
class:"sexual-item"
},

{
name:`
<div class="item-row">

<div class="badge badge-sexual">S2</div>

<div class="item-content">

GPS機器や紛失防止タグ（AirTagなど）を用いて位置情報を取得された。

<span class="example">

例：あなたの車両や所有物にGPS機器や紛失防止タグなどを取り付けられて、あなたの位置情報を勝手に取得された。<br>
あなたのスマートフォン等を勝手に操作し、記録されている位置情報を見られた。

</span>

</div>

</div>
`,
score:1,
category:"sexual",
class:"sexual-item"
},

{
name:`
<div class="item-row">

<div class="badge badge-sexual">S3</div>

<div class="item-content">

あなたは、相手からつきまとい行為を受けているのは、自分に責任があると感じている。

</div>

</div>
`,
score:1,
category:"sexual",
class:"sexual-item"
},

{
name:`
<div class="item-row">

<div class="badge badge-sexual">S4</div>

<div class="item-content">

相手はあなたと交際すること（恋愛関係になること）を求めている。

</div>

</div>
`,
score:2,
category:"sexual",
class:"sexual-item"
},


{
type:"notice",
text:
"以下の項目は、<strong><u>相手が以前に交際または結婚していた人である場合のみ</u></strong>お答えください。"
},


{
name:`
<div class="item-row">

<div class="badge badge-violence">P7</div>

<div class="item-content">

交際中または婚姻中に，相手から身体的な暴力を振るわれたことがある。

<span class="example">

例：平手打ち、殴打、蹴る、噛みつく、髪を引っ張るなどされた。<br>
物で殴られたり，刃物で切りつけられたりした

</span>

</div>

</div>
`,
score:5,
category:"violence",
class:"physical-item"
},


{
name:`
<div class="item-row">

<div class="badge badge-sexual">S5</div>

<div class="item-content">

交際中または婚姻中に、相手から強引に性的行為をされたことがある。

<span class="example">

例：嫌だと言っているのに，無理やり性行為やキスをされた。<br>
強引に体を触られた。

</span>

</div>

</div>
`,
score:7,
category:"sexual",
class:"sexual-item"
}

];




// ------------------------
// 項目表示
// ------------------------

items.forEach((item)=>{

    const row = document.createElement("div");

    if(item.type==="notice"){

        row.className="notice";

        row.innerHTML=`<p>${item.text}</p>`;

    }

    else{

        row.className="item " + item.class;

        row.innerHTML=`

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

        ${item.name}

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
"現時点では、身体的暴力に発展するリスクは比較的低いと考えられます。ただし、状況が変化する可能性もあるため、引き続き経過に注意してください。";

violenceRiskDisplay.className="low";


}

else if(violenceScore ===4){


violenceRiskDisplay.textContent =
"🟡 要注意";
violenceComment.textContent =
"身体的暴力に発展する可能性があります。状況の変化に十分注意し、必要に応じて周囲の人や関係機関へ相談することを検討してください。";

violenceRiskDisplay.className="medium";


}

else{


violenceRiskDisplay.textContent =
"🔴 高い";
violenceComment.textContent =
"身体的暴力に発展するリスクが高いと考えられます。安全確保を最優先とし、必要に応じて警察や支援機関などへの相談を検討してください。";

violenceRiskDisplay.className="high";


}



// ------------------------
// 性的暴力判定
// ------------------------

if(sexualScore <=2){


sexualRiskDisplay.textContent =
"🟢 低い";
sexualComment.textContent =
"現時点では、性的暴力に発展するリスクは比較的低いと考えられます。ただし、状況が変化する可能性もあるため、引き続き経過に注意してください。";

sexualRiskDisplay.className="low";


}

else if(sexualScore ===3){


sexualRiskDisplay.textContent =
"🟡 要注意";
sexualComment.textContent =
"性的暴力に発展する可能性があります。状況の変化に十分注意し、必要に応じて周囲の人や関係機関へ相談することを検討してください。";

sexualRiskDisplay.className="medium";


}

else{


sexualRiskDisplay.textContent =
"🔴 高い";
sexualComment.textContent =
"性的暴力に発展するリスクが高いと考えられます。安全確保を最優先とし、必要に応じて警察や支援機関などへの相談を検討してください。";

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
