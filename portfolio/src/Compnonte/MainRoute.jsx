import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../Pages/HomePage'
import { Skills } from '../Pages/Skills'
import { About } from '../Pages/About'
import { Conact } from '../Pages/Conact'
import { Project } from '../Pages/Project'


export const MainRoute = () => {
  return (
    <div style={{width:'900px',marginTop:'40px'}}>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/skills' element={<Skills/>}/>
              <Route path='/projects' element={<Project/>}/>
            <Route path='/contact' element={<Conact/>}/>
          
        </Routes>
    </div>
  )
}
