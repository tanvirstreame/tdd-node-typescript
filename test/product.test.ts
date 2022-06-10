require("../src/bootstrap");
const assert = require('assert');

const { connect, clearDatabase, closeDatabase } = require('../test/db.ts');
const productService = require('../src/product/product.service.ts');

/**
 * Complete product example.
 */
 const productData = [
    {
        name: 'iPhone 11',
        quantity: 699,
    },
    {
        name: 'iPhone 10',
        quantity: 599,
    }
];

/**
 * Connect to a new in-memory database before running any tests.
 */

//  describe('#sum()', function() {

//  }
before(async () => await connect());

/**
 * Clear all test data after every test.
 */
afterEach(async () => await clearDatabase());

/**
 * Remove and close the db and server.
 */
after(async () => await closeDatabase());

/**
 * Product test suite.
 */
describe('product ', () => {

    /**
     * Tests that a valid product can be created through the productService without throwing any errors.
     */
    it('can be created correctly', (done) => {
        productService.addProduct(productData).then(data => {
            assert.equal(productData[0].quantity, productData[0].quantity);
            assert.equal(productData[0].name, productData[0].name);
            assert(!data.isNew);
            done()
        }).catch(done)
    });

    it('can be created correctly but should fail', (done) => {
        productService.addProduct(productData).then(data => {
            assert.equal(productData[0].quantity, productData[0].quantity + 1);
            assert.equal(productData[1].name, productData[1].name);
            assert(!data.isNew);
            done()
        }).catch(done)
    });

    it('get product', (done) => {

        productService.addProduct(productData).then(response => {
            productService.getProduct().then(data => {
                // console.log("data get get", data);

                assert.equal(data?.length, productData?.length);
                assert.equal(productData[0].name, productData[0].name);
              
                done()
            }).catch(done)
        }).catch(done)
    });

});
