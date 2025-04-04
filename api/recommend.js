export default function handler(req, res) {
  const { orderId } = req.query;

  // Sheet-powered customer history logic (dummy example here)
  const recommendation = {
    courier: orderId.endsWith("1") ? "Delhivery" : "Bluedart",
    customerType: orderId.endsWith("5") ? "repeat customer" : "new customer"
  };

  res.status(200).json(recommendation);
}
