function getBotResponse(req, res) {
    //console.log(req.body);
    console.log(req.file);

    res.send("send audio endpoint - v1");
}

module.exports = {
    getBotResponse
}