---
layout: page
title: All Posts
pagination:
  data: blogposts
  alias: blogpost
  size: 10
  addAllPagesToCollections: true
eleventyNavigation:
  key: remote posts
  parent: main
---

# All Remote Posts
<ul>
 {% for blogpost in blogposts %}


<li><a href="../{{blogpost.slug}}">{{ blogpost.title.rendered | safe }}</a></li>

 {% endfor %}
</ul>



