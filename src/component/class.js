import React from "react";

class Home extends React.Component{
     constructor(props)
     {
         super(props);

          this.state={
             count:20,
             count2:0,
          }

          this.state={
            userInfo:{
                name:"dummy",
                location:"dafault",
                avatar_url:"https://dummy-photo.com"
            }
         }; 
     }

      async componentDidMount()
    {
         console.log("parent mount is called");
         const data=await fetch("https://api.github.com/users/akshaymarch7")
          const json=await data.json();
          console.log(json);

          this.setState({
             userInfo:json,
          });
    }

     render()
     {
        

         const{
             count,
             count2,
         }= this.state;

         const{
            avatar_url,
            name,
            location,
            company,
            bio,
         }= this.state.userInfo;

         return(
             <div>
                <img src={avatar_url} />;
             <h1>Name:{name}</h1>
             <h3>Location: {location}</h3>
             <h3>company={company}</h3>
             <p>Bio= {bio}</p>

             <button onClick={()=>{
                 this.setState({
                     count:this.state.count + 1,
                    
                 })
             }} >click me</button>


             
                <button onClick={()=>{
                 this.setState({
                    
                     count2:this.state.count2 + 1,
                 })
             }} >click me 2</button>

             </div>
         )
     }
}

 export default Home;