function handler(req, res) {
  const v = req.query.v;
  return res.end(String(v));
}
module.exports = { handler };
