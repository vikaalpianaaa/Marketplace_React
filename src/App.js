import Login from './components/pages/login/index';
import './App.css';
import Registrasi from './components/pages/registrasi';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/pages/navbar';
import DetailProduct from './components/pages/detail';
import KeranjangBelanja from './components/pages/keranjang';


function App() {
  return (
    <div className="App">
      <Login/>
      <Registrasi/>
      <Navbar/>
      <DetailProduct/>
      <KeranjangBelanja/>
    </div>
  );
}

export default App;
