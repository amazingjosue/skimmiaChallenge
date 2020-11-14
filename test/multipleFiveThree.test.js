'use strict';

const chai = require('chai'),
	expect = chai.expect,
	should = chai.should;

const test = require("../index").multipleFiveThree;

describe("Array from 1 to 100", function () {
	this.timeout(5000);
	it("It should have the error as undefined", function () {
		let response;
		try {
			response = test()
		} catch (err) {
			expect(err).to.be.undefined;
		}

		describe('Data Type of the resp', function () {
			it("response should be an object without error property", function () {
				expect(response).to.be.an("object");
				expect(response, `This might no return error: ${response.error}`).not.to.have.property("error");
			});
			it("response Should contain the property succes and count with the values true and 100", function () {
				expect(response).to.have.property("success");
				expect(response.success).to.be.equal(true);

				expect(response).to.have.property("count");
				expect(response.count).to.be.an("Array");
				expect(response.count.length).to.be.equal(100)

			});
		});

		describe('Content of array', function () {
			describe('Array Should containt Music, TI and Musical', function () {
				it('Should contain Music', function () {
					should(response.count.indexOf('Music')).not.equal(-1);
				});
				it('Should contain TI', function () {
					should(response.count.indexOf('TI')).not.equal(-1);
				});
				it('Should contain Musical', function () {
					should(response.count.indexOf('Musical')).not.equal(-1);
				});
			});
		});

		describe('Position Values of Array', function () {
			describe('Differents values should be TI, Music and Musical', function () {
				it('99 Should contain TI', function () {
					expect(response.count[99]).to.be.equal('TI')
				});
				it('32 Should contain Music', function () {
					expect(response.count[32]).to.be.equal('Music')
				});
				it('89 Should contain Musical', function () {
					expect(response.count[89]).to.be.equal('Musical')
				});
				it('49 Should contain 49', function () {
					expect(response.count[48]).to.be.equal(49)
				});

			});
		});
	});
});