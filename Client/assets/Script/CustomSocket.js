window.CustomSocket = cc.Class({
    statics: {
        mSocket : null,

        InitSocket(url){
            this.mSocket = new WebSocket(url);

            this.mSocket.onopen = function(event) {
                cc.log("WebSocket is open now.");
            };

            this.mSocket.onmessage = function(event) {
                cc.debug("WebSocket message received:", event);
            };

            this.mSocket.onclose = function(event) {
                cc.log("WebSocket is closed now.");
            };

            this.mSocket.onerror = function(event) {
                cc.error("WebSocket error observed:", event);
            };
        },
    },
});
