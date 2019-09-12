(function() {    
     var message = &quot;%d seconds before download link appears&quot;;    // seconds before download link becomes visible    
     var count = 30;
     var countdown_element = document.getElementById(&quot;countdown&quot;);    
     var download_link = document.getElementById(&quot;download_link&quot;);    
     var timer = setInterval(function(){  // if countdown equals 0, the next condition will evaluate to false and the else-construct will be executed       
     if (count) {           // display text           
     countdown_element.innerHTML = &quot;You have to wait %d seconds.&quot;.replace(&quot;%d&quot;, count);           // decrease counter           
     count--;       } 
     else {           // stop timer           
     clearInterval(timer);           // hide countdown           
     countdown_element.style.display = &quot;none&quot;;           // show download link           
     download_link.style.display = &quot;&quot;;}}, 1000); })();