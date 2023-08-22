import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoaspo from "../pages/Image/logo aspo.png"

function Footer () {
    return (
        <footer style={{ marginTop : '0px', boxSizing : 'border-box', padding: '70px 0', backgroundColor : '#FBF7EB' }}>
        <div style={{ 	maxWidth: '1170px',	margin:'auto' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{  width: '25%', padding: '0 0px', paddingTop : '40px' }}>
            <h4 style={{ paddingTop :'10px' }}>Tentang AspooMarket</h4>
            <h4 style={{ paddingTop :'10px' }}>Kebijakan</h4>
            <h4 style={{ paddingTop :'10px' }}>Pusat Bantuan</h4>
        </div>
        <div style={{ width: '25%', padding: '0 0px' }}>
            <img src={logoaspo} alt="logoaspo" style={{ width : '100%', marginLeft : '640px' }}/>
        </div>
      </div>
    </div>
        </footer>
    );
}

export default Footer;