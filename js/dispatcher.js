var onLoadHandlers = [];

window.onload = function () {
    for (var i in onLoadHandlers) {
        onLoadHandlers[i]();
    }
};
