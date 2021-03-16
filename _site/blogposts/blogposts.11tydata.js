const fetch = require('node-fetch');

module.exports = async function() {

return fetch('https://questionthis.net/wp-json/wp/v2/posts')
  .then(res => res.json())
  .then(json => {
    return {
      blogposts: json
    }
  })
}