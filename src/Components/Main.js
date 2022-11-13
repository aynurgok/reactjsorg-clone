import React from 'react'

 function Main() {
  return (
    <div className='main'>
      <div className='container'>
        <div className='box'>
          <p className='main-title'>Declarative</p>
          <p className='contents'>
          React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
          Declarative views make your code more predictable and easier to debug.
          </p>
        </div>
        <div className='box'>
        <p className='main-title'>Component-Based</p>
          <p className='contents'>
          Build encapsulated components that manage their own state, then compose them to make complex UIs.
          
        Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
          </p>
        </div>
        <div className='box'>
        <p className='main-title'>Learn Once, Write Anywhere</p>
          <p className='contents'>
          We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

          React can also render on the server using Node and power mobile apps using <span>React Native.</span>
          </p>
        </div>
      </div>


    </div>
  )
}
export default Main