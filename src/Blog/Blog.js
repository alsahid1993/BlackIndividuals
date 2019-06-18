import React, { Component } from 'react';

 const BlogPage =(props)=>{
<div>
<img src = {props.image }></img>
<h3 >{props.title}</h3>
<p>{props.date}</p>
</div>


 }


 

export default Blog;