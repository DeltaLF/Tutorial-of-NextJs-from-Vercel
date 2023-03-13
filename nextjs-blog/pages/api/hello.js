export default function hanlder(req, res) {
  if (req.method === "POST") {
    return res.status(200).json({ text: "result of POST request" });
  }
  if (req.method === "GET") {
    return res.status(200).json({ text: "result of GET request" });
  }
  console.log(req.method);
  return res.status(404).json({ text: "only GET and POST are allowed" });
}
