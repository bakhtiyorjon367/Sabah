// ZI-TASK::_____________________________________________________________________________________________________________________
// Shunday function yozing, u function ishga tushgandan 3 soniyadan keyin "Hello World" ni qaytarsin.
// MASALAN: delayHelloWorld("Hello World") return "Hello World"

const  delayHelloWorld = () => {
    console.log("Hello World");
}
setTimeout(delayHelloWorld, 3000);


// ZH-TASK:_____________________________________________________________________________________________________________________
// Shunday function yozing, u berilgan array parametrni ichidagi eng katta raqamgacha tushib qolgan raqamlarni bir arrayda qaytarsin. 
// MASALAN: findDisappearedNumbers([1, 3, 4, 7]) return [2, 5, 6]
// @MITASK
//  function findDisappearedNumbers(nums) {
//     let max = 0;
//     let result:{}[] =[];
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] > max) {
//             max = nums[i];
//             }
//     }
//     for (let i = 1; i <= max; i++) {
//         if (!nums.includes(i)) {
//              result.push(i);
//         }
//     }
//     return result;
// } 
// console.log(findDisappearedNumbers([1, 3, 4, 7]));

// TASK ZG_____________________________________________________________________________________________________________________
// String sifatida berilgan string parametrni
// snake case'ga o'tkazib beradigan function yozing.

// MASALAN: convertToSnakeCase('name should be a string')
//return 'name_should_be_a_string'


// function convertToSnakeCase(str) {
//     return str.replace(/([" "])/g, '_');
// } console.log(convertToSnakeCase('name should be a string'));






// ZF-TASK:_____________________________________________________________________________________________________________________
// Shunday function yozing, uni string parametri bolsin. String ichidagi har bir sozni bosh harflarini katta harf qilib qaytarsin lekin 1 yoki 2 harfdan iborat sozlarni esa oz holicha qoldirsin.
// MASALAN: capitalizeWords('name should be a string') return 'Name Should be a String'
//  function capitalizeWords(str) {
//     let words = str.split(' ');
//     let capitalizedWords = words.map(word => {
//         if (word.length <= 2) {
//             return word;
//             } else {
//                 return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//                 }
//                 });
//                 return capitalizedWords.join(' ');
//     }
//     console.log(capitalizeWords('name should be a string') );

 
// ZE-TASK:_____________________________________________________________________________________________________________________
// Shunday function yozing, uni  string parametri bolsin. String ichida takrorlangan harflarni olib tashlab qolganini qaytarsin
// MASALAN: removeDuplicate('stringg') return 'string'
    //@ts-ignore
    // function removeDuplicate(str)  {
    //     let newStr = "";
    //     for (let i = 0; i < str.length; i++) {
    //         for(let j = 0; j <str.length; j++){
    //             if (str[i] !== str[j]) {
    //                 newStr+=str[j];
    //             }
    //         }
    //     } return newStr;
    // }
    // console.log(removeDuplicate('stringg'));


// ZD-TASK:_____________________________________________________________________________________________________________________
// Shunday function yozing, uni number, array va number parametrlari bolsin va berilgan 1-parametr numberga teng indexni array ichidan topib 3-parametrdagi raqam bilan almashtirib yangilangan arrayni qaytarsin
// MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2]

// function changeNumberInArray(number, array, newNumber) {
//     array[number] = newNumber;
//     return array;
// }
// console.log(changeNumberInArray(1, [1,3,7,2], 2))

// ZC-TASK_____________________________________________________________________________________________________________________
// Shunday function yozing, uni number parametri bolsin va function parametrni selsiy miqdori sifatida qabul qilib uni farenhitga ozgartirib bersin
// MASALAN: celsiusToFahrenheit(0) return 32
// function celsiusToFahrenheit(cel) {
//     return cel*1.8+32;
// };
// console.log(celsiusToFahrenheit(1)); 



// ZB-TASK:
// Shunday function yozing, uni 2 ta number parametri bolsin va berilgan sonlar orasidan random raqam return qilsin
// MASALAN: randomBetween(30, 50) return 45
// function randomBetween(a, b) {
//     return Math.floor(Math.random() * (b - a + 1)) + a;
// }
//  console.log(randomBetween(30, 50)); 



// Z-TASK_____________________________________________________________________________________________________________________
// Shunday function yozing, uni sonlardan tashkil topgan array qabul qilsin. Function arraydagi juft sonlarni yigindisini qaytarsin
// MASALAN: sumEvens([1,2,3]) return 2

// const sumEvens = (arr) => {
//     let sum = 0;
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] % 2 == 0){
//             sum += arr[i];
//         }
        
//     }return sum;
// }
// console.log(sumEvens([1,2,3]));



// Y-TASK_____________________________________________________________________________________________________________________
//  Shunday function yozing, uni 2 ta array parapetri bolsin. Function ikkala arrayda ham ishtirok etgan qiymatlarni bir arrayda qaytarsin
//  MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]
// const findIntersection = (arr1, arr2) => {
//     let result: any[] = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if(arr1[i]===arr2[j]){
//                 result.push(arr1[i]);
                
//             }
//         }
//     }return result;
// }
// console.log(findIntersection([1,2,3], [3,2,0]));



// X-TASK______________________________________________________________________________________________________________________
//  Shunday function yozing, uni object va string parapetrlari bolsin. Function string parametri object ichida necha marotaba takrorlanganligini qaytarsin (nested object bolsa ham sanasin)
//  MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

// function countOccurrences(obj, value){
//     let count = 0;
//     for (let key in obj) {
//         if(key===value)
//             count++;
//         if (typeof obj[key] === 'object') {
//             count ++;
//             } 
//     }
//     return count;
// }
// console.log(countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}},'model'));


// W-TASK______________________________________________________________________________________________________________________
// Shunday function yozing, uni array va number parametrlari bolsin. Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan array holatida qaytarsin
// MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]]
    
//  const chunkArray = (arr,number) => {
//     interface T { [key: string]: any; }
//     let arrays:Array<T> = [];
    
//     for (let i = 0; i < arr.length; i+=number ){
//        arrays.push(arr.slice(i, i + number));
//        console.log(arrays)
//     }
//     return arrays;
//  }
//  console.log(chunkArray([1,2,3,4,5,6,7,8,9,10], 3));


// U-TASK______________________________________________________________________________________________________________________
// Shunday function yozing, uni number parametri bolsin va 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

// function sumOdds(num){
//     let sum = 0;
//     for(let i = 0; i <num; i++){
//         if(i % 2 !== 0){
//             sum += 1;
//         }
//     }return sum;
// }console.log(sumOdds(11));


// T-TASK______________________________________________________________________________________________________________________
// Shunday function yozing, u sonlardan tashkil topgan 2 ta array qabul qilsin va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin
// MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]); return [0,3,4,4,6,30,31]

// const mergeSortedArrays =(arr1,arr2) => {
//     arr1.map((ele) => {
//         arr2.push(ele);
//     }); 
//     arr2.sort((a,b) => a-b);
//     return arr2;
// } 
// console.log(mergeSortedArrays([0,3,4,31], [4,6,30]));


// S-TASK______________________________________________________________________________________________________________________
// Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2

// const missingNumber = num => {
//     const max = Math.max(...num);
//     const min = Math.min(...num);
//     const missing:{}[]= []
  
//     for(let i=min; i<= max; i++) {
//       if(!num.includes(i)) { 
//         missing.push(i); 
//       }
//     }
//     return missing;
//   } 
//   console.log(missingNumber([3,4,9,6]));


//MITask R ______________________________________________________________________________________________________________________
// Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
// MASALAN: calculate("1+3") return 4;

// function calculate(str){
//     let splitted = str.split("+");
//     let result=0;
//     for(let i =0; i<splitted.length; i++){
//         result+=parseInt(splitted[i]);;
//     }return result;
// }console.log(calculate("1+3"));


//MITask Q ______________________________________________________________________________________________________________________
// function hasProperty(obj,str){
//     if(str in obj){
//         return true;
//     }else return false;
   
// }
// console.log(hasProperty({name: "BMW", model: "M3"}, "model"));
// console.log(hasProperty({name: "BMW", model: "M3"}, "year"));


//MITask P ______________________________________________________________________________________________________________________
// function objectToArray(object) {
//     let array = new Array();
//     for (let [key,values] of Object.entries(object)) {
//        array.push([key,values]);
//     }return array;
// }
// console.log(objectToArray( {a: 10, b: 20}));


//MITask O ______________________________________________________________________________________________________________________
// function calculateSumOfNumbers(arr){
// let result=0;
//     // for(let i = 0; i<arr.length; i++){
//     //     if(typeof(arr[i])==="number"){
//     //         result+=arr[i];
//     //     }
//     // }return result;_______________________________
//     arr.map((ele) => { 
//         if(typeof(ele)==="number"){
//             result+=ele;
//         }
//     });return result;
// }
// console.log(calculateSumOfNumbers([10,"10",{son:10},true,35]));


//MITask N ______________________________________________________________________________________________________________________
// let string = "son";
// function palindromCheck(check){
//    let len = check.length
    
//     for(let i = 0; i < len; i++){
//         if(check[i] !== check[len-i-1]){
//             return false;
//         }else {
//             return true;
//         }
//     }
// };
// console.log(palindromCheck(string));


//MITask M________________________________________________________________________________________________________________________
// function getSquareNumbers(array){
//    let newarr:Object[] =[];
//    array.map((ele) => {
//     newarr.push({ 
//         number:ele,
//         square:ele*ele,
//     });
//    });
//    return newarr;
// }
// console.log(getSquareNumbers([1,2,3]));


//MITask L________________________________________________________________________________________________________________________
// const arr = "we like coding".split(" ");
// let temp ="";
// function reverseSentence(string){
//     for(let i =0; i<arr.length; i++){
//         for(let j = arr[i].length-1; j>=0; j--){
//            temp +=arr[i][j];
//        }temp+= " ";  
//    }return temp;
// }
// console.log(reverseSentence(arr))


//MITask K__________________________________________________________________________________________________________________________
// function countVowels(string) {
//     let Vowels = "aAeEiIoOuU";
//     let vowelsCount = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (Vowels.indexOf(string[i]) !== -1) {
//             vowelsCount += 1;
//         }
//     }
//     return vowelsCount;
// }
// let string ="string";
// console.log(countVowels(string));


//MITask J_________________________________________________________________________________________________________________________
// let string=("I am from Uzbekistan").split(" ");
// let max = string[0];
// function findLongestWord(str){
//     for(let i = 0; i < str.length; i++){
//         if(str[i].length>max.length){
//             max=str[i];
//         }else{
//             max=max;
//         }
//     }   return max;
// };
// console.log(findLongestWord(string));



// //MITask I________________________________________________________________________________________________________________________
// function getMajority(array){
//     let count = 1;
//     let maxEle = array[0];

//     for(let i = 1; i < array.length; ++i){
//        if(array[i]==maxEle){
//             count++;
//        }else{
//             count--;
//             if(count==0){
//                 maxEle=array[i];
//                 count=1;
//             }
//         }
//     }
//     return maxEle;
// }
// const result = getMajority([1,2,4,5,4,3,4,]);
// console.log(result);


//MITask H-2________________________________________________________________________________________________________________________
// let temp ="";
// function getDigits(x){
//     for(let i = 0; i<x.length; i++){ 
//         if(x[i]>=-9){
//             temp+=x[i];
//         }
//     }
//     return temp;
// };
// const result = getDigits('fj2k93j1l0');
// console.log(result);



//MITask H_________________________________________________________________________________________________________________________

// let string = "";
// let arr = [1,2,3,-2,5,-1];
//   function getPositive(arr){
//     for(let i = 0; i<=arr.length; i++){
//         if(arr[i]>=0){
//             string+=arr[i];
//         }
//     }
//     return string;
// }
// const result = getPositive(arr);
// console.log(result);



//let a = [1,2,3,-2,5,-1];
// let result="";
// const every = a.every((ele) => {
//     if( ele > 0 ){
//         result+=ele;
//     }
//     return result;
//   });
//   console.log(result);
//________________________________________________________________________________________________________________________________________________________________
