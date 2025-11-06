const tab1 = ["A","B","C"];
const tab2 = ["D","E","F"];
const item = "D";
const item2 = "G";
const item3 = "Z";

// const tab3 = [tab1+","+tab2];
// console.log(tab3);

//ou//

const tab3 = [item3,...tab1,...tab2,item2]; /*cf projet Boutique, fichier App.jsx pour voir le Spread Operator*/
console.log(tab3);
