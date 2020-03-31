'use strict';

class UnitConverter {
    
    constructor() {
        this.conversionFactors = {
            ACRE_HECTARE: 0.404686,
            ACRE_SQUARE_METER: 4046.86,
            HECTARE_ACRE: 2.47105,
            KILOGRAM_POUND: 2.20462,
            POUND_KILOGRAM: 0.453592,
            UAN28_GALLON: 10.67,
            UAN32_GALLON: 11.1,
            AMMONIUM_THIO_SULFATE_21_GALLON: 11.04, 
            SQUARE_METER_ACRE: 0.000247105,
        };
    }

    acresToSquareMeters = acres => {
        return acres * this.conversionFactors.ACRE_SQUARE_METER;
    }

    acresToHectares = acres => {
        return acres * this.conversionFactors.ACRE_HECTARE;
    }

    ammoniumThioSulfate21TotalWeight = gallons => {
        return gallons * this.conversionFactors.AMMONIUM_THIO_SULFATE_21_GALLON;
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

    uan28TotalWeight = gallons => {
        return gallons * this.conversionFactors.UAN28_GALLON;
    }

    uan32TotalWeight = gallons => {
        return gallons * this.conversionFactors.UAN32_GALLON;
    }

}

module.exports = UnitConverter;

