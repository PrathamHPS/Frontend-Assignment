// Question : Given a list, find their mean and variance.

var list = [1,2,3,4];
let mean = list.reduce((a,b)=> a+b) / list.length;
let vari = 0;
 for(var i=0; i<list.length; i++) {
    vari += (list[i]-mean)**2;
 }
 vari = vari / list.length;
 console.log('mean: ',mean,"\t", 'varience:', vari);