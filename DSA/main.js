// Question 1 --- >>> //to find number is plaindrome or not
// value x= 121 ====> output true
// value x= 10 ====> output false 

// so this is numerical numbner and we will first convert this to string 
// we have an inbuilt function in javascript to reverse the string in javascript 
// lastly we will join the string with join method
//reverse method is not available to strings rather it is availabe on array 
const isPalindrome = function (x) {
    // const number = x.toString().split("").reverse().join("") 
    // console.log(number)
    return x === x.toString().split("").reverse("").join("") * 1

    // 123 ===  "123"=>["1","2","3"]=> ["3","2","1"] =>> "123"  * 1 = 123
}

const res = isPalindrome(121)
console.log(res)