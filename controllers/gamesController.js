exports.createGame = function(req, res) {
    // TODO: implement
    res.json({"result": "new game has been created and started"});
};

exports.getGame = function(req, res) {
    // TODO: implement
    res.json({"id": req.params.id});
};

exports.makeMove = function(req, res) {
    // TODO: implement
    res.json({"id": req.params.id});
};