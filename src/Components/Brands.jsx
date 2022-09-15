import React from 'react'
import styles from './Styles/brands.module.css'

const Brands = () => {
  return (
    <div className={styles.brandsOuter}>
        <div><h1>TRENDING BRANDS</h1></div>
        <div className={styles.brandsImages}>
            <div className={styles.brandsEachImage}>
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/tommy-hilfiger-hp-logos-256x256.jpg" alt="Tommy Hilfiger" />
            </div>
            <div className={styles.brandsEachImage}>
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/north-face.png" alt="TNF" />
            </div>
            <div className={styles.brandsEachImage}>
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/nike-hp-logos-256x256.jpg" alt="Nike" />
            </div>
            <div className={styles.brandsEachImage}>
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/carhartt-hp-logos-256x256.jpg" alt="Carhartt" />
            </div>
            <div className={styles.brandsEachImage}>
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/ellesse-hp-logos-256x256.jpg" alt="Ellesse" />
            </div>
            <div className={styles.brandsEachImage}>
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/dr-martens-hp-logos-256x256.jpg" alt="Martens" />
            </div>
        </div>
    </div>
  )
}

export default Brands