var people = [
    
    {
 name: 'Sandeep',
 empId: 0,
 age: 23,
 orgId: 1
},
    {
 name: 'Arjun',
 empId: 1,
 age: 25,
 orgId: 2
}, 
    {
 name: 'Nanha',
 empId: 3,
 age: 22,
 orgId: 1
}, 
    {
 name: 'Nandu',
 empId: 4,
 age: 53,
 orgId: 3
}]

var organizations = [{
 name: 'Razorthink',
 id: 1,
 employees: []
}, {
 name: 'Apple',
 id: 2,
 employees: []
}, {
 name: 'Microsoft',
 id: 3,
 employees: []
}]

for(var i= 0; i < people.length; i++) {
    let id = people[i]['orgId'];
    let emp = people[i]['empId'];
    for(var j=0; j<organizations.length; j++) {
        if(id == organizations[j]['id']){
            organizations[j]['employees'].push(emp);
        }
    }
}
console.log(organizations);