class Rectangle {
    constructor(width, height) {
        this._width = width
        this._height = height
    }

    get width() {
        return this._width
    }

    get height() {
        return this._height
    }

    set width(width) {
        this._width = width
    }

    set height(height) {
        this._height = height
    }

    getArea() {
        return this._height * this._width
    }

    toString() {
        console.log(this.constructor)
        return `${this._height}x${this._width}=${this.getArea()}`
    }
}

class Square extends Rectangle {
    constructor(size) {
        super(size, size)
    }

    set width(width) {
        this._width = this._height = width
    }

    set height(height) {
        this._width = this._height = height
    }
}


// This function takes a base class, so it should be able to take in a derived class 
// and still work fine. 
// However, in this case it does not, so it violated LSP. We should either have a case in 
// Base class, or have better derived class
function useIt(rect) {
    let width = rect._width
    rect.height = 10
    console.log(`Expected: ${10 * width}, got ${rect.getArea()}`)
}

const rect1 = new Rectangle(5, 8)
console.log(rect1.toString())

const square1 = new Square(20)
console.log(square1.toString())
console.log(square1.toString())

useIt(rect1)
useIt(square1)