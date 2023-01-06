const express = require("express")
const router = express.Router();
const createCareer = require('../Controller/addCareerPage')
const getCareerData = require('../controller/getDataCotroller')


router.post('/careerPage', createCareer)
router.get('/career/:careerId/', getCareerData)


module.exports=router