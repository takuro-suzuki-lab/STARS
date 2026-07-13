// ------------------------
// STARS Ver.1
// ------------------------

const checklist = document.getElementById("checklist");

const scoreDisplay = document.getElementById("score");

const riskDisplay = document.getElementById("risk");

const resetButton = document.getElementById("resetButton");


// 仮の12項目（すべて3点）

const items = [

{ name:"項目1", score:3 },

{ name:"項目2", score:3 },

{ name:"項目3", score:3 },

{ name:"項目4", score:3 },

{ name:"項目5", score:3 },

{ name:"項目6", score:3 },

{ name:"項目7", score:3 },

{ name:"項目8", score:3 },

{ name:"項目9", score:3 },

{ name:"項目10", score:3 },

{ name:"項目11", score:3 },

{ name:"項目12", score:3 }

];


// ------------------------
// 項目を表示
// ------------------------

items.forEach((item, index)=>{

    const row=document.createElement("div");

    row.className="item";

    row.innerHTML=`
        <label>
            <input
                type="checkbox"
                class="riskItem"
                data-score="${item.score}">
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

    let total=0;

    document.querySelectorAll(".riskItem").forEach(box=>{

        if(box.checked){

            total+=Number(box.dataset.score);

        }

    });

    scoreDisplay.textContent=total+" 点";


    if(total<=3){

        riskDisplay.textContent="🟢 低リスク";

        riskDisplay.className="low";

    }

    else if(total==4){

        riskDisplay.textContent="🟡 要注意";

        riskDisplay.className="medium";

    }

    else{

        riskDisplay.textContent="🔴 ハイリスク";

        riskDisplay.className="high";

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
