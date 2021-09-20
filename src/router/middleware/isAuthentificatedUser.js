export default (to, from, next) => {
  console.log(to, from, next);
  next();
};
