const ages=[12,17,15];
const ages2=[16,78,100];
const ages3=[100.200,300];
const allAges=ages.concat(ages2).concat([34,122]).concat(ages3);
const allAges2=[...ages,...ages2,...ages3];
const max=Math.max(...allAges2);
console.log(max);