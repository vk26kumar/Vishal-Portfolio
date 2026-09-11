import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Portfolio from './pages/Portfolio'
import Admin from './pages/Admin'

export default function App() {
  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#14171c',
            color: '#e9ebee',
            border: '1px solid #2b3139',
            borderRadius: '8px',
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '13px',
            padding: '10px 14px',
          },
          iconTheme: { primary: '#5fd3bd', secondary: '#0a0b0d' },
        }}
      />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  )
}
