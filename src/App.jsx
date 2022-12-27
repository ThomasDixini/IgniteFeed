import { Header } from './Components/Header/Header'
import { Post } from './Components/Post/Post'
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
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}

export default App
