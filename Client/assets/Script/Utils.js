window.Utils = {
    GetFormatTime(){
        
    },

    GetRandom(length){
        let idx = Math.ceil(Math.random() * length)
        if(idx === 0){
            idx = 1;
        }
        return idx;
    },
};

window.Loader = cc.Class({
    statics: {
        mConfigMap: new Map(),

        InitConfig(){
            cc.log("配置初始化...");
            let self = this;
            cc.loader.loadResDir("Config", function(err, objects, urls){
                for (let index = 0; index < objects.length; index++) {
                    if (err) {
                        cc.error(err);
                    }
                    else {
                        let config_name = urls[index].split("/")[1];
                        self.mConfigMap[config_name] = JSON.stringify(objects[index]);
                        cc.log("Load Config:%s", config_name);
                    }
                }
            });
        },

        GetConfig(config_name){
            let config = this.mConfigMap[config_name];
            if(config === null){
                cc.error("Not Config:%s", config_name);
            }
            return config;
        },
    },
});
