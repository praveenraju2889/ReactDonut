#!/bin/bash

echo "🧹 Cleaning iOS build..."
cd ios || exit
xcodebuild clean
rm -rf Pods Podfile.lock build
pod install
cd ..

echo "🧼 Clearing Metro cache..."
rm -rf $TMPDIR/metro-*
rm -rf $TMPDIR/react-*
rm -rf node_modules/.cache
npx react-native start --reset-cache &

echo "📂 Removing Xcode Derived Data..."
rm -rf ~/Library/Developer/Xcode/DerivedData

# Optional Android clean
if [ -d "android" ]; then
  echo "🧹 Cleaning Android build..."
  cd android || exit
  ./gradlew clean
  cd ..
fi

echo "🚀 Rebuilding iOS app..."
npx react-native run-ios
