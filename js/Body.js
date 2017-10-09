function Body(){
    this.html = '\n\t<tbody>' +
        '\n\t</tbody>';
    this.rows = [];
    this.class = '';

    this.addClass = function(classString){
        this.class = (typeof classString === 'undefined') ? '' : ' class="' + classString + '"';
        this.updateHtml();
        return this;
    };

    this.addRow = function(row){
        this.rows.push(row);
        this.updateHtml();
    };

    this.updateHtml = function(){
        var i = 0;
        var countRows = this.rows.length;
        this.html = '\n\t<tbody>';
        for(i; i < countRows; i++){
            this.html += this.rows[i].html;
        }
        this.html += '\n\t</tbody>';
    };
}