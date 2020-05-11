// functions for automatically playing bee clicker

var runAutoplay = false;
function autoplayPress() {
    runAutoplay = !runAutoplay;
}

function autoplay() {
    // click the bee
    $(function() {
        var e = $.Event('keypress');
        e.which = 32; // spacebar
        $(document).trigger(e);
    });

    // save money to afford "Beetopia" before buying "Dont Lose Your Way"
    if (Game.upgrades[Game.era].id == 7 && Game.upgrades["Super Factory"].count > 10) {
        if (Game.honey >= 1000010) {
            Game.buyUpgrade("Dont Lose Your Way");
            Game.buyUpgrade("Beetopia");
        }
    } else {
        // buy each available upgrade
        for (var x in Game.upgrades) {
            //upgrade = Game.upgrades[x];
            if (Game.upgrades[x].id != 8 && Game.getUpgradePurchasable(x)){
                Game.buyUpgrade(x);
            }
        }
    }
}