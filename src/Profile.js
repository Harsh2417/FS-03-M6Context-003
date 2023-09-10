import React from "react";
// export default class Profile extends React.Component{
//     constructor(){
//         super();
// this.state={
//     name:'Harsh',
//     age:24,
//     count:0
// }
//     }
//     updatedata(){
//         this.setState({
//             name:'rahul',
//             age:24,
//             count:this.state.count+1
//         })
//     }
//     render()
//         {
//             return(
//                     <>
//                     <h1>Hello {this.state.name} is {this.state.age} Years old.</h1>
//                     <h2> count={this.state.count}</h2>
//                     <button onClick={()=>{this.updatedata()}}>Update</button>
//                     </>                    

//         )
//         }
// }
export default function Profile(har){
    return(
        <>
            <h1>
                Props {har.text} {har.data}
            </h1>
        </>

    )
}