//Create an array called `colors` that contains three colors.
colors = ["red", "yellow", "green"];

// Log the last item in the array to the console.
console.log(colors[2]);

// Create a `for` loop that prints out "My favorite color is [insert color here]" for each item in `colors`.
for(var i = 0; i < colors.length; i++){
  console.log(colors[i]);
}

// Create an `instructor` object that contains three key-value pairs.
instructor = {
  name: "Jesse",
  age: 27,
  gender: "male"
}

// Add a `facial-hair` property to `instructor`.
instructor["facial-hair"] = true;

// Log the value of the `facial-hair` property to the console.
console.log(instructor["facial-hair"]);