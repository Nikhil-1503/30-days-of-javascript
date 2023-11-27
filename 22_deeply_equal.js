function deeplyEqual(obj1, obj2){
    if(typeof obj1 !== 'object' || typeof obj2 !== 'object')
        return obj1 === obj2;

    const k1 = Object.keys(obj1);
    const k2 = Object.keys(obj2);
    if(k1.length !== k2.length)
        return false;

    for(const k of k1)
        if(!deeplyEqual(obj1[k], obj2[k]))
            return false;
    
    return true;
}

const o1 = {a:10, b:20, c:{d:{e:50}}}; 
const o2 = {a:10, b:20, c:{d:{e:50}}}; 
const o3 = {a:10, b:20, c:{d:{e:20}}}; 
const o4 = {a:10, b:20, c:{d:20, e:20}}; 
console.log(deeplyEqual(o1,o2));
console.log(deeplyEqual(o1,o3));
console.log(deeplyEqual(o1,o4));