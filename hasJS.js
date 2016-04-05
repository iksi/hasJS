(function() {
    "use strict";

    var hasJS = function() {
        return "visibilityState" in document;
    };

    if (hasJS()) {
        document.documentElement.classList.add("has-js");
    }

    window.hasJS = hasJS;

}());
