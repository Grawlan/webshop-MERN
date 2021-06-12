const mongoose = require("mongoose");
const Product = require("./productSchema");

exports.getProducts = (req, res) => {
  Product.find({}, (err, data) => {
    if (err) {
      return res.status(500).json({
        statusCode: 500,
        status: false,
        message: err.message || "Failed to fetch products.",
      });
    }
    res.status(200).json(data);
  });
};

exports.getOneProduct = (req, res) => {
  Product.exists({ _id: req.params.id }, (err, result) => {
    if (err) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: "Bad request.",
      });
    }

    if (result) {
      Product.findById(req.params.id)
        .then((product) => res.status(200).json(product))
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
        message: "Product does not exist.",
      });
    }
  });
};

exports.newProduct = (req, res) => {
  Product.exists({ name: req.body.name }, (err, result) => {
    if (err) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: "Bad request.",
      });
    }

    if (result) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: "Product already exists.",
      });
    }

    const newProduct = new Product({
      name: req.body.name,
      short: req.body.short,
      desc: req.body.desc,
      price: req.body.price,
      image: req.body.image,
    });

    newProduct
      .save()
      .then(() => {
        res.status(201).json({
          statusCode: 201,
          status: true,
          message: "Product created.",
        });
      })
      .catch(() => {
        res.status(500).json({
          statusCode: 500,
          status: false,
          message: "Failed to create product.",
        });
      });
  });
};

exports.updateProduct = (req, res) => {
  Product.exists({ _id: req.params.id }, (err, result) => {
    if (err) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: "Bad request.",
      });
    }

    if (result) {
      Product.updateOne(
        { _id: req.params.id },
        {
          ...req.body,
          modified: Date.now(),
        }
      )
        .then(() => {
          res.status(200).json({
            statusCode: 200,
            status: true,
            message: "Product updated.",
          });
        })
        .catch(() => {
          res.status(500).json({
            statusCode: 500,
            status: false,
            message: "Product update failed.",
          });
        });
    } else {
      return res.status(404).json({
        statusCode: 404,
        status: false,
        message: "Product does not exist.",
      });
    }
  });
};

exports.deleteProduct = (req, res) => {
  Product.exists({ _id: req.params.id }, (err, result) => {
    if (err) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: "Bad request",
      });
    }

    if (result) {
      Product.deleteOne({ _id: req.params.id })
        .then(() => {
          res.status(200).json({
            statusCode: 200,
            status: true,
            message: "Product deleted.",
          });
        })
        .catch(() => {
          res.status(500).json({
            statusCode: 500,
            status: false,
            message: "Delete product failed.",
          });
        });
    } else {
      return res.status(404).json({
        statusCode: 404,
        status: false,
        message: "Product does not exist.",
      });
    }
  });
};
