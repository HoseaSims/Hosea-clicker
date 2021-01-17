const hOne = document.querySelector("h1")
const button = document.querySelector("#click-button")
const autoClick = document.querySelector("#auto-click")
const upgradeButton = document.querySelector('#upgrade-click')

let numberOfClicks = 0
let clickX2 = false
let autoClickToggle = false
let clickMultiplier = 0
let multiplyerCost = 5
let autoClickCost = 10

button.addEventListener('click', e =>{
    //INCREMENT CLICKS
    
    
    incrementClicks()
    

   
    
     // AUTO CLICKER
     if(numberOfClicks >= autoClickCost){
         autoClick.classList.remove("unavailable")
     }
     
    
     //UPGRADE CLICK 
         if(numberOfClicks >= multiplyerCost){
             upgradeButton.classList.remove('unavailable')
         }
    
     
    ;
})

// INCREMENT CLICKS FUNCTION
const incrementClicks = e =>{
    if(clickX2 === false){
        numberOfClicks++

    }
// ALLOWS THE CLICK MULTIPLIER
    if(clickX2 === true){
        numberOfClicks += clickMultiplier
    }
    hOne.innerText = parseInt(numberOfClicks)
    console.log(numberOfClicks);

}



// AUTO CLICKER FUNCTION

    
    

    
        
       
        
            
            autoClick.addEventListener('click', e =>{
                if(numberOfClicks >= autoClickCost){
                    
                    
                    numberOfClicks -= autoClickCost
                    hOne.innerText = parseInt(numberOfClicks)
                    autoClickCost *= 3
                    autoClick.classList.add("unavailable")
                    
                    if (numberOfClicks <= multiplyerCost){
                        upgradeButton.classList.add('unavailable')
                    }
                    
                    setInterval(() => {
                        numberOfClicks++
                        console.log(numberOfClicks);
                        hOne.innerText = parseInt(numberOfClicks)
                    }, 3000);
                }
            })
        
    

    



// CLICK X2 FUNCTION

    upgradeButton.addEventListener('click', function testor() {
        
        

        if(numberOfClicks >= multiplyerCost){
            numberOfClicks -= multiplyerCost
            clickX2 = true
            multiplyerCost *= 3
            upgradeButton.classList.add('unavailable')
            hOne.innerText = parseInt(numberOfClicks)
            clickMultiplier += 2
            if (numberOfClicks <= autoClickCost){
                autoClick.classList.add('unavailable')
            }
        }

    })
    

// Make the upgrade click x2 its own thing like a variable number that can be upped
// you are adding eventlisteners more than once when >= is hit
// click rate depends on how many times upgraded
