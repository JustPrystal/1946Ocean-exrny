import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
      <div className='header'>Header</div>
      <div className="nav">
        <Link to='/contact'>Contact</Link>
        <Link to='/'>Home</Link>
      </div>
      <hr />
    </>
  )
}

export default Header