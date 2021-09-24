let list = [ 
  { title: "A", checked: false },
  { title: "B", checked: true },
  { title: "C", checked: false },
  { title: "D", checked: true },
  { title: "E", checked: false },
  { title: "F", checked: true }
 ]

 
 console.log(list.sort((a,b)=> b.checked - a.checked));