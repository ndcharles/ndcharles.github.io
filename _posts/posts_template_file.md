
Post should be saved as: YEAR-MONTH-DAY-title.md

-- The frontmatter

---
layout: post
title:  "Enter post title"
author: ndcharles
categories: [ Product, Data, Tech, Growth ]
image: assets/images/(add image name)
last_modified: 2022-06-07 
tags: [featured, sticky, etc]
---

Creating internal links: [link_text]({{site.baseurl}}/post title (check _sites folder name))

Embed gifs: ![Attendance app](/assets/images/alx_appsheet.gif) views default gif or image

<p align="center"><image src="/assets/images/name_it.gif" alt="alt_tag" align="center" height="800" width="600" /></p> aligns it center, add height, add width.

Ref: https://dev.to/bdavidxyz/markdown-center-image-39j1


Add image within post: ![My helpful screenshot](/assets/screenshot.jpg)

https://dev-notes.eu/2016/01/images-in-kramdown-jekyll/


Creating image gallery in Jekyll: https://dmnfarrell.github.io/software/jekyll-galleries or this https://www.aravindiyer.com/posts/equal-height-image-gallery

Embed video within post using HTML: <p><iframe style="width:100%;" height="315" src="https://www.youtube.com/embed/Cniqsc9QfDo?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe></p>


Linking to PDF directly: [get the PDF](/assets/mydoc.pdf) 
for external resource, replace the relative url to external url.


Adding related posts in jekyll 
- https://hanisarji.com/zine-hs/2021/05/20/related-posts/
- https://tomordonez.com/jekyll-related-posts/ parent 

If you want to get really fancy, you can even add syntax highlighting using Rouge.

+ **bold**
+ __italicize__
+ ~~strike through~~
+ ==highlight==
+ \*escaped characters\*

+ Add highlights <code class="language-plaintext highlighter-rouge">{% last_modified_at %}</code> this is cool (changes the font to a cooler one.
+ <span style="color:red">text to change</span> make a text change colour to red and retain the font.


{% comment %}
This is a comment to ignore.
{% endcomment %}

Another way to insert links in markdown is using reference lists. You might want to use this style of linking to cite reference material in a Wikipedia-style. All of the links are listed at the end of the document, so you can maintain full separation between content and its source or reference.


More tips here: https://devhints.io/jekyll
setting up prose: https://joshuacox.github.io/jekyll/2015/12/04/Prose-Configuration/
final config: https://github.com/joshuacox/joshuacox.github.io/blob/master/_config.yml
mdifications: https://www.hywel.me/2015/11/23/create-jekyll-static-site-posts-using-proseio.html
creating categories and more: https://jetholt.com/micro/jekyll-tags-and-categories/

https://cloudconvert.com/jpg-to-webp

Online documents: 
Create document drafts: https://draftin.com/

Images settings:
dimension: 750x500 (Hv)
colour:
	black: 
	green: 
	
font: 

https://mmistakes.github.io/minimal-mistakes/docs/layouts/
https://www.aravindiyer.com/posts/how-i-made-my-website



If you could pick intro music to be played every time we did a roll call, what would you want?


For when I feel like leaving GitHub pages for Azure static sites
- https://tomordonez.com/azure-static-web-app-nextjs-github-pages/


# Download GitHub subpages
- https://downgit.github.io/#/home (check for more details at stackoverflow)

