const mongoose = require("mongoose");
const Product = mongoose.model("Product");

module.exports = {

    create: function(req, res) {
        console.log('> productController > create >');
        // console.log('> req.body =>', req.body);
        console.log('req.body.name =>', req.body.name);
        console.log('req.body.qty =>', req.body.qty);
        console.log('req.body.price =>', req.body.price);

        var productInstance = new Product(req.body);
        productInstance.save(function (err){
            if (err) {
                console.log('>productController > create > save > ERR => err')
                res.json({message: 'we got err', error: err})
            }
            else {
                console.log('>productController > create > save > OK err=>', err)
                res.json({message: 'ok save'})
            }
        })
    },

    readall: function(req, res) {
        console.log('>productController > readall >');
        Product.find({}, function(err, return_arr) {
            if (err){
                console.log('=========> ERROR <============');
                console.log('>\n\nproductController > readall > Product.find({}) > ERR =>', err);
                res.json({messsage: '>>productController > readall > Product.find({}) > ERR', error: err});
            }
            else {
                console.log('>productController > readall > Product.find({}) > OK');
                res.json({messsage: '>>productController > readall > Product.find({}) > ok > data', data: return_arr})
            }
        })
    },

    readOne: function(req, res) {
        console.log("\n> productController > readOne ");
        Product.findOne({ _id: req.params.id }, function(err, return_product) {
          if (err) {
            console.log("\n> productController > readOne > ERROR", err);
            res.json({ message: ">productController > ERROR", error: err });
          } else {
            console.log(
              "\n> productController > readOne > OK > return_product =>",
              return_product
            );
            res.json({
              message: ">productController > readOne >OK >",
              data: return_product
            });
          }
        });
      },

      remove: function(req, res) {
        Product.remove({ _id: req.params.id }, function(err) {
          console.log("DELETEING PRODUCT =>", req.params.id);
          if (err) {
            console.log("cannot DELETE > ERR =>", err);
            res.json({ message: "ERROR cannot delete", error: err });
          } else {
            console.log("SUCCESS DELETE");
            res.json({ message: "Success deleted" });
          }
        });
      },

      update: function(req, res) {
        Product.findOne({ _id: req.params.id }, function(err, product) {
          product.name = req.body.name;
          product.qty = req.body.qty;
          product.price = req.body.price;
          product.save(function(err) {
            if (err) {
              console.log("we have an error", err);
                res.json({ message: "error", error: err });
            } else {
              console.log("successfully added a user!");
              res.json({ message: "Success save" });
            }
          }
        );
        });
}}