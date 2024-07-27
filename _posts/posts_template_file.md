
Post should be saved as: YEAR-MONTH-DAY-title.md

-- The frontmatter

---
layout: post
title:  "Enter post title"
author: ndcharles
categories: [ Product, Data, Tech, Growth ]
image: assets/images/(add image name)
date_modified: 2022-06-07 
tags: [featured, sticky, etc]
---

Add searchable data tables to Jekyll or bootstrap using jQuery: https://idratherbewriting.com/documentation-theme-jekyll/mydoc_tables.html

code samples: https://idratherbewriting.com/documentation-theme-jekyll/mydoc_faq_layout.html 

Creating internal links: [link_text]({{site.baseurl}}/post title (check _sites folder name))

Creating internal links: [Final example](../morning-pages) {where the last part is the folder name in _site}
https://mademistakes.com/mastering-jekyll/how-to-link/

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

# Update GitHub readme with latest blog posts (2)
- https://dotnetthoughts.net/adding-blog-posts-to-your-github-readme-with-github-actions/
- https://devdojo.com/bobbyiliev/automatically-display-your-latest-posts-on-your-github-profile-readme



This is important: https://www.hotjar.com/blog/analyze-open-ended-questions/




# How to change the password on Ubuntu 22.04
- Note the Ubuntu distribtution yur WSL is using by visiting the Microsoft store
	- Default user "root" doecn't have a password
- Open CMD and run ~ubuntu2004 config --default-user root~ to switch the Ubuntu to the default user 
- Now run WSL and it would start as root user.
- In WSL run ~passwd username~ to create a password for the username 
- Open CMD again and run ~ubuntu2004 config --default-user username~ to switch from defualt root user to your username.
!password reset successful.


# Free Bootcamp Resources to Learn Data Analysis
- CS50 SQL


# Learn LLMs using Free Bootcamp Resources
- Full Stack LLM Bootcamp (https://fullstackdeeplearning.com/llm-bootcamp/)
- 


# Tech Support Forums 
- https://go.experts-exchange.com/
- 


# How to disable WordPress update and notifications for a specific plugin 
- https://wordpress.stackexchange.com/questions/20580/disable-update-notification-for-individual-plugins
- Open the plugin file and set the version number to a very high value (e.g. 99.9.9) 
- only update notifications ()
- Use a plugin 
	- Easy updates manager 
	- Diasable updates manager 


# Stories to Help You Level-Up at Work
~Perspectives on career development, handpicked by Medium Staff.~
I saw this title on [Medium](https://medium.com/@MediumStaff/list/stories-to-help-you-levelup-at-work-faca18b0622f) and felt I should write a few on my data journey so far. 



# Installing Ruby and Jekyll for Existing Website

After switching to a new PC I found it difficult getting my Jekyll site up again due to dependency issues.

Let me give you a run down of my Jekyll process.

First things first, install, ruby + devkit through here https://rubyinstaller.org/downloads/ 

Download the first option w/ devkit 

Run `ridk install` to install local dependencies
From the installations, select `MSYS2 and MINGW development tool chain` that's option 3.

Next Install Jekyll and Bundler using `gem install jekyll bundler`

Check if Jekyll has been installed properly: `jekyll -v`

Ref: https://jekyllrb.com/docs/installation/windows/

## To continue with existing jekyll site 
- Open command prompt and navigate to the project foler
- Run `bundle exec jekyll serve --incremental`
- Type `http://127.0.0.1:4000/` in your browser to continue with your website



https://jekyllrb.com/docs/ruby-101/


# Git and GitHub
- Amend git commit message (bash and GUI)
- Undo git init (https://careerkarma.com/blog/git-undo-git-init/)
- 


# Scripting in Google sheet
- https://support.google.com/docs/thread/173663134/how-to-bulk-import-multiple-csv-files-at-one-go-in-google-sheets?hl=en


# virtual tiles reality 
- tilesview.ai
- https://www.realityremod.com/
- https://clayarktiles.com/product-details/slab-collections/1200x2780-9-mm-thickness/cinerea-river 
- https://amintile.com/
- Møbel · 2. Dreamhouse AI. Dreamhouse AI · 3. REimagine Home. Styldod · 4. Decorify. Wayfair Next · 5. Room AI. Room AI · 6. DecorAI. · 7. CoolAIid.




# best form platforms (alternative to typeform and google forms)
- fillout
- formbricks (html embed can use this for alx.internship)
- quillforms 

# best kahoot alternative 
- blooklet
- 


# Hosting ML apps 
- Heroku
- https://railway.app/pricing
- python anywhere 
- streamlit hosting 
- huggingface 


# static site generators content 
- https://scholarslab.lib.virginia.edu/blog/jekyll-content-interfaces//
- https://github.com/christian-fei/Simple-Jekyll-Search
- https://alex.pearwin.com/2016/02/simpler-jekyll-searching/
- 


# Static site to Jekyll 
- https://jekyllrb.com/tutorials/convert-site-to-jekyll/


# Jekyll toolkit
- https://medium.com/@kurtiskemple/setting-up-client-side-search-for-a-jekyll-github-pages-site-with-lunr-and-backbone-d644541d7260
- https://alphahydrae.com/2021/01/how-to-generate-and-enrich-pages-in-a-jekyll-blog/
- https://jekyllrb.com/docs/plugins/generators/
- https://talk.jekyllrb.com/t/how-to-create-a-page-from-a-generator-plugin/6053
- https://github.com/dnoneill/jekyll-lunr-js-custom-search
- https://zoeleblanc.com/blog/2017/adding-search-to-jekyll-sites-with-lunr/



# How to merge multiple CSV files on windows 
before we start 
- the headers have to be the same 
- the columns must have the same layout 

o merge files i spin up Jupyter-lab and using glob and python, i merge all files in a folder.
Now i am tired of that and needed a simpler way to do it since i do it once in a while 
- CMD (bat file)
- https://sensorfactdev.github.io/csv-joiner/ (https://github.com/Sensorfactdev/csv-joiner/releases)
- https://github.com/deviousasti/csv-merge
- 


# static sites hosting 
- jekyll on github
- netlify
- vercel
- digital ocean app platform 
- cloudflare pages 
- firebase firecast
- 


# commenting system for static sites 
- https://haacked.com/archive/2018/06/24/comments-for-jekyll-blogs/
- https://statichunt.com/jamstack-feedback