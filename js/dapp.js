import "./web3.min.js"
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
//import data from "../data.json" assert { type: "json" };

const json_dati = '[{"tokenAddress": "0xcc3C428AC94A8F61f41854ac1e3E79Ff6DCaA668","decimals" : 5,"reward" : 0.00023619273,"utcTime": "1 Jan 2022 00:00:00 UTC","apiKey": "FX4P1CI1VSPWDVYRNUFY2DYTV9HW3R9TWR"}]';
const firePitAddress = '0xaA32C984AfDfa6B95e88B8aB7faBfa65De89b98C';      //?? burnaddress
const wbnbAddress = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';        // wbnb
const liquidityAddress = '0xf5D9b8947b11DdF5eE33374cC2865E775EBE00Dc';   // lp address
const treasuryAddress = '0xa9c6d0cc785569b450393A69599E97fAED5D9dd9';   // wallet addres
const insuranceAddress = '0x082D0FbCA3D80b2d4A05E20bFc227523bE8EFEF3';   // ??

const data = JSON.parse(json_dati);
const regex = /^0x[a-fA-F0-9]{40}$/;
const loginButton = document.getElementById('loginButton')
window.userWalletAddress = null
const tokenAddress = data[0].tokenAddress;
const reward = data[0].reward;

const apiKey = data[0].apiKey;
const decimals = data[0].decimals;
let start = Date.parse(data[0].utcTime);

let price = 0;
let tokens = 0;

const minABI = [{
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    type: "function",
}];

const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const evmChains = window.evmChains;

// Web3modal instance
let web3Modal
// Chosen wallet provider given by the dialog window
let provider;
/*Setup the orchestra*/
function init() {

  console.log("Initializing example");
  console.log("WalletConnectProvider is", WalletConnectProvider);
  console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum);
  // Tell Web3modal what providers we have available.
  // Built-in web browser provider (only one can exist as a time)
  // like MetaMask, Brave or Opera is added automatically by Web3modal
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        network: "binance",
        rpc:{
          97: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
        }
      }
    }
  };

  web3Modal = new Web3Modal({
    network: "binance",
    cacheProvider: false, // optional
    providerOptions, // required
    disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
  });
  console.log("Web3Modal instance is", web3Modal);
}
/*Kick in the UI action after Web3modal dialog has chosen a provider*/
async function fetchAccountData() {

  // Get a Web3 instance for the wallet
  const web3 = new Web3(provider);

  console.log("Web3 instance is", web3);

  // Get connected chain id from Ethereum node
  
  //const chainId = await web3.eth.getChainId();
  
  // Load chain information over an HTTP API
  //const chainData = evmChains.getChain(chainId);
  //document.querySelector("#network-name").textContent = chainData.name;

  // Get list of accounts of the connected wallet
  const accounts = await web3.eth.getAccounts();

  // MetaMask does not give you all accounts, only the selected account
  console.log("Got accounts", accounts);
  window.userWalletAddress = accounts[0];

  // Go through all accounts and get their ETH balance
  const rowResolvers = accounts.map(async (address) => {
    const balance = await web3.eth.getBalance(address);
    // ethBalance is a BigNumber instance

    const ethBalance = web3.utils.fromWei(balance, "ether");
    const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);
    console.log("humanFriendlyBalance: " + humanFriendlyBalance);

    writeAddress();
    getBalance();

    // Fill in the templated row and put in the document
    /*const clone = template.content.cloneNode(true);
    clone.querySelector(".address").textContent = address;
    clone.querySelector(".balance").textContent = humanFriendlyBalance;
    accountContainer.appendChild(clone);*/
  });
  // Because rendering account does its own RPC commucation
  // with Ethereum node, we do not want to display any results
  // until data for all accounts is loaded
  await Promise.all(rowResolvers);
  // Display fully loaded UI for wallet data
  document.querySelector("#prepare").style.display = "none";
  document.querySelector("#connected").style.display = "block";
}
/**
 * Fetch account data for UI when
 * - User switches accounts in wallet
 * - User switches networks in wallet
 * - User connects wallet initially
 */
async function refreshAccountData() {
  // If any current data is displayed when
  // the user is switching acounts in the wallet
  // immediate hide this data
  document.querySelector("#connected").style.display = "none";
  document.querySelector("#prepare").style.display = "block";
  // Disable button while UI is loading.
  // fetchAccountData() will take a while as it communicates
  // with Ethereum node via JSON-RPC and loads chain data
  // over an API call.
  document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
  await fetchAccountData(provider);
  document.querySelector("#btn-connect").removeAttribute("disabled")
}
/*Connect wallet button pressed.*/
async function onConnect() {
  console.log("Opening a dialog", web3Modal);
  try {
    provider = await web3Modal.connect();
  } catch(e) {
    console.log("Could not get a wallet connection", e);
    return;
  }
  // Subscribe to accounts change
  provider.on("accountsChanged", (accounts) => {
    fetchAccountData();
  });
  // Subscribe to chainId change
  provider.on("chainChanged", (chainId) => {
    fetchAccountData();
  });
  // Subscribe to networkId change
  provider.on("networkChanged", (networkId) => {
    fetchAccountData();
  });
  await refreshAccountData();
}
/*Disconnect wallet button pressed.*/
async function onDisconnect() {
  console.log("Killing the wallet connection", provider);
  if(provider.close) {
    await provider.close();
    // If the cached provider is not cleared,
    // WalletConnect will default to the existing session
    // and does not allow to re-scan the QR code with a new wallet.
    // Depending on your use case you may want or want not his behavir.
    await web3Modal.clearCachedProvider();
    provider = null;
  }
  window.userWalletAddres = null;
  // Set the UI back to the initial state
  document.querySelector("#prepare").style.display = "block";
  document.querySelector("#connected").style.display = "none";
}
/* Main entry point.*/
window.addEventListener('load', async () => {
  init();
  document.querySelector("#btn-connect").addEventListener("click", onConnect);
  document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
});

async function getMarketCap() {    
    const tokenPrice = await fetch("https://api.pancakeswap.info/api/v2/tokens/0xcc3C428AC94A8F61f41854ac1e3E79Ff6DCaA668");
    const priceJson = await tokenPrice.json();
    price = priceJson.data.price;

    document.getElementById("price").innerHTML = "$" + Number(priceJson.data.price).toFixed(3);
    document.getElementById("price2").innerHTML = "$" + Number(priceJson.data.price).toFixed(3);
    document.getElementById("price3").innerHTML = "$" + Number(priceJson.data.price).toFixed(3);
    document.getElementById("input_price").value = Number(priceJson.data.price).toFixed(2);
    Promise.all([
        fetch('https://api.bscscan.com/api?module=stats&action=tokensupply&contractaddress=0xcc3C428AC94A8F61f41854ac1e3E79Ff6DCaA668&apikey=FX4P1CI1VSPWDVYRNUFY2DYTV9HW3R9TWR'), // 0x84952dd90cdc57170b13d2291a8afcedc8f97c71 safutoken
        fetch('https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xcc3C428AC94A8F61f41854ac1e3E79Ff6DCaA668&address=0x4D69f806EA93222474cd82750BCcCB5ecBcb5A7b&tag=latest&apikey=FX4P1CI1VSPWDVYRNUFY2DYTV9HW3R9TWR'), // 0x84952dd90cdc57170b13d2291a8afcedc8f97c71  safutoken / insurance??
        fetch('https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c&address=0x690Dd96cf30B4B0773F763dd7627F7C365C57BdF&tag=latest&apikey=FX4P1CI1VSPWDVYRNUFY2DYTV9HW3R9TWR'), // wbnb / lp contracts
        fetch('https://api.pancakeswap.info/api/v2/tokens/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'), //wbnb 
        fetch('https://api.bscscan.com/api?module=account&action=balancemulti&address=0x0fa39Ea67Fa2bFF4d3581c1EE83269fdA6C422a1,0x9c5345a3C7B5fab558eE1ed2779D3c3d3942C639&tag=latest&apikey=FX4P1CI1VSPWDVYRNUFY2DYTV9HW3R9TWR'), // 
        fetch('js/data/busdTreasury.json'),
        fetch('js/data/busdInsurance.json'),
        fetch('js/data/unicrypt.json')
    ]).then( function (responses) {
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    }).then( function (data){
        let supply = (data[0].result) / Math.pow(10, decimals);
        let firePit = (data[1].result) / Math.pow(10, decimals);
        let liquidityBNB = (data[2].result) / Math.pow(10, 18);
        let treasuryBNB =  ((data[4].result)[0].balance) / Math.pow(10, 18);
        let insuranceBNB =  ((data[4].result)[1].balance) / Math.pow(10, 18);
        let bnbPrice = data[3].data.price;
        let busdTreasury = data[5].result / Math.pow(10, 18);
        let busdInsurance = data[6].result / Math.pow(10, 18);
        let unicryptFire = data[7].result / Math.pow(10, decimals)

        document.getElementById("marketcap").innerHTML = "$" + ((priceJson.data.price * ((supply)/*-((data[1].result) / Math.pow(10, decimals))*/)).toFixed(2)); 
        document.getElementById("circulatingsupply").innerHTML = (supply - (firePit + unicryptFire)).toFixed(2);
        
        document.getElementById("totalsupply").innerHTML = (supply).toFixed(2);
        
        document.getElementById("pool").innerHTML = "$" + (liquidityBNB * bnbPrice).toFixed(2);

        document.getElementById("firepit").innerHTML = ((firePit + unicryptFire)).toFixed(2);
        document.getElementById("firepitvalue").innerHTML = "$" + ((firePit + unicryptFire) * priceJson.data.price).toFixed(2);
        document.getElementById("firepitsupply").innerHTML = (((firePit + unicryptFire) / supply)*100).toFixed(2) + "%";

        document.getElementById("treasury").innerHTML = "$" + ((treasuryBNB * bnbPrice) + busdTreasury).toFixed(2);
        document.getElementById("insurance").innerHTML = "$" + ((insuranceBNB * bnbPrice) + busdInsurance).toFixed(2);

        //document.getElementById("backedliquidity").innerHTML = ((((treasuryBNB * bnbPrice) + busdTreasury)/(liquidityBNB * bnbPrice) ) * 100).toFixed(2) + "%";
    })    
}
function writeAddress() {
    document.querySelector("#btn-disconnect").textContent = window.userWalletAddress.substring(0, 6) + "..." + window.userWalletAddress.substring(38, 42)
}
getMarketCap()

async function getBalance() {
    window.web3 = new Web3(provider);
    const contract = new window.web3.eth.Contract(minABI, tokenAddress);
    
    const result = await contract.methods.balanceOf(window.userWalletAddress).call();

    const format = result / Math.pow(10, 5);
    tokens = format;
    document.getElementById("balance").innerHTML = Number(format).toFixed(4);
    document.getElementById("balance2").innerHTML = Number(format).toFixed(4);
    document.getElementById("next_reward").innerHTML = (Number(format) * reward).toFixed(4);
    document.getElementById("roi_5_reward").innerHTML = (Number(format) * 1.12).toFixed(4);
    document.getElementById("input").value = Number(format).toFixed(4);
}

document.getElementById("input").addEventListener("input", function() {
    calculateReturns();
})

document.getElementById("input_price").addEventListener("input", function() {
    calculateReturns();
})

function calculateReturns(){
    let balance;
    let input_value = document.getElementById("input").value;
    let hours = document.getElementById("days").value * 96;
    let price_input = document.getElementById("input_price").value;
    balance = input_value * Math.pow((1+reward),hours);
    document.getElementById("balance_apy").innerHTML = balance.toFixed(2);

    document.getElementById("import_reward").innerHTML = (reward * input_value).toFixed(4);
    document.getElementById("next_reward").innerHTML = (reward * input_value).toFixed(4);
    
    document.getElementById("totalusd").innerHTML = "$ " + Number(balance * price_input).toFixed(2);
}

document.getElementById('days').addEventListener("input", function(){    
    document.getElementById("time_input").innerHTML = document.getElementById("days").value;
    calculateReturns();
});

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = now - start;
    var diff = (distance / (1000 * 60 * 15));  
    var minutes = Math.floor((distance % (1000 * 60 * 15)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if((14 - minutes) < 10){
        document.getElementById("minutes").innerHTML = "0" + (14 - minutes);
        document.getElementById("minutes2").innerHTML = "0" + (14 - minutes);
        document.getElementById("minutes3").innerHTML = "0" + (14 - minutes);
    }
    else{
        document.getElementById("minutes").innerHTML = (14 - minutes);
        document.getElementById("minutes2").innerHTML = (14 - minutes);
        document.getElementById("minutes3").innerHTML = (14 - minutes);
    }    
    if((59 - seconds) < 10){
        document.getElementById("seconds").innerHTML = "0" + (59 - seconds);
        document.getElementById("seconds2").innerHTML = "0" + (59 - seconds);
        document.getElementById("seconds3").innerHTML = "0" + (59 - seconds);
    }else{
        document.getElementById("seconds").innerHTML = 59 - seconds;
        document.getElementById("seconds2").innerHTML = 59 - seconds;
        document.getElementById("seconds3").innerHTML = 59 - seconds;
    }
    if(minutes == 0 && seconds == 0){
        console.log("Updating Balance...")
        getBalance();
    }
}, 1000);

async function getBalanceFromAddress(wallet){
    const apiCall = await fetch("https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress="+ tokenAddress + "&address=" + wallet +"&tag=latest&apikey="+ apiKey);
    const balanceJson = await apiCall.json();  
    document.getElementById("input").value = (balanceJson.result / Math.pow(10, decimals)).toFixed(3);
    document.getElementById("balance").innerHTML = (balanceJson.result / Math.pow(10, decimals)).toFixed(3);
    calculateReturns()
}

document.getElementById("button").addEventListener("click", function(){

    document.getElementById("import").setCustomValidity("Invalid Address");
    let temp = document.getElementById("import").value;

    if (regex.test(temp) && (!temp == '') ) {
        getBalanceFromAddress(temp);
    }
    else{
        document.getElementById("import").reportValidity();
        console.log("Wrong Address");
    }
})
/*
document.getElementById("button_dashboard").addEventListener("click", function(){

    document.getElementById("import_dashboard").setCustomValidity("Invalid Address");
    let temp = document.getElementById("import_dashboard").value;

    if (regex.test(temp) && (!temp == '') ) {
        getBalanceFromAddress(temp);
    }
    else{
        document.getElementById("import").reportValidity();
        console.log("Wrong Address");
    }
})*/


