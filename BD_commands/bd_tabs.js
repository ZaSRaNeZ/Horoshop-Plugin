  var tab = document.getElementsByClassName('tab');
        
        for (let i =0; i<tab.length; i++){
            
            tab[i].addEventListener("click", function(){
                
                var tab_content = document.getElementsByClassName('tab_content');
                var tab = document.getElementsByClassName('tab');
                
                for(let i =0 ; i<tab.length ; i++){
                    tab[i].classList.remove('active_tab');
                };
                
                this.className += ' active_tab';
                
                for(let i =0 ; i<tab_content.length ; i++){
                    tab_content[i].style.display = 'none';
                };
                
                var id = this.getAttribute('value') ;
                
                document.getElementById(this.getAttribute('value')).style.display = 'block';
                
                
            });
            
        }
    
    