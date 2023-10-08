const jwt = require('jsonwebtoken');

const loginRoute = (req, res) => {
  if (req.body.password === process.env.PASSWORD) {
    const token = jwt.sign(
      {
        user: 1,
      },
      process.env.SECRET
    );
    res.json({
      token,
    });
  } else {
    res.status(401).send('Wrong password');
  }
};

module.exports = loginRoute;
