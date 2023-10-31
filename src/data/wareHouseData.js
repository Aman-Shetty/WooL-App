function average(numbers) {
  // Calculate the sum of the numbers in the array
  let sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  // Divide the sum by the total number of elements in the array
  let avg = sum / numbers.length;

  // Return the average
  return avg;
}

export const wareHouseData = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    warehouseName: "name1",
    price: "Rs.29,499",
    description:
      "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.",
    specs: [{}],
    maxStocks: "0",
    // location: [
    //   {
    //     city: "Bengaluru",
    //     state: "Karnataka",
    //   },
    // ],
    location: "Bengaluru, Karnataka",
    reviews: [
      {
        name: "",
        rating: 5,
        message: "",
        image: "",
      },
    ],
    // ratings: average(reviews.rating),
    ratings: 4.7,
  },
];
