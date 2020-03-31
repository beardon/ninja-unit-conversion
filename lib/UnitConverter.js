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
        if(acres === 0 || acres < 0) return 0;
        if(isNaN(acres)) return -1;
        else return acres * this.conversionFactors.ACRE_SQUARE_METER;
    }

    acresToHectares = acres => {
        if(acres === 0 || acres < 0) return 0;
        if(isNaN(acres)) return -1;
        else return acres * this.conversionFactors.ACRE_HECTARE;
    }

    ammoniumThioSulfate21TotalWeight = gallons => {
        if(gallons === 0 || gallons < 0) return 0;
        if(isNaN(gallons)) return -1;
        else return gallons * this.conversionFactors.AMMONIUM_THIO_SULFATE_21_GALLON;
    }

    hectaresToAcres = hectares => {
        if(hectares === 0 || hectares < 0) return 0;
        if(isNaN(hectares)) return -1;
        else return hectares / this.conversionFactors.ACRE_HECTARE;
    }

    hectaresToSquareMeters = hectares => {
        if(hectares === 0 || hectares < 0) return 0;
        if(isNaN(hectares)) return -1;
        return hectares * 1000;
    }

    poundsPerAcreToKilogramsPerHectare = poundsPerAcre => {
        if(poundsPerAcre === 0 || poundsPerAcre < 0) return 0;
        if(isNaN(poundsPerAcre)) return -1;
        else return poundsPerAcre * this.conversionFactors.POUND_KILOGRAM / this.conversionFactors.ACRE_HECTARE;
    }

    pricePerBushelToPricePerPound = (pricePerBushel, bushelCropConversionFactor) => {
        if(pricePerBushel === 0 || bushelCropConversionFactor === 0 || pricePerBushel < 0 || bushelCropConversionFactor < 0) return 0;
        if(isNaN(pricePerBushel) || isNaN(bushelCropConversionFactor)) return -1;
        else return pricePerBushel / bushelCropConversionFactor;
    }

    pricePerBushelToPricePerKilogram = (pricePerBushel, bushelCropConversionFactor) => {
        if(pricePerBushel === 0 || bushelCropConversionFactor === 0 || pricePerBushel < 0 || bushelCropConversionFactor < 0) return 0;
        if(isNaN(pricePerBushel) || isNaN(bushelCropConversionFactor)) return -1;
        else return this.pricePerBushelToPricePerPound(pricePerBushel, bushelCropConversionFactor) / this.conversionFactors.POUND_KILOGRAM;
    }

    pricePerPoundToPricePerKilogram = pricePerPound => {
        if(pricePerPound === 0 || pricePerPound < 0) return 0;
        if(isNaN(pricePerPound)) return -1;
        else return pricePerPound / this.conversionFactors.POUND_KILOGRAM;
    }

    squareMetersToAcres = squareMeters => {
        if(squareMeters === 0 || squareMeters < 0) return 0;
        if(isNaN(squareMeters)) return -1;
        else return squareMeters * this.conversionFactors.SQUARE_METER_ACRE;
    }

    squareMetersToHectares = squareMeters => {
        if(squareMeters === 0 || squareMeters < 0) return 0;
        if(isNaN(squareMeters)) return -1;
        else return squareMeters / 1000;
    }

    uan28TotalWeight = gallons => {
        if(gallons === 0 || gallons < 0) return 0;
        if(isNaN(gallons)) return -1;
        else return gallons * this.conversionFactors.UAN28_GALLON;
    }

    uan32TotalWeight = gallons => {
        if(gallons === 0 || gallons < 0) return 0;
        if(isNaN(gallons)) return -1;
        else return gallons * this.conversionFactors.UAN32_GALLON;
    }

}

module.exports = UnitConverter;

