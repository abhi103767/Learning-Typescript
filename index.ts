let isMarried:boolean = true;
if(isMarried===true) console.log('ture');
else console.log('false');


const arr: number[] = [1,3,4];
function add(x: number,y: number): number{
    return x + y;
}
add(1,1)
console.log(arr);

type User = {
    username : string,
    age : number,
    isMarried: boolean,
    animal? : Human 
    

}

const masai: User = {
    username : 'Avinash',
    age : 12,
    isMarried: true,
   

}
console.log(masai)
type Human = {
    haslegs : number,
    veg : boolean
}

type Dog {
    liveinStreet:boolean
}

 
 const humans:Human[] = [{haslegs:4, veg:false}]