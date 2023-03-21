function oddCount(n){
    const newArr = [];

    for (let i = 0; i < n; i++) {
        if (i % 2 !== 0) {
            newArr.push(i);
        }
    }
    return newArr.length; }