import React from 'react'
import avatar0 from './standart.png'

import avatar2 from './Group_31.png'
import avatar3 from './Group_32.png'
import avatar4 from './Frame_1.png'
import styles from './header.module.css'


export default function Header() {
    return (
        <div className={styles.header}>
            <div class="left">
                
                <div class="avatar0">
                    <img src={avatar0} />
                </div>

                <div class="avatar2">
                    <img src={avatar2} />
                </div>

                <div class="avatar3">
                <img src={avatar3} /> </div>

            </div>

            <div class="right">
                <img src={avatar4} /> 
              
            </div>

        </div>
    )
}
