/*Event Object
Default properties and methods present in event
1.event type => tells what type of event was performed
2.event target => tells what which element was targeted
3.event.preventDefault() => prevents default behaviour of a element
 */

let btn = document.querySelector(".btn");

btn.addEventListener("click", function(e) {
  console.log(`event.type :`, e.type);
  console.log(`event.target :`, e.target);
});

let link = document.getElementById("link");
link.addEventListener("click", e => {
  e.preventDefault(); //prevents default action
});
