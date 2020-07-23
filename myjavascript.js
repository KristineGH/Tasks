// task 1

function findSecondMaxElement(numbers){
    let max=Number.MIN_SAFE_INTEGER;
    let secondMax=Number.MIN_SAFE_INTEGER;
    for (let i=0; i<numbers.length; i++ ){
        if (numbers[i]>max){
            secondMax=max;
            max=numbers[i];
        } else if (secondMax<numbers[i] && numbers[i] !== max){
            secondMax=numbers[i];
        }
    }
    return secondMax;
}
console.log(findSecondMaxElement([15, 13, 24, 23]));

// task 2

function myArray(nums){
    let revs=[]
    for (let i=nums.length-1; i>=0; i--){
        revs.push(nums[i])
    }
    return revs
}
console.log(myArray([5, 7, 6, 2]))

// task 3

function myString(words){
    let myString='Hello my name is Kristine'
    words=myString.split(" ")
    return words
}
console.log(myString())