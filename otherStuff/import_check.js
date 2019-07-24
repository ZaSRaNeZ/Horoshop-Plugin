/*----------------  Отображение дублей при импорте  -------------------*/



var s = document.getElementsByClassName('dt-select__label-title')

var dub =[];
var out = '';
var dub_count = 0;

function unique(uArr) { // Честно стырил функцию на просторах инета =З
    var obj = {};

    for (var i = 0; i < uArr.length; i++) {
        var str = uArr[i];
        obj[str] = true; // запомнить строку в виде свойства объекта
    }

    return Object.keys(obj); // или собрать ключи перебором для IE8-
}

for (var i=0; i<s.length;i++){

for (var l=0; l<s.length;l++){

if (i != l){

if (s[i].innerHTML == s[l].innerHTML && s[i].innerHTML != ' не импортировать '  ){

dub.push(s[i].innerHTML);
s[i].style = "color: red; font-size:1.5em;";


}

}
}
}


dub = unique(dub);
console.log(dub);

for( let i = 0; i<dub.length; i++){
    
    for (let l = 0; l<s.length; l++){
        
        if (dub[i] == s[l].innerHTML){
            
            dub_count = dub_count+1;
            
        }
        
    }
    
    
    
    out += dub[i] + " - " +dub_count + " повторений \n";
    dub_count=0;
    
}

if (s.length != 0){
alert(out);
    
}