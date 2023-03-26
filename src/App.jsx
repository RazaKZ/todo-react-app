// import React, { useState, useEffect } from "react";
// import Alert from "./compnents/Alert";
// import List from "./compnents/List";


// const App = ()=> {

//   const [name, setName] = useState("")
//   const [list, setList] = useState([])
//   const [isEditing, setEditing] = useState(false)
//   const [editID, setEditID] = useState(null)
//   const [alert, setAlert] =useState({show:false, msg:"",type:""})
  
//   const handleSubmit =()=>{};
//   const showAlert =()=>{};
//   const removeAlert =()=>{};
//   const removeItem =()=>{};
//   const editItem =()=>{};
//   const clearList =()=>{};


//   return(

// <section className="section-center">
//       <form onSubmit={handleSubmit}>

//         {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
//         <h3 style={{marginBottom: "1.5rem", textAlign:"center"}}>
//           Todo App is here
//         </h3>
//         <div className="mb-3 form" >

// <input
// type="text"
// className="form-control"
// placeholder="e.g bread"
// onChange={(e) => setName(e.target.value)}
// value={name}
// />

// <button type="submit" className="btn btn-success">
//   {isEditing ? "Edit" : "submit" }
// </button>
//         </div>


//       </form>

// {list.length > 0 && (
//  <div style={{marginTop: "2rem"}}>
//   <List items={list} removeItem = {removeItem} editItem={editItem} />
//   <div className="text-center">

//     <button className="btn btn-warning" onClick={clearList}> clear Items</button>
//   </div>
//  </div>

//  )}
//     </section>
    
//   )


// }


// export default App;




// ----------------------------------
// import React,{Component} from "react";
// import { IoIosAddCircleOutline } from 'react-icons/io';
// import { AiTwotoneStar } from 'react-icons/ai';
// import { FcStart } from 'react-icons/fc';


// class App extends Component{
//     constructor(){
//         super()
//         this.state={
//             value:"",
//             todo:[
               
//             ],
          
//         }

//         console.log("constructor")

//     }

//     //fb =>first 
//     componentDidMount(){
//         this.setState({}) //render
//         //life cycle =>api 
//         // console.log("componenet did mount")
//         let data = localStorage.getItem("Todo_List")
//         console.log(data)

//         //parse string to obj
//         // v=10
//         this.state.todo= JSON.parse(data) //todo =>data 

//         //render 
//         this.setState({
           
//         })
//     }





   

//     //input 
//     handlechg=(val)=>{
//         this.setState({
//             value:val
//         })

//     }


//     //submit 
// setdata=()=>{
//     console.log(this.state.value)

//     //object title,s
//     let obj ={
//         title : this.state.value ,
//         s : 0
//     }

//     this.state.todo=[...this.state.todo,obj]

//     //LOCAL SET TODOS
//     localStorage.setItem("Todo_List",JSON.stringify(this.state.todo))

//     this.setState({
      
//         value:""
//     })

//     // 
   
//     console.log(this.state.todo)
// }

// //state chg = 0 or 1
// edit = (ind)=>{
//     // let len = this.state.todo[ind].title.length+50
//     //o 
//     for(var i =0;i<this.state.todo.length;i++){
//         this.state.todo[i].s=0
//     }

//     this.state.todo[ind].s=1
//     // this.state.input_width=len

//     this.setState({})
   
    

// }

// delete_data = (ind)=>{
//     this.state.todo.splice(ind,1) //delete one element
//     localStorage.setItem("Todo_List",JSON.stringify(this.state.todo))
//     this.setState({})

// }

// //todo title => value inp 
// setnewtext=(val,ind)=>{
//  this.state.todo[ind].title=val
//     this.setState({
      
//     })


// }

// update = (i)=>{
//     this.state.todo[i].s=0

//     localStorage.setItem("Todo_List",JSON.stringify(this.state.todo))

//     this.setState({
      
//     })
// }



//     render(){
//         console.log("render")

//         return(
//             <div>
//                 <h1>Todo List </h1>
//                 <input value={this.state.value} onChange={(e)=>this.handlechg(e.target.value)} type="text" />
//                 <button onClick={()=>this.setdata()}>
//                     <IoIosAddCircleOutline color="red"/>
//                 </button>
                
//                 {
//                     this.state.todo.map((v,i)=>{
//                         return(

//                             v.s == 0 ?
//                             //text 
                          
//                             <li key={i} style={{listStyle:"none",margin:12+"px"}}>
//                               <i><FcStart/></i>
//                                 {v.title}
//                               <button onClick={()=>this.edit(i)}>edit</button>
//                               <button onClick={()=>this.delete_data(i)}>delete</button>

//                             </li>

//                             :
//                             <li key={i} style={{listStyle:"none",margin:12+"px"}}>
//                             <i><FcStart/></i> 
//                             <input type="text" value={v.title} onChange={(e)=>this.setnewtext(e.target.value,i)} />
//                             <button onClick={()=>this.update(i)}>update</button>
                        

//                           </li> 
                          

                        

//                         )
//                     })
//                 }
              
//             </div>
//         )
//     }

// }

// export default App




// ===================================

import React,{Component} from "react";
import { IoIosAddCircleOutline } from 'react-icons/io';
import { AiTwotoneStar } from 'react-icons/ai';
import { FcStart } from 'react-icons/fc';


class App extends Component{
    constructor(){
        super()
        this.state={
            value:"",
            todo:[
               
            ],
          
        }

        console.log("constructor")

    }

    //fb =>first 
    componentDidMount(){
        this.setState({}) //render
        //life cycle =>api 
        // console.log("componenet did mount")
        let data = localStorage.getItem("Todo_List")
        console.log(data)
        if(data == null){
            this.state.todo=[]
        }
        else{
            this.state.todo= JSON.parse(data) 
        }


        //parse string to obj
        // v=10
        //todo =>data 

        //render 
        this.setState({
           
        })
    }





   

    //input 
    handlechg=(val)=>{
        this.setState({
            value:val
        })

    }


    //submit 
setdata=()=>{
    console.log(this.state.value)

    //object title,s
    let obj ={
        title : this.state.value ,
        s : 0
    }

    this.state.todo=[...this.state.todo,obj]

    //LOCAL SET TODOS
    localStorage.setItem("Todo_List",JSON.stringify(this.state.todo))

    this.setState({
      
        value:""
    })

    // 
   
    console.log(this.state.todo)
}

//state chg = 0 or 1
edit = (ind)=>{
    // let len = this.state.todo[ind].title.length+50
    //o 
    for(var i =0;i<this.state.todo.length;i++){
        this.state.todo[i].s=0
    }

    this.state.todo[ind].s=1
    // this.state.input_width=len

    this.setState({})
   
    

}

delete_data = (ind)=>{
    this.state.todo.splice(ind,1) //delete one element
    localStorage.setItem("Todo_List",JSON.stringify(this.state.todo))
    this.setState({})

}

//todo title => value inp 
setnewtext=(val,ind)=>{
 this.state.todo[ind].title=val
    this.setState({
      
    })


}

update = (i)=>{
    this.state.todo[i].s=0

    localStorage.setItem("Todo_List",JSON.stringify(this.state.todo))

    this.setState({
      
    })
}



    render(){
       

        return(
            <div>
                <h1>Todo List </h1>
                <input value={this.state.value} onChange={(e)=>this.handlechg(e.target.value)} type="text" />
                <button onClick={()=>this.setdata()}>
                    <IoIosAddCircleOutline color="red"/>
                </button>
                
                {
                    this.state.todo.map((v,i)=>{
                        return(

                            v.s == 0 ?
                            //text 
                          
                            <li key={i} style={{listStyle:"none",margin:12+"px"}}>
                              <i><FcStart/></i>
                                {v.title}
                              <button onClick={()=>this.edit(i)}>edit</button>
                              <button onClick={()=>this.delete_data(i)}>delete</button>

                            </li>

                            :
                            <li key={i} style={{listStyle:"none",margin:12+"px"}}>
                            <i><FcStart/></i> 
                            <input type="text" value={v.title} onChange={(e)=>this.setnewtext(e.target.value,i)} />
                            <button onClick={()=>this.update(i)}>update</button>
                        

                          </li> 
                          

                        

                        )
                    })
                }
              
            </div>
        )
    }

}

export default App



// -==================================
// import React from "react";
// import { GrAdd } from 'react-icons/gr';
// import { RiAddCircleLine } from 'react-icons/ri';

// class App extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             value:"",
//             todo:[]

//         }
//     }

//     handlevalue =(val)=>{
//         // console.log(val)
//         this.setState({
//             value:val
//         })
        
//     }

//     submit=()=>{
//         this.setState({
          
//             todo:[...this.state.todo,this.state.value]
//         })

        
//         console.log(this.state.todo)
        
//     }

//     render(){
//         return(
//             <div>
//             <h1>Todo List</h1>
//             <input type="text" onChange={(e)=>this.handlevalue(e.target.value)} />
//             <button onClick={()=>this.submit()}>
//                 <RiAddCircleLine style={{backgroundColor:"yellow"}}  size={40} color="red"/>
//             </button>
//             {
//               this.state.todo.map((v,i)=>{
//                 return(
//                   <li  key={i}>{v}</li>
//                 )
//               })
//             }
//             </div>
//         )
//     }
// }

// export default App;