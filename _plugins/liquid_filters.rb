module Jekyll
  module LiquidFilters
    def mod(data, param)
      data % param
    end
  end
end
Liquid::Template.register_filter(Jekyll::LiquidFilters)
