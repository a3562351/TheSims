window.EventDispatcher = cc.Class({
    statics: {
        ListenMap: new Map(),

        AddListener(eventCode, callback, listener) {
            if(!this.ListenMap[eventCode]){
                this.ListenMap[eventCode] = [];
            }
            let array = this.ListenMap[eventCode];
            array.push({cb: callback, obj: listener});
        },

        RemoveListener(eventCode, callback, listener){            
            let array = this.ListenMap[eventCode];
            if(array){
                for (let i = 0; i < array.length; i++) {
                    let elem = array[i];
                    if(elem.cb === callback && elem.obj === listener){
                        array.splice(i, 1);
                        break;
                    }
                }
            }
        },

        Dispatch(eventCode, data){
            let array = this.ListenMap[eventCode];
            if(array){
                for (let i = 0; i < array.length; i++) {
                    let elem = array[i];
                    const callback = elem.cb;
                    const obj = elem.obj;
                    callback.call(obj, data);
                }
            }
        },
    }
});
