var rArr = [];
var t = '';
var langg = '';

function book(bookId){
    var text = '';
    var rArr = document.getElementById(bookId).value.split('\n');
    
     for (let i = 0; i < rArr.length; i++) {

        if (rArr[i] != "") {
         text += rArr[i] + ";";
        }
    }
    
    document.getElementById(bookId).value = (text);
    return text;
    
    
}


document.getElementById('book_button').addEventListener('click', function () {
    
    
    var lang1 = document.getElementById('lang1').value;
    var lang2 = document.getElementById('lang2').value;

    t = book('text_1');
    
    var bookout = "var s = document.getElementsByClassName('comment'); for (let i = 0; i<s.length; i++){ if( s[i].innerText.indexOf('("+lang1+")') != -1){ s[i].style.color = 'green'; var par = s[i].parentNode.parentNode; break;}}; var b = par.getElementsByClassName('j-lang-main'); b[0].value = '" + t + "'; "
    
    t = book('text_2');
    
    
     bookout += "var s = document.getElementsByClassName('comment'); for (let i = 0; i<s.length; i++){ if( s[i].innerText.indexOf('("+lang2+")') != -1){ s[i].style.color = 'green'; var par = s[i].parentNode.parentNode; break;}}; var b = par.getElementsByClassName('j-lang-main'); b[0].value = '" + t + "'; "


    chrome.tabs.executeScript({
        code: bookout
    });

    

});
