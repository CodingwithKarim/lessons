import { log, blockForSeconds, nonBlocking } from "./helpers.js"

// 🔴 Blocking demo
function AppBlocking() {
  log("🔴 [Blocking] App started");

  setTimeout(() => {
    log("[Blocking] setTimeout fired after 1 second");
  }, 1000);

  const result = blockForSeconds(5); // This blocks main thread for n seconds and nothing else can run during this time

  log(`[Blocking] App finished with value of "${result}"`);
}

// 🟢 Non-blocking demo
async function AppNonBlocking() {
  log("🟢 [Non-blocking] App started");

  setTimeout(() => {
    log("[Non-blocking] setTimout fired after 1 second");
  }, 1000);

  const result = await nonBlocking(5); // This blocks execution in this func but frees up main thread for other potential tasks

  log(`[Non-blocking] App finished with value of "${result}"`);
}

// Uncomment ONE at a time to see the difference clearly.
// AppBlocking();
// AppNonBlocking();


