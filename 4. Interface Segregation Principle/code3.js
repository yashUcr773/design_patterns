class NotImplementedError extends Error {
    constructor(name) {
        let message = `${name} is not implemented`
        super(message)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, NotImplementedError)
        }
    }
}

const Printer = Base => class extends Base {
    print() {
        console.log('print')
    }
}

const Scanner = Base => class extends Base {
    scan() {
        console.log('scan')
    }
}

const Faxer = Base => class extends Base {
    fax() {
        console.log('fax')
    }
}

class Temp {}

class ModernPrinter extends Printer(Scanner(Faxer(Temp))) {

}

const mp = new ModernPrinter()
mp.fax()
mp.print()
mp.scan()