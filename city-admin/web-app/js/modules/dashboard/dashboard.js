/**
 * @fileOverview
 * Dashboard Controller
 *
 * @author Ali Abu El Haj
 * @version 1.0
 */
var SHOW_PHOTO_POST_LINK = '.js-show-photo';
var SHOW_VIDEO_POST_LINK = '.js-show-video';
var SHOW_ENTRY_POST_LINK = '.js-show-entry';

var DashboardController = {
    /**
     * Initialize EditUserController
     */
    init: function() {
        this.postStatus = new PostStatus()
        this.$body = $('body')
        this.video = new Video()
        this.bindEvents()
    },

    bindEvents: function() {
        this.$body.on('click', SHOW_PHOTO_POST_LINK, this.showPhotoPost.bind(this))
        this.$body.on('click', SHOW_VIDEO_POST_LINK, this.showVideoPost.bind(this))
        this.$body.on('click', SHOW_ENTRY_POST_LINK, this.showEntryPost.bind(this))
    },

    showPhotoPost: function(evt) {
        evt.preventDefault()
        var self = this
        var $element = $(evt.target)
        $.colorbox({
            ajax: true,
            href: $element.attr('href'),
            title: $element.attr('title'),
            display: 'block',
            width: 'auto',
            height: '500px',
            innerWidth: 'auto',
            innerHeight: 'auto',
            onComplete: function() {

                var data = $('#cboxContent');
                var img =  data.find('.js-photo');
                var width = img.width()+'px';
                $.colorbox.resize({width: width})
            }

        });
    },

    showVideoPost: function(evt) {
        evt.preventDefault()
        var self = this
        var $element = $(evt.target)
        $.colorbox({
            ajax: true,
            href: $element.attr('href'),
            title: $element.attr('title'),
            display: 'block',
            innerWidth: '600px',
            innerHeight: '500px',
            onComplete: function(data) {
                var elementId = 'js-swf';
                var videoType = $('#'+elementId).attr('data-video-type');
                console.log(videoType)
                self.video
                    .setVideoType(videoType)
                    .setUrl($('#'+elementId).attr('data-url'))
                    .setTargetElementId(elementId)
                    .embedVideo()
                $.colorbox.resize()
            }

        });
    },

    showEntryPost: function(evt) {
        evt.preventDefault()
        var self = this
        var $element = $(evt.target)
        $.colorbox({
            ajax: true,
            href: $element.attr('href'),
            title: $element.attr('title'),
            display: 'block',
            innerWidth: '800px',
            innerHeight: '500px',
            onComplete: function(data) {
                $.colorbox.resize()
            }

        });
    }



};

$(document).ready(function() {
    DashboardController.init()
});