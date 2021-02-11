//1. a. Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"
//O(1)- same response no matter the size of your input

//1. b. Asking each person 1 by 1 at the dog park
//O(n) amount of time it takes to complete increased linearly with input

//2. Even or odd
function isEven(value) {
    if(value % 2 === 0) {
        return true;
    }
    else return false;
}
//O(1) Constant time, same no matter what input, 1 input- 1 output

//3. Are you here?
function areYouHere(arr1, arr2) {
    let ticks = 0;
    for (let i = 0; i < arr1.length; i++) {
        ticks++
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            ticks++
            const el2 = arr2[j];
            if (el1 === el2) return true, ticks;
        }
    }
    return false, ticks;
}

console.log(areYouHere([1,2,3], [4,5,6]));//12 ticks
console.log(areYouHere([3,3,4,5], [6,7,8,9,9,7,6,3]));//9 ticks
//Polynomial time- O(n^2) two nested loops each running from 0 to n- the outer loop
//will run the inner loop n times, each time the inner loop will run n times

//4. Doubler
function doubleArrayValues(array) {
    let ticks = 0;
    for (let i = 0; i < array.length; i++) {
        ticks++
        array[i] *=2
    }
    const result = {array, ticks}
    return result
}
console.log(doubleArrayValues([2]))
console.log(doubleArrayValues([10,20,30]))
console.log(doubleArrayValues([1,2,3,4,5]))
//I think this is O(n) Linear Time... time complexity increases linearly with input

//5. Naive search
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i
        }
    }
}
//O(n) linear time, same amount to time no matter the input but could also be
//infinate if the item passed in doesn't match any items in the array

//6. Creating pairs
function createPairs(arr) {
    let ticks = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ',' + arr[j]);
        }
    }
}
createPairs([1,2,3]);
//polynomial- O(n^2) even though there is a for loop inside a for loop
//it seems very straight forward

//7. Compute the sequence
function compute(num) {
    let result = [];
    for(let i = 1; i <= num; i++) {
        if(i===1) {
            result.push(0);
        }
        else if (i===2) {
            result.push(1)
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
// console.log(compute(100));
// console.log(compute(10));
// console.log(compute(1));
//fibonacci sequence... result at index 1 + the result at index 0... result at index 2
//+ the result at index 1... etc etc.
//i think this is linear- O(n)

//8. An efficient search
//searching using a more sophisticated approach than in the naive search... assume
//the input array is always sorted
function efficientSerach(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
console.log(efficientSerach([1,2,3,4,5], 3))
//O(n) one loop, goes up in time as it goes up in size

//9.Random element
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}
//this is O(1)... getting a random number from an array and returning it... doesn't
//matter how long the array is

//10. What am I?
function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log(isWhat(1)) //false
console.log(isWhat(2)) //true
console.log(isWhat(3)) //true
console.log(isWhat(7)) //true
console.log(isWhat(100)) //false

//is PRIME, this is O(1) it does not change based on the size of the input..
//it would if the input was an array though so maybe O(n)

//11. Tower of Hanoi
//famous mathematical puzzle
//3 rods and a number of disks of dif sizes that can side onto any rod
//starting point: disks neatly stacked in ascending order of size on one rod, the
//smallest disk at the top (making a conical shape). The other two rods are empty
//to begin with
//move the entire stack of rods onto another rod (can't be the original rod)
//where it will be stacked in ascending order as well 
//i) only one disk may be moved at a time
//ii) each move consists of taking the upper disk from one of the rods and sliding it
//onto another rod, on top of the other disks that may already be present on that rod
//iii) a larger disk may not be placed on top of a smaller disk
function hanoi(z, A, B, C) {
    if(z === 1) {
        B.push(A.pop().content);
        num++
    }
    else {
        hanoi(z - 1, A, C, B);
        B.push(A.pop().content);
        num++;
        hanoi(z-1, C, B, A);
    }
}

//12. Iterative version: solve the drills from Recursion Checkpoint Iteratively &
//14. identify the time complexities of each of them
function countingSheep(numOfSheep) {
    while(numOfSheep > 0) {
        console.log(`${numOfSheep}: Another sheep jumped over the fence`);
        numOfSheep--;
    }
    console.log('All sheep have jumped over the fence')
} //O(n)
function powerCalculator(a, b) {
    if (b < 0) {
        return 'exponent should be >= 0';
    }
    else if (b === 0){
        return 1;
    }
    let num = a;
    for (let i = b; i >= 2; i--) {
        num *= a;
    }
    return num;
}
console.log(powerCalculator(3, 3)) //O(n)??

function reverseString(str) {
    if (str === '') {
        return str
    }
    let strArray = str.split('')
    strArray.reverse();
    strArray = strArray.join('');

    return strArray;
}
console.log(reverseString('string'));//O(1)??

function nthTriangularNumber(n) {
    let tirangularNumber = 0;
    for (let i = 0; i <= n; i++) {
        tirangularNumber += i
    }
    return tirangularNumber;
}
console.log(nthTriangularNumber(5)) //O(n)

function stringSplitter(string, split) {
    if (!string.includes(split)) {
        return string;
    }
    let answer = string.split(split);
    return answer;
}
console.log(stringSplitter('02/20/2020', '/'))

function fibonacci(n) {
    let sequence = [1, 1];
    for(let i = 2; i < n + 1; i++) {
        sequence.push(sequence[i - 2] + sequence[i - 1])   
    }
    return sequence;
}
console.log(fibonacci(7))

function factorial(n) {
    let answer = 1;
    while (n > 1) {
        answer *= n;
        n--;
    }
    return answer;
}
console.log(factorial(5))

//13. Recursive Big O- go to Recursion doc and identify the time complexities of each
//of them

//excercise we did in class: 
//Sort, then find the two highest
//Loop through and store the current largest and second largest
function largestProduct(arr) {
    if (arr.length <= 1) {
        throw new Error('Must provide at least two numbers');
    }

    let largest = arr[0];
    let secondLargest = arr[1];
    if (secondLargest > largest) {
        [largest, secondLargest] = [secondLargest, largest];
    }
    let smallest = secondLargest;
    let secondSmallest = largest;
    for (let i = 2; i < arr.length; i++) {
        const value = arr[i];
        if (value > largest) {
            secondLargest = largest;
            largest = value;
        }
        else if (value > secondLargest) {
            secondLargest = value;
        }
        if (value < smallest) {
            secondSmallest = smallest;
            smallest = value;
        }
        else if (value < secondSmallest) {
            secondSmallest = value;
        }
    }

    const largestProduct = largest * secondLargest;
    const smallestProduct = smallest * secondSmallest;
    if (largestProduct > smallestProduct) {
        return largestProduct;
    }
    else {
        return smallestProduct;
    }
}
console.log(largestProduct([3, 5, 2, 6, 8, 1]));
console.log(largestProduct([3, 5, -2, 6, 8, 1]));

