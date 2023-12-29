'use strict';

class StringBuilder {
#value;

constructor(initialValue) {
this.#value = [initialValue];
}

get value() { 
return this.#value.join("");
}

padEnd(str) {
this.#value.push(str);
}

padStart(str) {
this.#value.unshift(str);
}

padBoth(str) {
this.#value.unshift(str);
this.#value.push(str);
}
}

const builder = new StringBuilder(".");
console.log(builder.value); // "."
builder.padStart("^");
console.log(builder.value); // "^."
builder.padEnd("^");
console.log(builder.value); // "^.^"
builder.padBoth("=");
console.log(builder.value); // "=^.^="