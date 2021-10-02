import React from 'react'
import './Basic.css';



export const Basic = () => {
  return (

    <section className="form-section">
      <h1 className="text-white text-2xl font-serif"> Login form </h1>
      <div className="form">
        <input type="Email" name="Email" autocomplete="off" required />
        <label for="name" className="label-name">
          <span className="content-name">  Email </span>


        </label>
       




      </div>
      <div className="form">
        <input type="password" name="Email" autocomplete="off" required />
        <label for="name" className="label-name">
          <span className="content-name">  Password </span>


        </label>
       




      </div>

    </section>

  )
}
