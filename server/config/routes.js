var productController = require('../controllers/productController.js')
console.log('SERVER > CONFIG > routes.js');
var path = require("path");

module.exports = function(app) {

    // create
    app.post('/create', productController.create);

    // read all
    app.get('/readall', productController.readall);

    //read One
    app.get('/readone/:id', productController.readOne);

    //delete
    app.delete('/delete/:id', productController.remove);

    //update edit
    app.put('/product/edit/:id', productController.update);

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
      });

}