!function(){function e(e,t,n){t.is&&t.getCustomData("block_processed")||(t.is&&CKEDITOR.dom.element.setMarker(n,t,"block_processed",!0),e.push(t))}function t(t,n){function l(){this.foreach(function(e){/^(?!vbox|hbox)/.test(e.type)&&(e.setup||(e.setup=function(t){e.setValue(t.getAttribute(e.id)||"",1)}),!e.commit)&&(e.commit=function(t){var n=this.getValue();"dir"==e.id&&t.getComputedStyle("direction")==n||(n?t.setAttribute(e.id,n):t.removeAttribute(e.id))})})}var i=function(){var e=CKEDITOR.tools.extend({},CKEDITOR.dtd.$blockLimit);return t.config.div_wrapTable&&(delete e.td,delete e.th),e}(),o=CKEDITOR.dtd.div,a={},d=[];return{title:t.lang.div.title,minWidth:400,minHeight:165,contents:[{id:"info",label:t.lang.common.generalTab,title:t.lang.common.generalTab,elements:[{type:"hbox",widths:["50%","50%"],children:[{id:"elementStyle",type:"select",style:"width: 100%;",label:t.lang.div.styleSelectLabel,"default":"",items:[[t.lang.common.notSet,""]],onChange:function(){var e=["info:elementStyle","info:class","advanced:dir","advanced:style"],n=this.getDialog(),l=n._element&&n._element.clone()||new CKEDITOR.dom.element("div",t.document);this.commit(l,!0);for(var i,e=[].concat(e),o=e.length,a=0;o>a;a++)(i=n.getContentElement.apply(n,e[a].split(":")))&&i.setup&&i.setup(l,!0)},setup:function(e){for(var t in a)a[t].checkElementRemovable(e,!0)&&this.setValue(t,1)},commit:function(e){var t;(t=this.getValue())?a[t].applyToObject(e):e.removeAttribute("style")}},{id:"class",type:"text",label:t.lang.common.cssClass,"default":""}]}]},{id:"advanced",label:t.lang.common.advancedTab,title:t.lang.common.advancedTab,elements:[{type:"vbox",padding:1,children:[{type:"hbox",widths:["50%","50%"],children:[{type:"text",id:"id",label:t.lang.common.id,"default":""},{type:"text",id:"lang",label:t.lang.common.langCode,"default":""}]},{type:"hbox",children:[{type:"text",id:"style",style:"width: 100%;",label:t.lang.common.cssStyle,"default":"",commit:function(e){e.setAttribute("style",this.getValue())}}]},{type:"hbox",children:[{type:"text",id:"title",style:"width: 100%;",label:t.lang.common.advisoryTitle,"default":""}]},{type:"select",id:"dir",style:"width: 100%;",label:t.lang.common.langDir,"default":"",items:[[t.lang.common.notSet,""],[t.lang.common.langDirLtr,"ltr"],[t.lang.common.langDirRtl,"rtl"]]}]}]}],onLoad:function(){l.call(this);var e=this,n=this.getContentElement("info","elementStyle");t.getStylesSet(function(t){var l;if(t)for(var i=0;i<t.length;i++){var o=t[i];o.element&&"div"==o.element&&(l=o.name,a[l]=new CKEDITOR.style(o),n.items.push([l,l]),n.add(l,l))}n[1<n.items.length?"enable":"disable"](),setTimeout(function(){e._element&&n.setup(e._element)},0)})},onShow:function(){"editdiv"==n&&this.setupContent(this._element=CKEDITOR.plugins.div.getSurroundDiv(t))},onOk:function(){if("editdiv"==n)d=[this._element];else{var l,a,s,m=[],r={},c=[],g=t.getSelection(),u=g.getRanges(),h=g.createBookmarks();for(a=0;a<u.length;a++)for(s=u[a].createIterator();l=s.getNextParagraph();)if(l.getName()in i){var f=l.getChildren();for(l=0;l<f.count();l++)e(c,f.getItem(l),r)}else{for(;!o[l.getName()]&&!l.equals(u[a].root);)l=l.getParent();e(c,l,r)}for(CKEDITOR.dom.element.clearAllMarkers(r),u=[],a=null,s=0;s<c.length;s++)l=c[s],f=t.elementPath(l).blockLimit,t.config.div_wrapTable&&f.is(["td","th"])&&(f=t.elementPath(f.getParent()).blockLimit),f.equals(a)||(a=f,u.push([])),u[u.length-1].push(l);for(a=0;a<u.length;a++){for(f=u[a][0],c=f.getParent(),l=1;l<u[a].length;l++)c=c.getCommonAncestor(u[a][l]);for(s=new CKEDITOR.dom.element("div",t.document),l=0;l<u[a].length;l++){for(f=u[a][l];!f.getParent().equals(c);)f=f.getParent();u[a][l]=f}for(l=0;l<u[a].length;l++)f=u[a][l],f.getCustomData&&f.getCustomData("block_processed")||(f.is&&CKEDITOR.dom.element.setMarker(r,f,"block_processed",!0),l||s.insertBefore(f),s.append(f));CKEDITOR.dom.element.clearAllMarkers(r),m.push(s)}g.selectBookmarks(h),d=m}for(m=d.length,r=0;m>r;r++)this.commitContent(d[r]),!d[r].getAttribute("style")&&d[r].removeAttribute("style");this.hide()},onHide:function(){"editdiv"==n&&this._element.removeCustomData("elementStyle"),delete this._element}}}CKEDITOR.dialog.add("creatediv",function(e){return t(e,"creatediv")}),CKEDITOR.dialog.add("editdiv",function(e){return t(e,"editdiv")})}();