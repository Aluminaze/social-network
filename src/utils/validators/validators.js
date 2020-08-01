export const required = (value) => {
  if (value) return undefined;
  else return "This field is required";
};

export const maxLengthCreator = (length) => (value) => {
  if(value.length <= length) return undefined
  else return `Max length is ${length} symbols`;
}

export const minLengthCreator = (length) => (value) => {
  if(value.length >= length) return undefined;
  else return `Min length is ${length} symblos`
}