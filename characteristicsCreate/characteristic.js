	var arrru = new Array('Я', 'я', 'Ю', 'ю', 'Ч', 'ч', 'Ш', 'ш', 'Щ', 'щ', 'Ж', 'ж', 'А', 'а', 'Б', 'б', 'В', 'в', 'Г', 'г', 'Д', 'д', 'Е', 'е', 'Ё', 'ё', 'З', 'з', 'И', 'и', 'Й', 'й', 'К', 'к', 'Л', 'л', 'М', 'м', 'Н', 'н', 'О', 'о', 'П', 'п', 'Р', 'р', 'С', 'с', 'Т', 'т', 'У', 'у', 'Ф', 'ф', 'Х', 'х', 'Ц', 'ц', 'Ы', 'ы', 'Ь', 'ь', 'Ъ', 'ъ', 'Э', 'э', ' ');

	var arren = new Array('Ya', 'ya', 'Yu', 'yu', 'Ch', 'ch', 'Sh', 'sh', 'Sh', 'sh', 'Zh', 'zh', 'A', 'a', 'B', 'b', 'V', 'v', 'G', 'g', 'D', 'd', 'E', 'e', 'E', 'e', 'Z', 'z', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'F', 'f', 'H', 'h', 'C', 'c', 'Y', 'y', '', '', '', '', 'E', 'e', '_');


	function cyrillToLatin(text) {
	    for (var i = 0; i < arrru.length; i++) {
	        var reg = new RegExp(arrru[i], "g");
	        text = text.replace(reg, arren[i]);
	    }
	    return text;
	}



	function spaceDelete(str) {

	    return str.replace(/(^\s+|\s+$)/g, '');

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
	        rArr[i] = spaceDelete(rArr[i]);

	        if (rArr[i] == '') {
	            rArr.splice(i, 1);
	        }
	    }
	    return rArr;
	}

	function unique(uArr) { // Честно стырил функцию на просторах инета =З
	    var obj = {};

	    for (var i = 0; i < uArr.length; i++) {
	        var str = uArr[i];
	        obj[str] = true; // запомнить строку в виде свойства объекта
	    }

	    return Object.keys(obj); // или собрать ключи перебором для IE8-
	}


	function start() {

	    if (document.getElementById('text').value == '') {
	        document.getElementById('text').style.border = '2px solid red';
	        return;

	    }


	    /*characType = select   - выбор из списка
	      characType = input   - Строка
	       
	    */

	    var localizeParam = 0;

	    var tableName = spaceDelete(document.getElementById('tableName').value);

	    var characType = 0;

	    if (document.getElementById('select').checked) {
	        characType = 'select';
	        localizeParam = 0;
	        var columnType = 'int(11)';


	    }
	    if (document.getElementById('string').checked) {
	        characType = 'input';
	        localizeParam = 1;
	        var columnType = 'varchar(255)';

	    }




	    var arrStartInd = 0;

	    if (document.getElementById('no').checked) {
	        arrStartInd = 1
	    }

	    var x = textSlice();
	    x = unique(x);
	    var arr = [];
	    console.log(cyrillToLatin(x[0]));

	    var sqlText = '';

	    for (let ind = arrStartInd; ind < x.length; ind++) {

	        var xEn = cyrillToLatin(x[ind]);

	        sqlText += "SET @colcheck =  (SELECT COUNT(COLUMN_NAME) AS EXIST FROM INFORMATION_SCHEMA.COLUMNS WHERE  TABLE_NAME = '" + tableName + "' AND `COLUMN_NAME` = '" + xEn + "');\n" +


	            "SET @stmt = case @colcheck \n" +
	            "WHEN 0 THEN \" ALTER TABLE " + tableName + " ADD `" + xEn + "` " + columnType + " NOT NULL; \"" +
	            "ELSE \"SET @t=@t\"" +
	            "END;\n" +

	            "PREPARE stmt from @stmt;\n" +
	            "EXECUTE stmt;\n" +
	            "DEALLOCATE PREPARE stmt;\n\n" +

	            "SET @stmt = case @colcheck\n" +
	            "WHEN 0 THEN \" INSERT INTO handlers_format (`parent`, `type`, `name`, `title`, `sortorder`, `group`, `localize`) VALUES ((SELECT id FROM handlers WHERE `table` = '" + tableName + "' LIMIT 1),'" + characType + "','" + xEn + "','" + x[ind] + "','1',(SELECT id FROM handlers_format_group WHERE `type` = (SELECT id FROM book_group_type WHERE `title` = 'Основная') AND `parent` = (SELECT id FROM handlers WHERE `table` = '" + tableName + "') LIMIT 1),	'" + localizeParam + "'	);\"\n" +
	            "ELSE \"SET @t=@t\"\n" +
	            "END;\n" +

	            "PREPARE stmt from @stmt;\n" +
	            "EXECUTE stmt;\n" +
	            "DEALLOCATE PREPARE stmt;\n\n";


	        if (characType == 'select') {


	            sqlText += "SET @stmt = case @colcheck\n" +
	                "  WHEN 0 THEN \"INSERT INTO books (`title`, `table`) VALUES ('', '');\"\n" +
	                "ELSE \"SET @t=@t\"\n" +

	                "END;\n" +

	                "PREPARE stmt from @stmt;\n" +
	                "EXECUTE stmt;\n" +
	                "DEALLOCATE PREPARE stmt;\n\n" +

	                "SET @maxBooksid = (SELECT max(id) FROM books);\n" +


	                "SELECT CONCAT ('book_',(SELECT max(id) FROM books)) INTO @name;\n" +

	                "SET @query = case @colcheck\n" +
	                "WHEN 0 THEN CONCAT(\"  CREATE TABLE \", @name, \"(  `id` int(11) NOT NULL AUTO_INCREMENT, `i18n_language` int(11) NOT NULL DEFAULT '1', `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL, `sortorder` int(11) NOT NULL, PRIMARY KEY (`id`,`i18n_language`)) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci\" )\n" +
	                "ELSE \"SET @t=@t\"\n" +

	                "END;\n" +

	                "PREPARE stmt from @query;\n" +
	                "EXECUTE stmt;\n" +
	                "DEALLOCATE PREPARE stmt;\n\n" +

	                "SELECT CONCAT ((SELECT `title` FROM handlers WHERE `table` = '" + tableName + "'), '-" + x[ind] + "') INTO @nameBook;\n" +

	                "SET @stmt = case @colcheck \n" +
	                "WHEN 0 THEN CONCAT(\" UPDATE books \n SET \n `title` = @nameBook,`table` = @name WHERE id =\", @maxBooksid) \n" +


	                "ELSE \"SET @t=@t\"\n" +
	                "END;\n" +

	                "PREPARE stmt from @stmt;\n" +
	                "EXECUTE stmt;\n" +
	                "DEALLOCATE PREPARE stmt;\n\n" +

	                "SET @stmt = case @colcheck\n" +
	                "WHEN 0 THEN \"INSERT INTO format_references (`parent`, `table`)  VALUES ((SELECT id FROM handlers_format WHERE name = '" + xEn + "' AND `parent` = (SELECT `id` FROM handlers WHERE `table` = '" + tableName + "') LIMIT 1) , (SELECT `table` FROM books WHERE id = (SELECT max(id) FROM books LIMIT 1) LIMIT 1));\"\n" +
	                "ELSE \"SET @t=@t\"\n" +
	                "END;\n" +

	                "PREPARE stmt from @stmt;\n" +
	                "EXECUTE stmt;\n" +
	                "DEALLOCATE PREPARE stmt;\n\n" +
	                '#---------------Access   4 12 13 14 \n\n' +

	                'SET @stmt = case @colcheck\n' +
	                'WHEN 0 THEN CONCAT("INSERT INTO h_common_access (type, item, role, access_level) \n' +
	                '  VALUES (3, ", @maxBooksid ,", ",(SELECT id FROM h_admins_roles WHERE `title` = \'owner\'),", 1),(3, ", @maxBooksid ,", ",(SELECT id FROM h_admins_roles WHERE `title` = \'owner\'),", 2),(3, ", @maxBooksid ,", ",(SELECT id FROM h_admins_roles WHERE `title` = \'owner\'),", 3), \n' +
	                '  (3, ", @maxBooksid ,", ",(SELECT id FROM h_admins_roles WHERE `title` = \'developer\'),", 1),(3, ", @maxBooksid ,", ",(SELECT id FROM h_admins_roles WHERE `title` = \'developer\'),", 2),(3, ", @maxBooksid ,", ",(SELECT id FROM h_admins_roles WHERE `title` = \'developer\'),", 3), \n' +
	                '  (3, ", @maxBooksid ,", ",(SELECT id FROM h_admins_roles WHERE `title` = \'content-manager\'),", 1),(3, ", @maxBooksid ,", ",(SELECT id FROM h_admins_roles WHERE `title` = \'content-manager\'),", 2),(3, ", @maxBooksid ,", ",(SELECT id FROM h_admins_roles WHERE `title` = \'content-manager\'),", 3), \n' +
	                '  (3, ", @maxBooksid ,", ",(SELECT id FROM h_admins_roles WHERE `title` = \'manager\'),", 1),(3, ", @maxBooksid ,", ",(SELECT id FROM h_admins_roles WHERE `title` = \'manager\'),", 2),(3, ", @maxBooksid ,", ",(SELECT id FROM h_admins_roles WHERE `title` = \'manager\'),", 3);") \n' +

	                'ELSE "SET @t=@t"\n' +
	                'END;\n' +
	                'PREPARE stmt from @stmt;\n' +
	                'EXECUTE stmt;\n' +
	                'DEALLOCATE PREPARE stmt;\n\n'+
	                '#---------------END \n\n';

	        }

	    }

	    document.getElementById('textarea_block').style.display = 'none';

	    console.log();
	    printResult(sqlText);



	    var inputs = document.getElementsByTagName('pre');
	    var buttonCopy = document.createElement("input");
	    buttonCopy.id = 'Copy';
	    buttonCopy.type = 'button';
	    buttonCopy.value = 'COPY';
	    inputs[inputs.length - 1].firstChild.id = 'sqlText';
	    inputs[inputs.length - 1].append(buttonCopy);



	    var button = document.getElementById('Copy');
	    button.addEventListener('click', function() {



	        document.getElementById('sqlText').select();

	        document.execCommand('copy');

	        document.getElementById('sqlText').blur()
	    });


	    localStorage.clear();

	}

	window.onload = function() {


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
	    CharList.addEventListener("change", function() {
	        localStorage.setItem("CharListAutosave", CharList.value);
	    });
	    TableNameParam.addEventListener("change", function() {
	        localStorage.setItem("TableNameParamAutosave", TableNameParam.value);
	    });

	}