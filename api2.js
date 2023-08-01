var res = fetch("https://data.covid19india.org/v4/min/data.min.json");
res.then((data)=>console.log(data));



res.then((data)=>data.json()).then((data1)=>foo(data1));
res.catch((err)=>console(err));

    function foo(data1) {

        for (const i in data1) {
           console.log(i,data1[i]);
           let out = data1[i];
        
           const tableBody = document.querySelector('#dataTable tbody');
           const newRow = tableBody.insertRow();
    newRow.innerHTML = `
      <td>${i}</td>
      <td>${out.delta7.confirmed}</td>
      <td>${out.delta21_14.confirmed}</td>
      <td>${out.total.confirmed}</td>
      <td>${out.total.vaccinated1}</td>
      <td>${out.meta.tested.date}</td>
      <td>${out.meta.population}</td>
      <td><a href=" ${out.meta.tested.source}">link</a></td> `
   
         
        
            }

        }
