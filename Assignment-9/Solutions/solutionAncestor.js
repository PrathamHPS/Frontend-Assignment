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
    'sandeep': 23, 'shashi': 26,
    'nanha': 22, 'harish': 24,
    'divya': 30, 'arjun': 25,
    'vinoj': 26, 'vishal': 5
   }
   function getAncestors(name, peopleTree, ancestors){

    ancestors.push(name);

    if(peopleTree[name]){
        return getAncestors(peopleTree[name], peopleTree, ancestors);
    }

    return ancestors;
}

function getAges(ancestors, agesList){
    var ages = [];
    for(var i = 0; i < ancestors.length; i++){
        var age = agesList[ancestors[i]];
        if(age){
            ages.push(age);
        }
    }
    return ages;
}

function Person(name, peopleTree, ages){
    this.name = name;
    var ancestors = [];  
    this.ancestors = getAncestors(this.name, peopleTree, ancestors);
    this.ages = getAges(this.ancestors, ages);
    // console.log(this.ancestors, this.ages)
}

var sandeep = new Person('sandeep', peopleTree, ages);
var vishal = new Person('vishal', peopleTree, ages);
console.log(sandeep.ancestors, sandeep.ages )
// var gen = peopleTree[name];
//  console.log([name, gen, peopleTree[gen]], [ages[name], ages[gen], ages[peopleTree[gen]]]);