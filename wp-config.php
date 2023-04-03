<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'gbua_salon_nik' );

/** Database username */
define( 'DB_USER', 'gbua_salon_nik' );

/** Database password */
define( 'DB_PASSWORD', '29zebc939kyz' );

/** Database hostname */
define( 'DB_HOST', 'mysql316.1gb.ua' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '].z,Z*]m]<I@PI9m/KcIA<CqFG3BOyum<Kfd>`-7J~SJ?sHLV{!{D[s_@Fh?%eJo' );
define( 'SECURE_AUTH_KEY',  'rQ/Hulktf}Nj}iI:m`<C0b+]^ 3VxY~zuu4vIL>qT$shBn|LL=dw>Ag+$>/r>%F|' );
define( 'LOGGED_IN_KEY',    '58Av~`s[BuZpK;X9H9W`x7=aPTYxjBZo?}(06c(7fS[=<m~F?jbF})@#iXfy`]n&' );
define( 'NONCE_KEY',        '_I2.i;9ofZSCP8e(5/Z#Ri;c!>=cyHLS3g@o}vO)$VX&G`pt^|Uu`$0YPGj%Kydm' );
define( 'AUTH_SALT',        'u!nW:ZLDoFxJQPTo:fz.-:5#j5@Ls_Do/8lO?fI.P[O+7;mg6.<,*mYMtVJ%$v;(' );
define( 'SECURE_AUTH_SALT', 'jw&Qf C~Tlvp@QFq>=E/^+9O!mJ[:IpA6/+(r)7]^mfw_d*1IG#|m.e q0o|PV9Q' );
define( 'LOGGED_IN_SALT',   ':j|[Na><:X@FW^Bp/U,cN/@r2u#_rNc,GS664J@ZZ)U(X;8w~,,+W2sOIn$i,_k(' );
define( 'NONCE_SALT',       'HO5NXVyHeMms{ZoHB?Z;!aLC1kC=^@tqy==~Gt8u<=:W^]f?2Auan*tTlR|`0V65' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
