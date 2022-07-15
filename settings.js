// 初期読み込み clock.htmlから呼ばれて表示されたときに実行される
window.addEventListener("load",function() {
    // カラーパレット設定
    readVariable();
    document.getElementById('clockFontColor').value = clockFontColor;
    document.getElementById('dateFontColor').value = dateFontColor;
    document.getElementById('backColor').value = backColor;
    document.getElementById('memoFontColor').value = memoFontColor;
    document.getElementById('memoBackColor').value = memoBackColor;
    createOption();
});
// 適用ボタン
function apply() {
    clockFontColor = document.getElementById('clockFontColor').value;
    dateFontColor = document.getElementById('dateFontColor').value;
    backColor = document.getElementById('backColor').value;
    memoFontColor = document.getElementById('memoFontColor').value;
    memoBackColor = document.getElementById('memoBackColor').value;
    memoFont = document.getElementById('memoFont').value;

    setColor();
    saveColor();
    setFont();
    saveFont();

    window.close();
}
// 設定した色の適用
function setColor() {
    window.opener.document.getElementById('clock_time').style.color = clockFontColor;
    window.opener.document.getElementById('clock_date').style.color = dateFontColor;
    window.opener.document.getElementById('clock_time').style.backgroundColor = backColor;
    window.opener.document.getElementById('clock_date').style.backgroundColor = backColor;
    window.opener.document.getElementById('memo').style.color = memoFontColor;
    window.opener.document.getElementById('memo').style.backgroundColor = memoBackColor;
}
// 設定したフォントの適用
function setFont() {
    window.opener.document.getElementById('memo').style.fontFamily = memoFont;
}

//フォント選択部分を形成
function createOption() {
    var fontOption = document.getElementById('memoFont');
    var length = font.length;
    var i=0;

    //前に選んだフォントが先頭に来るように入れ替え
    while(i<length) {
        if(memoFont == font[i][0]) {
            var tmp = font[0];
            font[0] = font[i];
            font[i] = tmp;
            break;
        }
        i++
    }
    //要素を生成
    for(var i=0; i<length; i++) {
        var option = document.createElement("option");
        option.text = font[i][1];
        option.value = font[i][0];
        fontOption.appendChild(option);
    }
}