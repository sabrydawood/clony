import fetch from 'node-fetch';

export const getData = async (url)=>{
	let res = fetch(url);
const data = await res.json();
	console.log(data)
return data;
}