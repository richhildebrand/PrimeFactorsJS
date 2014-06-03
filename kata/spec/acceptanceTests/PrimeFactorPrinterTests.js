define(['Squire'], function(Squire) {
   describe('Prime Factor Printer should', function() {
      'use strict';

      var primeFactorPrinter = undefined;

      beforeEach(function(done) {
         var testContext = new Squire();

         testContext.require(['PrimeFactorPrinter'], function(PrimeFactorPrinter) {
            primeFactorPrinter = new PrimeFactorPrinter();
            done();
         });
      });

      it('print two when given two', function() {
         var primeFactors = primeFactorPrinter.PrintFor(2);
         expect(primeFactors).to.equal('2');
      });

      it('print three when given three', function() {
         var primeFactors = primeFactorPrinter.PrintFor(3);
         expect(primeFactors).to.equal('3');
      });

      it('print 2, 2 when given four', function() {
         var primeFactors = primeFactorPrinter.PrintFor(4);
         expect(primeFactors).to.equal('2, 2');
      });
   });
});