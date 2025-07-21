import { log, blockForSeconds, nonBlocking } from "./helpers.js"

// 🔴 Blocking demo
function runBlockingDemo() {
  log("🔴 App started");

  setTimeout(() => {
    log("setTimeout completed after waiting 1 second");
  }, 1000);

  const result = blockForSeconds(5);

  log(`[Blocking] App finished with value of "${result}"`);
}

// 🟢 Non-blocking demo
function runNonBlockingDemo() {
  log("🟢 App started");

  setTimeout(() => {
    log("setTimout completed after 1 second");
  }, 1000);

  nonBlocking(5).then(result => log(`[Promise resolved with value of "${result}"`))

  log(`[App finished executing...`);
}

// runBlockingDemo();
// runNonBlockingDemo();