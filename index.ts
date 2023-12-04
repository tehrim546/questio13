//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “to oI would like wn a Honda motorcycle.”
let favoriteTransportation: Array<[transport: string, brand:string]>=[]

favoriteTransportation.push(["car","honda"])
favoriteTransportation.push(["motorcycle","honda"])
favoriteTransportation.push(["bicycle","honda"])

//console.log(favoriteTransportation)
//i would like to own aHonda motorcycle.

// using for each loop to print the statements

favoriteTransportation.forEach(([transport,brand]) =>
{console.log(`i would like to own a ${brand} ${transport}.`)}

)



