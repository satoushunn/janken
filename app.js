// ジャンケンの手の番号を設定
const GU = 1;
const CHOKI = 2;
const PA = 3;

// ジャンケンの入力ダイアログボックスを表示
let hum = prompt('半角数字で１～３を入力してください。\n\n' + GU + ':グー\n' + CHOKI + ':チョキ\n' + PA + ':パー');
hum = parseInt(hum, 10);
console.log(hum);

//入力値のチェック
if (hum !== GU && hum !== CHOKI && hum !== PA) {
    //入力値が不適切な場合
    alert('入力値を上手く認識できませんでした。ブラウザを再度読み込みすると、もう一度挑戦できます。');
}  else {
    //コンピューターの手を決める
    let COM = Math.floor(Math.random() * 3) + 1;
    console.log(COM);

      // コンピューターの手を決める
      let comHandName = '';
      switch (COM) {
          case GU:
              comHandName = 'グー';
              break;
          case CHOKI:
              comHandName = 'チョキ';
              break;
          case PA:
              comHandName = 'パー';
              break;
        }
        console.log(comHandName);
        
        // 結果の判定
        let msgResult = '';
        if (hum === COM) {
            msgResult = '結果はあいこでした。';
        } else if ((COM === GU && hum === PA) || (COM === CHOKI && hum === GU) || (COM === PA && hum === CHOKI)) {
            msgResult = '勝ちました';
        } else {
            msgResult = '負けました';
        }

        // 最終的な結果の表示
        msgResult = msgResult + 'コンピューターの出した手は「' + comHandName + '」でした';
        alert(msgResult);
        }


