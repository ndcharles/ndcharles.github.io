---
title: "Projects"
layout: page-sidebar
permalink: "/projects.html"
comments: false
---

Thank you for coming.

Here are a few of the projects I have worked on. Go through them,kindly read the [articles]({{site.baseurl}}/index.html), see more [about me]({{site.baseurl}}/about.html) or view my [GitHub profile](https://github.com/ndcharles)


<div class="projects-container">
  {% for project in site.data.projects %}
  <div class="project-card">
    <div class="project-content">
      <h3><a href="{{ project.url }}" target="_blank">{{ project.title }}</a></h3>
      <p>{{ project.description }}</p>
      <div class="technologies">
        {% for tech in project.technologies %}
        <span class="tech-button" data-tech="{{ tech }}">{{ tech }}</span>
        {% endfor %}
      </div>
    </div>
  </div>
  {% endfor %}
</div>


#### Want to get in touch instead?
- [Twitter](https://twitter.com/nndcharles)
- [LinkedIn](https://linkedin.com/in/nndcharles)
- [Dev.to](#)
- [GitHub](https://github.com/ndcharles)
- [Medium](https://ndcharles.medium.com)


{% comment %}
#### What I'm currently working on?
I am a graduate of Agricultural and Bioresources Engineering. Was once a classroom teacher (Grade 6) where I spent the COVID period using online platforms to teach the kids. No platform was able to truly satisfy my classroom experience. I am currently building **CommonEntranceHelp (CEH)** by hacking together WordPress theme, plugins and other low-code resources as a playground to nurture my interest in edtech.

Join me by donating to the project, helping with teaching resources or contributing your tech skill. 

You are highly appreciated when you do. 

Talk Soon!
{% endcomment %}