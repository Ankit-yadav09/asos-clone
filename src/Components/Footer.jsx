import React from 'react'
import styles from './Styles/footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footerMain}>
    <hr />
    <br />
        <div className={styles.upperFooter}>
            <div className={styles.footerSocial}>
                <div>
                    <img src="https://image.similarpng.com/very-thumbnail/2020/05/Vector-Facebook-icon-PNG.png" alt="facebook" />
                </div>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt="insta" />
                </div>
                <div>
                    <img src="https://play-lh.googleusercontent.com/KxeSAjPTKliCErbivNiXrd6cTwfbqUJcbSRPe_IBVK_YmwckfMRS1VIHz-5cgT09yMo" alt="snapchat" />
                </div>
                <div>|</div>
            </div>
               
            <div className={styles.footerPayment}> 
                <div>
                    <img src="https://usa.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg" alt="visa" />
                </div>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png" alt="mastercard" />
                </div>
                <div>
                    <img src="https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy8zMjc4YmRjMTRjNzRkZDRlODU3MzJiNzc2ZDBlNWIxZC5wbmc=.jpg" alt="paypal" />
                </div>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png" alt="american" />
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUsL0vwRO1aE1T9hWaDynI5844M6qGMlNCfTQy4eLUrSFMjBbhHmvc5zamg6e1fqX8aBY&usqp=CAU" alt="visa" />
                </div>
            </div>
        </div>
        
        <div className={styles.middleFooter}>
            <div className={styles.midFtCont}>
                <div className={styles.midFtEachBox}>
                    <h2>HELP & INFORMATION</h2>
                    <p>Help</p>
                    <p>Track order</p>
                    <p>Delivery & returns</p>
                </div>
                <div className={styles.midFtEachBox}>
                    <h2>ABOUT ASOS</h2>
                    <p>About us</p>
                    <p>Career at ASOS</p>
                    <p>Corporate responsibility</p>
                    <p>Investors' site</p>
                </div>
                <div className={styles.midFtEachBox}>
                    <h2>MORE FROM ASOS</h2>
                    <p>Mobile and ASOS apps</p>
                    <p>ASOS Marketplace</p>
                    <p>Gift vouchers</p>
                    <p>Black Friday</p>
                    <p>ASOS x Thrift+</p>
                </div>
                <div className={styles.midFtEachBox}>
                    <h2>SHOPPING FROM:</h2>
                    <div className={styles.midFtCountry}>
                        <p>You're in</p>
                        <img src="https://i.pinimg.com/originals/6f/f7/cf/6ff7cf1a4f6dbd06fb51ba39a9085372.jpg" alt="Country Footer" />
                        <p>|</p>
                        <h2>CHANGE</h2>
                    </div>
                </div>
            </div>
           
        </div> 
        <div className={styles.bottomFooter}>
            <div className={styles.bottomFtCont}>
                <div><p>© 2022 ASOS</p></div>
                <div style={{display:"flex", gap:"10px"}}>
                    <p>Privacy & Cookies</p>
                    <p>|</p>
                    <p>Ts&Cs</p>
                    <p>|</p>
                    <p>Accessibility</p>
                </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default Footer