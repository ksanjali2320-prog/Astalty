const { body } = require('express-validator');

exports.createUserValidation = [
  body('businessName')
    .isLength({ min: 2, max: 35 }).withMessage('Business name must be 2–35 characters long'),
  body('firstName').notEmpty().withMessage('First name is required'),
  body('lastName').notEmpty().withMessage('Last name is required'),
  body('email')
    .isEmail().withMessage('Enter a valid email address'),
  body('mobileNumber')
    .matches(/^[0-9]{10,15}$/).withMessage('Enter a valid mobile number'),
  body('password')
    .isLength({ min: 6, max: 32 }).withMessage('Password must be 6–32 characters'),
  body('privacyPolicyStatus').isBoolean().withMessage('Privacy policy status must be true/false'),
  body('termsAndConditionsStatus').isBoolean().withMessage('T&C status must be true/false'),
];