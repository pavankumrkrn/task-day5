let request = new XMLHttpRequest();


request.open('GET','https://restcountries.eu/rest/v2/all',true);

request.send();

request.onload = function(){
    var data = JSON.parse(this.response);
    console.log(data);
    let countries = data.filter( obj =>
        obj.region === 'Asia');
    console.log(countries);

    let countriesPop = data.filter(obj => 
        obj.population < 200000);
        console.log(countriesPop);

    data.forEach(obj=>{
        console.log(obj.name+" "+obj.capital+" "+obj.flag);
    });

    let totalPop = data.reduce((a,b)=>{
        return a+(+(b.population));
    },0);
    console.log(totalPop);

    let usCountries = data.filter(obj=>{
        let count = 0
        obj.currencies.forEach( ob => {
            if(ob.code === 'USD'){
                count++;
            }
        });
        if(count>0){
            return true;
        }
    });

    console.log(usCountries);

}

