let str= "racecar";
let bag="";
for(let i=str.length-1;i>=0;i--){
    bag+=str[i];
}
if(bag==str){
    console.log("String is Palindrome");
}else {
    console.log("String is not Palindrome");}