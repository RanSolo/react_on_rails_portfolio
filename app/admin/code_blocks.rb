ActiveAdmin.register CodeBlock do
  permit_params :location, :description, :block, :order, :example_id
end
