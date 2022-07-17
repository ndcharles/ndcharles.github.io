# Improving jekyll blog for SEO
# References
# https://blog.mastykarz.nl/improve-jekyll-seo
# https://github.blog/2016-05-10-better-discoverability-for-github-pages-sites/
# https://jsinibardy.com/optimize-seo-jekyll

* Chexk lighthouse performance using https://pagespeed.web.dev/


1. Optimize website images using tinypng.com or the python tool on windows 
2. Submit site to Google and Bing sitemap 
3. Use SEO-checkup (https://toolbox.seositecheckup.com/apps/seo-checkup) to check whether my website complies with SEO param
4. Use Google quick index tool to submit my website to Google. Check for the python code or colab notebook.
5. References: https://jsinibardy.com/optimize-seo-jekyll


Time ish
References: https://shopify.github.io/liquid/filters/date/
https://www.alanwsmith.com/posts/jekyll-and-github-pages-liquid-date-formatting-examples--20emx2csq8do
https://tomkadwill.com/adding-last-modified-date-to-jekyll

Published at: {{ article.published_at | date: "%b %d, %Y" }}
Last modified at: {{ article.last_modified_at | modified_date: "%b %d, %Y" }}

<span class="text-muted d-block mt-1">Published: {{ page.date | date: '%b %d, %Y' }} · {% include meta-read-time.html %}</span>
							<span class="text-muted d-block mt-1">{{ if page.last_modified }} Last updated: {{ page.last_modified | date: '%b %d, %Y' }}</span>