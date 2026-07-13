// ------------------------
// STARS Ver.2
// 身体的暴力・性的暴力を別々に判定
// ------------------------

const checklist = document.getElementById("checklist");

const violenceScoreDisplay = document.getElementById("violenceScore");
const sexualScoreDisplay = document.getElementById("sexualScore");

const violenceRiskDisplay = document.getElementById("violenceRisk");
const sexualRiskDisplay = document.getElementById("sexualRisk");

const resetButton = document.getElementById("resetButton");


// ------------------------
// 仮の12項目
// category:
// violence = 身体的暴力
// sexual = 性的暴力
// ------------------------

const items = [

{ name:"項目1", score:3, category:"violence" },
{ name:"項目2", score:3, category:"violence" },
{ name:"項目3", score:3, category:"violence" },
{ name:"項目4", score:3, category:"violence" },
{ name:"項目5", score:3, category:"violence" },
{ name:"項目6", score:3, category:"violence" },
{ name:"項目7", score:3, category:"violence" },

{ name:"項目8", score:3, category:"sexual" },
{ name:"項目9", score:3, category:"sexual" },
{ name:"項目10", score:3, category:"sexual" },
{ name:"項目11", score:3, category:"sexual" },
{ name:"項目12", score:3, category:"sexual" }

];


// ------------------------
// 項目表示
// ------------------------

items.forEach((item,index)=>{

    const row=document.createElement("div");

    row.className="item";

    row.innerHTML=`

<label>

<input
type="checkbox"
class="riskItem"
data-score="${item.score}"
data-category="${item.category}">

${item.name}

</label>

<strong>${item.score}点</strong>

`;

    checklist.appendChild(row);

});


// ------------------------
// 点数計算
// ------------------------

function calculateScore(){

    let violenceScore=0;
    let sexualScore=0;

    document.querySelectorAll(".riskItem").forEach(box=>{

        if(box.checked){

            const score=Number(box.dataset.score);

            if(box.dataset.category=="violence"){

                violenceScore+=score;

            }else{

                sexualScore+=score;

            }

        }

    });

    violenceScoreDisplay.textContent=violenceScore+" 点";
    sexualScoreDisplay.textContent=sexualScore+" 点";


    //-----------------------
    // 身体的暴力判定
    //-----------------------

    if(violenceScore<=3){

        violenceRiskDisplay.textContent="🟢 低リスク";
        violenceRiskDisplay.className="low";

    }else if(violenceScore==4){

        violenceRiskDisplay.textContent="🟡 要注意";
        violenceRiskDisplay.className="medium";

    }else{

        violenceRiskDisplay.textContent="🔴 ハイリスク";
        violenceRiskDisplay.className="high";

    }


    //-----------------------
    // 性的暴力判定
    //-----------------------

    if(sexualScore<=1){

        sexualRiskDisplay.textContent="🟢 低リスク";
        sexualRiskDisplay.className="low";

    }else if(sexualScore==2){

        sexualRiskDisplay.textContent="🟡 要注意";
        sexualRiskDisplay.className="medium";

    }else{

        sexualRiskDisplay.textContent="🔴 ハイリスク";
        sexualRiskDisplay.className="high";

    }

}


// ------------------------
// イベント登録
// ------------------------

document.querySelectorAll(".riskItem").forEach(box=>{

    box.addEventListener("change",calculateScore);

});


// ------------------------
// リセット
// ------------------------

resetButton.addEventListener("click",()=>{

    document.querySelectorAll(".riskItem").forEach(box=>{

        box.checked=false;

    });

    calculateScore();

});

calculateScore();
