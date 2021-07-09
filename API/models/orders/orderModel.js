const mongoose = require("mongoose");
const Order = require('./orderSchema');

exports.getOrders = (req,res) => {
  Order.find({orderUserId: req.params.userId})
  .then(data => res.status(200).json(data))
  .catch(err => res.status(500).json({
      statusCode:500,
      status: false,
      message: 'Something went wrong when fetching orders.'
  }))
}
exports.getAllOrders = (req,res) => {
  Order.find()
  .then(data => res.status(200).json(data))
  .catch(err => res.status(500).json({
      statusCode:500,
      status: false,
      message: 'Something went wrong when fetching orders.'
  }))
}
exports.getOneOrder = (req, res) => {
  Order.exists({ _id: req.params.id }, (err, result) => {
    if (err) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: "Bad request.",
      });
    }

    if (result) {
      Order.findById(req.params.id)
        .then((order) => res.status(200).json(order))
        .catch((err) =>
          res.status(500).json({
            statusCode: 500,
            status: false,
            message: "Something went wrong.",
          })
        );
    } else {
      return res.status(404).json({
        statusCode: 404,
        status: false,
        message: "Order does not exist.",
      });
    }
  });
};

exports.createOrder = (req, res) => {

  const newOrder = new Order({
    orderItems: req.body.orderItems,
    orderTotal: req.body.orderTotal,
    orderUserId:  req.body.orderUserId
  })
 
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
exports.updateOrder = (req, res) => {
  Order.exists({ _id: req.params.id }, (err, result) => {
    if (err) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: "Bad request.",
      });
    }

    if (result) {
      Order.updateOne(
        { _id: req.params.id },
        {
          ...req.body,
          modified: Date.now(),
          orderComplete: req.body.orderComplete
        }
      )
        .then(() => {
          res.status(200).json({
            statusCode: 200,
            status: true,
            message: "Order updated.",
          });
        })
        .catch(() => {
          res.status(500).json({
            statusCode: 500,
            status: false,
            message: "Order update failed.",
          });
        });
    } else {
      return res.status(404).json({
        statusCode: 404,
        status: false,
        message: "Order does not exist.",
      });
    }
  });
};

exports.deleteOrder = (req, res) => {
  Order.exists({ _id: req.params.id }, (err, result) => {
    if (err) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: "Bad request",
      });
    }

    if (result) {
      Order.deleteOne({ _id: req.params.id })
        .then(() => {
          res.status(200).json({
            statusCode: 200,
            status: true,
            message: "Order deleted.",
          });
        })
        .catch(() => {
          res.status(500).json({
            statusCode: 500,
            status: false,
            message: "Delete order failed.",
          });
        });
    } else {
      return res.status(404).json({
        statusCode: 404,
        status: false,
        message: "Order does not exist.",
      });
    }
  });
};

