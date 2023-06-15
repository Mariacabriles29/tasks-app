import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../auth/pages/HomePage'
import { LoginPage } from '../auth/pages/LoginPage'
import { RegisterPage } from '../auth/pages/RegisterPage'

export const AppRouter = () => {
  return (
    <BrowserRouter>
     
     <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='login' element={<LoginPage/>} />
                <Route path='register' element={<RegisterPage/>} />


                <Route path='*' element={<Navigate to='/login' replace />} />
            </Routes>

    </BrowserRouter>
  )
}
