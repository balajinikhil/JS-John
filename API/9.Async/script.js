/*Async Await - 
async executes the callback function in asychronous way and effective while using for API */

async function c() {
  let timeout = await setTimeout(() => {
    console.log("hello");
  }, 3000);
}
c();

/*try and catch can be used to catch errors  */
