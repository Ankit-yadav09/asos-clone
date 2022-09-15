import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from '../../Components/Styles/sale.module.css'

const WSale = () => {

    const navigate=useNavigate();
    const handleWomens=()=>{
        navigate ('/asos-clone/women')
        }
    const handleMens=()=>{
        navigate ('/asos-clone')
        }
  return (
    <div>
        <div>
            <div className={styles.saleTopOuter}>
                <div className={styles.saleTop}>
                    <div><button onClick={handleWomens}>Women</button></div>
                    <div><h3>+50 % OFF 1000s OF SUMMER SALE STYLES!* <br /> ALREADY UP TO 80% OFF <br /> With code: ABC123</h3></div>
                    <div><button onClick={handleMens}>Men</button></div>
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
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBGqcJXsXO9PIZwZTz4LVOsGkHOGGJndCeeHhS2pENQh4UgojwERDeNKEHKxeE8Z7x-mQ&usqp=CAU" alt="lowest" /> 
                        <h4>THE BEST (LOWEST) <br /> SALE DISCOUNTS</h4>
                        </div>
                    <div className={styles.posterEachImage}>
                        <img src="https://images.beautifulhalo.com/images/392x588/201907/S/summer-womens-vintage-tropical-leaf-printed-lapel-collar-short-sleeve-button-down-holiday-hawaiian-shirt_1563285466439.jpg" alt="vintage" /> 
                        <h4>VINTAGE TOP </h4>
                        </div>
                    <div className={styles.posterEachImage}>
                        <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/16405060/2021/12/8/c6e0c149-281b-4c6e-bd8d-6a857e3bac1d1638939165863RedTapeWomenPink1.jpg" alt="shoes" /> 
                        <h4>SHOES & KICKS</h4>
                        </div>
                    <div className={styles.posterEachImage}>
                        <img src="https://m.media-amazon.com/images/I/81XcfLh1UBL._UY550_.jpg" alt="trousers" /> 
                        <h4>LOWEST PRICE <br /> TROUSERS</h4>
                        </div>
                    <div className={styles.posterEachImage}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwE2u3-5Kci0xPxysyCMpVcx8XYps0-9T4tQ&usqp=CAU" alt="accessories" /> 
                        <h4>LOWEST PRICE <br />ACCESSORIES</h4>
                        </div>
                    <div className={styles.posterEachImage}>
                        <img src="https://m.media-amazon.com/images/I/41pgvp52ziL.jpg" alt="tops" /> 
                        <h4>THE 50%-OFF EDIT</h4>
                        </div>
                </div>
                <div className={styles.posterBottomBtn}>
                    <button>VIEW ALL</button>
                    
                </div>
                <p>Sale items only. See website banner for Ts&Cs. selected marked products excluded from promo.</p>
            </div>
        </div>
    </div>
  )
}

export default WSale