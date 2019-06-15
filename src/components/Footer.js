import React from 'react';
import '../style/Footer.css';

class Footer extends React.Component {
    render(){
        return (
            <div className='footerImg'>
                <div className='footer'>
                    <h2>
                        <span className='footerTitle1'>MAV</span><span className='footerTitle2'>ENT</span>
                    </h2>
                    <p className='footerText'>Торговая марка «MAVENT» © 2013-2017<br/>
                        Все права защищены законом.
                    </p>
                </div>
            </div>
        );
    }
}

export default Footer;