
Array.prototype.lastIndex= function(what){
 var L= this.length;
 while(L){
  if(this[--L]=== what) return L;
 }
 return -1;
}
Array.prototype.remove= function(arg){
 var what, L= arg.length, ax;
 while(L && this.length){
  what= arg[--L];
  while((ax= this.lastIndex(what))!= -1){
   this.splice(ax, 1);
  }
 }
 return this;
}






var s = document.getElementsByTagName('param');
var r = [];
var rStr = [];
var text = '';

function spaceDelete (str) {

return str.replace(/(^\s+|\s+$)/g, '');

}

function unique(uArr) { // Честно стырил функцию на просторах инета =З
    var obj = {};

    for (var i = 0; i < uArr.length; i++) {
        var str = uArr[i];
        obj[str] = true; // запомнить строку в виде свойства объекта
    }

    return Object.keys(obj); // или собрать ключи перебором для IE8-
}


/*    START    */

for (let i=0; i<s.length; i++){

    if (s[i].innerHTML.length < 40 && spaceDelete(s[i].getAttribute('name').toLowerCase()) !='цвет' ) {

r.push(spaceDelete(s[i].getAttribute('name').toLowerCase()));

    }
    else{

        rStr.push(spaceDelete(s[i].getAttribute('name').toLowerCase()));
    }
}

r = unique(r);
rStr = unique(rStr);

r = r.remove(rStr);

text = 'ВЫБОР ИЗ СПИСКА \n\n'

for (let i =0; i<r.length; i++){

text += r[i][0].toUpperCase() + r[i].slice(1) + '\n';

}

if (rStr.length >0) {

text += '\n\n СТРОКА \n\n';

for (let i =0; i<rStr.length; i++){

text += rStr[i][0].toUpperCase() + rStr[i].slice(1) + '\n';

}

}

console.log(text);



