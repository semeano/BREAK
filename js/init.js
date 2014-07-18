(function() {

    // debug
    // window.setTimeout(function(){window.location = window.location;}, 8000);

    var demo;
    var renderer;
    var container;
    var $renderer;

    // Initialises the testbed and starts the default demo.
    function init() {

        renderer = 'WebGLRenderer';
        container = $('#container');
        $renderer = $('#renderer-select a');

        // Set default demo and start updating.
        setDemo();
        update();
    }

    // Updates current demo.
    function update() {

        requestAnimationFrame(update);
        demo.step();
    }

    // Sets the current demo.
    function setDemo() {

        // Initialise new demo.
        demo = new BreakDemo();
        demo.init(container.get(0), new self[ renderer ]());

        // Provide access from console for debugging.
        self.__demo = demo;
    }

    init();

})();
