function mul(num, degree) {
    if (degree > 1) {
    return num * mul(num ,degree - 1) ;
  }
  return num;
}

console.log(mul(4, 4));
