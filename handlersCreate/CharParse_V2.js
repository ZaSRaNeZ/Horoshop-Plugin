

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




var catList =[];
var cat = document.getElementsByTagName('category');
var params = document.getElementsByTagName('param');
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




/*   ctegory massive create  */

function addToList(ID){
	var childList =[];
	

	for (let i = 0; i < cat.length; i++) {
		
		if (cat[i].getAttribute('parentId') == ID) {

			childList.push(cat[i].id);
		}
	}
	
	for(let i=0; i<childList.length; i++){

		catList[catList.length-1].push(childList[i]);
		addToList(childList[i]);
	}
}

for (let i =0; i<cat.length; i++){

	if (cat[i].getAttribute('parentId') == null){

		catList.push([cat[i].innerHTML]);
		catList[catList.length-1].push(cat[i].id);
		addToList(cat[i].id)
	}
}

console.log(catList)




for (var i = 0; i < catList.length; i++) {
	r.push([catList[i][0],[]]);
	rStr.push([catList[i][0],[]]);
}




console.log(r)
console.log(rStr)





for (let i = 0; i < params.length; i++) {
	console.log(i);
	
	for (let l = 0; l < catList.length; l++) {
		var paramCatId = params[i].parentNode.getElementsByTagName('categoryId');

		if(catList[l].indexOf(paramCatId[0].innerHTML) >= 0){

			
			for (var k = 0; k < r.length; k++) {

				if (catList[l][0] == r[k][0]) {		

					if (params[i].innerHTML.length < 40 && spaceDelete(params[i].getAttribute('name').toLowerCase()) !='цвет' ) {

						r[k][1].push(spaceDelete(params[i].getAttribute('name').toLowerCase()));
			   		}
			   		 else{

			      		rStr[k][1].push(spaceDelete(params[i].getAttribute('name').toLowerCase()));
			    	}
		    	}
		    }
		}
	}	
}






/*    START    */



for (var i = 0; i < r.length; i++) {

	
	
	
	r[i][1] = unique(r[i][1]);
	rStr[i][1] = unique(rStr[i][1]);
	r[i][1] = r[i][1].remove(rStr[i][1]);
}


for (let i = 0; i < r.length; i++) {
	text += '\n\n@@/---------------------' +r[i][0]+'\n\n';
	text += '@/---ВЫБОР ИЗ СПИСКА \n\n'
	for (let l = 0; l < r[i][1].length; l++) {

		text += r[i][1][l][0].toUpperCase() + r[i][1][l].slice(1) + '\n';
	}
	text += '\n\n@/---СТРОКА \n\n'
	for (let l = 0; l < rStr[i][1].length; l++) {

		text += rStr[i][1][l][0].toUpperCase() + rStr[i][1][l].slice(1) + '\n';
	}

}

console.log(r);
console.log(rStr);

console.log(text);


//document.body.innerHTML = text;