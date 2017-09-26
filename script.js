

var name=('Reed Walker');
var career=('Fullstack Dev');
var bio=('What\'s up Im reed I love everything weird and outside the box if you like coding and good brews there is a great chance we will be friends');
var myIntrests=('my intrests:');
var bullet=('* ');
var intrests=['climbing', 'hiking','music','women','coldbeer'];
var experiance=('My Previous Experiance: ');
var companyName= ['HikeItBaby', 'RentMonster', 'SwimIt'];
var jobtitle=['cheif hiker','Agent','Swimmer'];
var description=['hiked and climber all day and then got paid','Leased Appartments','Taught Swimming'];
var skills=['hiking','css', 'html','climbing']
var cool=('Check It: ')


console.log('name: '+ name);
console.log('career: '+ career);
console.log('bio: '+ bio);
console.log('' )
console.log(myIntrests);
console.log(bullet+ intrests[0]);
console.log(bullet+ intrests[1]);
console.log(bullet+ intrests[2]);
console.log(bullet+ intrests[3]);
console.log(bullet+ intrests[4]);
console.log('' )
console.log(experiance );

    function displayPosition(companyName,jobTitle, description){
      console.log(companyName);
      console.log(jobTitle);
      console.log(description);
}


console.log('' )
displayPosition('*'+companyName[0],'-'+jobtitle[0],'-'+description[0]);
console.log('' )
displayPosition('*'+companyName[1],'-'+jobtitle[1],'-'+description[1]);
console.log('' )
displayPosition('*'+companyName[2],'-'+jobtitle[2],'-'+description[2]);
console.log('' )



function displaySkill(skillname, skillcool){
    if(skillcool===true){
        console.log('* '+'Check It: '+ skillname);
    }
    else{
        console.log('* '+ skillname);
    }
}

console.log('My Skills: ')

displaySkill('climbing', true);
displaySkill('css');
displaySkill('swimming', true);
displaySkill('hiking');
displaySkill('html', true);