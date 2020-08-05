num media1() {
  const nota1 = 5;
  const nota2 = 7;
  const nota3 = 10;
  const nota4 = 3;

  final media = (nota1 + nota2 + nota3 + nota4) / 4;

  return media;
}

num media2() {
  return [5, 7, 10, 3].reduce((a, b) => a + b) / 4;
}

main() {
  print('Métdodo 1): ${media1()}');
  print('Métdodo 1): ${media2()}');
}
