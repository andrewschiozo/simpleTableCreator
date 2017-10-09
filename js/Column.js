function Column(data){
    this.data = (typeof data === 'undefined') ? '' : data;
    this.class = '';
    this.html = '\n\t\t\t<td>' + data + '</td>';

    this.addClass = function(classString){
       this.class = (typeof classString === 'undefined') ? '' : ' class="' + classString + '"';
       this.updateHtml();
       return this;
    };

    this.updateHtml = function(){
      this.html = '\n\t\t\t<td ' + this.class + '>';
      this.html += this.data;
      this.html += '</td>';
    };
}