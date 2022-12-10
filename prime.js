let Num=13;
for(let i=2;i<Num ;i++){
    if(Num%i==0){
        break;
    }
}
if(i==Num){
    console.log(Num,"Is the Prime number");
}else{
    console.log(Num,"Is not the Prime number");
}