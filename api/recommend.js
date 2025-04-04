export default function handler(req, res) {
  // Allow all origins (you can restrict to NimbusPost if needed)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Respond to preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { orderId } = req.query;

  const recommendation = {
    courier: 'Bluedart',
    customerType: orderId && orderId.endsWith('5') ? 'repeat customer' : 'new customer'
  };

  res.status(200).json(recommendation);
}
