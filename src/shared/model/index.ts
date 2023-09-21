import { createStore } from 'effector'

const initial = []

for (let i = 0; i < 20; i++) {
    const object = {
        id: i,
        src: `/images/raster/product-${i >= 10 ? i - 10 : i}.png`,
        name: `Test ${i}`,
        description: `Description ${i}`,
        probability: 65
    }

    initial.push(object)
}

export const $data = createStore(initial)
