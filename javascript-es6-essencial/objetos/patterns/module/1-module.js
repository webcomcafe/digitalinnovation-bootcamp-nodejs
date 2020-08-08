// uso de módulos, sem necessidade de uso de globais
let name = 'default';

function getName() {
    return name;
}

function setName(newName) {
    name = newName;
}

module.exports = {
    getName,
    setName,
}