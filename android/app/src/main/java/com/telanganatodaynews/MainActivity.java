package com.telanganatodaynews;

import android.os.Bundle;
import android.content.Intent;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "TelanganaTodayNews";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. We use
   * {@link DefaultReactActivityDelegate} which allows you to enable New Architecture with a single
   * boolean flag {@link DefaultNewArchitectureEntryPoint#getFabricEnabled}
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        DefaultNewArchitectureEntryPoint.getFabricEnabled()
    );
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    // Handle the initial intent that started the activity
    Intent intent = getIntent();
    if (intent != null) {
      onNewIntent(intent);
    }
  }

  @Override
  public void onNewIntent(Intent intent) {
    super.onNewIntent(intent);
    setIntent(intent);
  }
}