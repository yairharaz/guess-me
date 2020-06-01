'use strict';

// NOTE: This is a global used only in the controller
var gLastRes = null;

$(document).ready(init);

function init() {
    createQuestsTree();
}

function onStartGuessing() {
    $('.game-start').hide();
    renderQuest();
    // TODO: show the quest section
}

function renderQuest() {
    $('.quest').show();
    var elH2Quest = $('.quest h2');
    elH2Quest.text(getCurrQuest().txt)
    gLastRes = getCurrQuest();
    
    
    // TODO: select the <h2> inside quest and update
    // its text by the currQuest text
}

function onUserResponse(res) {

    // If this node has no children
    if (isChildless(getCurrQuest())) {
        if (res === 'yes') {
            $('.quest').hide();
            $('.great-success').show();
            // TODO: improve UX
        } else {
            alert('I dont know...teach me!');
            // $('.modal-body').show();
            $('.quest').hide();
            $('.new-quest').show();
        }
    } else {
        // TODO: update the lastRes global var
        moveToNextQuest(res);
        renderQuest();
    }
}

function onAddGuess() {
    // TODO: Get the inputs' values
    var elQuest = $('#newQuest').val() + '?';
    var elGuess = $('#newGuess').val() + '?';
    // TODO: Call the service addGuess
    addGuess(elQuest, elGuess, gLastRes)
    onRestartGame();
}


function onRestartGame() {
    $('.great-success').hide();
    $('.new-quest').hide();
    $('.game-start').show();
    init();
    gLastRes = null;

}

