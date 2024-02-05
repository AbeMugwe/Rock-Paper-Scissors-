let options=['Rock','Paper','Scissors']
let userchoice=document.querySelector('.userchoice')
let computer=document.querySelector('.computer')
let resulttext=document.querySelector('.result')
let YOU=document.querySelector('.userscore')
let Comp=document.querySelector('.computerscore')
let playerscore=0
let computerscore=0


function playGame(playerchoice){
    let compchoice=options[Math.floor(Math.random()*options.length)]
    let result="";

    if(playerchoice===compchoice){
        result="DRAW!"
    }
    else{
        switch(playerchoice){
            case 'Rock':
                result=(compchoice==='Scissors')?"YOU WIN!":"YOU LOSE"
                
            break
            case 'Paper':
                result=(compchoice==='Rock')? result="YOU WIN!":"YOU LOSE"
            break
            case 'Scissors':
                result=(compchoice==='Paper')? result="YOU WIN!":"YOU LOSE"
            break

        }
    }
    
    
 
    userchoice.textContent=`Player: ${playerchoice}`
    computer.textContent=`Computer:  ${compchoice}`
    resulttext.textContent=result;

    switch(result){
        case "YOU WIN!":
            playerscore++;
            YOU.textContent=playerscore
            break
        case "YOU LOSE":
            computerscore++;  
            Comp.textContent=computerscore
        break
        
    }
}







// $('img').click(function () { // on a click
//     if($(this).attr('id') == '1') { // get the id attribute
//       $('#div').html('Image with 1 was clicked'); // write the text
//     } else { // else if
//        // write something else for the 2
//     }
//   }
