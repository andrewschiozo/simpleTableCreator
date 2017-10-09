//<table></table>
function Table() {
    this.html   = '<table></table>';
    this.header = new Header();
    this.body   = new Body();
    this.footer = new Footer();
    this.class  = '';

    this.updateHtml = function(){
        this.html = '<table>';
        this.html += this.header.html;
        this.html += this.body.html;
        this.html += this.footer.html;
        this.html += '\n</table>';
    };

    this.setHeader  = function(Header){
        this.header = Header;
        this.updateHtml();
    };

    this.setBody    = function(Body){
        this.body = Body;
        this.updateHtml();
    };

    this.setFooter  = function(Footer){
        this.footer = Footer;
        this.updateHtml();
    };

    this.addClass   = function(classString){
        this.class = (typeof classString === 'undefined') ? '' : ' class="' + classString + '"';
        this.updateHtml();
        return this;
    };
}

//<thead></thead>
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

    this.add(head);
}

//<tbody></tbody>
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

//<tfoot></tfoot>
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

//<tr></tr>
function Row(index){
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

//<td></td>
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