/**
 * this topic is about memory and visualization
 * with javascript in browser so revise it at 5:58:04
 */

// Global Execution Context
// Function or Functional Execution Context
// Eval Execution Context
// -----------------------------------------
// Memory Creation Phase or Creation Phase
// Execution Phase

const val1 = 10;
const val2 = 20;

function addTwoNumber(num1, num2) {
    const total = num1 + num2;
    return total;
}
const result1 = addTwoNumber(val1, val2);
const result2 = addTwoNumber(10, 20);

/**
 *  [1]. Global Execution Phase(Context) -> this
 *
 *  [2]. Memory Phase
 *
 *       val1 -> undefined
 *       val2 -> undefined
 *       addTwoNumber -> Definition( parameter + Block )
 *       result1 -> undefined
 *       result2 -> undefined
 *
 *  [3]. Execution Phase
 *       val1 <- 10
 *       val2 <- 20
 *       addTowNumber -> new variable environment (Memory Phase) +
 *                       Execution Thread (Execution Phase)
 *                       Memory Phase >>
 *                       val1  -> undefined
 *                       val2  -> undefined
 *                       total -> undefined
 *                       Execution Context(Phase) >>
 *                       num1  <- 10
 *                       num2  <- 5
 *                       total <- 15 // Returns to Global EC [1].
 *       result1 -> 15
 *       addTowNumber -> new variable environment (Memory Phase) +
 *                       Execution Thread (Execution Phase)
 *                       Memory Phase >>
 *                       val1  -> undefined
 *                       val2  -> undefined
 *                       total -> undefined
 *                       Execution Context(Phase) >>
 *                       num1  <- 10
 *                       num2  <- 20
 *                       total <- 30 // Returns to Global EC [1].
 *       result1 -> 30
 */

/**
 *       Call Stack (in developer tools in sources in snippets it is like a debugger.)
 */
