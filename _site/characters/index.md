---
pagination:
  data: characters
  alias: character
  size: 1
  addAllPagesToCollections: true 
layout: page
permalink: '/characters/{{character.name|slug}}/'
eleventyComputed:
  title: "{{ character.name }}"
tags: character
---

## {{character.name}}

![{{character.name}}]({{character.image}})



