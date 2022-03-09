`use strict`

let in1 = prompt('Heya there!\nWhat\'s your name?');

let ans1 = prompt("Do you like pineapples?");
// console.log(`Ans 1 is ${ans1}`);

let temp=ans1.toLowerCase();
  if(temp ==='y' || temp==='yes'){
    // console.log('You are correct!');
    alert('You are correct!');
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

}else if(temp ==='y' || temp==='yes'){
  // console.log('Incorrect');
  alert('You are incorrect. :( ');

}else{
  // alert('Invalid input');
  alert('Invalid Input.');
}

alert(`Thanks ${in1}! Hope you have a great one ;). `)