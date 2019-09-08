require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name         = "RNConvertPhAsset"
  s.version      = package['version']
  s.summary      = "RNConvertPhAsset"
  s.homepage     = package['homepage']
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.authors      = package['author']
  s.platform     = :ios, "9.0"
  s.source       = { :git => "https://github.com/jzyds/react-native-convert-ph-asset.git", :tag => "master" }
  s.source_files  = "ios/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  