import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Styles/sale.module.css'

const Sale = () => {

    const navigate=useNavigate();
    const handleWomens=()=>{
        navigate ('/women')
        }
        const handleMensPage=()=>{
            navigate ('/asos-clone')
            }
  return (
    <div>
        <div>
            <div className={styles.saleTopOuter}>
                <div className={styles.saleTop}>
                    <div><button onClick={handleWomens}>Women</button></div>
                    <div><h3>+50 % OFF 1000s OF SUMMER SALE STYLES!* <br /> ALREADY UP TO 80% OFF <br /> With code: ABC123</h3></div>
                    <div><button onClick={handleMensPage}>Men</button></div>
                </div>
            </div>
        </div>
        <div>
            <div className={styles.SalePosterOuter}>
                <button>SALE</button>
                <div className={styles.posterHeading}>
                    <h1>EXTRA 50 % OFF 1000s OF <br />
                     SUMMER STYLES!* <br /> 
                    ALREADY UP TO 80% OFF <br /></h1>
                     <h3>With code: ABC123</h3>
                </div>
                <div className={styles.posterImages}>
                    <div className={styles.posterEachImage}>
                        <img src="https://res.cloudinary.com/trunk-club/image/upload/f_auto,q_auto/Blog/20085_TCM_ClassicStyles_Thumb.jpg" alt="" /> 
                        <h4>THE BEST (LOWEST) <br /> SALE DISCOUNTS</h4>
                        </div>
                    <div className={styles.posterEachImage}>
                        <img src="https://i.pinimg.com/736x/2d/c1/37/2dc1371cfc0ab2d5da9afde6ab1cedbd.jpg" alt="" /> 
                        <h4>VINTAGE TOP </h4>
                        </div>
                    <div className={styles.posterEachImage}>
                        <img src="https://cdn.shopify.com/s/files/1/0107/9820/2938/products/CLOVECORE4954copy.jpg?v=1646351281" alt="" /> 
                        <h4>SHOES & KICKS</h4>
                        </div>
                    <div className={styles.posterEachImage}>
                        <img src="https://www.realmenrealstyle.com/wp-content/uploads/2015/11/Man-in-Swimwear-e1447435925652.jpg" alt="" /> 
                        <h4>LOWEST PRICE <br /> SWIMWEAR</h4>
                        </div>
                    <div className={styles.posterEachImage}>
                        <img src="https://thenewwallet.com/wp-content/uploads/2019/07/6-Mens-Accessories-That-Will-Never-Go-Out-Of-Style.jpg" alt="" /> 
                        <h4>LOWEST PRICE <br />ACCESSORIES</h4>
                        </div>
                    <div className={styles.posterEachImage}>
                        <img src="https://i.pinimg.com/736x/6d/50/c2/6d50c2b82fb10bf58dbcf2d503075f9f.jpg" alt="" /> 
                        <h4>THE 50%-OFF EDIT</h4>
                        </div>
                </div>
                <div className={styles.posterBottomBtn}>
                    <button>VIEW ALL</button>
                    
                    {/* <button>SHOP ALL SALE</button> */}
                </div>
                <p>Sale items only. See website banner for Ts&Cs. selected marked products excluded from promo.</p>
            </div>
        </div>
    </div>
  )
}

export default Sale