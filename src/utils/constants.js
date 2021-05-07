export const validationResult = (validator, fieldName) => {
  console.log(validator)
  console.log(validator.fieldNam)
  Object.keys(validator[fieldName])
    .map((errorKey) => {
      const errorResult = validator[fieldName][errorKey](fieldName);
      return { [errorKey]: errorResult };
    })
    .reduce((acc, item) => ({ ...acc, ...item }), {});
};
