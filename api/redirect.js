export default function handler(req, res) {
  const path = req.url || '';
  const newUrl = `https://ihtiyackredisi.com`;
  
  // Tüm HTTP metodları ve tüm path'ler için 301 yönlendirme
  res.setHeader('Location', newUrl);
  res.status(301).end();
}