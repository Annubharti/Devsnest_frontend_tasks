// 1.Write a JavaScript program to list the properties of a JavaScript object. 
var student = { name : "David Rayy", sclass : "VI", rollno : 12 }
console.log(Object.keys(student))

console.log("-------------------------------------------------")

// 2. Write a JavaScript program to delete the rollno property from the following object. 
// Also print the object before or after deleting the property. Sample objec
// Given student array is = { name : "David Rayy", sclass : "VI", rollno : 12 }
console.log("Before Delation" ,student)

var del_item=(delete student.rollno)
// delete for deleting Item
console.log("After Delation", student)

console.log("-------------------------------------------------")

// 3.Write a JavaScript program to get the length of a JavaScript object.
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
var objectLength = Object.keys(student).length
console.log("The length of given object is",objectLength)

console.log("-------------------------------------------------")

// 4. Write a JavaScript program to display the reading status
//  (i.e. display book name, author name and reading status) of the following books. 
//  var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
//  { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
//  { author: 'Suzanne Collins', title: 'Mockingjay: 
// The Final Book of The Hunger Games', readingStatus: false }]






console.log("-------------------------------------------------")






// 5. Write a JavaScript program to get the volume of a Cylinder with four 
// decimal places using object classes. Volume of a cylinder : V = πr2h where r is the 
// radius and h is the height of the cylinder. Try To Attempt : Difficult Level Increased 
function volume(r,h){
    v = (22/7*r**2*h)
    return v.toFixed(4);
}
console.log(volume(3,5))

console.log("-------------------------------------------------")

// 6. Write a JavaScript program to sort an array of JavaScript objects.  
// Sample Object : var library = [ { title: 'The Road Ahead', author: 'Bill Gates', 
// libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
//  { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', 
// libraryID: 3245 }]; Expected Output: [[object Object] { author: "Walter Isaacson", 
// libraryID: 4264, title: "Steve Jobs" }, [object Object] { author: "Suzanne Collins",
//  libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, [object Object]
//  { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]










 



// 6. Write a JavaScript program to sort an array of JavaScript objects. 
//  Sample Object : var library = [ { title: 'The Road Ahead', author: 'Bill Gates', 
// libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
//  { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins',
//  libraryID: 3245 }]; Expected Output: [[object Object] { author: "Walter Isaacson", 
// libraryID: 4264, title: "Steve Jobs" }, [object Object] { author: "Suzanne Collins",
//  libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" },
//  [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]
