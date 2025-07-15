// runWithThen and runWithAwait do the exact same thing
// both handle a resolved Promise, one using .then and another using async + await

function buildPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("✅ Promise resolved after 2 seconds");
    }, 2000);
  });
}

function runWithThen() {
  console.log("[Using .then]");

  buildPromise().then((val) => {
    console.log(`Resolved with: ${val}`);
  });

  console.log("runWithThen() finished");
}

async function runWithAwait() {
  console.log("[Using await]");

  const val = await buildPromise();

  console.log("Resolved with:", val);

  console.log("runWithAwait() finished");
}


runWithThen();
// runWithAwait();
