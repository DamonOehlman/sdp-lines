var test = require('tape');
var sdp = require('..');
var input = require('./data/chrome-sample');
var expected = require('./modified/titled-media');
var lines;

test('parse the test data', function(t) {
  t.plan(1);

  lines = sdp(input);
  t.ok(lines.data.length > 0, 'got some lines');
});

test('add additional lines after the m lines', function(t) {
  // save the original data length
  var len = lines.data.length;

  t.plan(1);
  lines.modify(/^m=/, function(line, match, type, payload) {
    return [line, 'i=main'];
  });

  // ensure we have two extra lines
  t.equal(lines.data.length, len + 2, 'lines inserted');
});

test('modified matches expected', function(t) {
  t.plan(1);
  t.equal(lines.toString(), expected, 'ok');
});