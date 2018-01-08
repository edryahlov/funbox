$(document).ready(function () {
    $(".card__outer").click(function () {
        select($(this).parent());
    });
    $(".card__action a").click(function (e) {
        e.preventDefault();
        select($(this).parent().parent());
    });

    function select($card) {
        if (!$card.hasClass("disabled")) {
            $card.toggleClass("selected");
            $card.find(".card__action").toggle();
            $card.find(".card__action-selected").toggle();
        }
    }
});