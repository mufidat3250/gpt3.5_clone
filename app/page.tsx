import Content from './Contents/page'
import SideNav from './sideNav/sideNav'
import './home.scss'

export default function Home() {
  return (
    <main className="home">
        <SideNav/>
        <Content/>
    </main>
  )
}
