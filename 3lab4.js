function fetchDataWithCallback(callback) {
    // Simulate a delay as if fetching data from an API
    setTimeout(() => {
      // Simulate a random outcome for success or failure
      const success = Math.random() > 0.5;  // 50% chance of success
      if (success) {
        callback(null, "Data fetched successfully!");
      } else {
        callback("Error: Unable to fetch data.", null);
      }
    }, 2000); // Simulate a 2-second delay
  }
  
  // Testing the function with success and failure scenarios
  
  // Success scenario
  fetchDataWithCallback((error, result) => {
    if (error) {
      console.log("Failure:", error);
    } else {
      console.log("Success:", result);
    }
  });
  
  // Failure scenario
  fetchDataWithCallback((error, result) => {
    if (error) {
      console.log("Failure:", error);
    } else {
      console.log("Success:", result);
    }
  });
  