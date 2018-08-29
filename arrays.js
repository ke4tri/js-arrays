const cats = ['fluffy', 'spike', 'killer'];
console.log('1st cat', cats[0]);

const favoriteAnimal = 'cow';
const faboriteAnimals = 'cow, cat, bear';
const favoriteAnimalArray = favoriteAnimal.split('');//['c','o','w'] put quotes if to split on everything. or ',' for comma seperated items
console.log('favoriteAnimalArray', favoriteAnimalArray);

const numArray = [1,2,3,4,5];
const newNum = numArray.join('');
const newNum2 = numArray.join('com');
console.log('newNum',newNum); // ' newNum ' just added a name tag to the readout

const pal = (word) => {
    const wordArray = word.split('').join('');
    const reverseArray = word.split('').reverse().join('');

    if(wordArray === reverseArray){
        // console.log('palindrome');
        console.log(`${word} IS a palindrome`);
    }else {
        console.log('not palindrome')
    }

}   

pal('mom');


let animals = ['bear', 'cat', 'lambs', 'snakes', 'dog'];

const lastItem = animals.pop(); // big spiders
const firstItem = animals.shift(); // spiders
animals.push('bat');
animals.unshift('baby hippo');
console.log('animals', animals);


////////////////////////////////////////

// 1. What is your starting value - 0
// 2. What is your stopping value - something.length
// 3. How are you incramenting - +1

for (i=0;i<animals.length;i++) {
    console.log('Animal : ',animals[i]);
}


