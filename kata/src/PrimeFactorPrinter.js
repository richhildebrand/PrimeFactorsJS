define([],
function() {
   'use strict';

   var PrimeFactorPrinter = function(separator) { 
      this.Separator = separator;
      this.PrimeFactors = [];
   };

   PrimeFactorPrinter.prototype.Separator;
   PrimeFactorPrinter.prototype.PrimeFactors;

   PrimeFactorPrinter.prototype.PrintFor = function (number) {
      this.AddIfEvenNumber(number);
      this.AddIfOddNumber(number);
      return this.PrimeFactors.join(', ');
   };

   PrimeFactorPrinter.prototype.IsEven = function(number) {
      return (number % 2) === 0;
   }

   PrimeFactorPrinter.prototype.IsOdd = function(number) {
      return (number % 2) !== 0;
   }

   PrimeFactorPrinter.prototype.AddIfEvenNumber = function(number) {
      if (this.IsEven(number)) {
         this.PrimeFactors.push(2);
         this.PrintFor(number / 2);
      };
   }

   PrimeFactorPrinter.prototype.AddIfOddNumber = function(number) {
      if (this.IsOdd(number) && number >= 3) {
         this.PrimeFactors.push(number);
      };
   }

   return PrimeFactorPrinter;
});