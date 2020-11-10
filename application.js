// ディスクの枚数を入力するプロンプト
const n = window.prompt("ディスクの枚数を入力してください");
console.log("ディスクの枚数 : " + n + "枚");

// ポールを定義
const poles = [[],[],[]];

// 入力された枚数を配列に挿入
for (let i = 1; i <= n; i++){
  poles[0].push(i);
}

function hanoi(n, src, dst, tmp) {
  if(n > 1) hanoi(n - 1, src, tmp, dst);
    console.log("リングNo." + n + "を" + src + "から" + tmp + "へ移動");
    targetRing = poles[src].shift();
    poles[tmp].unshift(targetRing);
    console.log(poles[0],poles[1],poles[2]);
  if(n > 1) hanoi(n - 1, dst, src, tmp);
}

hanoi(n, '0', '1', '2');
