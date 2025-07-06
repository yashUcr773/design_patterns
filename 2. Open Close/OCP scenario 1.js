const SHIPPING = Object.freeze({
    STANDARD: 'standard',
    EXPRESS: 'express',
    SAME_DAY: 'same_day',
    INTERNATIONAL: 'international',
    DRONE: 'drone'
})

// NOT COMPLIANT

class Shipping {

    applyShipping(mode, weight) {
        if (mode === SHIPPING.STANDARD) return 50
        else if (mode === SHIPPING.EXPRESS) return 50 + 1.5 * weight
        else if (mode === SHIPPING.SAME_DAY) return 100 + 3 * weight
        else if (mode === SHIPPING.INTERNATIONAL) return 300 + 10 * weight
        else if (mode === SHIPPING.DRONE) return weight < 5 ? 200 + 5 * weight : new Error('Weight Exceeded')
    }
}

const ship = new Shipping()
console.log(ship.applyShipping(SHIPPING.STANDARD))
console.log(ship.applyShipping(SHIPPING.EXPRESS, 2))
console.log(ship.applyShipping(SHIPPING.SAME_DAY, 2))
console.log(ship.applyShipping(SHIPPING.INTERNATIONAL, 2))
console.log(ship.applyShipping(SHIPPING.DRONE, 2))
console.log(ship.applyShipping(SHIPPING.DRONE, 6))


// COMPLIANT

class Shipping2 {
    strategies = {
        [SHIPPING.STANDARD]: (w) => 50,
        [SHIPPING.EXPRESS]: (w) => 50 + 1.5 * w,
        [SHIPPING.SAME_DAY]: (w) => 100 + 3 * w,
        [SHIPPING.INTERNATIONAL]: (w) => 300 + 10 * w,
        [SHIPPING.DRONE]: (w) => w < 5 ? 200 + 5 * w : new Error('Weight Exceeded'),
    }

    applyShipping(mode, weight) {
        return this.strategies[mode](weight)
    }
}

const ship1 = new Shipping2()
console.log(ship1.applyShipping(SHIPPING.STANDARD))
console.log(ship1.applyShipping(SHIPPING.EXPRESS, 2))
console.log(ship1.applyShipping(SHIPPING.SAME_DAY, 2))
console.log(ship1.applyShipping(SHIPPING.INTERNATIONAL, 2))
console.log(ship1.applyShipping(SHIPPING.DRONE, 2))
console.log(ship1.applyShipping(SHIPPING.DRONE, 6))

// NOT COMPLIANT

class Shipping3 {

    apply(mode, weight) {
        return this.applyShipping(mode, weight)
    }

    applyShipping(mode, weight) {
        if (mode === SHIPPING.STANDARD) return 50
        else if (mode === SHIPPING.EXPRESS) return 50 + 1.5 * weight
        else if (mode === SHIPPING.SAME_DAY) return 100 + 3 * weight
        else if (mode === SHIPPING.INTERNATIONAL) return 300 + 10 * weight
        else if (mode === SHIPPING.DRONE) return weight < 5 ? 200 + 5 * weight : new Error('Weight Exceeded')
    }
}

const ship3 = new Shipping3()
console.log(ship3.applyShipping(SHIPPING.STANDARD))
console.log(ship3.applyShipping(SHIPPING.EXPRESS, 2))
console.log(ship3.applyShipping(SHIPPING.SAME_DAY, 2))
console.log(ship3.applyShipping(SHIPPING.INTERNATIONAL, 2))
console.log(ship3.applyShipping(SHIPPING.DRONE, 2))
console.log(ship3.applyShipping(SHIPPING.DRONE, 6))