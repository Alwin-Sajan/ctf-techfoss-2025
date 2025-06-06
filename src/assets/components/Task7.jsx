import React, { useState } from 'react'
import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom';

const Task7 = () => {
  const image = '/fruits.jpg'
  const [fruit, setFruit] = useState({ fruits: "" });
  const [dialogMessage, setDialogMessage] = useState("");
  const navigate = useNavigate();

  const fruitHandle = (event) => {
    setFruit({ ...fruit, [event.target.name]: event.target.value });
  }


  const tasks = JSON.parse(import.meta.env.VITE_task7);


  const checkFruit = (event) => {
    event.preventDefault();
    if (fruit.fruits === "") {
      return;
    }

    const userFruits = fruit.fruits.toLowerCase();



    try {
      if (tasks[userFruits] === undefined) {

        setDialogMessage(`Try again!`)

      } else {

        setDialogMessage(`Your flag is ${tasks[userFruits]}`)

      }
      document.getElementById('dialog-default').showModal();

    } catch (error) {
      console.log(error)
    }





  }

  return (
    <div>
      <div style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        filter: 'brightness(40%)' // Adjust the brightness as needed
      }}></div>
      <Navbar />

      <div className="container">
        <br />
        <h1 style={{ color: '#eeeeee' }}>Task 4 </h1>
        <br />
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-5">
              <div className="col col-12">
                <p className="nes-balloon from-left nes-pointer">
                  Find the FIVE fruits I like!!
                </p>
                <a href="https://aravind-b-kumar.github.io/Hidden-Fruits-CTF/" target='/blank'>
                  <div className="nes-container is-rounded" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                    <p style={{ color: 'white' }}>Click me to go to the website</p>
                  </div></a>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 col-xxl-10">
                {/* for gap */}
              </div>
              <div className="col col-12">
                <div className="nes-container with-title is-centered" style={{ backgroundColor: 'rgb(241, 241, 241)' }}>
                  <p className="title">Enter Here</p>

                  <input type="text" id="name_field" class="nes-input" name='fruits' value={fruit.fruits} onChange={fruitHandle} placeholder="fruit_name"></input>
                  <a type="button" className="nes-btn is-success" href='' style={{ marginTop: '20px' }} onClick={checkFruit}>Eat!</a>
                </div>
              </div>
              <div className='flex items-center gap-4'>
              <a type="button" className="nes-btn is-error" href='https://forms.gle/ooaq2gmeiLjRoWWt8' target='/blank'>Submission</a>
              <button type='submit' className='nes-btn bg-red-300 text-red-700 ml-8 py-2 px-8' onClick={() => { navigate('/t5qrst') }}>Next</button>
            </div>
              <div className="col col-12"></div>
            </div>
          </div>
        </div>

        <section>
          <dialog className="nes-dialog centered" id="dialog-default">
            <form method="dialog">
              <p className="title"></p>
              <p style={{ textAlign: 'center' }}>{dialogMessage}</p>
              <menu className="dialog-menu">
                <button className="nes-btn">Close</button>
              </menu>
            </form>
          </dialog>
        </section>
      </div>
    </div>
  )
}

export default Task7