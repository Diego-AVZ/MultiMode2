const web3 = new Web3(window.ethereum);

//CONTRACTS:

const mmContractAddr = "0xb75d7381FA16b8382F42dFaCa08EcBA90aAB0a49";
const mmABI = [
	{
		"inputs": [],
		"name": "checkWinner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "chekIn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claimLottery",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "createAccount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "numL",
				"type": "uint8"
			}
		],
		"name": "createNewLottery",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "depositEth",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "data",
				"type": "string"
			}
		],
		"name": "disclaimer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "exchangePoints",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "num",
				"type": "uint16"
			}
		],
		"name": "regMyNum",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdrawMyEth",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "airdropChecker",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "amountEthLottery",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "canCheckIn",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "disclaimers",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getActivity",
		"outputs": [
			{
				"internalType": "uint16",
				"name": "",
				"type": "uint16"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getFinalDate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getMyDepoBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "uint8",
				"name": "i",
				"type": "uint8"
			}
		],
		"name": "getMyNums",
		"outputs": [
			{
				"internalType": "uint16",
				"name": "",
				"type": "uint16"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getMyNumsLen",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getMyPuntuation",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getTimesPlayLot",
		"outputs": [
			{
				"internalType": "uint16",
				"name": "",
				"type": "uint16"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTotalPoints",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getWinnerNum",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "hasSign",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "levelChecker",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "numLen",
		"outputs": [
			{
				"internalType": "uint16",
				"name": "",
				"type": "uint16"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "seeIfCanCheckWin",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "seeIfCanDeploy",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "seeIfHasSigned",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "seeIfThereIsALotteryOpen",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "thisLotteryId",
		"outputs": [
			{
				"internalType": "uint16",
				"name": "",
				"type": "uint16"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalPoints",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalUsers",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalUsersChecker",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalVolume",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalVolumeChecker",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "volumeChecker",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
const mmContract = new web3.eth.Contract(mmABI, mmContractAddr);

var connectedAddress;
const modeNetwork = "0x868b";
const modeTest = "0x397";
var goBut = document.getElementById("go");

goBut.addEventListener("click", async()=>{
    try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await web3.eth.getAccounts();
        connectedAddress = accounts[0];
        goBut.innerText = connectedAddress;
        showEthAddress();
        goBut.style.background = "black";
        goBut.style.color = "#dffe00";
        goBut.style.borderColor = "#dffe00";
        
        await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: modeTest, 
                chainName: "Mode Testnet",
                rpcUrls: ["https://sepolia.mode.network"],
                nativeCurrency: {
                  name: "ETH",
                  symbol: "ETH",
                  decimals: 18,
                },
                blockExplorerUrls: ["https://sepolia.explorer.mode.network"], 
              },
            ],
          });

        /*
        await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: modeNetwork, 
                chainName: "Mode",
                rpcUrls: ["https://1rpc.io/mode"],
                nativeCurrency: {
                  name: "ETH",
                  symbol: "ETH",
                  decimals: 18,
                },
                blockExplorerUrls: ["https://explorer.mode.network/"], 
              },
            ],
          });*/
        
        const networkId = await web3.eth.net.getId();
        if (networkId == modeTest) {   // _________________________________> This is TESTNET
            console.log("Mode Testnet Connected");
        } else{
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: modeTest}], 
              });
            }
            disclaimer()
            walletConnectedEf()
            seeDepositedBalance()
            getDashData()
        
      } catch (error) {
        console.error('Error connecting wallet', error);
      }
})

function showEthAddress() {
    var start = connectedAddress.slice(0, 6);
    var end = connectedAddress.slice(-4);
  
    goBut.innerText = `${start}...${end}`;
}

var depotBut = document.getElementById("depositBut");
var withBut = document.getElementById("withBut");
var depoIn =  document.getElementById("depoIn"); 
var ethIn =  document.getElementById("ethIn"); 

depotBut.addEventListener("click", async()=>{
    try {
        depotBut.innerText = "...";
        var depoInValue = web3.utils.toWei(depoIn.value, 'ether');
        await mmContract.methods.depositEth().send({ from: connectedAddress, value: depoInValue });
        depoIn.value = "";
        depotBut.innerText = "Deposited";
        getEthBalance();
        seeDepositedBalance()
        getDashData() 

    } catch(error){console.error("error " + error)}
})

withBut.addEventListener("click", async()=>{
    try {
        withBut.innerText = "...";
        var myDepo = await mmContract.methods.getMyDepoBalance(connectedAddress).call();
        await mmContract.methods.withdrawMyEth(myDepo).send({ from: connectedAddress });
        withBut.innerText = "withdraw All";
        getEthBalance();
        seeDepositedBalance()
        getDashData() 

    } catch(error){console.error("error " + error)}
})

async function seeDepositedBalance() {
    try {
        var myDepo = await mmContract.methods.getMyDepoBalance(connectedAddress).call();
        const balanceInEth = web3.utils.fromWei(myDepo, 'ether');
        var roundedBalance;
        if(balanceInEth > 0){
            roundedBalance = parseFloat(balanceInEth).toFixed(4); 
            document.getElementById("eth1").style.marginLeft = "18vw";
        } else {
            roundedBalance = 0;
            document.getElementById("eth1").style.marginLeft = "17.7vw";

        }
        ethIn.innerText = roundedBalance;
    } catch(error) {
        console.error(error);
    }
}

var lotIn = document.getElementById("myNum");
var ticBut = document.getElementById("ticBut");

async function regNum() {
	try{
		var isOpen = await mmContract.methods.seeIfThereIsALotteryOpen().call({from:connectedAddress});
		if(isOpen == true){
			await mmContract.methods.regMyNum(lotIn.value).send({from: connectedAddress, value:150000000000000});
		} else{
			document.getElementById("msgErrorLot1").style.display = "block";
		}
		
	} catch(Error){console.error(Error);}
}

async function checkLottery(){
	try{	
		var canCheck = await mmContract.methods.seeIfCanCheckWin().call({from: connectedAddress});
		if(canCheck==true){
			var lotData = await mmContract.methods.getWinnerNum().call({from: connectedAddress}); // devuelve nº ganador y si eres ganador
			if(lotData[1] == true){
				await mmContract.methods.checkWinner().send({from: connectedAddress});
				/*Add msg for winner */
			} else {
				document.getElementById("msgLot1").style.display = "block";
			}
		} else {
			//msg para que esper a que termine la lotería
			console.log("Wail finish lotery!!!")
		}
	}catch(Error){console.error(Error);}
}


// FRONT

var butSeeApps = document.getElementById("seeApps");
var div12 = document.getElementById("div12");
var div13 = document.getElementById("div13");
var div14 = document.getElementById("div14");
var multimode = document.getElementById("webTitle");

//bools

var bool1; // if seeApps but clicked

butSeeApps.addEventListener("click", function(){
    div12.style.transform = "translate(30%, -50%)";
    div13.style.transform = "translate(110%)";
    bool1 = true;
    
})

function walletConnectedEf() {
    
    if (bool1 == true){
        div13.style.transform = "translate(110%, -150%)";
        div12.style.transform = "translate(30%, 120%)";
    } else{
        div12.style.transform = "translate(-50%, 120%)";
    }
    multimode.style.marginTop = "90vh";
    multimode.style.fontSize = "4vw";
    setTimeout(function() {
        div14.style.transform = "translate(-133%, -10%)";
        
    }, 500);
    getEthBalance()
}

async function getEthBalance() {
    try {
        const balance = await web3.eth.getBalance(connectedAddress);
        const balanceInEth = web3.utils.fromWei(balance, 'ether');
        const roundedBalance = parseFloat(balanceInEth).toFixed(5);
        document.getElementById("ethBal1").innerText = "Wallet Balance: " + roundedBalance + " ETH"; //
        document.getElementById("wBal").innerText =  roundedBalance + " ETH"; 
    } catch (error) {
        console.error("Error al obtener el saldo de ETH:", error);
        
    }
}

async function getDashData() {
    try {
        getEthBalance();
        var myVol = await mmContract.methods.volumeChecker(connectedAddress).call();
        var volEther = web3.utils.fromWei(myVol, 'ether');
        var myPoints = await mmContract.methods.getMyPuntuation(connectedAddress).call();
        var myLevel = await mmContract.methods.levelChecker(connectedAddress).call();
        var myActiv = await mmContract.methods.getActivity(connectedAddress).call();
        var lastCheck = await mmContract.methods.canCheckIn().call({from: connectedAddress});

        document.getElementById("mmVol").innerText = "Volume " + volEther + " ETH"; 
        document.getElementById("mmPoints").innerText = myPoints; 
        document.getElementById("lev").innerText = myLevel; 
        document.getElementById("days").innerText = myActiv;
        document.getElementById("x1").innerText = lastCheck[1];
        

    } catch (error) {
        console.error("Error al obtener el saldo de ETH:", error);
        
    }
}


async function disclaimer() {
    try {
        
        var hasSign = await mmContract.methods.seeIfHasSigned(connectedAddress).call();

        if(hasSign[0] == false){
            document.getElementById("signDisc").style.display = "block";
        }
    
        
    } catch(error){console.error(error);}
}


async function signDisclaimer() {
    try {

        var data = `Disclaimer:

        I, as the owner of this public key "${connectedAddress}", hereby accept and acknowledge the following terms and conditions:
        
        - Neither the developers nor the founders of the project shall be held liable for any capital losses incurred as a result of interaction with this smart contract.
        - I acknowledge that I am fully responsible for my actions within this decentralized application (dApp) as the owner of the public key.
        - Prior to engaging in any transactions within this cryptocurrency project, I understand the importance of conducting thorough due diligence and risk assessment.
        - I agree to indemnify and hold harmless the developers and founders of the project from any claims, losses, or damages arising from my participation in this venture.
        - This agreement constitutes a binding contract between myself, as the owner of the public key, and the project, and supersedes any prior agreements or understandings, whether written or oral.
        
        By proceeding with transactions, I fully acknowledge and accept the terms and conditions outlined above.`;
        
        await mmContract.methods.disclaimer(data).send({from: connectedAddress});
        
    } catch(error){console.error(error);}
}

var dAppBut = document.getElementById("appDash"); 
var apps = document.getElementById("allDapps"); 
var aptext =  document.getElementById("aptext");
var isThere = false;

function showApps(){
	if(!isThere){
		apps.style.margin = "4vh -0.3vw";
		aptext.innerHTML = "↓ dApps ↓";
		isThere = true;
		return;
	} else {
		apps.style.margin = "100vh -0.3vw";
		aptext.innerHTML = " ↑ dApps ↑ ";
		isThere = false;
	}
}

var icon1 = document.getElementById("icon1");
var icon2 = document.getElementById("icon2");
var icon3 = document.getElementById("icon3");
var icon4 = document.getElementById("icon4");
var icon5 = document.getElementById("icon5");
var icon6 = document.getElementById("icon6");

var bankApp = document.getElementById("bankApp");
var lotteryApp = document.getElementById("lotteryApp");
var guide1 = document.getElementById("guide1");



icon1.addEventListener("click", function(){
	bankApp.style.display = "block";
	lotteryApp.style.display = "none";
	guide1.style.display = "none";
	showApps();
})

icon2.addEventListener("click", function(){
	bankApp.style.display = "none";
	lotteryApp.style.display = "block";
	guide1.style.display = "none";
	showApps();
})

