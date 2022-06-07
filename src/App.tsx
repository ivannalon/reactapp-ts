import { Header } from "./components/Header";
import { Post, PostProps } from "./components/Post";
import "./global.css"
import styles from "./App.module.css"
import { Sidebar } from "./components/Sidebar";

interface Posts extends PostProps {
  id: number;
}

const posts:Posts[] = [
  {
    id:1,
    author: {
      avatarUrl: "https://github.com/ivannalon.png",
      name:"Ivan Nalon",
      role:"Front-End JR"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "👉 jane.design/doctorcare"},
    ],
    publishedAt: new Date("2022-05-03 20:00")
  },
  {
    id:2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name:"Mayk Brito",
      role:"Educator @ Rocketseat"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "👉 jane.design/doctorcare"},
    ],
    publishedAt: new Date("2022-05-13 20:00")
  }
]

export function App() {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>

        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}