/*global define*/
define([], function() {
    'use strict';
    /**
    * The manager that is used to control ongoing camera flights created by
    * {@link Camera#flyTo}.
    *
    * @param {Tween} The tween for camera flight.
    *
    * @constructor
    */
    function CameraFlightManager(cameraFlightTween) {
        this._cameraFlightTween = cameraFlightTween;
    }

    /**
    * Cancels camera flight.
    */
    CameraFlightManager.prototype.cancelFlight = function () {
        this._cameraFlightTween.cancelTween();
    };
});
