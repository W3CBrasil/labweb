module Jekyll
  class CategoryIconTag < Liquid::Tag

    def initialize(tag_name, category, tokens)
      super
      @category = category
    end

    def render(context)
      image = icon context[@category]

      "#{path}/cat_#{image}.png"
    end

    def path
      "/images/projects/categories"
    end

    def icon(category)
      category.downcase[0, 3]
    end
  end
end

Liquid::Template.register_tag('category_icon', Jekyll::CategoryIconTag)
