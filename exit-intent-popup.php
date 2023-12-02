<?php
/*
Plugin Name: Exit Intent Popup
Description: Emulates an exit-intent popup on all pages of the website.
Version: 1.0
Author: Abrar Ibrahim
Author URI: https://github.com/ajdev0/exit-intent-popup
*/

function enqueue_exit_intent_scripts() {
      wp_enqueue_script('exit-intent-popup', plugin_dir_url(__FILE__) . 'exit-intent-popup.js', array(), '1.0', true);
      wp_enqueue_style('exit-intent-popup-style', plugin_dir_url(__FILE__) . 'exit-intent-popup-style.css');

}
  
add_action('wp_enqueue_scripts', 'enqueue_exit_intent_scripts');

register_activation_hook(__FILE__, 'activate_exit_intent_popup');

function activate_exit_intent_popup() {
      // Set default options
      $default_options = array(
          'popup_frequency' => 30, // Popup shows once every 30 days
      );
  
      // Check if options exist, and if not, create them
      if (!get_option('exit_intent_popup_options')) {
          add_option('exit_intent_popup_options', $default_options);
      }
  }

?>
