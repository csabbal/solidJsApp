import './App.css'
import Menu from './components/menu/menu'
import Footer from './components/footer/footer'
import RouterComponent from './routes/router'

function App() {
  return (
    <div class="layout">
      <Menu />
      <div class="content">
        <RouterComponent />
      </div>
      <Footer />
    </div>
  )
}
export default App
