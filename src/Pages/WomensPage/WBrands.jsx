import React from 'react'
import styles from '../../Components/Styles/brands.module.css'

const WBrands = () => {
  return (
    <div className={styles.brandsOuter}>
        <div><h1>TRENDING BRANDS</h1></div>
        <div className={styles.brandsImages}>
            <div className={styles.brandsEachImage}>
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/monkl-hp-logos-256x256.jpg" alt="Monkl" />
            </div>
            <div className={styles.brandsEachImage}>
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/never-fully-dressed-hp-logos-256x256.png" alt="NFD" />
            </div>
            <div className={styles.brandsEachImage}>
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/1x12x---test.png" alt="Topshop" />
            </div>
            <div className={styles.brandsEachImage}>
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/reclaimed-vintage-hp-logos-256x256.jpg" alt="reclaimed vintage" />
            </div>
            <div className={styles.brandsEachImage}>
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/collusion-hp-logos-256x256.jpg" alt="collusion" />
            </div>
            <div className={styles.brandsEachImage}>
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/weekday-hp-logos-256x256.jpg" alt="weekday" />
            </div>
        </div>
    </div>
  )
}

export default WBrands