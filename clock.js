function clock()
{
    var weeksEn = new Array("Sun","Mon","Thu","Wed","Thu","Fri","Sat");
    var weeksJp = new Array("日","月","火","水","木","金","土");
    var weeks = weeksEn


    // 現在日時を表すインスタンスを取得
    var now = new Date();

    var year = now.getFullYear();
    var month = now.getMonth()+1;    // getMonthは1小さい
    var day = d2(now.getDate());

    var week = weeks[now.getDay()];  // 対応する曜日を取得

    var hour = d2(now.getHours());
    var min = d2(now.getMinutes());
    var sec = d2(now.getSeconds());

    // HTML: <div id="clock_date">(ココの日付文字列を書き換え)</div>
    document.getElementById("clock_date").textContent =  year + "/" + month + "/" + day + " (" + week + ")";

    // HTML: <div id="clock_time">(ココの時刻文字列を書き換え)</div>
    document.getElementById("clock_time").textContent = hour + ":" + min + ":" + sec;

}
// printf %02d
function d2(num) {
    var res
    if( num < 10 ) {
        res = "0" + num;
    } else {
        res = num;
    }
    return res;
}

// clock関数を100ミリ秒ごとに実行
setInterval(clock, 100);

// settings.htmlを呼び出す
function openSettingWindow() {
    window.open('settings.html', '設定', 'width=800,height=600');

    clockFontColor = document.getElementById('clock_time').style.color;
    dateFontColor = document.getElementById('clock_date').style.color;
    backColor = document.getElementById('clock_date').style.backgroundColor;
    memoFontColor = document.getElementById('clock_date').style.color;
    memoBackColor = document.getElementById('clock_date').style.backgroundColor;
}

window.addEventListener("load",function() {
    readVariable();
    setColor();
    setFont();
});
function setColor() {
    console.log('setColor');
    document.getElementById('clock_time').style.color = clockFontColor;
    document.getElementById('clock_date').style.color = dateFontColor;
    document.getElementById('clock_time').style.backgroundColor = backColor;
    document.getElementById('clock_date').style.backgroundColor = backColor;
    document.getElementById('memo').style.color = memoFontColor;
    document.getElementById('memo').style.backgroundColor = memoBackColor;
}
function setFont() {
    console.log('setFont');
    document.getElementById('memo').style.fontFamily = memoFont;
}