export const jsonPlaceHolder = (searchQuery) => {
    // const JSONPLACEHOLDER_API_ENDPOINT = `https://api.shutterstock.com/v2/videos/search?
    // query=${searchQuery}&page=1&per_page=10`;
    const JSONPLACEHOLDER_API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';
  
    return fetch(JSONPLACEHOLDER_API_ENDPOINT)
  .then(response => 
        response.json().then(data => ({
            data: data,
            status: response.status
        })
    ).then(res => {
        console.log(res.status, res.data)
        return res.data.map(({ id, name, email, phone, street, city, website, company}) => ({
            id,
            name,
            email,
            phone,
            street,
            city,
            website,
            company
          }));
    }))
   
    // .then(res => {
    //     return res.data(({ id, name, email, phone, street, city, website, company}) => ({
    //       id,
    //       name,
    //       email,
    //       phone,
    //       street,
    //       city,
    //       website,
    //       company: company.name
    //     }));
    // });
  };

// import axios from 'axios';

// export default axios.create({
//   baseURL: 'https://jsonplaceholder.typicode.com/users'
// });