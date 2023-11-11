import React from "react"
 class UserClass extends React.Component{

     constructor(props){
         super(props);

        this.state={
             count :0,
             count2: 1
        };
     }

     
     render(){
         const{
             name,
             location,
         } = this.props;

         const{
            count,
            count2
         } = this.state;

         return (
            <div>
            <h1>Name:{name}</h1>
            <h3>Location: {location}</h3>
            <h3>count = {count}</h3>
            <h3>count = {count2}</h3>
            <p>Birth: 7 october</p>
        </div>
         )
     }
 }
  export default UserClass;