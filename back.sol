//SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

//import "@pythnetwork/pyth-sdk-solidity/IPyth.sol";
//import "@pythnetwork/pyth-sdk-solidity/PythStructs.sol";

contract MuliMode {

    /*
    IPyth pyth;

    constructor(address pythContract) {
        pyth = IPyth(pythContract);
    }

    function getBtcUsdPrice(
    bytes[] calldata priceUpdateData
  ) public payable returns (PythStructs.Price memory) {
    // Update the prices to the latest available values and pay the required fee for it. The `priceUpdateData` data
    // should be retrieved from our off-chain Price Service API using the `pyth-evm-js` package.
    // See section "How Pyth Works on EVM Chains" below for more information.
    uint fee = pyth.getUpdateFee(priceUpdateData);
    pyth.updatePriceFeeds{ value: fee }(priceUpdateData);

    bytes32 priceID = 0xf9c0172ba10dfa4d19088d94f5bf61d3b54d5bd7483a322a982e1373ee8ea31b;
    // Read the current value of priceID, aborting the transaction if the price has not been updated recently.
    // Every chain has a default recency threshold which can be retrieved by calling the getValidTimePeriod() function on the contract.
    // Please see IPyth.sol for variants of this function that support configurable recency thresholds and other useful features.
    return pyth.getPrice(priceID);
  }
*/  

    mapping(address => string) public disclaimers;
    mapping(address => bool) public hasSign;

    function disclaimer(string memory data) public {
        disclaimers[msg.sender] = data;
        hasSign[msg.sender] = true;
    }

    function seeIfHasSigned(address user) public view returns(bool, string memory){
        if(hasSign[user] == true){
            return(hasSign[user], disclaimers[user]);
        } else {
            return(hasSign[user], "...No...");
        }
    }

    address owner = 0xE0093c7460a024DA7EcC48765874A6768a305094;

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    uint32 public totalPoints;
    uint public totalVolume;
    uint32 public totalUsers;
    mapping(address => uint32) addrPoints;
    mapping(address => uint8) level;
    mapping(address => uint) volume;



    function getMyPuntuation(address user) public view returns(uint32) {
        return(addrPoints[user]);
    }

    function getTotalPoints() public view returns(uint32) {
        return(totalPoints);
    }

    function airdropChecker(address user) public view returns(uint){
        return((addrPoints[user]/totalPoints)*100);
    }

    function levelChecker(address user) public view returns(uint){
        return(level[user]);
    }

    function volumeChecker(address user) public view returns(uint){
        return(volume[user]);
    }

    function totalVolumeChecker() public view returns(uint){
        return(totalVolume);
    }

     function totalUsersChecker() public view returns(uint){
        return(totalUsers);
    }

    // dApps/Services

        function exchangePoints() public {
            if(level[msg.sender] == 1){
                require(addrPoints[msg.sender] >= 250);
                addrPoints[msg.sender] = addrPoints[msg.sender] - 250; 
                totalPoints = totalPoints - 250;
                level[msg.sender]++;
            } else if(level[msg.sender] == 2){
                require(addrPoints[msg.sender] >= 500);
                addrPoints[msg.sender] = addrPoints[msg.sender] - 500; 
                totalPoints = totalPoints - 500;
                level[msg.sender]++;
            } else if(level[msg.sender] == 3){
                require(addrPoints[msg.sender] >= 1250);
                addrPoints[msg.sender] = addrPoints[msg.sender] - 1250; 
                totalPoints = totalPoints - 1250;
                level[msg.sender]++;
            } else if(level[msg.sender] == 4){
                require(addrPoints[msg.sender] >= 2500);
                addrPoints[msg.sender] = addrPoints[msg.sender] - 2500; 
                totalPoints = totalPoints - 2500;
                level[msg.sender]++;
            } else if(level[msg.sender] == 5){
                require(addrPoints[msg.sender] >= 5000);
                addrPoints[msg.sender] = addrPoints[msg.sender] - 5000; 
                totalPoints = totalPoints - 5000;
                level[msg.sender]++;
            } else if(level[msg.sender] == 6){
                require(addrPoints[msg.sender] >= 8000);
                addrPoints[msg.sender] = addrPoints[msg.sender] - 8000; 
                totalPoints = totalPoints - 8000;
                level[msg.sender]++;
            } else if(level[msg.sender] == 7){
                require(addrPoints[msg.sender] >= 12000);
                addrPoints[msg.sender] = addrPoints[msg.sender] - 12000; 
                totalPoints = totalPoints - 12000;
                level[msg.sender]++;
            } else if(level[msg.sender] == 8){
                require(addrPoints[msg.sender] >= 16000);
                addrPoints[msg.sender] = addrPoints[msg.sender] - 16000; 
                totalPoints = totalPoints - 16000;
                level[msg.sender]++;
            } else if(level[msg.sender] == 9){
                require(addrPoints[msg.sender] >= 22000);
                addrPoints[msg.sender] = addrPoints[msg.sender] - 22000; 
                totalPoints = totalPoints - 22000;
                level[msg.sender]++;
            } else if(level[msg.sender] == 10){
                level[msg.sender] = level[msg.sender];
            }
        }


        //SimpleBank

            // gas functions

            mapping(address => uint) myDepositedEth;
            mapping(address => uint8) numOfTx;

            function depositEth() public payable{
                require(msg.value > 0);
                if(level[msg.sender] == 0) {level[msg.sender]++;}
                myDepositedEth[msg.sender] = myDepositedEth[msg.sender] + msg.value;
                numOfTx[msg.sender]++;
                volume[msg.sender] += msg.value;
                totalVolume += msg.value;
                if(msg.value >= 100000000000000 && msg.value < 1000000000000000) { 
                    addrPoints[msg.sender] = addrPoints[msg.sender] + (1*level[msg.sender]);
                    totalPoints = totalPoints + (1*level[msg.sender]);
                } else if(msg.value >= 1000000000000000 && msg.value < 5000000000000000) {
                    addrPoints[msg.sender] = addrPoints[msg.sender] + (5*level[msg.sender]);
                    totalPoints = totalPoints + (5*level[msg.sender]);
                } else if(msg.value >= 5000000000000000 && msg.value < 10000000000000000) {
                    addrPoints[msg.sender] = addrPoints[msg.sender] + (10*level[msg.sender]); 
                    totalPoints = totalPoints + (10*level[msg.sender]);
                } else if(msg.value >= 10000000000000000 && msg.value < 25000000000000000) {
                    addrPoints[msg.sender] = addrPoints[msg.sender] + (20*level[msg.sender]); 
                    totalPoints = totalPoints + (20*level[msg.sender]);
                } else if(msg.value >= 25000000000000000) {
                    addrPoints[msg.sender] = addrPoints[msg.sender] + (35*level[msg.sender]); 
                    totalPoints = totalPoints + (35*level[msg.sender]);
                }
                
            }

            function withdrawMyEth(uint amount) public {
                require(amount <= myDepositedEth[msg.sender]);
                payable(msg.sender).transfer(amount);
                myDepositedEth[msg.sender] = myDepositedEth[msg.sender] - amount;
                numOfTx[msg.sender]++;
                totalVolume += amount;
            }
        

            // OnlyRead Functions

            function getMyDepoBalance(address user) public view returns(uint) {
                return(myDepositedEth[user]);
            }

        
        // Daily checkIn

            mapping(address => uint) lastCheckIn;
            mapping(address => uint16) activeDays;
            mapping(address => bool) hasCheck;

            // gas functions

            function chekIn() public {
                if(hasCheck[msg.sender] == false) {
                    hasCheck[msg.sender] = true;
                    if(level[msg.sender] == 0) {level[msg.sender]++;}
                    lastCheckIn[msg.sender] = block.timestamp;
                    addrPoints[msg.sender] = addrPoints[msg.sender] + (1*level[msg.sender]);
                    totalPoints = totalPoints + (1*level[msg.sender]);
                    activeDays[msg.sender]++;
                } else{
                    require(1 days < block.timestamp - lastCheckIn[msg.sender]);
                    if(level[msg.sender] == 0) {level[msg.sender]++;}
                    lastCheckIn[msg.sender] = block.timestamp;
                    addrPoints[msg.sender] = addrPoints[msg.sender] + (1*level[msg.sender]);
                    totalPoints = totalPoints + (1*level[msg.sender]);
                    activeDays[msg.sender]++;
                }
            }

            // OnlyRead Functions

            function canCheckIn() public view returns(bool, uint) {
                if(1 days < block.timestamp - lastCheckIn[msg.sender]) {
                    return(true, 0);
                } else {
                    uint time = (block.timestamp - lastCheckIn[msg.sender]); //En minutos
                    return(false, time); 
                }
            }

            function getActivity(address user) public view returns(uint16) {
                return(activeDays[user]);
            }

        //Buy Points

            // gas functions
/*
            function buyPoints(uint8 amount) public payable {
                if(amount == 10) {
                    require(msg.value == 100000000000000); //0.0001 eth
                    addrPoints[msg.sender] = addrPoints[msg.sender] + 10;
                    totalPoints = totalPoints + 10;
                } else if(amount == 25) {
                    require(msg.value == 200000000000000); //0.0002 eth
                    addrPoints[msg.sender] = addrPoints[msg.sender] + 25;
                    totalPoints = totalPoints + 25;
                } else if(amount == 50) {
                    require(msg.value == 350000000000000); //0.00035 eth
                    addrPoints[msg.sender] = addrPoints[msg.sender] + 50;
                    totalPoints = totalPoints + 50;
                } else if(amount == 100) {
                    require(msg.value == 700000000000000); //0.0007 eth
                    addrPoints[msg.sender] = addrPoints[msg.sender] + 100;
                    totalPoints = totalPoints + 100;
                } else if(amount == 210) {
                    require(msg.value == 1000000000000000); //0.001 eth
                    addrPoints[msg.sender] = addrPoints[msg.sender] + 210;
                    totalPoints = totalPoints + 210;
                }
                totalVolume += msg.value;
                volume[msg.sender] += msg.value;
            } 
*/

        // Lottery

            // gas functions
            
            uint16 public thisLotteryId = 1;
            uint16 public numLen = 2;
            mapping(uint16 => uint16) numLenEach;
            mapping(uint16 => mapping(address => uint16[])) myLotteryNums;
            mapping(uint16 => uint) finalDate;
            mapping(uint16 => address[]) winners; // for each lotteryId
            mapping(uint16 => bool) claimClose;
            mapping(address => uint16) timesPlayLot;
            uint public amountEthLottery;
            
            function regMyNum(uint16 num) public payable{
                require(finalDate[thisLotteryId] > block.timestamp);
                require(msg.value == 150000000000000); //$0,55-$0.6 / lottery ticket
                require(myLotteryNums[thisLotteryId][msg.sender].length <= 5);
                timesPlayLot[msg.sender]++;
                volume[msg.sender] += msg.value;
                totalVolume += msg.value;
                myLotteryNums[thisLotteryId][msg.sender].push(num);
                amountEthLottery = amountEthLottery + msg.value;
                addrPoints[msg.sender] = addrPoints[msg.sender] + (10*level[msg.sender]);
                totalPoints = totalPoints + (10*level[msg.sender]);
            }

            bool firstLottery = true;

            function createNewLottery(uint date, uint8 numL) public onlyOwner { // date == lottery avaiable time from now (in hours)
                require(finalDate[thisLotteryId] < block.timestamp);
                numLen = numL; // 123 for TEST for numbers from 0 to 3
                thisLotteryId++;
                numLenEach[thisLotteryId] = numL;
                finalDate[thisLotteryId] = block.timestamp + (date*60*60);
            }

            function checkWinner() public {
                require(block.timestamp > finalDate[thisLotteryId]);
                uint256 maxNumber;
                if(numLen == 2) {
                    maxNumber = 101;
                } else if(numLen == 3) {
                    maxNumber = 1001;
                } else if(numLen == 4) {
                    maxNumber = 10001;
                } else if(numLen == 123) /*TEST */ { //<<<_________¡_____TEST__________
                    maxNumber = 4;
                }
                uint256 winnerNumber = uint256(keccak256(abi.encodePacked(thisLotteryId, finalDate[thisLotteryId]))) % maxNumber;
                for(uint8 i = 0; i <= myLotteryNums[thisLotteryId][msg.sender].length; i++) {
                    if(myLotteryNums[thisLotteryId][msg.sender][i] == winnerNumber) {
                        winners[thisLotteryId].push(msg.sender);
                    }
                }
            }

            function claimLottery() public onlyOwner {
                require(claimClose[thisLotteryId] == false);
                uint eth4Dev = amountEthLottery/10;
                uint lotPriceAmount = amountEthLottery - eth4Dev;
                uint256 numOfWinners = winners[thisLotteryId].length;
                uint earnPerWinner = lotPriceAmount / numOfWinners;
                for(uint8 i = 0; i < winners[thisLotteryId].length; i++) {
                        payable(winners[thisLotteryId][i]).transfer(earnPerWinner);
                }
                payable(owner).transfer(eth4Dev);
                claimClose[thisLotteryId] == true;
            }

            
            // Only read Functions

            function getWinnerNum() public view returns(uint256, bool) {
                require(block.timestamp > finalDate[thisLotteryId]);
                uint256 maxNumber;
                if(numLenEach[thisLotteryId] == 2) {
                    maxNumber = 101;
                } else if(numLenEach[thisLotteryId] == 3) {
                    maxNumber = 1001;
                } else if(numLenEach[thisLotteryId] == 4) {
                    maxNumber = 10001;
                } else if(numLenEach[thisLotteryId] == 123) /*TEST */ { //<<<______________TEST__________
                    maxNumber = 4;
                }
                uint256 winnerNumber = uint256(keccak256(abi.encodePacked(thisLotteryId, finalDate[thisLotteryId]))) % maxNumber;
                bool isWinner;
                for(uint8 i = 0; i <= myLotteryNums[thisLotteryId][msg.sender].length; i++) {
                    if(myLotteryNums[thisLotteryId][msg.sender][i] == winnerNumber) {
                       isWinner = true;
                    }
                }
                return(winnerNumber, isWinner);
            }

            function seeIfCanCheckWin() public view returns(bool){
                if(block.timestamp > finalDate[thisLotteryId]){
                    return(true);
                } else {
                    return(false);
                }
            }
            
            function getMyNumsLen(address user) public view returns(uint) {
                return(myLotteryNums[thisLotteryId][user].length);
            }

            function getMyNums(address user, uint8 i) public view returns(uint16) {
                return(myLotteryNums[thisLotteryId][user][i]);
            }

            function getFinalDate() public view returns(uint){
                return(finalDate[thisLotteryId]);
            }

            function seeIfThereIsALotteryOpen() public view returns(bool){
                if(finalDate[thisLotteryId] > block.timestamp){
                    return(true);
                } else{
                    return(false);
                }
            } 

            function getTimesPlayLot(address user) public view returns(uint16){
                return(timesPlayLot[user]);
            }

            function getTotalPrizeLot() public view returns(uint){
                return(amountEthLottery);
            }


        // Apuestas

           /* function createNewBet(uint8 type, ) public onlyOwner{

            }*/

        

        // Register task
/*
            mapping(address => bool) completedTask1;

            function registerMailTask() public{
                require(completedTask1[msg.sender] == false);
                completedTask1[msg.sender] = true;
                addrPoints[msg.sender] = addrPoints[msg.sender] + 100;
                totalPoints = totalPoints + 100;
            }

            function seeIfRegis(address user) public view returns(bool){
                return(completedTask1[user]);
            }

*/
        // Deploy Contract

            mapping(uint16 => mapping(address => uint8)) numContactsDeployedToday;

            function createAccount() public {
                require(numContactsDeployedToday[activeDays[msg.sender]][msg.sender] <= 5);
                new myContract(msg.sender);
                numContactsDeployedToday[activeDays[msg.sender]][msg.sender]++;
                addrPoints[msg.sender] +=  10;
                totalPoints += 10;
            }

            function seeIfCanDeploy(address user) public view returns(bool){
                if(numContactsDeployedToday[activeDays[user]][msg.sender] <= 5){
                    return(true);
                } else {return(false);}
            }

}


contract myContract {

    address public owner;

    constructor(address X)  {
        owner = X;
    }
}

