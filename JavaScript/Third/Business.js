
// ************************************Business Name Generator through object***********************************************
const Adjectives={
    b :"Crazy ",
    c : "Amazing",
    d :  "Fire", 
};
const Shop_Name={
    a : "Engine",
    r : "Foods",
    t : "Garments",
};
const Word={
    u : "Bros",
    v : "Limited",
    w : "Hub",
}

for (const i in Adjectives) {
    for (const j in Shop_Name) {
        for (const k in Word) {
            console.log(Adjectives[i]+Shop_Name[j]+Word[k])
        }
    }
}

// ******************************************Business Name Generator through function******************************************

function Business_name(x,y,z){
    for (const i in x) {
        for (const j in y) {
            for (const k in z) {
                return console.log(x[i]+y[j]+z[k])
            }
        }
    }
}
Business_name("Crazy ","Amazing","Fire" )