// function component                                                 itis stateless

// import logo from './logo.svg';
// import './App.css';

import React, { useState } from "react";

// function App()
// {
//   let firstVariable = 5
//   console.log("firstVariable: "+firstVariable)
//   firstVariable = 6
//   console.log("firstVariable: "+firstVariable) 

//   const functionArgument = () =>
//   {
//     console.log("this is my functionArgument!!")
//     return false
//   }

//   const function1 = (variable) =>
//   {
//     console.log(variable)
//     console.log("this is my function 11!")
//     if(variable())
//     {
//       console.log("the condition is true")
//     }
//     else
//     {
//       console.log("the condition is false")
//     }
//   }
//   function1(functionArgument)

//   class Student
//   {
//     id
//     name
//     rollNumber
//     address
//     emilID

//      constructor(tempid, tempname, temproll, tempaddress, tempemil )
//      {
//       this.id = tempid
//       this.name= tempname
//       this.rollNumber = temproll
//       this.address = tempaddress
//       this.emilID = tempemil
//      }
     
//      print()
//      {
//       console.log("id", this.id)
//       console.log("name", this.name)
//       console.log("rollnumber", this.rollNumber)
//       console.log("address", this.address)
//       console.log("emailID",this.emailID)
//      }
//   }

//   const Student1 =
//    new Student(123, "nilita", 2324, "kjdfkun akdfji", "kajfdi@lak")
//   Student1.print()

//   class Monitor extends Student
//   {
//     batch

//     constructor(batchTemp, tempid, tempname, tempaddress, tempemil)
//     {
//       super(tempid, tempname, tempaddress, tempemil)
//       this.batch = batchTemp
//     }

//     print()
//     {
//       super.print()
//       console.log("Batch: "+this.batch)
//     }
//   }

//   let ravi = new Monitor(" 2-3pm", 222, "ravi prakash", 234, "jhkjsdfiu hj", "ravi@gmail.com")
//   console.log("ravi: ", ravi)
//   ravi.print()

//   let variable = <div>hellow world! how are you</div>

//   return (
//     <div>hellow {firstVariable}<br/>{variable}</div>
//   );
// }

//class component                                      it is state
//class App extends React.Component
// {
//   render()
//   {
//     return React.createElement
//     (
//       "div",
//       null,
//         React.createElement("p", null, "This is simple react element"),
//         React.createElement("ul", null,),
//         React.createElement("li", null, "list item 1"),
//         React.createElement("li", null, "list item 2"),
//         React.createElement("li", null, "list item 3")
//     )
//   }
// }


// class App extends React.Component
// {
  
//   buttonClickHandle()
// {
//   console.log("Clicked the button!!!")
//   console.log("this.buttonClickHandle")
// }

//   render()
//   {
//     return <div>
//       <p>

//         <ul>
//           <li>list 1</li>

//           <li>list 2</li>
//           <li>list 3</li>
//         </ul>

//         <button onClick={()=>this.buttonClickHandle}>click me!</button>

//       </p>
//     </div>
//   }
// }

// const App = (props) =>
// {
//   console.log("props: ",props)
//   console.log("props color:", props.color)
//   console.log("props size: ", props.size)
//   console.log("clickEvent: ", props.clickEvent)
//   return <div style={{backgroundColor:props.color}}>
//     This is App component
//     <button onClick={props.clickEvent}>click me</button>
//     </div>

// }


// class App extends React.Component
// {
//   state = {
//     counter:0,
//     component: <ChildComponent/>

//   }
//   constructor(props)
//   {
//     super(props)
//     console.log("constructor of App component")
//   }
  
//   static getDerivedStateFormProps()                                                    //life cycle method
//   {
//     console.log("getDeriveStateFromProps")
//   }

//   incrementCounter =() =>
//   {
//     this.setState({counter:this.state.counter + 1}) 
//   }
  
//   componentDidMount()
//   {
//     console.log("componentDidMount")
//   }

//   shouldComponentUpdate()
//   {
//     console.log("shouldComponentUpdate")
//     return true                      //false written then increment counter is not increase
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState)
//   {
//     console.log("getSnapshotBeforeUpdate")
//     return true
//   }

//   componentDidUpdate()
//   {
//     console.log("componentDidUpdate")
//   }

//   unmountChild = () =>
//   {
//     this.setState({
//       counter: this.state.counter,
//       component: "The Child component is gone/unmounted"
//     })
//   }
//   render()
//   {
//     //console.log(this.props.color)
//    // console.log(this.state.counter)
//    console.log("render method")
//     return <div style={{backgroundColor: this.props.color}}>
//       hello
//       <button onClick={this.props.clickEvent}>click me</button><br/>
//       ------------------------------------<br/>
      
//       counter : {this.state.counter}  

//       <button onClick={this.incrementCounter}>Increment counter</button>
//       <br/>
//       Mounting Child Component 
//       <br/>
//       ---------------------------------<br/>
//       {/* <ChildComponent/><br/> */}
//       {this.state.component}<br/>
//       -----------------------------------<br/>
//       <button onClick={this.unmountChild}>unmount Child Component</button>
//       </div>
//   }
// }

// class ChildComponent extends React.Component
// {
//   componentWillUnmount()
//   {
//     console.log("unmounting Child component")
//   }

//   render()
//   {
//     return <div>This is my Child Component</div>
//   }
// }









//  JAVA SCRIPT CODE

const App = () =>
{
//   function function1 (a,b)                                                  // this is a function define by function keyword
//   {
//     console.log("this is funtion1: "+a+" +b")
//   }

//   const function2 = (a, b) =>                                               // variable type of function
//   {
//     console.log("this is function2:"+a+" +b")
//   }
                                                                         
//   function2( function1, 3)
 

//   let myArray = [ 1, 2, ()=>                                                 // ananomus function means without name--
//     {
//       console.log("This is form Array")
//       console.log("This is again form Array")
//     }, 10] 
//    console.log(myArray)
//    console.log(myArray[2])
//    console.log(myArray[2]())

 
//    const myObject = {
//     name: "krati",
//     age: 20,
//     myFunction: () =>{
//       console.log("This is form inside of a function!!")
//     }
//   }

//   console.log ("Name:", myObject.name)
//   console.log("Function:", myObject.myFunction())



// const object1 = {
//   a:"A",
//   b:"B"
// }
//  const object2 =Object.assign({}, object1)
  
//  console.log("object1: ",object1)
//  console.log("object2: ",object2)

//  object1.a = "a"

//  console.log("object1: ",object1)
//  console.log("object2: ",object2)

// myFunction()                                                        //Hoisting: its means that function calling before the decleration but underground system first arrange its then implement 
                                                                    
// function myFunction()
// {
//   console.log("this is myfunction")
// }

// abc = 10                                                            // in Hosting = var is allowed but in const,let not allowed.    
// console.log("abc: ",abc)
// var abc


// myFunction = () =>
// {
//   console.log("This is myFunction")
// }
// myFunction()
// var myFunction

// function makeHelloFunction()                                  //closure
// {
//   const message ="Hello"

//   function sayHello()
//   {
//     console.log(message)
//   }
//   return sayHello
// }

// const sayHello = makeHelloFunction()
// //console.log(message)
// sayHello()

(() =>                                                           //iife 
{
  console.log("I am self executing function")
})()


let a = 10                    //coercion or type casting
//String(a)                 //explicit string
//a+""                      //implicit string


let b = String(a)                             //explicit string 

console.log("number a: ",a)
console.log(typeof a)
console.log("string a: ",b)
console.log(typeof b)

// DATA TRANSFER PARENT TO CHILD USING PROPS

//  return <div>
//   hello this is parent component
//   <ChildComponent prop1="prop1 data" prop2="prop2 data"/>                
//   </div>                                                            //prop whole is an object
// }

// const ChildComponent = (props) =>
// {
//   console.log("Prop 1: ", props.prop1)
//   console.log("Prop 2: ", props.prop2)
//   return <div>
//     Child Component<br/>
//     Prop1 received form Parent : {props.prop1}<br/>
//     Prop2 received form Parent : {props.prop2}<br/> 
//     </div>
// }

//CHILD TO PARENT USEING CALLBACK FUNCTION

// const childCallbackFunction = (data) =>
// {
//   console.log("Call back function called in parent")
//   console.log("Data from Child:"+data)
// }

// return <div>
// hello this is parent component
// <ChildComponent prop1="prop1 data" prop2="prop2 data" callBackFunction={childCallbackFunction}/>                
// </div>                                                            //prop whole is an object
// }

// const ChildComponent = (props) =>
// {
// console.log("Prop 1: ", props.prop1)
// console.log("Prop 2: ", props.prop2)

// return <div>
//   Child Component<br/>
//   Prop1 received form Parent : {props.prop1}<br/>
//   Prop2 received form Parent : {props.prop2}<br/> 
//   <button onClick={()=>props.callBackFunction("My child's Data")}>click me</button>
//   </div>
// }

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");



const handleFormSubmit = (e) =>
{
  e.preventDefault();
  console.log("Email: "+email+", Password: "+password)
}

return <div>
  <form onSubmit={handleFormSubmit}>
    <h2>Login Form</h2>

    <label>
      Email:
      <input type= 'email' defaultValue={email} onChange={e=>setEmail(e.target.value)} required/>
    </label><br/>
    <label>
      Password:
      <input type= 'password' defaultValue={password} onChange={e=>setPassword(e.target.value)} required/>
    </label><br/>

    <button>Submit</button>

  </form>
</div>

}
export default App;


