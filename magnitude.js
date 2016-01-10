module.exports = function (x, y, useAbs) {

  if (isNaN(x) || !isFinite(x) || isNaN(y) || !isFinite(y)) {
    return 1.0;
  }

  var abs = Math.abs(x - y);
  var delta = (useAbs) ? abs : x - y;

  if (abs > 1) { // give a num between 1 and 0.5
    return 1 - (1 / (1 + delta));
  } else { // give a num between 0.5 and 0
    return delta * 0.5;
  }
}
