import { Header } from './Components/Header/Header'
import { SideBar } from './Components/SideBar/SideBar'
import './global.css'
import styles from './styles.module.css'

function App() {

  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita ex eveniet enim. Non, ducimus sint, a reprehenderit, error excepturi iure ab repellendus neque ex deleniti cupiditate dolorem quos nostrum blanditiis.</p>
        </main>
      </div>
    </div>
  )
}

export default App
