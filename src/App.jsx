import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import Layout from './components/Layout'
import Inicio from './pages/Inicio'
import Servicios from './pages/Servicios'
import Portafolio from './pages/Portafolio'
import Contacto from './pages/Contacto'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="servicios" element={<Servicios />} />
            <Route path="portafolio" element={<Portafolio />} />
            <Route path="contacto" element={<Contacto />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
