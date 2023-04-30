class AcGameMenu {
    constructor(root) {
        this.root = root;
        this.$menu = $(`
            <div class="ac-game-menu">
                <div class="ac-game-menu-field">
                    <div class="ac-game-menu-field-item ac-game-menu-field-item-single-mode">
                        单人模式
                    </div>
                    <br>
                    <div class="ac-game-menu-field-item ac-game-menu-field-item-multi-mode">
                        多人模式
                    </div>
                    <br>
                    <div class="ac-game-menu-field-item ac-game-menu-field-item-settings">
                        退出
                    </div>
                    <br>
                </div>
            </div>
        `);

        // 先关闭menu界面
        // this.$menu.hide();
        // jquery方法，将menu放到web.html的div中
        this.root.$ac_game.append(this.$menu);
        // find可以找到class名字对应的对象
        this.$single_mode = this.$menu.find('.ac-game-menu-field-item-single-mode');
        this.$multi_mode = this.$menu.find('.ac-game-menu-field-item-multi-mode');
        this.$settings = this.$menu.find('.ac-game-menu-field-item-settings');

        this.start();   
    }

    start() {
        this.add_listening_events();
    }

    add_listening_events() {
        let outer = this; // this就是menu, 但是函数里调用this指的是function
        this.$single_mode.click(function () {
            outer.hide();
            outer.root.playground.show("single mode");
        });

        this.$multi_mode.click(function () {
            outer.hide();
            outer.root.playground.show("multi mode");
        });

        this.$settings.click(function () {
            outer.root.settings.logout_on_remote();
        })
    }

    show() { // 显示menu界面
        this.$menu.show();
    }

    hide() { // 关闭menu界面
        this.$menu.hide();
    }

}