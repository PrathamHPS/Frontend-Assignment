Question : When a new object is created using class person it has to add ancestors and ages property to the 
object(Example : when var sandeep = new Person('sandeep', peopleTree, ages) object is created, sandeep.ancestors should give
['sandeep', 'shashi', 'vinoj'] and sandeep.ages should give [23, 26, 26])

var peopleTree = {
 "sandeep": "shashi",
 "nanha": "shashi",
 "harish": "nanha",
 "divya": "harish",
 "arjun": "sandeep",
 "shashi": "vinoj",
 "vishal": "divya"
}

var ages = {
 'sandeep': 23,
 'shashi': 26,
 'nanha': 22,
 'harish': 24,
 'divya': 30,
 'arjun': 25,
 'vinoj': 26,
 'vishal': 5
}
var name = 'sandeep'
var gen = peopleTree.sandeep;
function ancestors(){
    console.log([name, gen, peopleTree[gen]], [ages[name], ages[gen], ages[peopleTree[gen]]]);
}
ancestors();