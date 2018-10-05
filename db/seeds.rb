# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Examples
api_creation = Example.create(
  title: 'RESTful API creation.',
  description: 'This site is a Rails API backend with a React front end.  It both creates and consumes an API'
)

cool_web_stack = Example.create(
  title: 'React, rails api w/ active_record added back in',
  description: 'CMS and API with the absolute best in front-end tooling,
                built as a single project.'
)

# Associated URLs
api_creation.urls.create(
  actual: 'https://blog.heroku.com/a-rock-solid-modern-web-stack',
  description: 'Rails is an incredible framework, but modern web development has moved to the front-end, meaning sometimes you don’t need all the bulk of the asset pipeline and the templating system. In Rails 5 you can now create an API-only Rails app, meaning you can build your front-end however you like—using Create React App, for example.',
  url_type: 1)
api_creation.urls.create(
  actual: 'www.ransolo_dev_portfolio.com',
  description: 'Link to example',
  url_type: 0)
api_creation.urls.create(
  actual: 'https://www.dropbox.com/s/j8sso0ni13b0euc/Screenshot%202018-10-04%2017.16.40.png?dl=0',
  description: 'Screenshot of JSON api/examples only one example is created  with one  related URL.',
  url_type: 2)
