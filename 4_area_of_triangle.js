function areaTriangle(s1,s2,s3){
    var s = (s1+s2+s3)/2.0;
    return Math.sqrt(s* (s-s1) * (s-s2) * (s-s3));
}

console.log(areaTriangle(5,6,7));