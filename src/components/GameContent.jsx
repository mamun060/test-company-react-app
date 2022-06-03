import React, { Fragment } from 'react'
import styles from '../../src/assets/css/components/GameContent.module.css';

const GameContent = () => {
  return (
    <Fragment>
        <div className={styles.GameContentWrap}>
          <div className={styles.GameImage}>
            <p></p>
          </div>
          <div className={styles.GameContentInfo}>
            <h5>Game Title</h5>
            <span>Release Date:  DD/MM/YY</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Voluptatibus velit beatae quia totam nemo nihil quibusdam.
            </p>
          </div>
          <div className={styles.GameScore}>
            <span>9</span>
          </div>
        </div>
    </Fragment>
  )
}

export default GameContent