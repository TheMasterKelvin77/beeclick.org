function autoplay() {
    // click the bee
    $(function() {
        var e = $.Event('keypress');
        e.which = 32; // spacebar
        $('item').trigger(e);
    });

    // buy each available upgrade
    for (var x in Game.upgrades) {
        //upgrade = Game.upgrades[x];
        if (Game.getUpgradePurchasable(x)){
            Game.buyUpgrade(x)
        }
    }
}