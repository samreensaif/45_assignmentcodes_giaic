//make a function by using function keyword which takes aruguments as an index and check whether the string has a vowel in it. if its vowel then count and print the number of vowels in the given string. try the code with three different strings

let count :number = 0;

function vowelCount(words:string )
{
for ( let i=0; i< words.length;i++){

    if (words.charAt(i)== "a" ||words.charAt(i)=="e"|| words.charAt(i)== "i" || words.charAt(i)== "o" || words.charAt(i)== `u` )
   {

     count ++;
   
    }
}
}
 vowelCount("pakistan");
 console.log(`\nTotal Number of Vowels in the 1st string is `+ count)

 count = 0;
 vowelCount("samreen saif");

console.log(`\nTotal Number of Vowels in the 2nd string is `+ count)

count = 0;
vowelCount("aeiou");

console.log(`\nTotal Number of Vowels in the 3rd string is `+ count)
