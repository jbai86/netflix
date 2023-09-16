import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import './home.scss'

const Home = () => {
  return (
    <div className="home">
        <Navbar />
        <Featured />
        <List />
        <List />
        <List />
        <List />
        <img width="100%" src="" alt="" />
    </div>
  )
}

export default Home