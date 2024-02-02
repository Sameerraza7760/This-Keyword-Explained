// this keyword we talken about

// so  'this' keyword mean how the function is called
// 'this' have a differient mean is javascript like if you called this in  global so it print the windowObject mean windowGlobal object
// and if you called 'this' is in function so it print the window global object again  when you run time is 'non strict' mode
// and when your run time in 'strick mode' so it print undefefined

////////////////////////

// like just imagine your run time  in strick mode
// so

"strict mode";

function x() {
  // console.log(this); => undefined because strick mode
}

x();

// when you called a function like this

x.window(); // so it print the global object again

////////////////////////////

// the interwiew Question

// Q= what is the defrence between the function and the method

//Ans = ans is when the function is descibe in the object so it is called a method

// now what happend with 'this' in the object method

const object = {
  a: 20,

  x: function () {
    console.log(this.a);
  },
};

object.x(); // return an object mean curruent object

////////////////////////////////

const object2 = {
  a: 20,

  x: function () {
    console.log(this.a); // 'this' mean the currient context or object where the method placed and .a mean you accses the property a of currient obejct
  },
};

// and if you write this

object2.x();

//////////////////////////////

// // interwiew
// Q is what is deference betweeen call,bind and apply

// so ans is let see

// you make the object method

const student1 = {
  name: "sameer",
  printname: function () {
    console.log(this.name); // sameer is print
  },
};
student1.printname(); // sameer is print

// now i make the another object name

const student2 = {
  name: "Sawera",
};

student2.printname(); // it throw error because student 2 have no property about printname

// now i used a call method in this mean the student1 share own method printname to studdent 2

student1.printname.call(student2); //share a method of student 2

// now
student2.printname(); // now it print name sawera

const arrowFn = () => {
    console.log(this); //  is print undefeined because arrow function dont have there own this it gives 'this' the outerscope where this function bound
};

arrowFn()



// here is an example 


const arrowObject={
    name:'Sameer raza',
    outerFn:()=>{
        console.log(this); // so it return  a window global object because it dont have own
    }
}

const arrowObject2={
    name:'Sameer raza',
    outerFn:()=>{
        innerFn=()=>{
            console.log(this); // now it print the currient object becuase in this placeed it dont have own this so he take outer context // whick mean enclosing lexical context
        }
  
    }
}


///////////////////////////



// now  what happend this in DOm



// so 


{/* <button onclick=(alert(this)) >Click me </button>


// alert shows HTML BUTTON ELEMENT mean shows the curreint body*/}


{/* <button onclick=(alert(this.tagname)) >Click me </button> */}

// alert => Button