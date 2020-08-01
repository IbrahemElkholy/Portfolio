import React, { Component } from 'react';
import './style.css'
import axios from 'axios'

class  Work extends Component {


   state={
     works:[]
   }
   
   componentDidMount(){
    axios.get('js/data.json').then(res =>{this.setState({works:res.data.works})})
   }

  render(){
    const { works }=this.state
   const worksItems = works.map((item) => {
     return (
       <div className="part first" key={item.id}>
         <i className={item.icon_name}></i>
         <h4 className="part-title">{item.title}</h4>
         <hr className="line" />
         <p className="part-desc">{item.body}</p>
       </div>
     )
   })
 
   return (
     <div className="work">
       <div className="container">
         <h2 className="work-title"><span>My</span> Work</h2>
         {worksItems}
       </div>
     </div>
 
   );
  } 
 
}

export default Work;