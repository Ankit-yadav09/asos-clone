import React from 'react'
import styles from '../../Components/Styles/middle.module.css'

const WMiddle = () => {
  return (
    <div>
        <div className={styles.midTopOuter}>
            <div className={styles.midTopImage}>
                <img src="https://content.asos-media.com/-/media/homepages/ww/2022/july/18/heros/ww_global_escape_desktophero_1258x6001.jpg" alt="" />
            </div>
        </div>
        <div className={styles.mid2Outer}>
            <div className={styles.midImages}>
                <div className={styles.midEachImage}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuFgsc0EUuiUXZH439jnHyS_3ZSV37tk9CZg&usqp=CAU" alt="swim stuff" /> 
                    <h2>SWIM STUFF</h2> 
                    <p>Dive in</p>
                </div>
                
                <div className={styles.midEachImage}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIiW2TrE45F3wX4FCREnRW3HrYEJVcUjlvyg&usqp=CAU" alt="" /> 
                    <h2>AU NATUREL</h2> 
                    <p>Down to Earth (tones)</p>
                </div>
                
                <div className={styles.midEachImage}>
                    <img src="https://thumbs.dreamstime.com/b/summer-sea-background-women-s-beach-accessories-trip-to-sea-straw-hat-bracelets-leather-sandals-glasses-beads-bag-93729898.jpg" alt="accessories" /> 
                    <h2>SUMMER ACCESSORIES</h2> 
                    <p>Plus-ones for the pool</p>
                </div>
                
                <div className={styles.midEachImage}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScQSfxzdmGxgAX2jXHhwx0HUyJPN-4FSIH9Q&usqp=CAU" alt="makeup" /> 
                    <h2>FACE + BODY ICONS</h2> 
                    <p>Your summer makeup bag</p>
                </div>
            </div>
        </div>
        <div className={styles.midBottomDiv}>
            <div className={styles.midBottomDivImage}>
                <div className={styles.midBotImg}>
                    <img src="https://i.pinimg.com/736x/e8/64/a0/e864a0ee2f5409f5899f4ebf47ed339c.jpg" alt="" />
                    <h1>I CHOOSE YOU!</h1>
                    <p>Peep the new collection</p>
                    <button>SHOP NOW</button>
                    </div>
                <div className={styles.midBotImg}>
                    <img src="https://i.pinimg.com/originals/22/14/93/22149331c830da704496a512b547fe1d.jpg" alt="" />
                    <h1>ASYOU</h1>
                    <p>Club can't even handle you</p>
                    <button>SHOP THE BRAND</button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default WMiddle