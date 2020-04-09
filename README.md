# ninja-unit-conversion

This is a small utility to convert units instead of having to bake it in everywhere you might need it.

Usage:

```javascript
const unitConverter = require('ninja-unit-conversion');

let acres = 50;
let squareMeters = unitConverter.acresToSquareMeters(acres);

console.log(squareMeters);

// 202343
```

## Methods:

### _28uanTotalWeight
```
Converts input in gallons to total weight in lbs of 28% Nitrogen Content Fertilizer. 

Usage:

let totalWeight = unitConverter._28uanTotalWeight(gallons);
```
### _32uanTotalWeight 
```
Converts input in gallons to total weight in lbs of 32% Nitrogen Content Fertilizer. 

Usage:

let totalWeight = unitConverter._32uanTotalWeight(gallons);
```
### _21ammoniumThioSulfateTotalWeight 
```
Converts input in gallons to total weight in lbs of 21% Ammonium Thio Sulfate Fertilizer. 

Usage:

let totalWeight = unitConverter._21ammoniumThioSulfateTotalWeight(gallons);
```
### acresToSquareMeters 
```
Converts input in acres to square meters.

Usage:

let squareMeters = unitConverter.acresToSquareMeters(acres);
```
### acresToHectares
```
Converts input in acres to hectares.

Usage:

let hectares = unitConverter.acresToHectares(acres);
```
### hectaresToAcres 
```
Converts input in hectares to acres.

Usage:

let acres = unitConverter.hectaresToAcres(hectares);
```
### hectaresToSquareMeters 
```
Converts input in hectares to square meters.

Usage:

let squareMeters = unitConverter.hectaresToSquareMeters(hectares);
```
### poundsPerAcreToKilogramsPerHectare 
```
Converts input in pounds per acre to kilos per hectare.

Usage:

let kilogramsPerHectare = unitConverter.poundsPerAcreToKilogramsPerHectare(poundsPerAcre);
```
### kilogramsPerHectarToPoundsPerAcre 
```
Converts input in kilos per hectare to pounds per acre.

Usage:

let poundsPerAcre = unitConverter.kilogramsPerHectareToPoundsPerAcre(kilogramsPerHectare);
```
### pricePerBushelToPricePerPound
```
Converts input in price per bushel to price per pound.

Usage:

let pricePerPound = unitConverter.pricePerBushelToPricePerPound(pricePerBushel, bushelCropConversionFactor);
```
### pricePerPoundToPricePerBushel
```
Converts input in price per pound to price per bushel.

Usage:

let pricePerBushel = unitConverter.pricePerPoundToPricePerBushel(pricePerPound, bushelCropConversionFactor);
```
### pricePerKilogramToPricePerBushel
```
Converts input in price per kilogram to price per bushel.

Usage:

let pricePerBushel = unitConverter.pricePerKilogramToPricePerBushel(pricePerKilogram, bushelCropConversionFactor);
```
### pricePerBushelToPricePerKilogram
```
Converts input in price per bushel to price per pound.

Usage:

let pricePerKilogram = unitConverter.pricePerBushelToPricePerKilogram(pricePerBushel, bushelCropConversionFactor);
```
### pricePerPoundToPricePerKilogram 
```
Converts input in price per pound to price per kilogram.

Usage:

let pricePerKilogram = unitConverter.pricePerPoundToPricePerKilogram(pricePerPound);
```
### pricePerKilogramToPricePerPound 
```
Converts input in price per kilogram to price per pound.

Usage:

let pricePerPound = unitConverter.pricePerKilogramToPricePerPound(pricePerKilogram);
```
### squareMetersToAcres 
```
Converts input in square meters to acres.
 
Usage:

let acres = unitConverter.squareMetersToAcres(squareMeters);
```
### squareMetersToHectares 
```
Converts input in square meters to hectares.
 
Usage:

let hectares = unitConverter.squareMetersToHectares(squareMeters);
```