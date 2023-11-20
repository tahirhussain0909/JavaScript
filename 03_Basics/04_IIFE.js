// Immediately Invoked Function Expressions (IIFE)

(function dbConnectMessage() {
    // named IIFE
    console.log(`DB Connected`);
})();

(() => console.log(`check it`))();

((name) => console.log(`check it ${name}`))("tahir");

((name) => {
    console.log(`check it ${name}`);
})("tahir");
