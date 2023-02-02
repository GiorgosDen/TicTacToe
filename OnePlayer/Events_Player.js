//Globals Variables
//1.Background 
var tictactoeArea=[[0,0,0],
    [0,0,0],
    [0,0,0]];
//2.Current Player (1->Humman, 2->Computer)
var player;
var computerScore;
var playerScore;
var moves;
//3. 
var snozeGame=false;
//4. Computer round part
AvRows=[true,true,true];//If AvRows[0]==false -> It's means row[0](1st) has 3 elementes (is full)
AvCols=[true,true,true];//Same with AvRows , but for colums
AvDaig=[true,true];//Same with another , but loc 0 is for basic diagonal and loc 1 for the another
//Functions and Events
window.onload = function(){
    player=1;
    computerScore=0;
    playerScore=0;
    moves=0;
}

//Central function
function playTicTacToe(imgid){
   
    if(!snozeGame){
       //Player 
        if(changeImageBack(imgid,1)){
            changeImage(imgid,1);
            moves+=1;
       }
       if(gameEnd()){
            console.log("Round Ends");
       }
    }
    
    if(!snozeGame){
        //Computer
       var flag=false;//If computer places element (true)
       var Nextlevel=true;//Gia na min caxnei na vrei grammi/stuli kai diagvnio me ena stoixeio , ean exei vrei kapoia me 2
       var compImgID="img";
       var max=0.3;
       var min=0.1;
       var compNumber=0;//Number of row/col/diagonal
       var nextCompPlace=-1;//0 row, 1 col, 2 diagonal central
       var CurrentAlgorithm = Math.floor((Math.random()*(max-min)+min)*10);
       console.log("Computer algorithm "+CurrentAlgorithm);

      
       for(var i=0; i<3; i++){
            if(chekRowColDiagForXElements(i,1,2,"row") && checkRowAvail(i)){
                console.log(2+" elements , row: "+i+" PASS");
                compNumber=i;
                nextCompPlace=0;
                Nextlevel=false;
                break;
            }else if(chekRowColDiagForXElements(i,1,2,"col") && checkColAvail(i)){
                console.log(2+" elements , col: "+i+" PASS");
                compNumber=i;
                nextCompPlace=1;
                Nextlevel=false;
                break;
            }else if(chekRowColDiagForXElements(i,1,2,"diag") && i>0 && checkDiagAvail(i)){
                console.log(2+" elements , diagonal: "+i+" PASS");
                compNumber=i;
                nextCompPlace=i+1;
                Nextlevel=false;
                break;
            }
       }
       console.log(Nextlevel + " NextLevel Flag");
       //AN den vrike kapoia grammi, stili , diagwnio me 2 elements tou antipalou , psachnei gia ena
       if(Nextlevel){
            let f=false;
            for(var i=0; i<3; i++){
                for(var j=0; j<3; j++){
                    if(tictactoeArea[i][j]==0){
                        compImgID+=(i+1);
                        compImgID+=(j+1);
                        
                        if(changeImageBack(compImgID,2)){
                            changeImage(compImgID,2);
                            updateRowAvail(i);
                            updateColAvail(j);
                            updateDiagAvail(1);
                            updateDiagAvail(2);
                            moves+=1;
                            f=true;
                            compImgID="img";
                            break;
                        }
                    }
                }
                if(f){
                    break;
                }
            }
       }
       //Nextlevel=true;
       if(nextCompPlace!=-1){
        
            if(nextCompPlace==0){
                //row
                for(var i=0; i<3; i++){
                    if(tictactoeArea[compNumber][i]==0){
                        compImgID+=(compNumber+1);
                        compImgID+=(i+1);
                        
                        if(changeImageBack(compImgID,2)){
                            changeImage(compImgID,2);
                            updateRowAvail(compNumber);
                            updateDiagAvail(1);
                            updateDiagAvail(2);
                            moves+=1;
                            flag=true;
                            compImgID="img";
                            break;
                        }
                    }
                }
            }else if(nextCompPlace==1){
                //col
                for(var i=0; i<3; i++){
                    if(tictactoeArea[i][compNumber]==0){
                        compImgID+=(i+1);
                        compImgID+=(compNumber+1);
                        
                        if(changeImageBack(compImgID,2)){
                            changeImage(compImgID,2);
                            updateColAvail(compNumber);
                            updateDiagAvail(1);
                            updateDiagAvail(2);
                            moves+=1;
                            flag=true;
                            compImgID="img";
                            break;
                        }
                    }
                }
            }else if(nextCompPlace==2){
                //central diagonal
                if(tictactoeArea[0][0]==0){
                    if(changeImageBack("img11",2)){
                        changeImage("img11",2);
                        moves+=1;
                        flag=true;
                        compImgID="img";
                        updateColAvail(0);
                        updateRowAvail(0);
                        updateDiagAvail(1);
                        updateDiagAvail(2);
                    }
                }else if(tictactoeArea[1][1]==0){
                    if(changeImageBack("img22",2)){
                        changeImage("img22",2);
                        moves+=1;
                        flag=true;
                        compImgID="img";
                        updateColAvail(1);
                        updateRowAvail(1);
                        updateDiagAvail(1);
                        updateDiagAvail(2);
                    }
                }else if(tictactoeArea[2][2]==0){
                    if(changeImageBack("img33",2)){
                        changeImage("img33",2);
                        moves+=1;
                        flag=true;
                        compImgID="img";
                        updateColAvail(2);
                        updateRowAvail(2);
                        updateDiagAvail(1);
                        updateDiagAvail(2);
                    }
                }
            }else if(nextCompPlace==3){
                //
                if(tictactoeArea[2][0]==0){
                    if(changeImageBack("img31",2)){
                        changeImage("img31",2);
                        moves+=1;
                        flag=true;
                        compImgID="img";
                        updateColAvail(0);
                        updateRowAvail(2);
                        updateDiagAvail(2);
                        updateDiagAvail(1);
                    }
                }else if(tictactoeArea[1][1]==0){
                    if(changeImageBack("img22",2)){
                        changeImage("img22",2);
                        moves+=1;
                        flag=true;
                        compImgID="img";
                        updateColAvail(1);
                        updateRowAvail(1);
                        updateDiagAvail(2);
                        updateDiagAvail(1);
                    }
                }else if(tictactoeArea[0][2]==0){
                    if(changeImageBack("img13",2)){
                        changeImage("img13",2);
                        moves+=1;
                        flag=true;
                        compImgID="img";
                        updateColAvail(2);
                        updateRowAvail(0);
                        updateDiagAvail(2);
                        updateDiagAvail(1);
                    }
                }
            }
            if(gameEnd()){
                console.log("Round Ends");
                }
       }
       //Algorithm "First Place"
       /*if(CurrentAlgorithm==1){
            for(var i=0; i<3; i++){
                for(var j=0; j<3; j++){
                    if(tictactoeArea[i][j]==0){
                        compImgID+=(i+1);
                        compImgID+=(j+1);
                        console.log(compImgID);
                        if(changeImageBack(compImgID,2)){
                            changeImage(compImgID,2);
                            moves+=1;
                            flag=true;
                            compImgID="img";
                            break;
                    }
                    compImgID="img";
                    }
                }
                if(flag){
                    break;
                }
            }
       }else if(CurrentAlgorithm==2){
            //Algorithm "First Diagonals"
            //Arxika prospathw gia to mesaio stoixeio
            //Epeita gia tin kuria diagwnia
            //Meta gia tin deutereuousa diagwnia
            if(tictactoeArea[1][1]==0){
                if(changeImageBack("img22",2)){
                    changeImage("img22",2);
                    moves+=1;
                }
            }else if(tictactoeArea[0][0]==0){
                if(changeImageBack("img11",2)){
                    changeImage("img11",2);
                    moves+=1;
                }
            }else if(tictactoeArea[2][2]==0){
                if(changeImageBack("img33",2)){
                    changeImage("img33",2);
                    moves+=1;
                }
            }else if(tictactoeArea[2][0]==0){
                if(changeImageBack("img31",2)){
                    changeImage("img31",2);
                    moves+=1;
                }
            }else if(tictactoeArea[0][2]==0){
                if(changeImageBack("img13",2)){
                    changeImage("img13",2);
                    moves+=1;
                }
                //========================================================
            }else if(tictactoeArea[0][1]==0){
                if(changeImageBack("img12",2)){
                    changeImage("img12",2);
                    moves+=1;
                }
            }else if(tictactoeArea[1][0]==0){
                if(changeImageBack("img21",2)){
                    changeImage("img21",2);
                    moves+=1;
                }
            }else if(tictactoeArea[1][2]==0){
                if(changeImageBack("img23",2)){
                    changeImage("img23",2);
                    moves+=1;
                }
            }else if(tictactoeArea[2][1]==0){
                if(changeImageBack("img32",2)){
                    changeImage("img32",2);
                    moves+=1;
                }
            }
       }

       if(gameEnd()){
        console.log("Round Ends");
        }
    }*/
}
    
}

//Change Image front
function changeImage(imgid,pl){
    if(pl==1){
        document.getElementById(imgid).src="../Photoes/Player1.png";
    }else{
        document.getElementById(imgid).src="../Photoes/Player2.png";
    }
    document.getElementById(imgid).style.width="50%";
    document.getElementById(imgid).style.height="50%";
}

//Change field back
function changeImageBack(imgid,pl){
    var idList = imgid.split("");
    var rowP= idList[3]-1;
    var colP=idList[4]-1;
    console.log(rowP+" "+colP);
    if(tictactoeArea[rowP][colP]==0){
        tictactoeArea[rowP][colP]=pl;
        //console.log(tictactoeArea[rowP][colP]);
        updateColAvail(colP);
        updateRowAvail(rowP);
        updateDiagAvail(1);
        updateDiagAvail(2);
        return true;
    }
    //console.log("fail paikti seira");
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
            snozeGame=true;
            console.log("Player1 wins this round!!!");
            playerScore+=1;
            document.getElementById('player1').innerHTML='Player Score: '+playerScore;
            winnInfo("Player wins this round!!!");
        }else if(winner==2){
            snozeGame=true;
            console.log("Player2 wins this round!!!");
            computerScore+=1;
            document.getElementById('player2').innerHTML='Computer Score: '+computerScore;
            winnInfo("Computer wins this round!!!");
        }
        if(winner==0 && moves==9){
            snozeGame=true;
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
    //Remove computer moves (Availiable rows ...)
    for(var i=0; i<3; i++){
        AvRows[i]=true;
        AvCols[i]=true;
    }
    AvDaig[0]=true;
    AvDaig[1]=true;
}

function clearGame(){
    //Remove front
    var images = document.getElementsByTagName('img');
    for(var i=0; i<9; i++){
        images[i].src="../Photoes/Empty.png";
        images[i].style.width="50%";
        images[i].style.height="50%";
    }
    //Take message 
    var message= document.getElementById('message');
    message.style.zIndex=-1;
    message.style.visibility='hidden';
    snozeGame=false;
    player=1;
}

function winnInfo(winner){
    var mess= document.getElementById('mess');
    mess.innerHTML=winner;
    var message= document.getElementById('message');
    message.style.zIndex=2;
    message.style.visibility='visible';
}

//Computer Only Area

//Computer turn

function chekRowColDiagForXElements(rcd,number,x,name){
    //rcd: number of row/col/diagonal 
    //number : 1 for player and 2 for computer
    //x: check for x number elements in row
    //name : "row", "col", "diag"
    var sum=0;
    if(name=="col"){
        for(var i=0; i<3; i++){
            if(tictactoeArea[i][rcd]==number){
                sum++;
            }
        }
        if(sum==x){
            return true;
        }
    }else if(name=="row"){
        for(var i=0; i<3; i++){
            if(tictactoeArea[rcd][i]==number){
                sum++;
            }
        }
        if(sum==x){
            return true;
        }
    }else if(name=="diag"){
        //1 ceentral diagonal
        if(rcd==1){
            for(var i=0; i<3; i++){
                for(var j=0; j<3; j++){
                    if(i==j && tictactoeArea[i][j]==number){
                        sum++;
                    }
                }
            }
            if(sum==x){
                return true;
            }
        }else if(rcd==2){
            if(tictactoeArea[0][2]==number){
                sum++;
            }
            if(tictactoeArea[2][0]==number){
                sum++;
            }
            if(tictactoeArea[1][1]==number){
                sum++;
            }
            if(sum==x){
                return true;
            }
        }
    }

    return false;
}


//Check Row's Diathesimotita
function checkRowAvail(numberRow){
    return AvRows[numberRow];
}

//Update Row's Diathesimotita
function updateRowAvail(numberRow){
    var sum =0;
    for(var i=0; i<3; i++){
        if(tictactoeArea[numberRow][i]!=0){
            sum++;
        }
    }
    if(sum==3){
        //Full Row
        //Update table AvRows
        AvRows[numberRow]=false;
    }
}

//====

function checkColAvail(numberCol){
    return AvCols[numberCol];
}

function updateColAvail(numberCol){
    var sum=0;
    for(var i=0; i<3; i++){
        if(tictactoeArea[i][numberCol]!=0){
            sum++;
        }
    }
    if(sum==3){
        AvCols[numberCol]=false;
    }
}

function checkDiagAvail(numberDiag){
    return AvDaig[numberDiag-1];
}

function updateDiagAvail(numberDiag){
    var sum=0;
    if(tictactoeArea[1][1]!=0){
        sum++;
    }

    if(numberDiag-1==0){
        if(tictactoeArea[0][0]!=0){
            sum++;
        }
        if(tictactoeArea[2][2]!=0){
            sum++;
        }
    }else if(numberDiag-1==1){
        if(tictactoeArea[0][2]!=0){
            sum++;
        }
        if(tictactoeArea[2][0]!=0){
            sum++;
        }
    }

    if(sum==3){
        AvDaig[numberDiag-1]=false;
    }
}