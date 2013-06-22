require 'rubygems'
require 'sinatra'
require 'twilio-ruby'
 
get '/' do
    # Find these values at twilio.com/user/account
    account_sid = 'AC475aa73a2ba9893b742f1bbec43ec496'
    auth_token = 'fd1bf4b1331ad2dc353821826210e3df'
    # This application sid will play a Welcome Message.
    demo_app_sid = 'AC475aa73a2ba9893b742f1bbec43ec496'
    #demo_app_sid = 'APabe7650f654fc34655fc81ae71caa3ff'
    capability = Twilio::Util::Capability.new account_sid, auth_token
    capability.allow_client_outgoing demo_app_sid
    token = capability.generate
    erb :index, :locals => {:token => token}
end
