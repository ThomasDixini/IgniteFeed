import { Header } from './Components/Header/Header'
import { Post } from './Components/Post/Post'
import { SideBar } from './Components/SideBar/SideBar'
import './global.css'
import styles from './styles.module.css'

function App() {

  const posts = [
    {
      id: 1,
      author: {
        name: 'Diego Fernandes',
        authorUrl: 'https://github.com/diego3g.png',
        role: 'CTO @Rocketseat'
      },
      content: [
        {type: 'paragraph', content: 'Fala galeraa 👋'},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'link', content: '#novoprojeto#nlw#rocketseat'}
      ],
      publishedAt: new Date('2022-12-08 20:00:00'),
    },
    {
      id: 2,
      author: {
        name: 'Mayk Brito',
        authorUrl: 'https://github.com/maykbrito.png',
        role: 'Educator @Rocketseat'
      },
      content: [
        {type: 'paragraph', content: 'Fala galeraa 👋'},
        {type: 'paragraph', content: 'Pra cima Rocket 🚀'},
        {type: 'link', content: '#novoprojeto#nlw#rocketseat'}
      ],
      publishedAt: new Date('2022-12-28 20:00:00'),
    },
  ];

  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {
            posts.map(post => {
              return (
                <Post 
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              );
            })
          }
        </main>
      </div>
    </div>
  )
}

export default App
