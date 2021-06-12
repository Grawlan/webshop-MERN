const mongoose = require("mongoose");
const Order = require('./orderSchema');

exports.getOrders = (req,res) => {
  console.log(req.params)
  Order.find({orderUserId: req.params.userId})
  .then(data => res.status(200).json(data))
  .catch(err => res.status(500).json({
      statusCode:500,
      status: false,
      message: 'Something went wrong when fetching orders.'
  }))
}
exports.createOrder = (req, res) => {

  const newOrder = new Order({
    orderItems: req.body.orderItems,
    orderTotal: req.body.orderTotal,
    orderUserId:  req.body.orderUserId
  })
  console.log(req.body.orderItems)
  console.log(newOrder)
  newOrder.save()
    .then(() => {
      res.status(201).json({
        statusCode: 201,
        status: true,
        message: 'Order created successfully'
      })
    })
    .catch(err => {
      res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Failed to create order',
        err
      })
    })
}
