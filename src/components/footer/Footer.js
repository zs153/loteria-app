import './footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='footer footer-transparent'>
      <div className='container-xl'>
        <div className='text-center align-items-center'>
          <div className='col-12 col-lg-auto mt-3 mt-lg-0'>
            Copyright &copy; 2022
            <Link to='/' className='link-secondary m-l05'>
              SIAC
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
