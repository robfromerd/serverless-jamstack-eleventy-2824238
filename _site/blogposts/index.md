---
pagination:
  data: blogposts
  alias: blogpost
  size: 1
  addAllPagesToCollections: true
layout: page
permalink: 'blogposts/{{blogpost.slug}}/'

---

## {{blogpost.title.rendered | safe}}

{{ blogpost.content.rendered | safe }}


