class CodeBlock < ApplicationRecord
  belongs_to :example
  has_many :urls
end
