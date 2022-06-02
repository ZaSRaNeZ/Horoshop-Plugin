function SendImportCheckResult(){

	const options = {
	  method: 'POST',
	  headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
	  body: JSON.stringify({
	  	host: window.location.hostname,
	  	CMS: 'Prom.ua'
	  })
	};
	
	fetch('https://hook.integromat.com/taexacikq818e1c55y8caq6alwubsoal', options);
};


document.querySelector('input[value="Загрузить XLSX"][type="submit"][name="import"]').addEventListener('click',SendImportCheckResult);

