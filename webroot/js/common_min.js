var exitpop=false;function PopPage(H,D,E,A,G,F){if(E==null){E=800}if(A==null){A=500}if(G==null){G=(screen.width-E)/2}if(F==null){F=(screen.height-A)/2}var C="width="+E+",height="+A+",left="+G+",top="+F+",scrollbars=1,toolbar=no,location=no,directories=no,status=no,resizable=no";var B=window.open(H,D,C);B.focus()}function GetCookie(A){var B=document.cookie;var C=B.indexOf(A);if(C!=-1){C+=A.length+1;lastchar=B.indexOf(";",C);if(lastchar==-1){lastchar=B.length}return unescape(B.substring(C,lastchar))}return""}function setCookie(A,C,B,D){document.cookie=A+"="+C+"; domain="+D+"; path=/; expires="+B.toGMTString()}function unloadpopup(C,D,B,A,G,F){try{if(!F){return }if(GetCookie(C)==""){var E=new Date();E.setTime(E.getTime()+1*(24*60*60*1000));setCookie(C,"yes",E,G);if(exitpop){w=window.open(D,C,"width="+B+",height="+A+",scrollbars=1,toolbar=yes,location=yes,menubar=yes,status=yes,resizable=yes");w.focus}}}catch(H){}}function setCheckboxes(F,A,E){var B=document.forms[F].elements[A];var D=B.length;if(D){for(var C=0;C<D;C++){B[C].checked=E}}else{B.checked=E}return true}var imageObject;function ResizeImage(F,D,G){if(F!=null){imageObject=F}var E=imageObject.readyState;var B=new Image();B.src=imageObject.src;var A=B.width;var C=B.height;if(A>D||C>G){a=A/D;b=C/G;if(b>a){a=b}A=A/a;C=C/a}if(A>0&&C>0){imageObject.width=A}imageObject.height=C;if(E!="complete"||imageObject.width>D||imageObject.height>G){setTimeout("ResizeImage(null,"+D+","+G+")",40)}}function sel(){var B=document.forms[0];if(!B){return }var A=B.elements;for(i=0;i<A.length;i++){if(A[i].type=="checkbox"){if(A[i].checked){A[i].checked=false}else{A[i].checked=true}}}}function reverseCheckbox(A,B){if(B==null||B==""){var D=document.forms[A];if(!D){return }var C=D.elements;for(i=0;i<C.length;i++){if(C[i].type=="checkbox"){if(C[i].checked){C[i].checked=false}else{C[i].checked=true}}}}else{eles=document.getElementsByName(B);if(eles!=null){for(i=0;i<eles.length;i++){eles[i].checked=!eles[i].checked}}}}function clearDoc(A){var C=document.forms[A];if(!C){return }var B=C.elements;for(i=0;i<B.length;i++){if(B[i].type=="checkbox"){B[i].checked=false}else{if(B[i].type=="radio"){B[i].checked=false}else{if(B[i].type=="text"){B[i].value=""}else{if(B[i].type=="select-one"){B[i].options[0].selected=true}else{if(B[i].type=="textarea"){B[i].value=""}}}}}}}function emptyDates(B,A){if(B){document.getElementsByName("gdc_"+B)[0].value="";document.getElementsByName(B)[0].value="";document.getElementsByName("time_"+B)[0].value=""}if(A){document.getElementsByName("gdc_"+A)[0].value="";document.getElementsByName(A)[0].value="";document.getElementsByName("time_"+A)[0].value=""}}function findObj(C){var B;try{B=document.getElementsByName(C)[0];return B}catch(A){return null}}function trim(A){return A.replace(/^\s*|\s*$/g,"")}function sel(){var B=document.mainform;if(!B){return }var A=B.elements;for(i=0;i<A.length;i++){if(A[i].type=="checkbox"){if(A[i].checked){A[i].checked=false}else{A[i].checked=true}}}}function cleanall(){var B=null;if(document.all){B=document.forms[1].all.tags("INPUT")}else{B=document.forms[1].elements}for(i=0;i<B.length;i++){if(B[i].type=="checkbox"){B[i].checked=false}else{if(B[i].type=="text"||B[i].type=="hidden"){B[i].value=""}}}var A=null;A=document.forms[1].all.tags("SELECT");for(i=0;i<A.length;i++){A[i].selectedIndex=0}}function emptyCommonDateTime(B,A){document.getElementsByName("gdc_"+B)[0].value="";document.getElementsByName("gdc_"+A)[0].value="";document.getElementsByName(B)[0].value="";document.getElementsByName(A)[0].value="";document.getElementsByName("time_"+B)[0].value="";document.getElementsByName("time_"+A)[0].value=""}function emptyCommonDate(B,A){document.getElementsByName("gdc_"+B)[0].value="";document.getElementsByName("gdc_"+A)[0].value="";document.getElementsByName(B)[0].value="";document.getElementsByName(A)[0].value=""}function tellIsChecked(D,A){var B=null;var C=0;if(document.all){B=document.forms[1].all.tags("INPUT")}else{B=document.forms[1].elements}for(i=0;i<B.length;i++){if(B[i].name==D){if(B[i].checked==true){C++}}}if(C>=1){return true}alert(A);return false}function CompareStartWithEndDate(C,A,B){if(findObj(C).value>findObj(A).value){alert(B);return false}return true}function ByteWordCount(B){var A=B;A=A.replace(/(<.*?>)/ig,"");A=A.replace(/([\u0391-\uFFE5])/ig,"11");return A.length};