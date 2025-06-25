export default async function handler(req, res) {
  const targetUrl = 'https://api.siliconflow.cn/v1/chat/completions';

  const response = await fetch(targetUrl, {
    method: req.method,
    headers: {
      'Authorization': req.headers['authorization'],
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req.body),
  });

  const data = await response.json();
  res.status(response.status).json(data);
}