var test = require('tape');
var sdp = require('..');
var input = require('./data/chrome-sample');
var inputCrlf = require('./data/chrome-sample-crlf');
var lineCount = require('./data/chrome-sample-lines').length;

test('parsing input -> toString == original', function(t) {
  var lines;

  t.plan(4);
  t.ok(lines = sdp(input));
  t.ok(Array.isArray(lines.data));
  t.equal(lines.data.length, lineCount, 'got expected line count');
  t.equal(lines.toString(), input, 'equals original');
});

test('parsing input (CRLF) -> toString == original', function(t) {
  var lines;

  t.plan(4);
  t.ok(lines = sdp(inputCrlf));
  t.ok(Array.isArray(lines.data));
  t.equal(lines.data.length, lineCount, 'got expected line count');
  t.equal(lines.toString(), inputCrlf, 'equals original');
});