class Project < Thor
  include Thor::Actions

  def self.source_root
    File.dirname(__FILE__)
  end

  argument :name
  class_option :title, :default => "Título do Projeto"
  class_option :subtitle, :default => "Subtítulo do Projeto"
  class_option :category, :default => "visualization"
  class_option :description, :default => "Descrição do Projeto"
  class_option :authors, :default => "[\"author1\", \"author2\"]"
  class_option :thumb, :default => "project-1.png"
  class_option :technologies, :default => "Ruby, Rails, Backbone.js"
  class_option :authors_tolltip, :default => "Author 1 <br> Author 2"
  class_option :github, :default => "https://github.com/w3c"
  class_option :background, :default => "bg-highlight.jpg"
  class_option :final_version, :default => "http://www.w3.org/"
  class_option :status, :default => "W3C"
  class_option :raw_data, :default => "http://www.w3.org/"
  desc "generate", "generates a new project with supplied params"

  def generate
    template "templates/post.erb", "_posts/#{parse_name}"
  end

  private

  def parse_name
    [current_date, parsed_name].join("-") << ".markdown"
  end

  def parsed_name
    name.downcase.tr " ", "-"
  end

  def current_date
    Time.new.strftime "%Y-%m-%d"
  end
end
