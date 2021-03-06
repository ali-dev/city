/**
 * @fileOverview
 * Add Event Controller
 *
 * @author Ali Abu El Haj
 * @version 1.0
 */
var AddEventController = {
    /**
     * Initialize AddEventController
     */
    init: function() {
        this.$select2El = $('.select2');

        $('textarea.auto').elastic();

        this.bindEvents();
    },

    /**
     * Bind event handlers
     */
    bindEvents: function() {
        this.initializeSelect2();
    },

    /**
     * Initialize select 2
     *
     */
    initializeSelect2: function() {
        this.$select2El.select2({
            minimumResultsForSearch: 10
        });
    }


};

$(document).ready(function() {
    AddEventController.init()
});