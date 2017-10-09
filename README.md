# Simple Table Creator

Script que permite criar tabelas html com javascript.

## Começando

Voce pode obtê-lo pelo git:

git clone https://github.com/andrewschiozo/simpleTableCreator.git

ou baixando seu conteúdo zipado e extraindo em sua máquina através do link

https://github.com/andrewschiozo/simpleTableCreator/archive/master.zip

### Pré-esquisitos

Nada por aqui...

### Instalação

Crie um documento HTML e importe o script.

A importaçaã pode ser feita de duas maneiras.

Uma delas é importanto o script principal simpletablecreator.js
```
<script src="js/simpletablecreator.js"></script>
```

A outra é importando arquivo por arquivo

```
    <script src="js/Column.js"></script>
    <script src="js/Row.js"></script>
    <script src="js/Footer.js"></script>
    <script src="js/Body.js"></script>
    <script src="js/Header.js"></script>
    <script src="js/Table.js"></script>
```

## Exemplo básico

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Simple Table Creator</title>
</head>
<body>
    <!--Simple Table Creator Js-->
    <script src="js/simpletablecreator.js"></script>

    <script>
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
    </script>

</body>
</html>
```

## Autor

* **Andrews Chiozo**
