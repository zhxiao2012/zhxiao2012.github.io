$(document).ready(function () {
    var messagesEl = document.querySelector('.messages');
    var messageIndex = 0;

    var getCurrentTime = function () {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var current = hours + (minutes * .01);
        if (current >= 5 && current < 19) return 'Have a nice day';
        if (current >= 19 && current < 22) return 'Have a nice evening';
        if (current >= 22 || current < 5) return 'Have a good night';
    }
    var messages = [
        'Hi,I\'m Peter',
        'I\'m a software developer',
        'I\'m currently seeking job in New Zealand',
        'You can contact me at ',
        '<a href="mailto:zhxiao2012@gmail.com">zhxiao2012@gmail.com</a>',
        getCurrentTime(),
    ]
    var getFontSize = function () {
        return parseInt(getComputedStyle(document.body).getPropertyValue('font-size'));
    }
    var pxToRem = function (px) {
        return px / getFontSize() + 'rem';
    }
    var createBubbleElements = function (message) {
        var bubbleEl = document.createElement('div');
        var messageEl = document.createElement('span');
        bubbleEl.classList.add('bubble');
        bubbleEl.classList.add('cornered');
        bubbleEl.classList.add('left');
        messageEl.classList.add('message');
        messageEl.innerHTML = message;
        bubbleEl.appendChild(messageEl);
        bubbleEl.style.opacity = 1;
        return {
            bubble: bubbleEl,
            message: messageEl,
        }
    }
    var getDimentions = function (elements) {
        return dimensions = {
            bubble: {
                w: pxToRem(elements.bubble.offsetWidth + 4),
                h: pxToRem(elements.bubble.offsetHeight)
            },
            message: {
                w: pxToRem(elements.message.offsetWidth + 4),
                h: pxToRem(elements.message.offsetHeight)
            }
        }
    }
    var sendMessage = function (message) {

        var elements = createBubbleElements(message);
        messagesEl.appendChild(elements.bubble);
        messagesEl.appendChild(document.createElement('br'));
        var dimensions = getDimentions(elements);

        elements.message.style.width = dimensions.message.w;
        elements.message.style.height = dimensions.message.h;
        elements.bubble.style.opacity = 1;
    }
    var sendMessages = function () {
        var message = messages[messageIndex];
        if (!message) return;
        sendMessage('<h3>'+message+'</h3>');
        messageIndex++;
        setTimeout(sendMessages, 1500);
    }
   sendMessages();


});


