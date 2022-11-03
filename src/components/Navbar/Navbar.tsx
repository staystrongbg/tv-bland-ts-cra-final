import { Link } from 'react-router-dom';

const Navbar = () => {
  const STYLE = {
    backgroundColor: '#101010',
    color: '#f1f2f3',
    padding: '20px 60px',
  };
  return (
    <nav className='flex-between' style={STYLE}>
      <Link to='/'>
        <h1>TV Bland</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
