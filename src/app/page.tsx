'use client'

import Bar from '@/entities/bar/ui'

import { useStore } from 'effector-react'

import { $data } from '@/shared/model'

import Card from '@/entities/card/ui'

const Home = () => {
    const data = useStore($data)

    return (
        <main>
            <div className='container'>
                <Bar />
            </div>
            <div className='cards'>
                {data.map((product) => {
                    return <Card key={product.id} />
                })}
            </div>
        </main>
    )
}

export default Home
