//Spoiler
$(document).ready(function(){$("#flippy").click(function(){$("#flippanel").slideToggle("normal")})});

$(document).ready(function(){$("#flippy1").click(function(){$("#flippanel1").slideToggle("normal")})});

$(document).ready(function(){$("#apps").click(function(){$("#appsflippanel").slideToggle("normal")})});

$(document).ready(function(){$("#desktoptools").click(function(){$("#desktoptoolsflippanel").slideToggle("normal")})});

$(document).ready(function(){$("#script").click(function(){$("#scriptflippanel").slideToggle("normal")})});

$(document).ready(function(){$("#commentsblog").click(function(){$("#commentsblogflippanel").slideToggle("normal")})});


// Grid Recent Post by Label
var numposts = 7;
var showpostthumbnails = true;
var showpostdate = false;

function rcentbytag(e){document.write('<ul class="recent-by-tag">');for(var t=0;t<numposts;t++){var n=e.feed.entry[t];var r=n.title.$t;var i;if(t==e.feed.entry.length)break;for(var o=0;o<n.link.length;o++){if(n.link[o].rel=="replies"&&n.link[o].type=="text/html"){var u=n.link[o].title;var f=n.link[o].href}if(n.link[o].rel=="alternate"){i=n.link[o].href;break}}var l;try{l=n.media$thumbnail.url}catch(h){s=n.content.$t;a=s.indexOf("<img");b=s.indexOf('src="',a);c=s.indexOf('"',b+5);d=s.substr(b+5,c-b-5);if(a!=-1&&b!=-1&&c!=-1&&d!=""){l=d}else l="http://2.bp.blogspot.com/-giova1ZCh-A/Uzq6L8QTJNI/AAAAAAAAAJc/USXictTq_xs/s70-c/KM+Icon.png"}var p=n.published.$t;var v=p.substring(0,4);var m=p.substring(5,7);var g=p.substring(8,10);var y=new Array;y[1]="Januari";y[2]="Februari";y[3]="Maret";y[4]="April";y[5]="Mei";y[6]="Juni";y[7]="Juli";y[8]="Agustus";y[9]="September";y[10]="Oktober";y[11]="November";y[12]="Desember";document.write('<li class="recentlist">');if(showpostthumbnails==true)document.write('<a href="'+i+'" target ="_blank" title="'+r+'"><img class="rct-thumb" alt="'+r+'" src="'+l+'"/></a>');document.write('<strong><a href="'+i+'" target ="_blank" title="'+r+'" rel="nofollow">'+r+'</a></strong>');document.write('<br>');document.write('<a class="btndown" href="'+i+'" target ="_blank">Download</a>');var x="";var T=0;if(showpostdate==true){x='<span class="showdates">'+x+g+" "+y[parseInt(m,10)]+" "+v+"</span>";T=1}document.write(x);document.write("</li>");if(t!=numposts-1)document.write("")}document.write("</ul>")}


// Scroll
$('a.right-b').click(function() {
  $('.blanter-wrap').animate({
    scrollLeft: "+=500px"
  }, "normal");
});
 $('a.left-b').click(function() {
  $('.blanter-wrap').animate({
    scrollLeft: "-=500px"
  }, "normal");
});

// Password
console.clear();

const elInput = document.querySelector('#inputpassword');
const elDisplay = document.querySelector('#displaypassword');

Splitting({ whitespace: true });
elInput.addEventListener('inputpassword',()=>{
  elDisplay.innerHTML = Splitting.html({ content: elInput.value, whitespace: true });
});

window.setTimeout(()=>{ document.querySelector('#revealpassword').click() }, 99999);
