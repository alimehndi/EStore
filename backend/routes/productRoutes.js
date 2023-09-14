import  express  from 'express';
//import products from '../data/products.js';
//import asyncHandler from '../middleware/asyncHandler.js';
const router = express.Router();
//import Product from '../models/productModel.js'
import { getProducts,getProductById} from '../productControllers/productController.js';

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);



export default router;