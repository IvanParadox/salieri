let a = 1;
let b = 2
let c = 3;
let err = 4

function A(a,b,c,err){
  console.log('1');
}

function B(err,a,b,c){
  console.log(arguments);
    A.apply(arguments);
}

B (err,a,b,c);

function B() {
 let args = [];
 for (let i = 1; i < arguments.length; i++) {
   args.push(arguments[i])
 }
 args.push(arguments[0])
 return A.apply(this, args)
}
