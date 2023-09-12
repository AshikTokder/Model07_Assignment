const express = require('express');
const router = express.Router();

const blogController = require('../Controllers/blogController');
const commentController = require('../Controllers/commentController');
const messageController = require('../Controllers/messageController');
const portfolioController = require('../Controllers/portfolioController');
const productController = require('../Controllers/productController');

router.get('/create1',blogController.create1);
router.get('/read2',blogController.read2);
router.get('/delete3',blogController.delete3);
router.get('/update4',blogController.update4);

router.get('/create5',commentController.create5);
router.get('/read6',commentController.read6);
router.get('/delete7',commentController.delete7);
router.get('/update8',commentController.update8);

router.get('/create9',messageController.create9);
router.get('/read10',messageController.read10);
router.get('/delete11',messageController.delete11);
router.get('/update12',messageController.update12);

router.get('/create13',portfolioController.create13);
router.get('/read14',portfolioController.read14);
router.get('/delete15',portfolioController.delete15);
router.get('/update16',portfolioController.update16);

router.get('/create17',productController.create17);
router.get('/read18',productController.read18);
router.get('/delete19',productController.delete19);
router.get('/update20',productController.update20);

module.exports=router;

