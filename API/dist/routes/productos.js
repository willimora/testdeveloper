"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ProductosController_1 = require("../controller/ProductosController");
var multer_1 = __importDefault(require("../libs/multer"));
var router = express_1.Router();
router.get('/getall', ProductosController_1.ProductosController.getall);
router.get('/getonebyid/:id', ProductosController_1.ProductosController.getonebyid);
router.patch('/editproduct/:id', ProductosController_1.ProductosController.editproduct);
router.post('/newproduct', ProductosController_1.ProductosController.newproduct);
router.patch('/postimagen/:id', multer_1.default.single('image'), ProductosController_1.ProductosController.postImagen);
router.delete('/deleteproduct/:id', ProductosController_1.ProductosController.deleteproduct);
exports.default = router;
//# sourceMappingURL=productos.js.map