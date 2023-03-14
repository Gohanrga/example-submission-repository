import React from 'react'
import Header from './components/Header.js'
import Content from './components/Content.js'
import Total from './components/Total'
const App = () => {
  
  const course = 'Half Stack application development'
  const contents = [
    {
      part: 'Fundamentals of React',
      exercises: 10
    },
    {
      part: 'Using props to pass data',
      exercises: 7
    },
    {
      part: 'State of a component',
      exercises: 14
    }
  ]
 
  return (
    <div>
      <Header course={course}/>
      <Content contents={contents}/>
      <Total total={contents[0].exercises + contents[1].exercises +  contents[2].exercises}/>
    </div>
  )
}

export default App
