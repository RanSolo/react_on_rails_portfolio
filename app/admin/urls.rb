ActiveAdmin.register Url do
  permit_params :actual, :code_block_id, :description, :example_id, :url_type
end
