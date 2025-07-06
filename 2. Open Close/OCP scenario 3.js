const COUNTRIES = Object.freeze({
    IN: 'INDIA',
    US: 'UNITED STATES OF AMERICA',
    UK: 'UNITED KINGDOM',
    DE: 'GERMANY',
    AU: 'AUSTRALIA',
    SG: 'SINGAPORE'
})

class INDIATAX {
    apply(amount) {
        return amount + amount * 0.18
    }
}

class USTAX {
    apply(amount) {
        return amount + amount * 0.1 + amount * 0.05
    }
}

class UKTAX {
    apply(amount) {
        return amount + amount * 0.2
    }
}

class TAX {
    constructor(country) {
        this.country = country
    }

    apply(amount) {
        return this.country.apply(amount)
    }
}

const indiaTax = new TAX(new INDIATAX())
const usTax = new TAX(new USTAX())
const ukTax = new TAX(new UKTAX())

console.log(indiaTax.apply(1000))
console.log(usTax.apply(1000))
console.log(ukTax.apply(1000))