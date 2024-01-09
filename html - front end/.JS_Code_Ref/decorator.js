

//   <h3><a id="LoggerContext" href="#LoggerContext"><span
//    class="anchor"/></a>Logger context</h3>

function decorate() {
  var anchor = findAnchorInURL(document.URL);
  decoratePropertiesInTables(anchor);
  decorateDoAnchor(anchor);
  decorateConversionWordInTables(anchor);
}

// ----------------------------------------------
function findAnchorInURL(url) {

 if(url == null) return null
  var index = url.lastIndexOf("#");
  if(index != -1 && (index+1) < url.length) 
    return url.substr(index+1);
  else 
    return null;
}

// ----------------------------------------------
function decoratePropertiesInTables(anchor) {

 //if(1==1) return;
 var elems = $('tr td:first-child span.prop');

 for(var i = 0; i < elems.length; i++) {
   var e = elems[i];
   var p = e.parentNode;
   if(p == null) continue;

   var tmpHTML = p.innerHTML;
   var propName = e.innerHTML;
   var idAttr = $(e).attr('id')
    
   if(idAttr == null) {
     var containerAttr = $(e).attr('container')
     if(containerAttr != null) 
       idAttr = containerAttr+capitaliseFirstLetter(propName);
     else 
       idAttr = propName;
   }
   
   p.innerHTML = "<a id='" + idAttr + "' href='#" + idAttr +
                "'><span class='anchor'/></a><b>" +tmpHTML +"</b>";
   scrollIfMatch(p, idAttr, anchor);
 } // for 
}

function decorateConversionWordInTables(anchor) {
 var elems = $('tr td.word');
 for(var i = 0; i < elems.length; i++) {
   var e = elems[i];
   var tmpHTML = e.innerHTML;
   var idAttr = $(e).attr('id')
   if(idAttr == null) 
     continue;
   e.innerHTML = "<a id='" + idAttr + "' href='#" + idAttr +
                "'><span class='anchor'/></a>" +tmpHTML;
   scrollIfMatch(e, idAttr, anchor);
 }
}


function decorateDoAnchor(anchor) {
   var elems = $('.doAnchor');
   for(var i = 0; i < elems.length; i++) {
     var e = elems[i];
     var tmpHTML = e.innerHTML;
     var idAttr = $(e).attr('name')
     if(idAttr == null) {
       idAttr = camelCase($.trim(tmpHTML))
     }
     e.innerHTML = "<a id='" + idAttr + "' href='#" + idAttr +
                "'><span class='anchor'/></a>" +tmpHTML;
     scrollIfMatch(e, idAttr, anchor);
   }
} 

function scrollIfMatch(element, idAttr, anchor) {
  if(anchor != null && idAttr.toString() == anchor)
     element.scrollIntoView(true);


}

function capitaliseFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


function camelCase(str) {  
  var res = str.trim().replace(/\s\w/g, function(match) {
              return match.trim().toUpperCase();
            });
  return res;
}

