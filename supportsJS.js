(function() {
    "use strict";

    var supportsJS = function() {
        return "visibilityState" in document;
    };

    if (supportsJS()) {
        document.documentElement.classList.add("supports-js");
    }

    window.supportsJS = supportsJS;

}());
