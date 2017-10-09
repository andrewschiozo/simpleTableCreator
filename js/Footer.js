function Footer(){
    this.html = '\n\t<tfoot>' +
        '\n\t\t<tr>' +
        '\n\t\t</tr>' +
        '\n\t</tfoot>';
    this.class = '';

    this.addClass = function(classString){
        this.class = (typeof classString === 'undefined') ? '' : ' class="' + classString + '"';
        this.updateHtml();
        return this;
    };

    this.add = function(foot){
        this.html = this.html.replace('\n\t\t</tr>\n\t</tfoot>', '');
        if(Array.isArray(foot))
        {
            i = 0;
            for(i; i < foot.length; i++)
            {
                this.html += '\n\t\t\t<th>' + foot[i] + '</th>';
            }
        }
        else
        {
            this.html += '\n\t\t\t<th>' + foot + '</th>';
        }
        this.html += '\n\t\t</tr>' +
            '\n\t</tfoot>';
    }
}