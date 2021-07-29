module.exports = {
  index
};

function index(req, res) {
  res.render('users/index', {user: req.user})
}
