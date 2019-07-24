// --------- считывание урла


chrome.tabs.getSelected(function(tab) {
    var tablink = tab.url;
     localStorage.setItem('url', tablink)

});

console.log(localStorage.getItem('url'))    // Значение урла в localStorage ('url')







// ------- Проверка на дубликаты в импорте



document.getElementById('import_check').addEventListener('click', function() {
        
    if (chrome.tabs)
    
    chrome.tabs.executeScript ({
            "file": "otherStuff/import_check.js"
        }), 
            function () { // Execute your code
            console.log("Script Executed .. "); 
        };
    
    document.getElementById('import_check').className += ' import_after';
    
});