'use strict';

const chai = require('chai'),
	expect = chai.expect,
	should = chai.should;

const test = require("../index");

describe("Array from 1 to 100", function () {
	it("It should have the error as undefined", function () {
		let respt;
		try {
			respt = test()
		} catch (err) {
			expect(err).to.be.undefined;
		}

		describe('Data Type of the resp', function () {
			it("Respt should be an object without error property", function () {
				expect(respt).to.be.an("object");
				expect(respt, `This might no return error: ${respt.error}`).not.to.have.property("error");
			});
			it("Should contain the property succes and count with the values true and 100", function () {
				expect(respt).to.have.property("success");
				expect(respt.success).to.be.equal(true);

				expect(respt).to.have.property("count");
				expect(respt.count).to.be.an("Array");
				expect(respt.count.length).to.be.equal(100)

			});
		});

		describe('Content of array', function () {
			describe('Should containt Music, TI and Musical', function () {
				it('Should contain Music', function () {
					should(respt.count.indexOf('Music')).not.equal(-1);
				});
				it('Should contain TI', function () {
					should(respt.count.indexOf('TI')).not.equal(-1);
				});
				it('Should contain Musical', function () {
					should(respt.count.indexOf('Musical')).not.equal(-1);
				});
			});
		});

		describe('Position Values of Array', function () {
			describe('Differents values should be TI, Music and Musical', function () {
				it('99 Should contain TI', function () {
					expect(respt.count[99]).to.be.equal('TI')
				});
				it('32 Should contain Music', function () {
					expect(respt.count[32]).to.be.equal('Music')
				});
				it('89 Should contain Musical', function () {
					expect(respt.count[89]).to.be.equal('Musical')
				});
				it('49 Should contain 49', function () {
					expect(respt.count[48]).to.be.equal(49)
				});

			});
		});
	});
});