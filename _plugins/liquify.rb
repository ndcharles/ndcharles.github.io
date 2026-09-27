# Renders a string as Liquid in the current page's context, so {% include %} snippets
# stored in data files can be previewed. Used by the writing kit (_pages/writing-kit.html):
#   {{ snippet.code | liquify | markdownify }}
# Custom plugins work because the site is built by GitHub Actions, not the classic
# GitHub Pages builder.
module Jekyll
  module LiquifyFilter
    def liquify(input)
      Liquid::Template.parse(input.to_s).render!(@context)
    end
  end
end

Liquid::Template.register_filter(Jekyll::LiquifyFilter)
