import '../../index.css'
import Pedido from '../../components/pedido/Pedido'
import Navbar from '../../components/Navbar'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div className='page'>
      <Navbar />
      <div className='page-wrapper'>
        <div className='page-body'>
          <div className='container-xl'>
            <Pedido />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
