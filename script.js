(function(){

    let screen=document.querySelector('.screen');
    let buttons=document.querySelectorAll('.btn');
    let equal=document.querySelector('.btn-equal');
     let ClearEl=document.querySelector('.btn-clear');

        buttons.forEach((button)=> {
            button.addEventListener("click",(e)=>{
                let value = e.target.dataset.num;
                screen.value +=value;
                console.log(screen.value);
                console.log(screen.value.length)
            })
        });
        
        equal.addEventListener('click',()=>{
            if(screen.value !=0){
                let Antwort= eval(screen.value);
                screen.value = Antwort;
            }
        })
        let j=0;
        ClearEl.addEventListener('click',()=>{
            if(j%2===0){
                screen.value = "0";
            }
            else{
                screen.value = "";
            }
           j++;
            
        })

})();
