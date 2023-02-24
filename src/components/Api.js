// import React from 'react';
import axios from 'axios';

const Api = () => {

  const data = {
    token_type: 'Bearer',
    expires_in: 3600,
    access_token: 'eyJraWQiOiI1aS1aZgscLxG420SiZIVg',
    scope: 'offline_access',
    refresh_token: 'UoClKuS32UBCDYHcnjM-vbbeKZYo_vRAF8h9NVU6-zw',
  };

  axios.post('https://dev-457931.okta.com/oauth2/aushd4c95QtFHsfWt4x6/v1/token', data)
  
    .then((response) => {
        
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });

 
}

export default Api;

