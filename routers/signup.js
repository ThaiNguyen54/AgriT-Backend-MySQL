import express from 'express';
import postUserData from '../controllers/signup.js';

const router = express.Router();

//---------------------------------> POST USER DATA (SEARCHING) <-----------------------------------//
router.post('/signup', postUserData);


//---------------------------------> POST NEW USER DATA (ADDING) <----------------------------------//

export default router;