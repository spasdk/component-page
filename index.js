/**
 * @license The MIT License (MIT)
 * @copyright Stanislav Kalashnik <darkpark.main@gmail.com>
 */

/* eslint no-path-concat: 0 */

'use strict';

var Component = require('spa-component');


/**
 * Base page implementation.
 *
 * A full-screen top-level layer that can operate as an independent separate entity.
 * It is added to the document body on creation if not already linked.
 *
 * @constructor
 * @extends Component
 *
 * @param {Object} [config={}] init parameters (all inherited from the parent)
 *
 * @example
 * var Page = require('stb/ui/page'),
 *     page = new Page({
 *         $node: document.getElementById(id)
 *     });
 *
 * page.addListener('show', function show () {
 *     // page is visible now
 * });
 */
function Page ( config ) {
    // sanitize
    config = config || {};

    console.assert(typeof this === 'object', 'must be constructed via new');
    
    if ( DEVELOP ) {
        if ( typeof config !== 'object' ) { throw new Error(__filename + ': wrong config type'); }
        // init parameters checks
        if ( config.className && typeof config.className !== 'string' ) { throw new Error(__filename + ': wrong or empty config.className'); }
    }

    /**
     * Page visibility/active state flag.
     *
     * @readonly
     * @type {boolean}
     */
    this.active = false;

    /**
     * Link to the currently active component with focus.
     *
     * @readonly
     * @type {Component}
     */
    this.activeComponent = null;

    // set default className if classList property empty or undefined
    config.className = 'page ' + (config.className || '');

    // parent constructor call
    Component.call(this, config);

    // state flag
    this.active = this.$node.classList.contains('active');

    // correct DOM parent/child connection if necessary
    if ( this.$node.parentNode === null ) {
        document.body.appendChild(this.$node);
    }

    // always itself
    this.page = this;
}


// inheritance
Page.prototype = Object.create(Component.prototype);
Page.prototype.constructor = Page;


// public
module.exports = Page;
