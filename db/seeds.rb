# This file should contain all the record creation needed to seed the database
# with its default values.
AdminUser.create!(email: 'admin@example.com', password: 'password',
                  password_confirmation: 'password')

# Examples
api_creation = Example.create(
  title: 'RESTful API creation.',
  description: 'This site is a Rails API backend with a React front end.  It
                both creates and consumes an API'
)

cool_web_stack = Example.create(
  title: 'React, rails api w/ active_record added back in',
  description: 'CMS and API with the absolute best in front-end tooling,
                built as a single project.'
)

# Associated URLs
api_creation.urls.create(
  actual: 'https://blog.heroku.com/a-rock-solid-modern-web-stack',
  description: 'Rails is an incredible framework, but modern web development has
                moved to the front-end, meaning sometimes you don’t need all the
                bulk of the asset pipeline and the templating system. In Rails 5
                you can now create an API-only Rails app, meaning you can build
                your front-end however you like—using Create React App, for
                example.',
  url_type: 1)
api_creation.urls.create(
  actual: 'www.ransolo_dev_portfolio.com',
  description: 'Link to example',
  url_type: 0)
api_creation.urls.create(
  actual: 'https://www.dropbox.com/s/j8sso0ni13b0euc/Screenshot%202018-10-04%2017.16.40.png?dl=0',
  description: 'Screenshot of JSON api/examples only one example is created
                with one related URL.',
  url_type: 2)

# Associated code_blocks
code_block = api_creation.code_blocks.create(
  location: 'Examples Controller',
  description: 'Shows the GET verbs for example index and show data queries.',
  block: '
    # Examples controller inherits from the ApiControllerclass
    class ExamplesController < ApiController
      # GET /examples
      def index
        @examples = Example.select("id, title, description").all
        render json: @examples.to_json(
          :include => { :urls => { :only => [:id, :url_type, :description] },
          :code_blocks => { :only => [:id, :location] } }
        )
      end

      # GET /examples/1
      def show
        @example = Example.find(params[:id])
        render json: @example.to_json(
          :include => { :urls => { :only => [:id, :description,
                                             :actual, :url_type] },
          :code_blocks => { :only => [:id, :location, :block, :description] }}
        )
      end
    end')

code_block.urls.create(
  actual: 'www.screenshot.com', url_type: 2,
  description: "Screenshot of code in action")
