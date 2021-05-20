import React, { useState, useEffect } from 'react';
import { GithubRepoDisplay } from "github-repo-display-react";
import username from './App'
import './App.css';

export class Repo extends React.Component{
  
  render(){
    return(
          <GithubRepoDisplay
            numOfrepos={5}
            userName={username}
            showStars={true}
            showLanguage={true}
          />
    );
  }
}
export default Repo

//import React from 'react'
// import {useStaticQuery, graphql} from 'gatsby'

// const Repository = () => {
// const data = useStaticQuery(graphql`
//    query MyQuery {
//       githubViewer {
//     pinnedItems {
//     nodes {
//       description
//       homepageUrl
//       name
//       url
//     }
//       }
//     }
//   }
// `)
// return(
// <div>
// {data.githubViewer.pinnedItems.nodes.map((repository, i) => (
//     <div className="pf-grid-item" key={i}>
//       <a className="pf-project" 
//          href={repository.url} 
//          target="_blank" 
//          rel="noopener noreferrer">
//          GitHub URL
//       </a>
//       <h2>{repository.name}</h2>
//       <p>{repository.description}</p>
//       <p>{repository.homepageUrl}</p>
//     </div>
// ))}
// </div>
// )
// };
// export default Repository


