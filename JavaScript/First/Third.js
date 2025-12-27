console.log("JavaScript: var, let & const keywords")
//--------- Uses of var keywords----------
var a = 70; // var is Globally scoped 
console.log(a)
var a = "hello"// var can be redeclared & initialise again again
// let a = 50 // Through an error : syntex error 'a' already declared 
console.log(a)

// Note: There is an option to use ';' or not

//----------Uses of let Keyword-----------
let c = 68;
{
    let c = "let" 
    console.log(c) // It scope is only inside this block(It is speciallity of 'let' )
    console.log("Typeof a:",typeof a, "Typeof c:",typeof c)
}
console.log(c)