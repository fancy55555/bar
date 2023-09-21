'use client'

import React, { FC, useEffect, useRef } from 'react'

import Image from 'next/image'

import styles from './styles.module.css'

import { useStore } from 'effector-react'

import { IProduct } from '@/shared/model'

interface CardProps {
    product: IProduct
}

const Card: FC<CardProps> = ({ product }) => {
    return (
        <div className={styles.card} id={String(product.id)}>
            <div className={styles.top}>
                <Image className={styles.icon} src={product.src} alt='alt' width={30} height={30} />
                <h3 className={styles.name}>{product.name}</h3>
            </div>
            <p className={styles.description}>{product.description}</p>
            <a href='#' className={styles.link}>
                Read more
            </a>
            <div className={styles.analysis}>
                <h4 className={styles.value}>On artificial AI:</h4>
                <div className={styles.bottom}>
                    <div className={styles.info}>
                        <p className={styles.text}>expected airdrop</p>
                        <p className={styles.value}>
                            {product.airdrop.min} — ${product.airdrop.max}
                        </p>
                    </div>
                    <div className={styles.info}>
                        <p className={styles.text}>probability</p>
                        <p className={styles.value}>{product.probability}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
