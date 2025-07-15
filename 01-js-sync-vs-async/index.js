import { log, blockForSeconds, nonBlocking } from "./helpers.js"

// 🔴 Blocking demo
function runBlockingDemo() {
  log("🔴 [Blocking] App started");

  setTimeout(() => {
    log("[Blocking] setTimeout fired after waiting 1 second");
  }, 1000);

  const result = blockForSeconds(5);

  log(`[Blocking] App finished with value of "${result}"`);
}

// 🟢 Non-blocking demo
async function runNonBlockingDemo() {
  log("🟢 [Non-blocking] App started");

  setTimeout(() => {
    log("[Non-blocking] setTimout fired after 1 second");
  }, 1000);

  const result = await nonBlocking(5);

  log(`[Non-blocking] App finished with value of "${result}"`);
}


// runBlockingDemo();
// runNonBlockingDemo();


