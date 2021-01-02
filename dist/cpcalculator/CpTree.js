"use strict";

class CpTree {
    constructor(abilities) {
        this.abilities = abilities;
    }

    getCpCount() {
        return Object.values(this.abilities)
            .reduce((acc, cpValue) => acc + cpValue);
    }
}

exports.default = CpTree;