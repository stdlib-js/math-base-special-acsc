/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var randu = require( '@stdlib/random-base-randu' );
var EPS = require( '@stdlib/constants-float64-eps' );
var abs = require( '@stdlib/math-base-special-abs' );
var acsc = require( './../../dist' );


// FIXTURES //

var negative = require( './../..xtures/julia/negative.json' );
var positive = require( './../..xtures/julia/positive.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof acsc, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the arccosecant (negative values)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	x = negative.x;
	expected = negative.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = acsc( x[i] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'x: '+x[i]+'. E: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the arccosecant (positive values)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	x = positive.x;
	expected = positive.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = acsc( x[i] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'x: '+x[i]+'. E: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', function test( t ) {
	var v = acsc( NaN );
	t.equal( isnan( v ), true, 'returns NaN' );
	t.end();
});

tape( 'the function returns `NaN` if provided a nonpositive value greater than `-1`', function test( t ) {
	var v;
	var i;

	for ( i = 0; i < 1e3; i++ ) {
		v = -randu();
		if ( v > -1.0 ) {
			t.equal( isnan( acsc( v ) ), true, 'returns NaN when provided '+v );
		}
	}
	t.end();
});

tape( 'the function returns `NaN` if provided a nonnegative value less than `+1`', function test( t ) {
	var v;
	var i;

	for ( i = 0; i < 1e3; i++ ) {
		v = randu();
		if ( v < 1.0 ) {
			t.equal( isnan( acsc( v ) ), true, 'returns NaN when provided '+v );
		}
	}
	t.end();
});