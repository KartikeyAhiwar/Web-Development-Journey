let gen = Math.random();
console.log(gen)
function Faulty_Calci(a,b) {
    
    if (gen >  0.5){
        console.log("a+b =",a+b,"a*b =",a*b,"a/b =",a/b,"a%b =",a%b)
    }
    else{
        console.log("a+b =",a-b,"a*b =",a/b,"a/b =",a*b,"a%b =",a+b)
    }
}
Faulty_Calci(20,10)