var player;//Current player(1->Player1, 2-> Player2)
var moves;//Moves are makes
var player1Points;
var player2Points;
window.onload= function(){
    player=1;
    moves=0;
    player1Points=0;
    player2Points=0;
}
//TicTacToe back-area : Every value is a field
//value=0 -> No one player
//value=1 -> Player 1
//value=2 -> Player 2
var tictactoeArea = [[0,0,0],
                    [0,0,0],
                    [0,0,0]];

//Central function
function playTicTacToe(imgid){
    if(changeImageBack(imgid)){
        changeImage(imgid,player);
        moves+=1;
   }
   if(gameEnd()){
        console.log("Round Ends");
   }
    if(player==1){
        player=2;
    }else{
        player=1;
    }
}

//Change Image front
function changeImage(imgid,pl){
    if(pl==1){
        document.getElementById(imgid).src="Player1.png";
    }else{
        document.getElementById(imgid).src="Player2.png";
    }
    document.getElementById(imgid).style.width="50%";
    document.getElementById(imgid).style.height="50%";
}

//Change field back
function changeImageBack(imgid){
    var idList = imgid.split("");
    var rowP= idList[4]-1;
    var colP=idList[3]-1;
    if(tictactoeArea[rowP][colP]==0){
        tictactoeArea[rowP][colP]=player;
        return true;
    }
    return false;
}

//Check if game ends (Some is winner or make 9 moves)

function gameEnd(){
    var winner=0;//Nobody
        //Find winner
        if(checkCols()!=0){
            winner=checkCols();
        }else if(checkRows()!=0){
            winner=checkRows();
        }else if(checkDiagonlas()!=0){
            winner=checkDiagonlas();
        }
        //Update winners score
        if(winner==1){
            console.log("Player1 wins this round!!!");
            player1Points+=1;
            document.getElementById('player1').innerHTML='Player 1 Score: '+player1Points;
            winnInfo("Player1 wins this round!!!");
        }else if(winner==2){
            console.log("Player2 wins this round!!!");
            player2Points+=1;
            document.getElementById('player2').innerHTML='Player 2 Score: '+player2Points;
            winnInfo("Player2 wins this round!!!");
        }
        if(winner==0 && moves==9){
            winnInfo("No one winns on this round");
        }
        //if find winner or moves==9
        if(winner>0 || moves==9){
            //Reset game
            resetGame();
            return true;
        }
        //if not found winner or moves <9
        return false;
    
}
function checkRows(){
    var winner=0;//Means No one is winner
    for(var i=0; i<3; i++){
        if( tictactoeArea[i][0]==tictactoeArea[i][1] && tictactoeArea[i][1]==tictactoeArea[i][2] && tictactoeArea[i][0]==tictactoeArea[i][2]){
            winner= tictactoeArea[i][0];
            break;
        }
    }
    return winner;
}
function checkCols(){
    var winner=0;//Means No one is winner
    for(var i=0; i<3; i++){
        if( tictactoeArea[0][i]==tictactoeArea[1][i] && tictactoeArea[1][i]==tictactoeArea[2][i] && tictactoeArea[0][i]==tictactoeArea[2][i]){
            winner= tictactoeArea[0][i];
            break;
        }
    }
    return winner;
}

function checkDiagonlas(){
    var winner=0;
    //Central Diagonal
    if(tictactoeArea[0][0]==tictactoeArea[1][1] && tictactoeArea[1][1]==tictactoeArea[2][2] && tictactoeArea[0][0]==tictactoeArea[2][2]){
        winner= tictactoeArea[0][0];
    }
    //ParaCentral Diagonal
    if(tictactoeArea[2][0]==tictactoeArea[1][1] && tictactoeArea[1][1]==tictactoeArea[0][2] && tictactoeArea[2][0]==tictactoeArea[0][2]){
        winner= tictactoeArea[2][0];
    }
    return winner;
}
function resetGame(){
    //Remove back
    for(var i=0; i<3; i++){
        for(var j=0; j<3; j++){
            tictactoeArea[i][j]=0;
        }
    }
    //Set Player1 as first
    player=1;
    //Set moves 0
    moves=0;
}

function clearGame(){
    //Remove front
    var images = document.getElementsByTagName('img');
    for(var i=0; i<9; i++){
        images[i].src="Empty.png";
        images[i].style.width="50%";
        images[i].style.height="50%";
    }
    //Take message 
    var message= document.getElementById('message');
    message.style.zIndex=-1;
    message.style.visibility='hidden';
}

function winnInfo(winner){
    var mess= document.getElementById('mess');
    mess.innerHTML=winner;
    var message= document.getElementById('message');
    message.style.zIndex=2;
    message.style.visibility='visible';
}