'use client'

import Bar from '@/entities/bar/ui'

import { useStore } from 'effector-react'

import { $data } from '@/shared/model'

import Card from '@/entities/card/ui'
import { useEffect } from 'react'

const Home = () => {
    const data = useStore($data)

    useEffect(() => {
        const scrollButton = document.querySelector('.scroll-button') as HTMLElement
        let lastScrollTop = 0

        window.addEventListener('scroll', () => {
            if (scrollButton) {
                const scrollTop = window.scrollY

                if (scrollTop > lastScrollTop) {
                    // Пользователь скроллит вниз, показываем кнопку
                    scrollButton.style.display = 'block'
                } else {
                    // Пользователь скроллит вверх, скрываем кнопку
                    scrollButton.style.display = 'none'
                }

                lastScrollTop = scrollTop
            }
        })
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Добавляет плавную анимацию скролла
        })
    }

    return (
        <main>
            <div className='container'>
                <Bar />
                <div className='cards'>
                    {data.map((product, index) => {
                        return <Card key={product.id} product={product} />
                    })}
                </div>
            </div>
            <button className='scroll-button' onClick={() => scrollToTop()}>
                Scroll to Top
            </button>
        </main>
    )
}

export default Home
