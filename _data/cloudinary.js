const Cache = require('@11ty/eleventy-cache-assets');

module.exports = async () => {
    const response = await Cache(
      "https://res.cloudinary.com/dylanabbott-com/image/list/portrait.json", 
      {
          duration: '1d',
          type: 'json'
      }
    );
    //console.log("response: ", response.json());

    //const data = await response.json();
    //console.log(data);
    return response;
};
