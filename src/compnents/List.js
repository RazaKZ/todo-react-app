// import React from 'react'
// import { faEdit, faTrash}  from "react-icons/fa";
// const List = ({items, removeItem, editItem}) => {
//   return (
  
//     <div className="contianer">
//         {items.map((item) => {
//             const {id, title}= item;
         
//             return (
//                 <ul className="list-group list-group-flush" key={id}>

//                     <li className='list-group-item d-flex justify-content-between align-items-center'>
//                         {title}
//                         <div style={{float:"right"}}>
//                             <button type="button" 
//                             className="edit-btn"
//                             onclick={()=> editItem(id)}
//                             >
//                                 <faEdit/>
//                             </button>
//                             <button type="button" 
//                             className="delete-btn"
//                             onclick={()=> removeItem(id)}
//                             >
//                                 <faTrash/>
//                             </button>
//                         </div>

//                     </li>
//                 </ul>

//         )
                
             
//         })}

//     </div>
  
//   )
// }

// export default List