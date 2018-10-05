# Examples controller inherits from the ApiControllerclass
class ExamplesController < ApiController
  # GET /examples
  def index
    @examples = Example.select("id, title, description").all
    render json: @examples.to_json(
      :include => { :urls => { :only => [:id, :description, :url_type] },
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
end
