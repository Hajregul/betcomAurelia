import {HttpClient} from 'aurelia-fetch-client';
let httpClient = new HttpClient();

export class App {

 
  constructor() { 

    this.fetchValues = null;
    this.fetchValue()
    } 
    fetchValue()
    {
      const baseUrl =  'https://localhost:54894/api/Home'
              httpClient.fetch(baseUrl,
              {headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }})
              .then(response => response.json())
                  .then(data => { 
                     this.fetchValues = data;    
                     console.log(this.fetchValues);   
                     this.message=this.fetchValues;                  
                  });


    }
    
}

export default App
