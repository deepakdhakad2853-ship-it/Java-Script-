const array  = [1,2,3,4,5,6,7,8,]

  array.forEach((items)=>{
    // console.log (items<5);
})
// console.log(array);


// const newarr = array.forEach((items)=>{
//     return(items<5);
    
// })
// console.log(newarr);


//  const mynewarr = array.filter((items)=>{
//   return  (items<4);
    
// })
// console.log(mynewarr);
// console.log(array);

let newarray  = []

array.forEach((items )=>{
        if (items<6) {
            newarray.push(items)
        }
})
// console.log(newarray);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

 let userbook =  books.filter((bk)=>bk.genre === "Science" && bk.publish == 2009)
 console.log(userbook);
 