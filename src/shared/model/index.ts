import { createEvent, createStore } from 'effector'

const initial = []

export interface IProduct {
    id: number
    src: string
    name: string
    description: string
    probability: number
    airdrop: {
        min: number
        max: number
    }
}

for (let i = 0; i < 20; i++) {
    const object = {
        id: i,
        src: `/images/raster/product-${i >= 10 ? i - 10 : i}.png`,
        name: `Test ${i}`,
        description: `Description ${i}`,
        probability: 65,
        airdrop: {
            min: 500,
            max: 5000
        }
    }

    initial.push(object)
}

export interface IRef {
    id: number
    element: HTMLDivElement
}

export const $data = createStore(initial)
