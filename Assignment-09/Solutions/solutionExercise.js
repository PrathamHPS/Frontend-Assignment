var list = [ "vinoj, arjun", "dixy", "amala, ken"];

function removeComma(list){
    for( var i= 0; i<list.length; i++) {
        if (list[i].search(',')> -1){
            let a = list[i]
            // console.log(list[i].search(','),
            // a.slice(0, a.search(',')),
            // a.slice(a.search(',')+2, a.length) );
            list.splice(i,1);
            // console.log(list)
            list.splice(i, 0, a.slice(0, a.search(',')), a.slice(a.search(',')+2, a.length));
        }
    }
    console.log(list)
    
}
removeComma(list);


var array = [ [{name: "vinoj"}, {name: "dixy"}], {name: "amala"}, {name: "arjun"}];
console.log(array.flat(Infinity)) // elegent way.