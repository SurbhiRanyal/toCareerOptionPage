const careerModel = require("../models/careerModel")
const { isValidObjectId } = require("../utilities/validator");


//---GET CAREER DETAILS
const getCareerData = async function (req, res) {
      try {
      //==validating userId==//    
        let data = req.params.careerId
        if (!isValidObjectId(data)) return res.status(400).send({ status: false, msg: "careerId is invalid" })
        
      //==getting details==//
        let getDataList = await careerModel.findOne({ _id: data })
        if (!getDataList) return res.status(404).send({ status: false, msg: "data not found " })
        
      //==sending details==//
        return res.status(200).send({ status: true, msg: "career profile details", data: getDataList })
      }
      catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
      }
    }
  
  //*******************************************************************//
  module.exports = getCareerData
