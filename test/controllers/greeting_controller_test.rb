require 'test_helper'

class GreetingControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get greting_index_url
    assert_response :success
  end
end
