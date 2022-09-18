import React from 'react'
import Welcome from '../assets/images/welcome.svg'
const HomePage = () => {
  return (
    <main className='container home'>
      <div className="left_section">
        <h1>Welcome to our site</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nisi voluptate ut rem possimus nemo amet cumque animi ratione quis officia nihil esse aut repellat corporis, quae iusto inventore fugiat a. Incidunt, dicta veniam natus perferendis itaque quo deserunt? Saepe mollitia deserunt nostrum non maxime quos, libero eligendi debitis tempora.</p>
      </div>
      <div>
        <img src={Welcome} alt="" />
      </div>
    </main>
  )
}

export default HomePage
