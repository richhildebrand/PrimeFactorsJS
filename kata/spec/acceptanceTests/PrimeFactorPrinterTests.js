define(['Squire'], function(Squire) {
   describe('Prime Factor Printer should', function() {
      'use strict';

      var primeFactorPrinter = undefined;

      beforeEach(function(done) {
         var testContext = new Squire();

         testContext.require(['PrimeFactorPrinter'], function(PrimeFactorPrinter) {
            primeFactorPrinter = new PrimeFactorPrinter(', ');
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

      it('print "2, 2" when given four', function() {
         var primeFactors = primeFactorPrinter.PrintFor(4);
         expect(primeFactors).to.equal('2, 2');
      });

      it('print "2, 3" when given six', function() {
         var primeFactors = primeFactorPrinter.PrintFor(6);
         expect(primeFactors).to.equal('2, 3');
      });

      it('print "2, 2, 2" when given eight', function() {
         var primeFactors = primeFactorPrinter.PrintFor(8);
         expect(primeFactors).to.equal('2, 2, 2');
      });

      it('print "3, 3" when given nine', function() {
         var primeFactors = primeFactorPrinter.PrintFor(9);
         expect(primeFactors).to.equal('3, 3');
      });

      it('print "2, 5" when given ten', function() {
         var primeFactors = primeFactorPrinter.PrintFor(10);
         expect(primeFactors).to.equal('2, 5');
      });

      it('print "2, 2, 3" when given twelve', function() {
         var primeFactors = primeFactorPrinter.PrintFor(12);
         expect(primeFactors).to.equal('2, 2, 3');
      });

      it('print "7, 7" when given 49', function() {
         var primeFactors = primeFactorPrinter.PrintFor(49);
         expect(primeFactors).to.equal('7, 7');
      });

      it('print "5, 7, 13, 29" when given 13195', function() {
         var primeFactors = primeFactorPrinter.PrintFor(13195);
         expect(primeFactors).to.equal('5, 7, 13, 29');
      });
   });
});