// const rainfallPerMonth = [ 5, 12, 18, 20, 22, 17, 29, 21, 20, 22, 30, 9 ]
// let totalRainfall = 0  // Start at 0 and add to it in the loop

// for (const rain of rainfallPerMonth) {
// 	totalRainfall += rain
// }

// To find the average, you take the total and divide by the number of items
// const averageRainfall = totalRainfall / rainfallPerMonth.length

// console.log(`Total rainfall was ${totalRainfall} inches
// Average rainfall was ${averageRainfall} inches
// `)






const monthlyExpenses = [ 201.43, 189.22, 132.09,  238.85, 195.41 ]
let totalExpense = 0

for (const expense of monthlyExpenses) {
    totalExpense += expense
}

const averageExpense = totalExpense / monthlyExpenses.length

console.log(`On average, I spend ${totalExpense} on groceries per month.  
So far this year, I have spent ${averageExpense} dollars on groceries`)