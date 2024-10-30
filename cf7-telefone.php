<?php
/**
 * Plugin Name: CF7 Telefone
 * Plugin URI: https://github.com/lucascaires/cf7-telefone
 * Description: Plugin do WordPress que adiciona máscara nos campos de telefone do Contact Form 7.
 * Version: 1.0
 * Author: Lucas
 * Author URI: https://profiles.wordpress.org/lucascaires
 * License: GPL version 2 or later - http://www.gnu.org/licenses/gpl-3.0.en.html
 */
defined( 'ABSPATH' ) or die( 'Plugin file cannot be accessed directly.' );

function cf_telefone_scripts() {
    wp_enqueue_script( 'cf7-telefone', plugin_dir_url( __FILE__ ) . '/js/cf7-telefone.js', array('jquery'), '1.0.0');
}
add_action( 'wp_enqueue_scripts', 'cf_telefone_scripts' );