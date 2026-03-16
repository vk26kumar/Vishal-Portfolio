import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Portfolio from './pages/Portfolio'
import Admin from './pages/Admin'
import CustomCursor from './components/CustomCursor'

export default function App() {
  return (
    <>
      <CustomCursor />
      <div className="scanline" />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#0d0d0d',
            color: '#00f5d4',
            border: '1px solid #1a1a1a',
            fontFamily: 'Space Mono, monospace',
            fontSize: '0.75rem',
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  )
}
