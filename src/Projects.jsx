import React from 'react'
import { useFetchProjects}  from './FetchProjects';


export const Projects = () => {

  const{loading,projects} = useFetchProjects();
  console.log(loading,projects);
  if(loading)
  {
    return <h1>Loading...</h1>
  }
  else
  {
    return (
      
      <div className='ddd'>
    <section className='projects'>
    
      <div className='title'>
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className='projects-center'>
        {
          projects.map((project)=>
          {
            const{title,url,img} = project 
            return<a href={url} target='_blank' rel='noreferrer' className='project'>
              <img src={img} alt={title} className='img'></img>
             <div className='llll'> <h5 >{title}</h5>  </div>
            </a>
            
          })
        }
      </div>
     
    </section> </div>
    )
  }
  
  
}

