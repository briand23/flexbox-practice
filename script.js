const panels = document.querySelectorAll('.pic');
// console.log(panels)

// if the given element is already active and you reclick on it
// then make it shrink, and do not re add the active class

panels.forEach((element) =>{
    element.addEventListener('click', () => {
        if(element.classList.contains('active'))
        {
            removeActiveClasses()
        }
        else{
            removeActiveClasses()
            element.classList.add('active')
        }
        
        
        // console.log(element)
    })
})

function removeActiveClasses(){
    
    panels.forEach(element =>{
        element.classList.remove("active")
    })
    }