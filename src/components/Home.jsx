
import React from 'react'
import Nav from './Nav'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import Comp3 from './Comp3'

const Home = () => {
       return (
              <div className='responsive'>
                     <Nav />
                     <Comp1 />
                     <Comp2 />
                     <Comp3 />
              </div>
       )
}

export default Home
