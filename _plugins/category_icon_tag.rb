module Jekyll
  class CategoryIconTag < Liquid::Tag

    def initialize(tag_name, options, tokens)
      super
      split = options.split

      @category = split[0]
      @prepend = split[1]
    end

    def render(context)
      image = icon context[@category]

      "#{path}/#{image}.png"
    end

    def path
      "/images/projects/categories"
    end

    def icon(category)
      [@prepend, "cat_", category.downcase[0, 3]].join
    end
  end
end

Liquid::Template.register_tag('category_icon', Jekyll::CategoryIconTag)
