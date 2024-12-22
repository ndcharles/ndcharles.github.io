---
title: "Portfolio"
layout: page-sidebar
permalink: "/portfolio.html"
comments: false
---

Kindly check my [Data Science portfolio](https://ndcharles.github.io/data-portfolio) or [my GitHub profile](https://github.com/ndcharles) for a fuller version.

Here are some of the projects I’ve worked on (and still working on). 

<div class="projects-container">
  {% for project in site.data.projects %}
  <div class="project-card">
    <div class="project-content">
      <h3><a href="{{ project.url }}" target="_blank">{{ project.title }}</a></h3>
      <p>{{ project.description }}</p>
      <div class="tags-container">
        {% for tech in project.technologies %}
        <span class="tech-button technology">{{ tech }}</span>
        {% endfor %}
        {% for concept in project.concepts %}
        <span class="tech-button concept">{{ concept }}</span>
        {% endfor %}
      </div>
    </div>
  </div>
  {% endfor %}
</div>
<br>
Do you like my work or find value in the things that I share here or anywhere else and you want to work with me, or just hangout? Feel free to reach out on [Twitter](https://twitter.com/nndcharles), via e-mail or [LinkedIn](https://linkedin.com/in/nndcharles).

#### Want to get in touch instead?
- [Twitter](https://twitter.com/nndcharles)
- [LinkedIn](https://linkedin.com/in/nndcharles)
- [GitHub](https://github.com/ndcharles)
