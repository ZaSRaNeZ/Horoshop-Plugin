var handlersObj = {},
    sqlText = '';


function nameValidator(validText){


	validText = validText.replace(/[-!$%^&*()+|~=`{}[:;<>?,.@#\]/\\№"']/g,'');


	console.log(validText);
	return validText;

}



function printResult(text, top) {
	let textArea = $('<textarea />')
		.css({
			background: '#FFF',
			width: '100%',
			height: '100%'
		})
		.text(text),
		div = $('<pre />')

			.appendTo(document.body)
			.append(textArea);
	$('<input type="button" value="CLOSE">')

		.appendTo(div)
		.click(() => div.remove());
}


function textSlice() {
	var rArr = [];
	var rArr = document.getElementById('text').value.split('\n');
	for (let i = 0; i < rArr.length; i++) {
		rArr[i] = rArr[i].trim().split('@');

		if (rArr[i] == '') {
			rArr.splice(i, 1);
		}
	}
	return rArr;
}

function templateHandlersCreate(title, table, ref = 'h_product_characteristics'){
    var templateText = `
    CREATE TABLE ${table} SELECT * FROM ${ref};

        INSERT INTO handlers (\`name\`, \`table\`,\`title\`,\`parent\`,\`type\`) VALUES ('${table.replace(/h_catalog_/g,"")}' , '${table}' , '${title}' , 17 , 2 );
        SET @handlerId = (SELECT id FROM handlers WHERE \`table\` = '${table}' LIMIT 1);

        INSERT INTO handlers_format_group (\`title\`, \`parent\`) VALUES ('Характеристики', @handlerId );

        #---------------Access   4 12 13 14 


        INSERT INTO h_common_access (type, item, role, access_level)
        VALUES(3, @handlerId, 13, 1),(3, @handlerId, 13, 2),(3, @handlerId, 13, 3);
            
            `;
    return templateText;


    
}

function templateCharCreate (){

}


function start() {
    var textArr = textSlice();

    textArr.forEach(element => {
        var el = nameValidator(element[0]);
        var tableName = element[1] == undefined ? '' : element[1] ;
        handlersObj[el] = {
            title: el,
            table: tableName
        }
    });

    for (let el in handlersObj){

        sqlText += template(handlersObj[el].title, handlersObj[el].table)
    }
        

    
    

}




window.onload = function () {


	let mb = document.getElementById("startCharac");
	mb.addEventListener("click", start);
	let CharList = document.getElementById("text");
	let TableNameParam = document.getElementById("tableName");
	if (localStorage.getItem("CharListAutosave")) {
		CharList.value = localStorage.getItem("CharListAutosave");
	}
	if (localStorage.getItem("TableNameParamAutosave")) {
		TableNameParam.value = localStorage.getItem("TableNameParamAutosave");
		TableNameParam.parentElement.style = 'border-color: red;'
	}
	CharList.addEventListener("change", function () {
		localStorage.setItem("CharListAutosave", CharList.value);
	});
	TableNameParam.addEventListener("change", function () {
		localStorage.setItem("TableNameParamAutosave", TableNameParam.value);
	});

}