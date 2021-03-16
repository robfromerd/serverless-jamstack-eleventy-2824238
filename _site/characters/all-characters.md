---
layout: page
title: All Characters
pagination:
  data: characters
  alias: character
  size: 10
  addAllPagesToCollections: true
---

# All characters

{% for character in collections.character %}

- [{{character.data.title}}]({{character.url}})

{% endfor %}





