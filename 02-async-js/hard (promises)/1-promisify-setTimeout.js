/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

/**
 * 
 * @param {number} n
 * @returns {Promise<string>} 
 */
function wait(n) {
    return new Promise((resolve,reject) => {
        setTimeout(()=>resolve("Done!!"),n*1000);
    })
}