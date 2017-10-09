tabela = new Table();
header = new Header();
header.add(['id', 'nome', 'cpf']);

body = new Body();

row = new Row(1);
row.addCol(new Column(1));
row.addCol(new Column('Andrews'));
row.addCol(new Column('39075063830'));
body.addRow(row);

row = new Row(2);
row.addCol(new Column(2));
row.addCol(new Column('Ana'));
row.addCol(new Column('36598568545'));
body.addRow(row);

row = new Row(3);
row.addCol(new Column(3));
row.addCol(new Column('Paula'));
row.addCol(new Column('12365478950'));
body.addRow(row);


footer = new Footer();

tabela.setHeader(header);
tabela.setBody(body);

document.write(tabela.html);