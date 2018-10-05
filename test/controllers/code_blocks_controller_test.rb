require 'test_helper'

class CodeBlocksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @code_block = code_blocks(:one)
  end

  test "should get index" do
    get code_blocks_url, as: :json
    assert_response :success
  end

  test "should create code_block" do
    assert_difference('CodeBlock.count') do
      post code_blocks_url, params: { code_block: { block: @code_block.block, description: @code_block.description, example_id: @code_block.example_id } }, as: :json
    end

    assert_response 201
  end

  test "should show code_block" do
    get code_block_url(@code_block), as: :json
    assert_response :success
  end

  test "should update code_block" do
    patch code_block_url(@code_block), params: { code_block: { block: @code_block.block, description: @code_block.description, example_id: @code_block.example_id } }, as: :json
    assert_response 200
  end

  test "should destroy code_block" do
    assert_difference('CodeBlock.count', -1) do
      delete code_block_url(@code_block), as: :json
    end

    assert_response 204
  end
end
