//
// Error types for the JSON Schema validator.
//

'use strict';

var util = require('util')
  ;


// ******************************************************************
// Base error
// ******************************************************************

var ValidationError =
  function(resolutionScope, instanceContext, constraintName, constraintValue,
    testedValue, desc)
{
  Error.captureStackTrace(this, this.constructor);

  if (instanceContext) { this.instanceContext = instanceContext; }
  else { this.instanceContext = '#/'; }

  if (resolutionScope) { this.resolutionScope = resolutionScope; }
  if (constraintName) { this.constraintName = constraintName; }
  if (constraintValue) { this.constraintValue = constraintValue; }
  if (testedValue) { this.testedValue = testedValue; }
  if (desc) { this.desc = desc; }
};
util.inherits(ValidationError, Error);

// ******************************************************************
// More-specific error types
// ******************************************************************

var NumericValidationError = function() {
  ValidationError.apply(this, arguments);
  this.kind = 'NumericValidationError';
};
util.inherits(NumericValidationError, ValidationError);

var StringValidationError = function() {
  ValidationError.apply(this, arguments);
  this.kind = 'StringValidationError';
};
util.inherits(StringValidationError, ValidationError);

var ArrayValidationError = function() {
  ValidationError.apply(this, arguments);
  this.kind = 'ArrayValidationError';
};
util.inherits(ArrayValidationError, ValidationError);

var ObjectValidationError = function() {
  ValidationError.apply(this, arguments);
  this.kind = 'ObjectValidationError';
};
util.inherits(ObjectValidationError, ValidationError);

var LoaderError = function() {
  ValidationError.apply(this, arguments);
  this.kind = 'LoaderError';
};
util.inherits(ObjectValidationError, ValidationError);

// ******************************************************************
// Exports
// ******************************************************************

exports.ValidationError = ValidationError;
exports.NumericValidationError = NumericValidationError;
exports.StringValidationError = StringValidationError;
exports.ArrayValidationError = ArrayValidationError;
exports.ObjectValidationError = ObjectValidationError;
exports.LoaderError = LoaderError;
