module.exports = function (request, response, next) {
    var passcode = 'capeKingTeacher';
    console.log(request.headers["Authorization"])
    if (request.query.passcode === passcode) {
      next();
    } else {
      response.send(401);
    }
}