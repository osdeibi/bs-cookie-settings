<?php
/*Plugin Name: bs Cookie Settings
Plugin URI: https://bootscore.me/plugins/bs-cookie-settings/
Description: Plugin adds a cookie modal to Bootscore theme. <a href="https://bootscore.me/documentation/plugin/bs-cookie-settings/">Documentation</a> | <a href="https://bootscore.me/documentation/plugin/bs-cookie-settings/#Changelog">Changelog</a>
Version: 5.6.0
Tested up to: 6.4.3
Requires at least: 5.0
Requires PHP: 7.4
Author: Bootscore
Author URI: https://bootscore.me
License: MIT License
*/


// Exit if accessed directly
defined( 'ABSPATH' ) || exit;


/**
 * Update checker
 */
require 'update/plugin-update-checker.php';
use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

$myUpdateChecker = PucFactory::buildUpdateChecker(
	'https://github.com/bootscore/bs-cookie-settings/',
	__FILE__,
	'bs-cookie-settings'
);

//Set the branch that contains the stable release.
$myUpdateChecker->setBranch('main');


/**
 * Register styles and scripts
 */
function bs_cookie_settings() {

   // Obtener la opción de idioma del plugin
   $language_option = get_option('bs_cookie_language', 'English');

   // Determinar qué script cargar según la opción de idioma
   $script_name = ($language_option == 'Spanish') ? 'cookie-consent-ES.js' : 'cookie-consent-EN.js';

  wp_enqueue_script('cookie-lang-js', plugins_url("/assets/js/{$script_name}", __FILE__), array(), false, true);

  wp_enqueue_script( 'cookie-settings-js', plugins_url( '/assets/js/cookie-settings.min.js' , __FILE__ ), array(), false, true );
    
  wp_register_style( 'cookie-settings-css', plugins_url('/assets/css/cookie-settings.min.css', __FILE__) );
  wp_enqueue_style( 'cookie-settings-css' );
    
}

add_action('wp_enqueue_scripts','bs_cookie_settings');


/**
 * Agregar una página de opciones al panel de administración
 */
function bs_cookie_settings_menu() {
  add_options_page('Cookie Settings Options', 'Cookie Settings', 'manage_options', 'bs-cookie-settings', 'bs_cookie_settings_options_page');
}

add_action('admin_menu', 'bs_cookie_settings_menu');

/**
* Agregar campos de opciones para seleccionar el idioma
*/
function bs_cookie_settings_option_init() {
  // Registrar la opción de idioma del plugin
  register_setting('bs_cookie_settings_group', 'bs_cookie_language');

  // Agregar campo de selección de idioma
  add_settings_section('bs_cookie_language_section', 'Language Options', 'bs_cookie_language_section_callback', 'bs-cookie-settings');
  add_settings_field('bs_cookie_language_field', 'Select Language', 'bs_cookie_language_field_callback', 'bs-cookie-settings', 'bs_cookie_language_section');
}

add_action('admin_init', 'bs_cookie_settings_option_init');

function bs_cookie_language_section_callback() {
  echo '<p>Select the language for the cookie script:</p>';
}

function bs_cookie_language_field_callback() {
  $language_option = get_option('bs_cookie_language', 'English');
  ?>
  <select name="bs_cookie_language">
      <option value="English" <?php selected($language_option, 'English'); ?>>English</option>
      <option value="Spanish" <?php selected($language_option, 'Spanish'); ?>>Spanish</option>
  </select>
  <?php
}

function bs_cookie_settings_options_page() {
  ?>
  <div class="wrap">
      <h2>Cookie Settings</h2>
      <form method="post" action="options.php">
          <?php settings_fields('bs_cookie_settings_group'); ?>
          <?php do_settings_sections('bs-cookie-settings'); ?>
          <?php submit_button(); ?>
      </form>
  </div>
  <?php
}