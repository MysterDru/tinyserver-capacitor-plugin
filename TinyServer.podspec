
  Pod::Spec.new do |s|
    s.name = 'TinyServer'
    s.version = '0.0.1'
    s.summary = 'A small webserver that can be run inside of a capacitor application to serve up data.'
    s.license = 'MIT'
    s.homepage = 'https://github.com/keannan5390/tinyserver-capacitor-plugin'
    s.author = 'Drew Frisk'
    s.source = { :git => 'https://github.com/keannan5390/tinyserver-capacitor-plugin', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
    s.dependency 'GCDWebServer'    
  end
