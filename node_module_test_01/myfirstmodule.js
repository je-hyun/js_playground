// We use this syntax to denote that we want to use myDateTime as a
// module function, which we can import elsewhere (see demo_module.js)
exports.myDateTime = function () {
  return Date();
}
