function repeats(s) {
    // your code here
    const half = s.length / 2
    for (let i=0; i<half; i++) {
          if ((s[i] !== s[half + i])) {
            return false;
          }
    }
    return true;
  }

console.log(repeats(""));

function repeats(s) {
    // your code here
    if (s.length === 0) {
        return true;
    }

    let mid = s.length / 2;

    if (s.length % 2 === 0) {
        if (s.slice(0, mid) === s.slice(mid, s.length + 1)) {
            return true;
        }
    //     return false;
    // } else {
    //     if (s.slice(mid) === s.slice(mid, s.length)) {
    //         return true;
    //     }
    //     return false;
    // }
    return false;
  }
}


function repeats(s) {
    return ((s.slice(0, s.length/2)) === (s.slice(s.length/2, s.length)))
}
