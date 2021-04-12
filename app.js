function createLiItems(input =[]){
	var out = '';

	for (let item of input){
			out += `
						<li class="submenu-custom__item"><a class="submenu-custom__href" href="${item.href}">${item.title}</a>
					`
					console.log(item.submenu.length);
			if(item.submenu.length > 0){

				out += `<ul class="submenu-custom__submenu-list">`
				for(let subItem of item.submenu){
					out += `
						<li class="submenu-custom__item"><a class="submenu-custom__href" href="${subItem.href}">${subItem.title}</a></li>
					`
				}
				out += `</ul>`
			}
			out +=`</li>`
	}
return out;

}

function insertItems(listName){
	var tempDiv = document.createElement('div');
	console.log(info[listName]);
	createLiItems(info[listName]);
	tempDiv.innerHTML = `<ul id="customSubmenuList" class="submenu-custom__menu-list">${createLiItems(info[listName])}</ul>`
	document.querySelector('#customSubmenuList .submenu-custom__menu').appendChild(tempDiv.firstChild);

	if(info.hasOwnProperty([listName])){
		document.querySelector('#customSubmenuList').classList.add('sub-menu-open')
	} else{
		document.querySelector('#customSubmenuList').classList.remove('sub-menu-open')
	};
}



var pattern ={

	html:`<div id="customSubmenuList" class="submenu-custom">
				<div class="submenu-custom__menu">
					
				</div>
			</div>`,

	sylesCss: `<style>
			.sub-menu-open{
				display: block !important
			}
			.submenu-custom {
				display:none;
			    position: absolute;
			    top: 30px;
			    left: 188px;;
			    height: auto;
			    width: auto;
			    padding: 10px;
			    z-index: 9999;
			}
			.submenu-custom__menu{
			    background: #fff;
			    color: #000;
			    border-radius: 4px;
			    border: 1px solid #d0dffe;
			}
			
			.submenu-custom__item {
			    list-style: none;
			    padding-right: 20px;
			}
			.submenu-custom__href {
			    color: #000 !important;
			    line-height: 26px!important;
			    margin-top: 0px !important;
			}
			.submenu-custom__href:hover {
			    line-height: 26px!important;
			    margin-top: 0px !important;
			}
			.submenu-custom__submenu-list {
			    position: absolute;
			    right: -60%;
			    background: #fff;
			    border-radius: 4px;
			    margin-top: -26px;
			    border: 1px solid #d0dffe;
			    display: none;
			  	/*
			  	    display: none;
			  	*/
			}
			.submenu-custom:hover .submenu-custom__item:hover ul.submenu-custom__submenu-list {
			    display: block;
			}
			</style>`

},
info ={
	'Настройки':[
			{
				title: 'Шаблоны данных',
				href: '/edit/data.php?handler=1',
				submenu: [{title: 'some Link lvl 2',
				href: '/somehref'}]
			},
		],
	'Утилиты':[
			{
				title: 'some Link',
				href: '/somehref',
				submenu: []
			},
		]

},
settings ={
	close:{
		menuItemOver : false,
		subMenuItemOver : false
	}
};

function closeCheck(){
	if(!settings.menuItemOver && !settings.subMenuItemOver ){
		document.querySelector('#customSubmenuList').classList.remove('sub-menu-open');
		document.querySelector('#customSubmenuList .submenu-custom__menu').innerHTML ='';
	}
}

document.querySelectorAll('.menu.fl-l a.fl-l ').forEach(function(item){
	item.addEventListener('mouseenter', function(){
		settings.menuItemOver = true;
		document.querySelector('#customSubmenuList .submenu-custom__menu').innerHTML ='';
		insertItems(this.innerText);
		document.getElementById('customSubmenuList').style= `top:${(this.getBoundingClientRect().top) + 20}px; left:${this.getBoundingClientRect().left - 10}px;`;
	});
	item.addEventListener('mouseleave', function(){
		settings.menuItemOver = false;
		setTimeout(closeCheck, 500);
	});
	
})


	var tempDiv = document.createElement('div');
	tempDiv.innerHTML = pattern.sylesCss;
	document.querySelector('.menu.fl-l .content').appendChild(tempDiv.firstChild);
	tempDiv.innerHTML = pattern.html;
	document.querySelector('.menu.fl-l .content').appendChild(tempDiv.firstChild);




document.querySelectorAll('#customSubmenuList').forEach(function(item){
	item.addEventListener('mouseenter', function(){
		console.log('sub over')
		settings.subMenuItemOver = true;
	});
	item.addEventListener('mouseleave', function(){
		settings.subMenuItemOver = false;
		setTimeout(closeCheck, 500);
		
	});
	
})








/*window.onload = function(){
	var tempDiv = document.createElement('div');
	tempDiv.innerHTML = html.html;
	tempDiv.innerHTML += html.html;
	document.querySelectorAll('.menu.fl-l .content').appendChild(tempDiv);
};
*/