 async function findName(){
    try{
        const response = await fetch("https://api.nationalize.io/" + "?name=" + txtName.value);
        const data=await response.json();
        return showResult(data);
    }catch(err){
        divResult.innerHTML= "Entered name is not found in our data!. Please enter valid name...";
    }
}
function showResult(data){
    let country=data.country;
    let ol = document.createElement('ol');
    for(var i=0;i<2;i++){
        let li=document.createElement('li');
        li.innerText=regionName.of(country[i].country_id)+"\n - Probability value : "+country[i].probability;
        ol.appendChild(li);
    }
    divResult.innerHTML= "";
    divResult.append(ol);
}
const regionName=new Intl.DisplayNames(['en'],{type: 'region'})