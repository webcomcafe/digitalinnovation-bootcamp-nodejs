function fn() {
    console.log(text);

    var text = 'Exemplo';
    
    console.log(text);
}

fn();

/**
 * Apenas variáveis e funções sofrem hoisting
 * 
 * Variáveis são içadas para o inícnio do escopo, mas sua atribuição correrá 
 * posterioemente, na linha onde foram criadas.
 * 
 * function() {
 *  var text;
 *  console.log(text);
 *  
 *  text = 'Exemplo';
 * 
 *  console.log(text);
 * }
 */