// console.log("%cMale %ck","color: red; font-size:49px","color:blue; font-size:49px ")
// // console.log(hell);
// // hell.innerHTML = "hiiiiiii!!!!!!!!!!!!";
// let gab = "malekkkkkkkkk"
// console.log(`${"hii"}  "" ظظ // \\`);
// let mm = `<div> hellll nooooo ${gab} </div>`
// // document.write(mm);
// console.log(100+(+"-100"));
// console.log(100+(-"-100"));
// console.log(100+Number("-100"));
// console.log(+0x0);
// console.log(100_100_100);
// console.log(1e6);
// console.log(10 **6);
// console.log((100).toString());
// console.log((100.55555).toFixed(2));
// console.log(parseInt("100"));
// console.log(parseInt("100 malek"));
// console.log(Number.isInteger("100"));

// ---------------------------------------

// let m = " malek ";
// console.log(m.trim()); //Removes the leading and trailing white space and line terminator characters from a string.
// console.log(m.slice(2)); //like substring
// console.log(m.includes("ek")); //like contains
// == compare values & === compare value and type

// --------------------

// console.log(`${null || 200}`); // --> || for null + undefiend + any false
// console.log(`${null ?? 200}`);// --> ?? for null + undefiend

// --------------
// let ma = [1,2,3,4];
// ma.unshift(0)
// console.log(ma);
// ma.push(5);
// console.log(ma);

// ma.shift();
// console.log(ma);
// ma.pop();
// console.log(ma);
// console.log(ma.includes(1));
// ma.sort(); // if the array of string and number the sort will work alphapitically
// ma.sort((a,b)=> b-a);
// console.log(ma);
// ma.reverse();
// // console.log(ma.slice(3));
// console.log(ma);

//--------------------

// ma.push(5);
// ma.splice(4,0,'5')
// console.log(ma);

// ma=ma.concat([3,3,1],'1');
// console.log(typeof ma.join());
// ma=ma.join("MW")
// console.log(ma);

//----------------------------

// for(let i =0;i!=10;i++){};

//---------------------------

// let arr = ['malek','mohamed','nour','eldean','elkssas'];

// arr.forEach(element => {
//     document.write(`<div>`);
//     document.write(`<h1> ${element} </h1>`);
//     document.write(`</div>`);
// });

// -------------------------------

// finction

// function fun(){
// console.log('hio1');

// };

// // fun();

// function fun2(){
// console.log('hio2');
// return 10;
// };

// // console.log(fun2());

// function fun2(username = "malek"){
// console.log('hio2');
// return 10;
// };

// //reset parameter => if i don't know the number of parameters

// function fun3(...username){ //username is array
//     let m = 0;
//     username.forEach(element => {
//         m+=element;
//     });
//     console.log(m);
// };
// // fun3(1,2,3);

// function fun4(var1,...username){ //username is array
//     console.log(var1);
//     let m = 0;
//     username.forEach(element => {
//         m+=element;
//     });
//     console.log(m);
// };
// // fun4(1,2,3);

// //unlike the ordinary function (which can be declared and use any where)
// //anon function (functions which associated variable) you can not use it unless after the line where it has been declared

// let k = function()
// {
//     console.log('k');
// };
// // k();

// let print = element =>{ console.log(element)};
// let print2 = (element) => console.log(element);
// let print3 = (element) => {console.log(element)};
// // i can ignore some brakets if it consist of one line or argument
// // print('m');


// ---------------------------------------------

// high order filters(map)

// let arr = [1,2,3,4,5];
// arr = arr.map((el,ind,arr)=>{return el+el;});    // call back function for map (element ,index,arr)
// console.log(arr);

// ---------------------------------------

// high order filters(fiter)

// let arr = [-1,2,3,4,5];
// arr = arr.filter((el,ind,arr)=>{return el>0;});    // call back function for map (element ,index,arr)
// console.log(arr);

// --------------------

// high order filters(reduce)

// let arr = [1,2,3];
// arr = arr.reduce((acc,elemnt,index,arr)=>{return acc+elemnt;},1);    // acc by default the first element(or i can put it as the this line) and the element by default is the second element

// console.log(arr);

// ----------------------

// let arr = document.querySelectorAll("ul li")
// // document.querySelectorAll(".(class name (optional)) (element name)") 
// // let arr = document.querySelectorAll(".content div")
// console.log(arr);
// let i = 0;
// arr.forEach(element => {
//     element.innerHTML = "m"+ (++i);
//     element.onclick = ()=>{console.log("hii");element.innerHTML ="bob";element.style.display="none"};
//     console.log(element);
// });

// -----------------------------------------

// object

// let obje = {
//     // properties
//     name:"malek",
//     theage:10,
//     "what tha":11,
//     // methods
//     Hello: function(){console.log("hello");}
// };

// console.log(typeof obje.Hello());
// console.log(obje.name);
// console.log(obje.theage);
// console.log(obje['name']);
// console.log(obje['theage']);
// console.log(obje['what tha']);
// let va = 'name';
// console.log(obje[va]);

// let obje2 = {
//     country: {
//         city:{
//             address:"arish"
//         }
//     },
//     f:false
//     ,
//     tr: function(){
//         if(this.f===true)
//             console.log('done');
//     }
// }
// console.log(obje2.country.city.address);
// console.log(obje2["country"]["city"]["address"]);
// obje2.tr();

let user = new Object();

user.age = 38; //adding new property
user["country"] = "egypt";
console.log(user);

user.hell = function(){console.log("hi");}; //adding func
user.hell();