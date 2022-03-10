`use strict`
let score = 0 ; 
let in1 = prompt('Heya there!\nWhat\'s your name?');

let ans1 = prompt("Do you like pineapples?");
// console.log(`Ans 1 is ${ans1}`);

let temp=ans1.toLowerCase();
  if(temp ==='y' || temp==='yes'){
    // console.log('You are correct!');
    alert('You are correct!');
    score++;
  }else if(temp ==='n' || temp==='no'){
    // console.log('You are incorrect. :( ');
    alert('You are incorrect. :( ');

  }else{
    // console.log('Invalid Input.');
    alert('Invalid Input.');
  }


  let ans2 = prompt("Is Chuck Norris better than David Hasselhoff?");
  // console.log(`Ans 2 is ${ans2}`);

  temp=ans2.toLowerCase();
    if(temp ==='y' || temp==='yes'){
      // console.log('Of course he is.');
      alert('Of course he is.');
      score++;
    }else if(temp ==='n' || temp==='no'){
      // console.log('You are incorrect. :( ');
      alert('You are incorrect. :( ');

    }else{
      // console.log('Invalid Input.');
      alert('Invalid Input.');
    }



  let ans3 = prompt("Was Chuck Norris a school teacher before he was famous?");
  // console.log(`Ans 3 is ${ans3}`);

   temp = ans3.toLowerCase();
    if(temp ==='n' || temp==='no'){
      // console.log('You are correct!');
      score++;
      alert('You are correct! He actually was in the Air Force.  He learned Tae Kwon Do in Korea while overseas.');
    }else if(temp ==='y' || temp==='yes'){
      // console.log("You are incorrect. ");
      alert('You are incorrect. :( He actually was in the Air Force.  He learned Tae Kwon Do in Korea while overseas. ');

    }else{
      // console.log('Invalid Input.');
      alert('Invalid Input.');
    }



  let ans4 = prompt("Is it legal for 4 women to live in a house in Ohio?");
  // console.log(`Ans 4 is ${ans4}`);
  // yes 5 or more is illegal

   temp=ans4.toLowerCase();
    if(temp ==='y' || temp==='yes'){
      // console.log("You are correct!");
      score++;
      alert('You are correct! But..... 5 or more women under 1 roof is illegal in Ohio.');
  
    }else if(temp ==='n' || temp==='no'){
      // console.log("You are incorrect!");
      alert('You are incorrect. :( \n Five or more women under 1 roof is illegal in Ohio not 4.');

    }else{
      // console.log('Invalid Input.');
      alert('Invalid Input.');
    }



  let ans5 = prompt("Were these questions utterly irrelevant?");
  // console.log(`Ans 5 is ${ans5}`);
  if(temp ==='n' || temp==='no'){
    // console.log('Correct');
    alert('These required deep planning on my part.  Thank you for your appreciation');
    score++;

  }else if(temp ==='y' || temp==='yes'){
    // console.log('Incorrect');
    alert('You are incorrect. :( ');

  }else{
    // alert('Invalid input');
    alert('Invalid Input.');
  }


let i=0; //atempts

// let ans6 = Null;
let correct_ans=68;

while (i < 4) {
 
  let  ans6 = prompt("Please guess a number between 1-100.");
  if( parseInt(ans6) == correct_ans){
    score++;
    alert('Nice job');
    i=5;
    break;

           }
  // when geuss is low
  else if(ans6 < correct_ans){
    alert('Sorry that is low');
    

          }
  // when geuss is high
  else if(ans6 > correct_ans){
    alert('Sorry that is high');
        }
    
        i++;

    if(i==4){
      alert('Sorry you have run out of geusses. \nThe correct answer is ' + correct_ans) ;
    }
}




// // 7

let attempts = 0;
let answers = [1,6]; // correct answer  
// let temp = 0;
temp=0;

while(attempts < 6){

// question 
  let  ans7 = prompt("  Pick a country from Europe?\n1. France\n2.Isreal \n3. Canada\n4. USA\n5. Mexico\n6.Ukraine\nPlease enter the number for a correct answer.");
   
    for (let j = 0; j < answers.length; j++) { 
        if(answers[j] === parseInt(ans7) ){    
                temp =1
                  }// end of if 

            }// end of for 

            if(temp===1){
              alert('That is correct !!!');
                score++;
                break;
            }else{
              alert('That is incorrect'); 
            }
     
  attempts++;
 
}// end while
 alert(`All of the correct answers are France and Ukraine. \nYour total score is ${score} out of 7.` ) ;
 alert(`Thanks ${in1}! Hope you have a great one ;). `)



// END OF FILE





