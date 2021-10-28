function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    res = classPoints.reduce((a,b)=> {
        return a+b;
    }, 0)
    res/=classPoints.length;
    return yourPoints>=res? true: false
  }

  const arr = [100, 40, 34, 57, 29, 72, 57, 88];
  console.log(betterThanAverage(arr, 75))