function fn() {
    log('Hoisting de função');

    function log(value) {
        console.log(value);
    }
}

fn();

/**
 * Apenas variáveis e funções sofrem hoisting
 * 
 * Funções são içadas completamente para o topo do escopo
 * 
 * function fn() {
 *  function log(value) {
 *      console.log(value);
 *  }
 * 
 *  log('Hoisting de função')
 * }
 */