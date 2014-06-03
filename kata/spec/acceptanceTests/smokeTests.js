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
         expect(false).to.be.false;
      });

      it('fail', function() {
         expect(false).to.be.true;
      });
   });
});