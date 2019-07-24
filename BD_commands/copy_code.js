var code = document.getElementsByClassName("code_copy");



for (let i = 0; i<code.length; i++) {
    
    code[i].addEventListener("click", function(){
        
        
    
      navigator.clipboard.writeText(this.innerText)
  .then(() => {
   
  })
  .catch(err => {
    console.log('Something went wrong', err);
  });
        
        
    })
}