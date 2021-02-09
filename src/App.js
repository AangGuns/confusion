import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
// import './App.css';

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fu</NavbarBrand>
        </div>
      </Navbar>
      {/* menu component */}
      <Menu />
    </div>
  );
}

export default App;
