'use strict';

class UnitConverter {
    
    constructor() {
        this.conversionFactors = {
            ACRE_HECTARE: 0.404686,
            ACRE_SQUARE_METER: 4046.86,
            HECTARE_ACRE: 2.47105,
            KILOGRAM_POUND: 2.20462,
            POUND_KILOGRAM: 0.453592,
            SQUARE_METER_ACRE: 0.000247105,
        };
    }

    acresToSquareMeters = acres => {
        return acres * this.conversionFactors.ACRE_SQUARE_METER;
    }

    acresToHectares = acres => {
        return acres * this.conversionFactors.ACRE_HECTARE;
    }

    hectaresToAcres = hectares => {
        return hectares / this.conversionFactors.ACRE_HECTARE;
    }

    hectaresToSquareMeters = hectares => {
        return hectares * 1000;
    }

    poundsPerAcreToKilogramsPerHectar = poundsPerAcre => {
        return poundsPerAcre * this.conversionFactors.POUND_KILOGRAM / this.conversionFactors.ACRE_HECTARE;
    }

    pricePerBushelToPricePerPound = (pricePerBushel, bushelCropConversionFactor) => {
        return pricePerBushel / bushelCropConversionFactor;
    }

    pricePerBushelToPricePerKilogram = (pricePerBushel, bushelCropConversionFactor) => {
        return this.pricePerBushelToPricePerPound(pricePerBushel, bushelCropConversionFactor) / this.conversionFactors.POUND_KILOGRAM;
    }

    pricePerPoundToPricePerKilogram = pricePerPound => {
        return pricePerPound / this.conversionFactors.POUND_KILOGRAM;
    }

    squareMetersToAcres = squareMeters => {
        return squareMeters * this.conversionFactors.SQUARE_METER_ACRE;
    }

    squareMetersToHectares = squareMeters => {
        return squareMeters / 1000;
    }
}

export default UnitConverter;

