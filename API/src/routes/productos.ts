import { Router } from 'express';
import { ProductosController } from '../controller/ProductosController';
import multer from '../libs/multer';

const router = Router();


router.get('/getall', ProductosController.getall);
router.get('/getonebyid/:id', ProductosController.getonebyid);

router.patch('/editproduct/:id', ProductosController.editproduct);

router.post('/newproduct', ProductosController.newproduct);
router.patch('/postimagen/:id', multer.single('image'), ProductosController.postImagen);

router.delete('/deleteproduct/:id', ProductosController.deleteproduct)

export default router;
