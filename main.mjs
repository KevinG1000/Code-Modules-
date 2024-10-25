// LAB 308.1.1 

export function roadTrip(speed, mpg) {
    const totalDistance = 1500;
    const fuelCostPG = 3;
    const fuelBudget = 175;
    
    let lowMile = 30; // miles per gallon for low mileage scenario
    let medMile = 28; // miles per gallon for medium mileage scenario
    let highMile = 23; // miles per gallon for high mileage scenario

    // 1. Fuel needed for the entire trip
    // Assuming `mpg` is passed in as an argument
    const gallonsNeeded = totalDistance / mpg;

    // 2. Calculate fuel cost
    const totalFuelCost = gallonsNeeded * fuelCostPG;

    // 3. Check if budget is enough
    const isBudgetEnough = fuelBudget >= totalFuelCost;

    // Return the result
    return {
        gallonsNeeded,
        totalFuelCost,
        isBudgetEnough
    };
}
