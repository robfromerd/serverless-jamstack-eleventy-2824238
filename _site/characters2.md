---
layout: page
title: All Characters
---

# All characters

{% for character in characters %}
- [{{ character.title }}](/character/{{character.title|slug}})
{% endfor %}