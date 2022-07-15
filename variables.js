var clockFontColor = '#000000';
var dateFontColor = '#000000';
var backColor = '#ffffff';
var memoFontColor = '#000000';
var memoBackColor = '#ffffff';
var memoFont = '';
var font = [
            ['', 'デフォルト'], 
            ['sans-serif', 'サンセリフ'],
            ['Noto Serif JP', 'モトセリフ'],
            ['Zen Maru Gothic', 'ZEN丸ゴシック'],
           ];

// 変数を保存する
function saveColor() {
    localStorage.setItem('clockFontColor', clockFontColor);
    localStorage.setItem('dateFontColor', dateFontColor);
    localStorage.setItem('backColor', backColor);
    localStorage.setItem('memoFontColor', memoFontColor);
    localStorage.setItem('memoBackColor', memoBackColor);
}

function saveFont() {
    localStorage.setItem('memoFont', memoFont);
}

// 起動時に変数を読み込む
function readVariable() {
    clockFontColor = '#000000';
    dateFontColor= '#000000';
    backColor= '#ffffff';
    memoFontColor= '#000000';
    memoBackColor= '#ffffff';
    memoFont = '';
    if (localStorage.getItem('clockFontColor') != null) {
        clockFontColor = localStorage.getItem('clockFontColor');
    }
    if (localStorage.getItem('dateFontColor') != null) {
        dateFontColor = localStorage.getItem('dateFontColor');
    }
    if (localStorage.getItem('backColor') != null) {
        backColor = localStorage.getItem('backColor');
    }
    if (localStorage.getItem('memoFontColor') != null) {
        memoFontColor = localStorage.getItem('memoFontColor');
    }
    if (localStorage.getItem('memoBackColor') != null) {
        memoBackColor = localStorage.getItem('memoBackColor');
    }
    if(localStorage.getItem('memoFont') != null) {
        memoFont = localStorage.getItem('memoFont');
    }
}
