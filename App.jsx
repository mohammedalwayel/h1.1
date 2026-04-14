import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import CartSidebar from './components/CartSidebar'
import Toast from './components/Toast'
import Footer from './components/Footer'
import { CartProvider } from './context/CartContext'
import './App.css'

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-light/30">
        <Navbar />
        <Hero />
        <Menu />
        <Footer />
        <CartSidebar />
        <Toast />
      </div>
    </CartProvider>
  )
}

export default App