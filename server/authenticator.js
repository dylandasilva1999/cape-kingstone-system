const jwt = require('jsonwebtoken');

module.exports = function (request, response, next) {
    const authHeader = request.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
      return response.sendStatus(401);
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      console.log(err);
      if(err) return esponse.sendStatus(403);

      request.user = user;
      console.log("Requested user is: ", request.user)
      next();
    })
}