import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Inicio from './pages/Inicio'
import Servicios from './pages/Servicios'
import Portafolio from './pages/Portafolio'
import Contacto from './pages/Contacto'
import Privacidad from './pages/Privacidad'
import Terminos from './pages/Terminos'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="servicios" element={<Servicios />} />
            <Route path="portafolio" element={<Portafolio />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="privacidad" element={<Privacidad />} />
            <Route path="terminos" element={<Terminos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
