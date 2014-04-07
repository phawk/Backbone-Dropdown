Backbone.DropdownCurrentView = Backbone.View.extend({

    className: 'current-item',

    events: {
        "click": "toggle"
    },


    /**
     * Setup
     * @param  {Object} opts
     * @return {Object} this
     */
    initialize: function(opts) {
        this.title_field = opts.title_field;

        return this;
    },


    /**
     * Draw the current option
     * @return {Object} this
     */
    render: function() {
        var html = '<span class="current">'+ this.model.get(this.title_field) +'</span><span class="caret"></span>';

        this.$el.html(html);

        return this;
    },


    /**
     * When the user clicks the main item
     * @param  {Event} ev
     * @return {Boolean}
     */
    toggle: function(ev) {
        ev.preventDefault();
        ev.stopPropagation();

        this.trigger("toggle");

        return true;
    }

});


Backbone.DropdownListView = Backbone.View.extend({

    tagName: "ul",

    events: {
        "click li": "item_selected"
    },


    /**
     * Setup
     * @param  {Object} opts
     * @return {Object} this
     */
    initialize: function(opts) {
        this.title_field = opts.title_field;

        return this;
    },


    /**
     * Draw the list of options
     * @return {Object} this
     */
    render: function() {
        var html = this.collection.reduce(function(str, model) {
            return str + "<li data-id=\""+ model.get("id") +"\">"+ model.get(this.title_field) +"</li>";
        }, "", this);

        this.$el.html(html);

        return this;
    },


    /**
     * When a user selects a new item
     * @param  {Event} ev
     * @return {Boolean}
     */
    item_selected: function(ev) {
        var id = this.$(ev.currentTarget).attr("data-id"),
            item;

        ev.preventDefault();

        item = this.collection.get(id);

        this.trigger("select", item);

        return true;
    }

});


Backbone.Dropdown = Backbone.View.extend({

    className: 'backbone-dropdown',
    title_field: 'title',
    views: null,


    /**
     * Sets up the dropdown
     *
     * @param  {Object} opts
     * @return {Object} this
     */
    initialize: function(opts) {
        if (_.isString(opts.title)) this.title_field = opts.title;

        this.views = {};

        this.views.current = new Backbone.DropdownCurrentView({
            title_field: this.title_field,
            model: this.collection.at(0)
        });

        this.views.current.on("toggle", this.toggle_menu, this);

        this.views.list = new Backbone.DropdownListView({
            title_field: this.title_field,
            collection: this.collection
        });

        this.views.list.on("select", this.item_selected, this);

        return this;
    },


    /**
     * render
     *
     * @return {Object} this
     */
    render: function() {
        this.$el.append(this.views.current.render().$el);
        this.$el.append(this.views.list.render().$el);
        this.views.list.$el.hide();

        return this;
    },


    /**
     * When an item has been selected by the user
     *
     * @param  {Backbone.Model} model
     * @return {Boolean}
     */
    item_selected: function(model) {
        this.views.current.model = model;
        this.views.current.render();
        this.toggle_menu();

        this.trigger("select", model);

        return true;
    },


    /**
     * Show/Hide the list
     *
     * @return {Boolean}
     */
    toggle_menu: function() {
        this.views.list.$el.toggle();

        return true;
    }

});
