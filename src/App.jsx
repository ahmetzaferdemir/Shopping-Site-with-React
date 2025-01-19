import { useState } from 'react'
import './App.css'
import { clothes } from './data/Data'
import Header from './components/Header'
import Cards from './components/Cards'
import Aside from './components/Aside'

function App() {

  return (
    <>

      <Header />
      <div className='row'>
        <div className='col-sm-12 col-md-3'>
          <Aside />
        </div>

        <div className='col-sm-12 col-md-9 mt-sm-3'>
          <div className="row container cards mx-auto" style={{ overflowY: "auto" }}>
            {clothes.map((item) => (
              <Cards key={item.id} clothes={item} />
            ))}
          </div>
        </div>
      </div>

    </>
  )
}

export default App
