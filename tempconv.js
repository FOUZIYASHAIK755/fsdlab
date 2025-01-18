// TemperatureConverter object
const temperatureConverter = {
    // Method to convert Fahrenheit to Celsius
    toCelsius: function(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    },

    // Method to convert Celsius to Fahrenheit
    toFahrenheit: function(celsius) {
        return (celsius * 9 / 5) + 32;
    }
};

// Example usage
const fahrenheitTemp = 98.6;
const celsiusTemp = 37; 
// Convert Fahrenheit to Celsius
const convertedToCelsius = temperatureConverter.toCelsius(fahrenheitTemp);
console.log(`${fahrenheitTemp}°F is ${convertedToCelsius.toFixed(2)}°C`);

// Convert Celsius to Fahrenheit
const convertedToFahrenheit = temperatureConverter.toFahrenheit(celsiusTemp);
console.log(`${celsiusTemp}°C is ${convertedToFahrenheit.toFixed(2)}°F`);
