import React from 'react';
import icon from '../img/icon.png';
import {css} from 'aphrodite';
import styles from '../style/ProductStyle';
import FasadSistem from './FasadSistem';



class Product extends React.Component {
  render(){
    return (
      <div className="Product">
        <div>
        <img className={css(styles.icon)}
           src={icon}
        />
        </div>
        <div>
          <h1 className={css(styles.productText)}>
          Наша продукция
          </h1>
          </div>
          <div className={css(styles.border)}>
            <span className={css(styles.borderText)} >ФАСАДНЫЕ СИСТЕМЫ</span>
          </div>
          <div>
            <p className= {css(styles.fassadSistemText)}>В рамках объединения системы организован полный технологический цикл,<br></br>
               который включает в себя разработку концепции облицовки здания - в<br></br>
                соответствии с потребительскими предпочтениями.</p>
          </div>
          <FasadSistem/>
        </div>
      
    );
  }
  
}

export default Product;