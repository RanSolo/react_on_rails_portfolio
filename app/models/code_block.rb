class CodeBlock < ApplicationRecord
  belongs_to :example
  has_many :urls

  def display_name
    self.location.split('/').last # or whatever column you want
  end
end
