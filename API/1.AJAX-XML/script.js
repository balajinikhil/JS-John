/*AJAX - Asynchronous Javascript And XML
It allows us to add content to the page in a asynchronous way, i.e without refreshing the page

XMLHttpRequest - Object to interact with the server
*/

const info = document.querySelector(".info");

const xml = new XMLHttpRequest();
console.log(xml);

/*methods and properties

1. xml.open('METHOD','path',async)
    
    METHOD - The way the request is made various methods are
    GET, POST, PUT, DELETE .etc

    path - The path and file name which has to be loaded 

    async - Should the data be loaded asynchronously true/false
    RECOMENDED true - as we need to add asynchronous way
*/
xml.open("GET", "info.txt", true);

/*
xml.onreadystatechange = callback;
whenever the readystate of an XMLHttpRequest changes the callback function is fired

xml.status - property which returns the numerical status of the response of the request
numerical representation
0 UNSENT
0 OPENED
200 LOADING
200 DONE

xml.readystate - property which returns the state of XMLHttpRequest client is in

various states are
    0 UNSENT - client created  i.e object created 
    1 OPENED - xml.open()      i.e open()method is called
    2 HEADERS_RECIEVED         i.e send()request is made
    3 LOADING                  i.e downloading the file
    4 DONE                     i.e completed


xml.responseText - property which holds the content of the requested file
*/

/*
xml.onreadystatechange = function() {
  if (this.status == 200 && this.readyState == 4) {
    info.innerHTML = this.responseText;
  }
};
*/

/*xml.onload = callback
whenever the readystate == 4 callback is fired up
RECOMENDED it good to use this method because there will be no need to check readystate */

xml.onload = function() {
  if (xml.status == 200) {
    info.innerHTML = xml.responseText;
  } else {
    info.innerHTML = "ERROR";
  }
};

/*xml.onerror - callback
callback is fired upwhenever the request fails
 */
xml.onerror = function() {
  info.innerHTML = "ANOTHER ERROR";
};

/*xml.send() - method which sends the request 
i.e after passing this only request is initalized this sends the request */
xml.send();

/*SUMMARY
- To load content to page in a asynchronous way AJAX is used

1.new XMLHttpReques()  create a new object with constructor

2.xml.open('METHOD', 'path' , async) call open method

3.xml.onload = callback pass onload and add callback

4.xml.send() make the request using send 
*/
