document.getElementById('ParseStart').addEventListener('click', function() {
        
    chrome.tabs.executeScript ({
            "file": "characteristicsCreate/CharParse.js"
        }) 
        
        });

document.getElementById('ParseStart_V2').addEventListener('click', function() {
        
    chrome.tabs.executeScript ({
            "file": "characteristicsCreate/CharParse_V2.js"
        }) 
        
        });