import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Styles/navbar.module.css'
import User from './User'

const Navbar = () => {

    const navigate=useNavigate();
    const handleWomens=()=>{
        navigate ('/women')
        }
    
        const handleMens=()=>{
        navigate ('/asos-clone')
        }
        const handleHome=()=>{
            navigate ('/asos-clone')
        }
        const handleCart=()=>{
            navigate ('/cart')
        }
        const handleWishlist=()=>{
            navigate ('/wishlist')
        }

  return (
    <div>
        <div className={styles.aboveNavbar}>
            <div><p>Marketplace</p></div>
            <div><p>Help & FAQs</p></div>
            <div><img src="https://i.pinimg.com/originals/6f/f7/cf/6ff7cf1a4f6dbd06fb51ba39a9085372.jpg" alt="Above Navbar" /></div>
        </div>
        <div className={styles.navOuterDiv} >
            <div className={styles.nav} >
                <div onClick={handleHome} className={styles.logoDiv}>
                <img className={styles.asosLogo} src="https://dvow0vltefbxy.cloudfront.net/assets/landing/carriers/asos-f0a055cc793c419ec5f1f7388c7ced9bcb5b1dc08e527ac7e4b0ca29319667f9.svg" alt="asos logo"  />
                </div>
                <div>
                    <button onClick={handleWomens} className={styles.navButtons} >WOMEN</button>
                    <button onClick={handleMens} className={styles.navButtons} >MEN</button>
                </div>
                
                
                <input className={styles.searchIp} type="text" placeholder='     Search for items and brands'/>
                 <div style={{marginLeft:"-50px",marginTop:"10px"}}><i className="fa-solid fa-magnifying-glass"></i></div>
                
                <div className={styles.navIcons}>
                    <div>
                        <User/>
                    </div>
                    {/* <div><i className={styles.eachNavIcon} class="fa-regular fa-user"></i></div> */}
                    {/* <div><i className={styles.eachNavIcon} class="fa-regular fa-heart fa-2x"></i></div> */}
                    
                    <div onClick={handleWishlist}><img width="40px" height="40px" src="https://www.clipartmax.com/png/middle/11-115852_two-hearts-clipart-black-and-white-heart-icon-black-and-white.png" alt="Wishlist" /></div>
                    <div onClick={handleCart}><img width="40px" height="40px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROLH7r0DgnaYGl5Wn7fHenE0d0YyfXO3CKsYZtYYUET0pZ-8mCaemKuqi5BHNlo0ZSEQE&usqp=CAU" alt="Shopping bag" /></div>
                    {/* <div><i className={styles.eachNavIcon} class="fa-solid fa-bag-shopping fa-2x"></i></div> */}
    
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default Navbar