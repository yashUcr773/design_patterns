const COLOR = Object.freeze({
    RED: 'red',
    GREEN: 'green',
    BLUE: 'blue',
})
const SIZE = Object.freeze({
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
})

class Product {
    constructor(name, color, size) {
        this.name = name;
        this.color = color;
        this.size = size;
    }

    toString() {
        return `Product(name=${this.name}, color=${this.color}, size=${this.size})`;
    }

}

class ProductFilter {
    filterByColor(products, color) {
        return products.filter(p => p.color === color)
    }

    filterBySize(products, size) {
        return products.filter(p => p.size === size)
    }

    filterByColorAndSize(products, color, size) {
        return products.filter(p => p.color === color && p.size === size)
    }

    filterByColorOrSize(products, color, size) {
        return products.filter(p => p.color === color || p.size === size)
    }
}

class ColorFilter {
    constructor(color) {
        this.color = color;
    }

    isSatisfied(product) {
        return product.color === this.color;
    }
}

class SizeFilter {
    constructor(size) {
        this.size = size;
    }

    isSatisfied(product) {
        return product.size === this.size;
    }
}

class AndFilter {
    constructor(filters) {
        this.filters = filters;
    }

    isSatisfied(product) {
        return this.filters.every(filter => filter.isSatisfied(product));
    }
}

class OrFilter {
    constructor(filters) {
        this.filters = filters;
    }

    isSatisfied(product) {
        return this.filters.some(filter => filter.isSatisfied(product));
    }
}

const red_small = new Product('red_small', COLOR.RED, SIZE.SMALL);
const red_med = new Product('red_med', COLOR.RED, SIZE.MEDIUM);
const red_large = new Product('red_large', COLOR.RED, SIZE.LARGE);

const green_small = new Product('green_small', COLOR.GREEN, SIZE.SMALL);
const green_med = new Product('green_med', COLOR.GREEN, SIZE.MEDIUM);
const green_large = new Product('green_large', COLOR.GREEN, SIZE.LARGE);

const blue_small = new Product('blue_small', COLOR.BLUE, SIZE.SMALL);
const blue_med = new Product('blue_med', COLOR.BLUE, SIZE.MEDIUM);
const blue_large = new Product('blue_large', COLOR.BLUE, SIZE.LARGE);

const products = [red_small, red_med, red_large, green_small, green_med, green_large, blue_small, blue_med, blue_large];
const filter = new ProductFilter();

console.log('Filter by color RED:');
console.log(filter.filterByColor(products, COLOR.RED).map(p => p.toString()));
console.log('Filter by size LARGE:');
console.log(filter.filterBySize(products, SIZE.LARGE).map(p => p.toString()));
console.log('Filter by color RED and size SMALL:');
console.log(filter.filterByColorAndSize(products, COLOR.RED, SIZE.SMALL).map(p => p.toString()));
console.log('Filter by color RED or size LARGE:');
console.log(filter.filterByColorOrSize(products, COLOR.RED, SIZE.LARGE).map(p => p.toString()));

const redFilter = new ColorFilter(COLOR.RED);
const smallFilter = new SizeFilter(SIZE.SMALL);
const andFilter = new AndFilter([redFilter, smallFilter]);
const orFilter = new OrFilter([redFilter, smallFilter]);
console.log('Filter by AND (RED and SMALL):');
console.log(products.filter(p => andFilter.isSatisfied(p)).map(p => p.toString()));
console.log('Filter by OR (RED or SMALL):');
console.log(products.filter(p => orFilter.isSatisfied(p)).map(p => p.toString()));