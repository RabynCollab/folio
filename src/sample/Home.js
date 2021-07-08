import React from 'react'
import Main from './main/Main'


const Home = () => {
  return (
    <>
      <div className="container">

        <div className="intro">
          <h2 className="title">
            The Sample Service Online
          </h2>
          <h1>
            Service In Global
          </h1>
          <p className="p-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, repellendus praesentium molestias id, placeat ex laborum aliquam ut nostrum veniam ab culpa repudiandae aut officia distinctio, reiciendis cumque itaque! Incidunt quod expedita id reprehenderit veniam neque deserunt impedit, recusandae repellat mollitia magni fuga, vero eligendi aut eum repellendus perspiciatis minus laboriosam ab illo inventore culpa. Ex, amet aperiam maxime vitae</p>
        </div>

        <div className="img-info">
          <div>
            <img src="https://images.unsplash.com/photo-1501556466850-7c9fa1fccb4c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2ZmaWNlJTIwZ2lybHN8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="img-girl" />
          </div>
          <div className="img-text">
            <p>Doing Some Research</p>
          </div>
        </div>

      </div>
      <Main />
    </>
  )
}

export default Home
