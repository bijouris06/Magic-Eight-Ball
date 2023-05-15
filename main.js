let userName = ''
userName? console.log(`Hello ${userName}`): console.log('hello')
let userQuestion = 'What is a Magic Eightball?'
console.log(userQuestion)
let randomNumber = Math.floor(Math.random() * 8);
let eightball = ''
switch (randomNumber){
  case 0:
  console.log('It is certain')
  break

  case 1:
  console.log('It is deccidedly so')
  break

  case 2:
  console.log('Reply hazy try again')

  case 3:
  console.log('Cannot predict now')
  break

  case 4:
  console.log('Do not coun on it')
  break;

  case 5:
  console.log('My sources say no')
  break;

  case 6:
  console.log('Outlook not so good')
  break;

  case 7:
  console.log('Signs point to yes')
  break

  default:
  console.log('hehehe')
  break;
}