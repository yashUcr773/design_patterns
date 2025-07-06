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
    }

    print() {
        // console.log('print')
    }

    scan() {
        // console.log('scan')
    }

    fax() {
        // console.log('fax')
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

class OldPrinter extends CompletePrinter {

    print() {
        console.log('print')
    }

    scan() {
        // console.log('scan')
    }

    fax() {
        throw new NotImplementedError('OldPrinter.fax')
    }
}

const mp = new ModernPrinter()
mp.fax()
mp.print()
mp.scan()

const op = new OldPrinter()
op.print()
op.scan()
op.fax()


class Printer {
    print() {
        // console.log('print')
    }
}

class Scanner {
    scan() {
        // console.log('scan')
    }
}

// Multiclass inheritance not supported in js
// class Photocopier extends Printer, Scanner {

// }