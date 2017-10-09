function Header(head){


    this.html = '\n\t<thead>' +
        '\n\t\t<tr>' +
        '\n\t\t</tr>' +
        '\n\t</thead>';
    this.class = '';

    this.addClass = function(classString){
        this.class = (typeof classString === 'undefined') ? '' : ' class="' + classString + '"';
        this.updateHtml();
        return this;
    };

    this.add = function(head){
        this.html = this.html.replace('\n\t\t</tr>\n\t</thead>', '');
        if(Array.isArray(head))
        {
            i = 0;
            for(i; i < head.length; i++)
            {
                this.html += '\n\t\t\t<th>' + head[i] + '</th>';
            }
        }
        else
        {
            this.html += '\n\t\t\t<th>' + head + '</th>';
        }
        this.html += '\n\t\t</tr>' +
            '\n\t</thead>';
    }
}