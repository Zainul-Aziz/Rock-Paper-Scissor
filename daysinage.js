//challenge-3
function rpsgame(yourChoice)
{
   // console.log(choice.id);
   console.log(yourChoice);
   var humanChoice,botChoice;
   humanChoice=yourChoice.id;
   botChoice=numberToChoice(randToRpsInt());
   console.log("Computer choice:",botChoice);

   results=decideWinner(humanChoice,botChoice);//[0,1] human lost bot wins
   console.log(results);

   message=finalMessage(results);//{'message':'you won!'}
   console.log(message);

    rpsFrontEnd(yourChoice.id,botChoice,message);
}

function randToRpsInt()
{
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number)
{
    return ['rock','paper','scissor'][number];
}


function decideWinner(yourChoice,computerChoice)
{
var rpsDatabase = {
    'rock':{'scissor':1,'rock':0.5,'paper':0},
    'paper':{'rock':1,'paper':0.5,'scissor':0},
    'scissor':{'paper':1,'scissor':0.5,'rock':0}
};
var yourScore=rpsDatabase[yourChoice][computerChoice];
var computerScore=rpsDatabase[computerChoice][yourChoice];

return [yourScore,computerScore];
}

function finalMessage([yourScore,computerScore])
{
    if(yourScore === 0)
    {
        return {'message':'You lost!','color':'red'};
    }
    else if (yourScore === 0.5)
    {
        return {'message':'Match tied!','color':'yellow'};
    }
    else
    {
        return {'message':'You won!','color':'green'};
    }
}

function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage)
{
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }
    //lets remove all images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv=document.createElement('div');
    var botDiv=document.createElement('div');
    var messageDiv=document.createElement('div');

    humanDiv.innerHTML= "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1)';'>"
    messageDiv.innerHTML="<h1 style='color: "+finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML="<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1)';'>"
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);    
}



function printfunc()
{
    window.print();
}

function challenge3(paravalue)
{
    var backup = document.body.innerHTML;
    var divcontent = document.getElementById(paravalue).innerHTML;
    document.body.innerHTML = divcontent;
    window.print();
    document.body.innerHTML = backup;
}