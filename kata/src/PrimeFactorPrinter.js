define([],
function() {
   'use strict';

   var PrimeFactorPrinter = function(separator) { 
      this.Separator = separator || '';
      this.PrimeFactors = [];
   };

   PrimeFactorPrinter.prototype.Separator;
   PrimeFactorPrinter.prototype.PrimeFactors;

   PrimeFactorPrinter.prototype.PrintFor = function (number) {
      this.AddIfEvenNumber(number);
      this.AddIfOddNumber(number);
      return this.PrimeFactors.join(this.Separator);
   };

   PrimeFactorPrinter.prototype.IsEven = function(number) {
      return (number % 2) === 0;
   }

   PrimeFactorPrinter.prototype.IsOdd = function(number) {
      return (number % 2) !== 0;
   }

   PrimeFactorPrinter.prototype.DividesEvenly = function(numerator, denominator) {
      return (numerator % denominator) === 0;
   }

   PrimeFactorPrinter.prototype.AddIfEvenNumber = function(number) {
      if (this.IsEven(number)) {
         this.PrimeFactors.push(2);
         this.PrintFor(number / 2);
      };
   }

   PrimeFactorPrinter.prototype.AddIfOddNumber = function(number) {
      if (this.IsOdd(number) && number >= 3) {
         var squareRoot = Math.sqrt(number);
         for (var i = 3; i <= squareRoot; i+=2) {
            if (this.DividesEvenly(number, i)) {
               this.PrimeFactors.push(i);
               this.PrintFor(number / i);
               return;
            };
         };

         this.PrimeFactors.push(number);
      };
   }

   return PrimeFactorPrinter;
});