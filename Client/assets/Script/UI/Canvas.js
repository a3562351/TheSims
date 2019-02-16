cc.Class({
    extends: cc.Component,

    onLoad(){
        let size = cc.view.getVisibleSize();
        console.log("屏幕分辨率:" + size);

        if(cc.sys.isBrowser){
            this.getComponent("cc.Canvas").fitWidth = true;
            this.getComponent("cc.Canvas").fitHeight = true;
            console.log("浏览器适配");
        }else{
            if(size.width / size.height >= Const.DesignSize.x / Const.DesignSize.y){
                this.getComponent("cc.Canvas").fitWidth = true;
                this.getComponent("cc.Canvas").fitHeight = false;
            }else{
                this.getComponent("cc.Canvas").fitWidth = false;
                this.getComponent("cc.Canvas").fitHeight = true;
            }
            console.log("手机适配");
        }
    },
});
