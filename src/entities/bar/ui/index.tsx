'use client'

import React, { useRef } from 'react'

import styles from './styles.module.css'

import Image from 'next/image'

import { useStore } from 'effector-react'

import { $data } from '@/shared/model'

const Bar = () => {
    const data = useStore($data)

    const contentRef = useRef<HTMLDivElement | null>(null)

    const scrollStep = 200

    const prev = () => {
        if (contentRef.current) {
            contentRef.current.scrollLeft -= scrollStep
        }
    }

    const next = () => {
        if (contentRef.current) {
            contentRef.current.scrollLeft += scrollStep
        }
    }

    return (
        <div className={styles.bar}>
            <button className={styles.button} onClick={() => prev()}>
                <Image
                    src='/images/vector/prev.svg'
                    alt='prev'
                    width='20'
                    height='20'
                    priority={true}
                />
            </button>
            <div className={styles.tape} ref={contentRef}>
                <div className={styles.content}>
                    {data.map((product) => {
                        return (
                            <button
                                className={styles['product-button']}
                                id={String(product.id)}
                                key={product.id}>
                                <Image
                                    src={product.src}
                                    alt={product.name}
                                    width='40'
                                    height='40'
                                    priority={true}
                                />
                            </button>
                        )
                    })}
                </div>
            </div>
            <button className={styles.button} onClick={() => next()}>
                <Image
                    src='/images/vector/next.svg'
                    alt='prev'
                    width='20'
                    height='20'
                    priority={true}
                />
            </button>
        </div>
    )
}

export default Bar
