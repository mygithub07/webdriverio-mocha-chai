"use strict";
class Foo {

    constructor(value) {
        Object.defineProperty(this, '_str', {
            value
        });
    }

    toString() {
        return this._str;
    }
}

const bar = new Foo('bar');
const twinBar = new Foo('bar');
const baz = new Foo('baz');	

const owner = {
    a: 4,
    b: bar,
    c: 7
};

const partial1 = {
    a: 4,
    b: twinBar
};

const partial2 = {
    a: 4,
    b: baz
};

/*if(typeof exports !== 'undefined') {
    exports.owner = owner;
    exports.partial1 = partial1;
} */

module.exports = {
   owner: owner,
   partial1: partial1,
   partial2: partial2
}

