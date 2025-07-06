class NotImplementedError extends Error {
    constructor(name) {
        let message = `${name} is not implemented`
        super(message)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, NotImplementedError)
        }
    }
}

class CompletePrinter {
    constructor() {
        if (this.constructor === CompletePrinter) {
            throw new Error('CompletePrinter is an Interface')
        }

        if (!this.print) {
            throw new Error('print not implemented')
        }

        if (!this.scan) {
            throw new Error('scan not implemented')
        }

        if (!this.fax) {
            throw new Error('fax not implemented')
        }
    }

    _dummmy() {
        // 
    }

}

class ModernPrinter extends CompletePrinter {
    print() {
        console.log('print')
    }

    scan() {
        console.log('scan')
    }

    fax() {
        console.log('fax')
    }
}

const mp = new ModernPrinter()
mp.fax()
mp.print()
mp.scan()