import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from './store/store.js'
import LoginPage from '../Pages/Auth/LoginPage.jsx'
import SignUpPage from '../Pages/Auth/SignupPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
