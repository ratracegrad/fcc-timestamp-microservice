/**
 * Created by jbland on 4/10/16.
 */
//var should = require('chai').should();
var expect = require('expect');
var request = require('supertest');
var api = request('http://localhost:3000');

describe('API Testing', function() {

    it('provides formatted date', function(done) {
        api.get('/December%2015,%202015').end(function(err, res) {
            expect(res).to.exist;
            expect(res.status).to.equal(200);
            done();
        });


    });

    it ('provides null if no date provided', function(done) {
        api.get('/').end(function(err, res) {
            expect(res.status).to.equal(400);
            done();
        });

    });
});