export default function handler(req, res) {
  const { orderId } = req.query;

  const recommendation = {
    courier: 'Bluedart',
    customerType: orderId && orderId.endsWith('5') ? 'repeat customer' : 'new customer'
  };

  res.status(200).json(recommendation);
}
