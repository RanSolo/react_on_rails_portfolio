class Url < ApplicationRecord
  belongs_to :example, optional: true
  belongs_to :code_block, optional: true

  enum url_type: [:Link, :Reference, :Screenshot]
end
