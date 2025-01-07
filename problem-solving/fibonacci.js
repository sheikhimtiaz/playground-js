
function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }

    let prev = 0,
        curr = 1;

    for (let i = 2; i <= n; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr;
}

console.log(fibonacci(10)); // Output: 55


const fibonacciLazy = (() => {
    const fibCache = [0, 1]; // Initialize the cache with base cases
  
    return function (n) {
        
      if (n < 0) {
        return "Invalid input"; // Handle invalid inputs
      }
  
      // Compute Fibonacci numbers lazily
      for (let i = fibCache.length; i <= n; i++) {
        fibCache[i] = fibCache[i - 1] + fibCache[i - 2];
      }
  
      return fibCache[n]; // Return the result from the cache
    };
  })();
  
  console.log(fibonacciLazy(8)); // Output: 55
  console.log(fibonacciLazy(9)); // Output: 610
  console.log(fibonacciLazy(5));  // Output: 5 (retrieved from cache)

  