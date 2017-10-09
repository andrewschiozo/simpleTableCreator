function Row(index){        linha1.addCol(new Column(1));

    this.index = index;
    this.html = '\n\t\t<tr>\n\t\t</tr>';
    this.class = '';
    this.cols = [];

    this.addCol = function(column){
        this.cols.push(column);
        this.updateHtml();
    };

    this.addClass = function(classString){
        this.class = (typeof classString === 'undefined') ? '' : ' class="' + classString + '"';
        this.updateHtml();
        return this;
    };

    this.updateHtml = function(){
        var i = 0;
        var countColumns = this.cols.length;
        this.html = '\n\t\t<tr>';
        for(i; i < countColumns; i++){
            this.html += this.cols[i].html;
        }
        this.html += '\n\t\t</tr>';
    };
}