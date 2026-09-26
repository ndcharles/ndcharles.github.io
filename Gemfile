source "https://rubygems.org"

# Built and deployed by .github/workflows/pages.yml on every push to main.
# Local preview: bundle install && bundle exec jekyll serve
gem "jekyll", "~> 4.4"

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "jekyll-paginate"
  gem "jekyll-seo-tag"
  gem "jekyll-target-blank"
end

gem "kramdown-parser-gfm"
gem "rouge"
gem "webrick"

# Removed from Ruby's default gems in 3.4+/4.0; Jekyll still requires them.
gem "base64"
gem "bigdecimal"
gem "csv"
gem "logger"

gem "wdm", ">= 0.1.0" if Gem.win_platform?
