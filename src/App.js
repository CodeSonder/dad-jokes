import './App.css';
import React from "react"
import Axios from "axios"


const apiKey = process.env.REACT_APP_API_KEY
const options = {
   method: 'GET',
   url: 'https://dad-jokes.p.rapidapi.com/random/joke',
   headers: {
     'x-rapidapi-key': `${apiKey}`,
     'x-rapidapi-host': 'dad-jokes.p.rapidapi.com'
   }
 };




 class App extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             setup: "",
             punchLine: ""
         }
     }


    getUrl = (event) => {
        // Axios.request(options).then(function (response) {
        //     console.log(response.data);
        // }).catch(function (error) {
        //     console.error(error);
        // });
        event.preventDefault();
        console.log("test")

    }
      

     render(){
         return (
             <div>
               <form onSubmit={this.getUrl}>
                  <input type="submit" value="Tell Me A Joke"></input>
               </form>

             </div>

         )
     }
 }

 export default App
