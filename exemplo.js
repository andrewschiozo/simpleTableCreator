var tabela = new Table(); //Cria tabela
var cabecalho = new Header(['Id', 'Nome', 'Telefone']); //Cria cabeçalho
var corpo = new Body();

var linha1 = new Row(); //Cria linha 1
linha1.addCol(new Column(1)); // Adiciona coluna na linha1
linha1.addCol(new Column('Juquinha'));
linha1.addCol(new Column('3333-4444'));
corpo.addRow(linha1); //Adiciona linha1 no corpo da tabela

var linha2 = new Row(); //Cria linha 2
linha2.addCol(new Column(2));  // Adiciona coluna na linha2
linha2.addCol(new Column('Pedrinho'));
linha2.addCol(new Column('4444-5555'));
corpo.addRow(linha2); //Adiciona linha2 no corpo da tabela

tabela.setHeader(cabecalho);
tabela.setBody(corpo);

document.write(tabela.html);