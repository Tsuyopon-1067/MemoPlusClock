window.onload = function(){
    document.getElementById("memo").value = localStorage.getItem('memoData');
}
function saveMemo()
{
    var memoContent = document.getElementById("memo").value;
    console.log(memoContent);
    localStorage.setItem('memoData', memoContent);
}
