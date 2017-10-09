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