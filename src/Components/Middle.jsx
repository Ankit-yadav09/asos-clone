import React from 'react'
import styles from './Styles/middle.module.css'

const Middle = () => {
  return (
    <div>
        <div className={styles.midTopOuter}>
            <div className={styles.midTopImage}>
                <img src="https://content.asos-media.com/-/media/homepages/mw/2022/july/18/heros/desktop-homepage-mw-main---final.jpg" alt="" />
                {/* <div><button>SHOP NOW</button></div> */}
            </div>
        </div>
        <div className={styles.mid2Outer}>
            <div className={styles.midImages}>
                <div className={styles.midEachImage}>
                    <img src="https://content.asos-media.com/-/media/homepages/mw/2022/july/18/moments/mw_global_new_balance_moment_870x1110-v2.jpg" alt="" /> 
                    <h2>NEW BALANCE</h2> 
                    <p>The OG OG's</p>
                </div>
                
                <div className={styles.midEachImage}>
                    <img src="https://content.asos-media.com/-/media/homepages/mw/2022/july/18/moments/mw_global_logos_moment_870x1110.jpg" alt="" /> 
                    <h2>ASOS DESIGN PRINTS</h2> 
                    <p>Back it up</p>
                </div>
                
                <div className={styles.midEachImage}>
                    <img src="https://content.asos-media.com/-/media/homepages/mw/2022/july/18/moments/mw_global_logoscarhartt_trans_paisley_moment_870x1110.jpg" alt="" /> 
                    <h2>CARHARTT PAISLEY</h2> 
                    <p>It's giving psychedelic</p>
                </div>
                
                <div className={styles.midEachImage}>
                    <img src="https://content.asos-media.com/-/media/homepages/mw/2022/july/18/moments/mw_global_transitional_retro_moment_870x1110.jpg" alt="" /> 
                    <h2>NEW-SEASON RETRO</h2> 
                    <p>Future nostalgia by ASOS DESIGN</p>
                </div>
            </div>
        </div>
        <div className={styles.midBottomDiv}>
            <div className={styles.midBottomDivImage}>
                <div className={styles.midBotImg}>
                    <img src="https://images.asos-media.com/products/asos-design-swim-shorts-in-rainbow-metallic-fabric-super-short-length/14596385-1-multi?$n_640w$&wid=513&fit=constrain" alt="" />
                    <h1>SWIM STUFF</h1>
                    <p>Dive in</p>
                    <button>SHOP NOW</button>
                    </div>
                <div className={styles.midBotImg}>
                    <img src="https://i.pinimg.com/736x/2b/97/79/2b97791eb2d1f43a4321f9afc7c4b897--latest-men-fashion-male-style.jpg" alt="" />
                    <h1>LAYER GAME</h1>
                    <p>Stack 'em up</p>
                    <button>SHOP ASOS DESIGN</button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Middle