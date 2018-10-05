class CodeBlocksController < ApiController
  # GET /code_blocks
  def index
    @code_blocks = CodeBlock.select("id, location").all
    render json: @code_blocks.to_json(
      :include => { :urls => { :only => [:id, :description, :url_type] } })
  end

  # GET /code_blocks/1
  def show
    @code_block = CodeBlock.find(params[:id])
    render json: @code_block.to_json(
      :include => { :urls => { :only => [:id, :description,
                                         :actual, :url_type] } })
  end
end
