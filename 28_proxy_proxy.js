const obj = {
	Name: "Nikhil",
    Place: "Hyderabad"
}

const proxyobject = new Proxy(obj, {
    get: (target, property, key) => {
		console.log(`Accessing ${property}`);
		return Reflect.get(target, property, key);
}});

console.log(proxyobject.Name);
console.log(proxyobject.Place);