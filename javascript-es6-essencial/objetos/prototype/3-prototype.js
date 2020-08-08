'use strict';

// Definindo hereança diretamnte pelo prototype

function Animal() { }

Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function () {
    console.log('movimentar');
}

function Cachorro(morde) {
    this.qtdePatas = 4;
    this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function () {
    console.log('Au! au!');
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

pug.latir();
pitbull.movimentar();

