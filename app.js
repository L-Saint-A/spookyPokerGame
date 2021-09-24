
const app ={};

app.getSomething = function(){
    $.ajax({
        url: "http://deckofcardsapi.com/api/deck/new/draw/?count=5",
        method: "GET",
        datatype: "JSON"
    }).then(function(result){
        app.displayImages(result.cards)
    })
    }
    app.displayImages = function(cards) {
        cards.forEach(function(cards){
            const html = `
                <img src=${cards.image} alt="${cards.value} OF ${cards.suit}">
            `;
            $('.card').append(html);
        })
    }
    $('.drawCard').on('click', function(){
        $('.card').empty();
        app.getSomething();
    })

    $('.playHand').on('click', function(){
        const html1 = `
            <h1>You Lose!
            HAHAHAHAHAHAHA</h1>
        `
        $('.card').empty();
        $('h1').replaceWith(html1);
    })
app.init = function(){
    }
$(function(){
    app.init();
    });