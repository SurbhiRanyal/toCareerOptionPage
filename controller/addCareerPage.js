const careerModel = require("../models/careerModel");

const {
  isValidRequestBody,
  isValid,
  isValidName,
  isValidEmail,
  isValidMobile,
} = require("../utilities/validator");

//---CREATE TOP CAREER OPTIONS
const createCareer = async (req, res) => {
  try {
    //==validating request body==//
    let requestBody = req.body;
    if (!isValidRequestBody(requestBody))
      return res.status(400).send({
        status: false,
        msg: "Invalid request, please provide details",
      });
    let { fullName, email, password, mobile } = requestBody;

    //==validating full name==//
    if (!isValid(fullName))
      return res
        .status(400)
        .send({ status: false, msg: "fullName is a mandatory field" });
    if (!isValidName(fullName))
      return res
        .status(400)
        .send({ status: false, msg: "fullName must contain only alphabates" });

    //==validating email==//
    if (!isValid(email))
      return res
        .status(400)
        .send({ status: false, msg: "email is a mandatory field" });
    if (!isValidEmail(email))
      return res
        .status(400)
        .send({ status: false, msg: `${email} is not valid` });
    let isUniqueEmail = await careerModel.findOne({ email: email });
    if (isUniqueEmail)
      return res
        .status(400)
        .send({ status: false, msg: `${email} is already exist` });

    

    //==validating phone==//
    if (!isValid(mobile))
      return res
        .status(400)
        .send({ status: false, msg: "Mobile is a mandatory field" });
    if (!isValidMobile(mobile))
      return res
        .status(400)
        .send({ status: false, msg: `${mobile} Mobile is not a valid` });
    let isUniquePhone = await careerModel.findOne({ mobile: mobile });
    if (isUniquePhone)
      return res
        .status(400)
        .send({ status: false, msg: `${mobile} Mobile is already exist` });

    const data = { fullName, email, password, mobile };
    const newData = await careerModel.create(data);
    return res
      .status(201)
      .send({
        status: true,
        message: "Career page created successfully",
        data: newData,
      });
  } catch (error) {
    return res.status(500).send({ status: false, msg: error.message });
  }
};
//*******************************************************************//

module.exports = createCareer;
