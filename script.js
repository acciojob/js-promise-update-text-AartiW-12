//your JS code here. If required.
const output = document.getElementById("output");

function Hello(){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve("Hello, world!")
		},1000)
	})
}

let content = Hello().then((data)=>{
	output.textContent = data;
})
.catch((err)=>{
	output.textContent = err;
})