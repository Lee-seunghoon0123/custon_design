document.addEventListener("DOMContentLoaded",
    function(e){
        let menuBtn=document.querySelector('.menuBtn')
        let menu=document.querySelector('.menu')
        let typeBtn=document.querySelector('.type')
        let closeBtn=document.querySelector('.closeBtn')
        menuBtn.addEventListener('click',
            function(e){
                menu.classList.toggle('open')
            }
        )
        typeBtn.addEventListener('click',
            function(e){
                if (e.target.tagName==='BUTTON')
                e.target.classList.toggle('typeBtnActivation')
            }
        )
        closeBtn.addEventListener('click',
            function(e){
                menu.classList.toggle('open')
            }
        )
    }
)