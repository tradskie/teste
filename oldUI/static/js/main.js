(this["webpackJsonp@scaffold-eth/react-app"] = this["webpackJsonp@scaffold-eth/react-app"] || []).push([
    [0], {
        300: function(e) {
            e.exports = JSON.parse("{}")
        },
        301: function(e) {
            e.exports = JSON.parse('{"a":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sync","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]}')
        },
        302: function(e) {
            e.exports = JSON.parse('{"a":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalSupply","type":"uint256"}],"name":"LogRebase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEAD","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DECIMALS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INDEX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_UINT256","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RATE_DECIMALS","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SafutitanoRiskFreeFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SafutitanoRiskFreeFundFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ZERO","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_autoAddLiquidity","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_autoRebase","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_initRebaseStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_lastAddLiquidityTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_lastRebasedTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"autoLiquidityFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"gons","type":"uint256"}],"name":"balanceForGons","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"blacklist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"checkFeeExempt","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeDenominator","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCirculatingSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"accuracy","type":"uint256"}],"name":"getLiquidityBacking","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"gonsForBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"index","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isNotInSwap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"manualSync","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pairAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pairContract","outputs":[{"internalType":"contract IPancakeSwapPair","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"remWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"addrs","type":"address[]"}],"name":"remWhitelists","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract IPancakeSwapRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sellFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_flag","type":"bool"}],"name":"setAutoAddLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_flag","type":"bool"}],"name":"setAutoRebase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_botAddress","type":"address"},{"internalType":"bool","name":"_flag","type":"bool"}],"name":"setBotBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_autoLiquidityFund","type":"address"},{"internalType":"address","name":"_treasuryFund","type":"address"},{"internalType":"address","name":"_SafutitanoRiskFreeFund","type":"address"},{"internalType":"address","name":"_supplyControl","type":"address"}],"name":"setFeeReceivers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setLP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_pairAddress","type":"address"}],"name":"setPairAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"setWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"addrs","type":"address[]"}],"name":"setWhitelists","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"supplyControl","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"supplyControlFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasuryFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasuryFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawAllToTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]}')
        },                                  
        303: function(e) {
            e.exports = JSON.parse('{"a":[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]}')
        },
        369: function(e, t) {},
        412: function(e, t) {},
        414: function(e, t) {},
        439: function(e, t) {},
        441: function(e, t) {},
        453: function(e, t) {},
        454: function(e, t) {},
        478: function(e, t) {},
        480: function(e, t) {},
        602: function(e, t, a) {},
        603: function(e, t, a) {},
        604: function(e, t, a) {},
        605: function(e, t, a) {},
        606: function(e, t, a) {},
        607: function(e, t, a) {},
        609: function(e, t, a) {},
        610: function(e, t, a) {},
        611: function(e, t, a) {},
        612: function(e, t, a) {},
        613: function(e, t, a) {},
        616: function(e, t, a) {
            "use strict";
            a.r(t);
            var n, i = a(36),
                r = a.n(i),
                s = a(27),
                c = a(0),
                A = a.n(c),
                o = a(2),
                l = a.n(o),
                u = a(11),
                d = a(42),
                p = a(26),
                m = a(33),
                b = a(105),
                f = a(313),
                j = a.n(f),
                C = a(68),
                g = a(208),
                y = a(340);
            ! function(e) {
                e[e.BSC = 56] = "BSC"
            }(n || (n = {}));
            var h = n.BSC,
                O = {
                    SAFUU_ADDRESS: "0x84952dd90cdc57170b13d2291a8afcedc8f97c71",
                    FIREPIT_ADDRESS: "0x4d69f806ea93222474cd82750bcccb5ecbcb5a7b",
                    TREASURY_ADDRESS: "0x0fa39ea67fa2bff4d3581c1ee83269fda6c422a1",
                    SIF_ADDRESS: "0x9c5345a3C7B5fab558eE1ed2779D3c3d3942C639",
                    PAIR_ADDRESS: "0x690dd96cf30b4b0773f763dd7627f7c365c57bdf",
                    BUSD_ADDRESS: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
                },
                x = function(e) {
                    if (e === n.BSC) return O;
                    throw Error("Network don't support")
                },
                w = "Something went wrong",
                v = "Switch to the Binance Smart Chain network?",
                B = function() {
                    return window.ethereum.request({
                        method: "wallet_switchEthereumChain",
                        params: [{
                            chainId: "0x38"
                        }]
                    })
                },
                I = function() {
                    var e = Object(u.a)(l.a.mark((function e() {
                        return l.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!window.ethereum) {
                                        e.next = 20;
                                        break
                                    }
                                    return e.prev = 1, e.next = 4, B();
                                case 4:
                                    e.next = 20;
                                    break;
                                case 6:
                                    if (e.prev = 6, e.t0 = e.catch(1), 4902 !== e.t0.code) {
                                        e.next = 19;
                                        break
                                    }
                                    return e.prev = 9, e.next = 12, window.ethereum.request({
                                        method: "wallet_addEthereumChain",
                                        params: [{
                                            chainId: "0xa86a",
                                            chainName: "Binance Smart Chain Mainnet",
                                            rpcUrls: ["https://bsc-dataseed1.binance.org"],
                                            blockExplorerUrls: ["https://bscscan.com"],
                                            nativeCurrency: {
                                                name: "BNB",
                                                symbol: "BNB",
                                                decimals: 18
                                            }
                                        }]
                                    });
                                case 12:
                                    return e.next = 14, B();
                                case 14:
                                    e.next = 19;
                                    break;
                                case 16:
                                    e.prev = 16, e.t1 = e.catch(9), console.log(e.t0);
                                case 19:
                                    console.log(e.t0);
                                case 20:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 6],
                            [9, 16]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                E = a(1),
                Q = A.a.createContext(null),
                S = function() {
                    var e = Object(c.useContext)(Q);
                    if (!e) throw new Error("useWeb3Context() can only be used inside of <Web3ContextProvider />, please declare it at a higher level.");
                    var t = e.onChainProvider;
                    return Object(c.useMemo)((function() {
                        return Object(b.a)({}, t)
                    }), [e])
                },
                D = function() {
                    return S().address
                },
                F = function(e) {
                    var t = e.children,
                        a = (Object(p.b)(), Object(c.useState)(!1)),
                        i = Object(s.a)(a, 2),
                        r = i[0],
                        A = i[1],
                        o = Object(c.useState)(h),
                        d = Object(s.a)(o, 2),
                        b = d[0],
                        f = (d[1], Object(c.useState)(h)),
                        O = Object(s.a)(f, 2),
                        x = O[0],
                        w = O[1],
                        B = Object(c.useState)(""),
                        S = Object(s.a)(B, 2),
                        D = S[0],
                        F = S[1],
                        N = Object(c.useState)("https://bsc-dataseed1.binance.org"),
                        P = Object(s.a)(N, 2),
                        M = P[0],
                        R = (P[1], Object(c.useState)(new C.a(M))),
                        k = Object(s.a)(R, 2),
                        T = k[0],
                        H = k[1],
                        L = Object(c.useState)(new j.a({
                            cacheProvider: !0,
                            providerOptions: {
                                walletconnect: {
                                    package: y.a,
                                    options: {
                                        rpc: Object(m.a)({}, n.BSC, "https://bsc-dataseed1.binance.org")
                                    }
                                }
                            }
                        })),
                        W = Object(s.a)(L, 1)[0],
                        J = function() {
                            return !!W && !!W.cachedProvider
                        },
                        G = Object(c.useCallback)((function(e) {
                            e.on && (e.on("accountsChanged", (function() {
                                return setTimeout((function() {
                                    return window.location.reload()
                                }), 1)
                            })), e.on("chainChanged", function() {
                                var e = Object(u.a)(l.a.mark((function e(t) {
                                    return l.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                U(t);
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()), e.on("network", (function(e, t) {
                                t && window.location.reload()
                            })))
                        }), [T]),
                        U = function() {
                            var e = Object(u.a)(l.a.mark((function e(t) {
                                var a;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            a = Number(t), w(a);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        V = Object(c.useCallback)(Object(u.a)(l.a.mark((function e() {
                            var t, a, i, r;
                            return l.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, W.connect();
                                    case 2:
                                        return t = e.sent, G(t), a = new g.a(t, "any"), e.next = 7, a.getNetwork().then((function(e) {
                                            return Number(e.chainId)
                                        }));
                                    case 7:
                                        return i = e.sent, e.next = 10, a.getSigner().getAddress();
                                    case 10:
                                        return r = e.sent, F(r), w(i), i === n.BSC && H(a), A(!0), e.abrupt("return", a);
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [T, W, r]),
                        z = function() {
                            var e = Object(u.a)(l.a.mark((function e() {
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (x === h) {
                                                e.next = 7;
                                                break
                                            }
                                            if (!window.confirm(v)) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.next = 5, I();
                                        case 5:
                                            window.location.reload();
                                        case 6:
                                            return e.abrupt("return", !0);
                                        case 7:
                                            return e.abrupt("return", !1);
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        K = Object(c.useCallback)(Object(u.a)(l.a.mark((function e() {
                            return l.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        W.clearCachedProvider(), A(!1), setTimeout((function() {
                                            window.location.reload()
                                        }), 1);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [T, W, r]),
                        Y = Object(c.useMemo)((function() {
                            return {
                                connect: V,
                                disconnect: K,
                                hasCachedProvider: J,
                                provider: T,
                                connected: r,
                                address: D,
                                chainID: b,
                                web3Modal: W,
                                providerChainID: x,
                                checkWrongNetwork: z
                            }
                        }), [V, K, J, T, r, D, b, W, x]);
                    return Object(E.jsx)(Q.Provider, {
                        value: {
                            onChainProvider: Y
                        },
                        children: t
                    })
                },
                N = a(59),
                P = (a(300), a(301)),
                M = a(302),
                R = a(303);

            function k(e, t) {
                return T.apply(this, arguments)
            }

            function T() {
                return (T = Object(u.a)(l.a.mark((function e(t, a) {
                    var n, i, r;
                    return l.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return "0x690dd96cf30b4b0773f763dd7627f7c365c57bdf", n = new N.a.Contract("0x690dd96cf30b4b0773f763dd7627f7c365c57bdf", P.a, a), e.next = 4, n.getReserves();
                            case 4:
                                return i = e.sent, r = i[0] / i[1], e.abrupt("return", r / Math.pow(10, 13));
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var H = a(213),
                L = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        a = Object(H.a)(e).split(".");
                    if (1 === a.length) return Object(H.a)(e);
                    a.push(a.pop().substring(0, t));
                    var n = a.join(".");
                    return n
                },
                W = a.p + "static/media/favicon.ca35646e.png";

            function J(e) {
                if ("SAFTI" == e) return function(e) {
                    var t = window.location.origin;
                    return "".concat(t, "/").concat(e)
                }(W);
                throw Error("Token url doesn't support: ".concat(e))
            }
            var G = function(e, t) {
                    Object.keys(t).forEach((function(a) {
                        e[a] = t[a]
                    }))
                },
                U = a(327),
                V = a.n(U),
                z = {},
                K = function() {
                    var e = Object(u.a)(l.a.mark((function e() {
                        var t, a;
                        return l.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd", e.next = 3, V.a.get("https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd");
                                case 3:
                                    t = e.sent, a = t.data, z.BNB = a.binancecoin.usd;
                                    
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                Y = a(71),
                X = a(156),
                Z = Object(Y.b)("account/getBalances", function() {
                    var e = Object(u.a)(l.a.mark((function e(t) {
                        var a, n, i, r, s, c;
                        return l.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = t.address, n = t.networkID, i = t.provider, r = x(n), s = new N.a.Contract(r.SAFUU_ADDRESS, M.a, i), e.next = 5, s.balanceOf(a);
                                case 5:
                                    return c = e.sent, e.abrupt("return", {
                                        balances: {
                                            safuu: N.a.utils.formatUnits(c, 5)
                                        }
                                    });
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                q = Object(Y.b)("account/loadAccountDetails", function() {
                    var e = Object(u.a)(l.a.mark((function e(t) {
                        var a, n, i, r, s, c;
                        return l.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (a = t.networkID, n = t.provider, i = t.address, r = 0, !(s = x(a)).SAFUU_ADDRESS) {
                                        e.next = 8;
                                        break
                                    }
                                    return c = new N.a.Contract(s.SAFUU_ADDRESS, M.a, n), e.next = 7, c.balanceOf(i);
                                case 7:
                                    r = e.sent;
                                case 8:
                                    return e.abrupt("return", {
                                        balances: {
                                            safuu: N.a.utils.formatUnits(r, 5)
                                        }
                                    });
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                _ = Object(Y.c)({
                    name: "account",
                    initialState: {
                        loading: !0,
                        balances: {
                            safuu: "0"
                        },
                        tokens: {}
                    },
                    reducers: {
                        fetchAccountSuccess: function(e, t) {
                            G(e, t.payload)
                        }
                    },
                    extraReducers: function(e) {
                        e.addCase(q.pending, (function(e) {
                            e.loading = !0
                        })).addCase(q.fulfilled, (function(e, t) {
                            G(e, t.payload), e.loading = !1
                        })).addCase(q.rejected, (function(e, t) {
                            var a = t.error;
                            e.loading = !1, console.log(a)
                        })).addCase(Z.pending, (function(e) {
                            e.loading = !0
                        })).addCase(Z.fulfilled, (function(e, t) {
                            G(e, t.payload), e.loading = !1
                        })).addCase(Z.rejected, (function(e, t) {
                            var a = t.error;
                            e.loading = !1, console.log(a)
                        }))
                    }
                }),
                $ = _.reducer;
            _.actions.fetchAccountSuccess, Object(X.a)((function(e) {
                return e.account
            }), (function(e) {
                return e
            }));

            function ee(e, t) {
                return te.apply(this, arguments)
            }

            function te() {
                return (te = Object(u.a)(l.a.mark((function e(t, a) {
                    var n, i, r;
                    return l.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = x(t), i = new N.a.Contract(n.SAFUU_ADDRESS, M.a, a), e.next = 4, i._lastRebasedTime();
                            case 4:
                                return r = e.sent, e.abrupt("return", r);
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var ae = function() {
                    var e = Object(p.b)(),
                        t = S(),
                        a = t.chainID,
                        n = t.provider,
                        i = D(),
                        r = Object(p.c)((function(e) {
                            return e.app.lastRebasedTime
                        })),
                        A = Object(c.useState)(9e5),
                        o = Object(s.a)(A, 2),
                        l = o[0],
                        u = o[1];
                    return Object(c.useEffect)((function() {
                        var t = setInterval((function() {
                            u(9 * Math.pow(10, 5) - (Date.now() - r) % (9 * Math.pow(10, 5))), l <= 1e3 && (e(ie({
                                networkID: a,
                                provider: n
                            })), console.log("load app"), "" != i && (e(q({
                                networkID: a,
                                address: i,
                                provider: n
                            })), console.log("load account")))
                        }), 1e3);
                        return function() {
                            clearInterval(t)
                        }
                    }), [l]), ne(l)
                },
                ne = function(e) {
                    var t = Math.floor(e / 864e5),
                        a = Math.floor(e % 864e5 / 36e5),
                        n = String(Math.floor(e % 36e5 / 6e4));
                    Number(n) < 10 && (n = "0".concat(n));
                    var i = String(Math.floor(e % 6e4 / 1e3));
                    return Number(i) < 10 && (i = "0".concat(i)), [t, a, n, i]
                },
                ie = Object(Y.b)("app/loadAppDetails", function() {
                    var e = Object(u.a)(l.a.mark((function e(t) {
                        var a, n, i, r, s, c, A, o, u, d, p, m, b, f, j, C, g, y, h, O, w, v, B, I, E, Q, S, D, F, T, H;
                        return l.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = t.networkID, n = t.provider, i = Number(z["BNB"]), r = x(a), e.next = 5, n.getBlockNumber();
                                case 5:
                                    return s = e.sent, e.next = 8, n.getBlock(s);
                                case 8:
                                    return c = e.sent.timestamp, e.next = 11, ee(a, n);
                                case 11:
                                    return A = e.sent, o = new N.a.Contract(r.SAFUU_ADDRESS, M.a, n), u = new N.a.Contract(r.BUSD_ADDRESS, R.a, n), d = new N.a.Contract(r.PAIR_ADDRESS, P.a, n), e.next = 17, k(a, n);
                                case 17:
                                    return e.t0 = e.sent, e.t1 = i, p = e.t0 * e.t1, e.next = 22, o.totalSupply();
                                case 22:
                                    return e.t2 = e.sent, e.t3 = Math.pow(10, 5), m = e.t2 / e.t3, e.t4 = m, e.next = 28, o.balanceOf(r.FIREPIT_ADDRESS);
                                case 28:
                                    return e.t5 = e.sent, e.t6 = Math.pow(10, 5), e.t7 = e.t5 / e.t6, b = e.t4 - e.t7, f = m * p, j = Math.pow(1.0002355, 480) - 1, C = Math.pow(1.0002355, 96) - 1, g = Math.pow(1.0002355, 96) - 1, e.next = 38, d.getReserves();
                                case 38:
                                    return y = e.sent, h = y[0] / Math.pow(10, 18), O = h * i * 2, e.next = 43, o.balanceOf(r.TREASURY_ADDRESS);
                                case 43:
                                    return e.t8 = e.sent, e.t9 = Math.pow(10, 5), e.t10 = e.t8 / e.t9, e.t11 = p, w = e.t10 * e.t11, e.next = 50, n.getBalance(r.TREASURY_ADDRESS);
                                case 50:
                                    return v = e.sent, B = Number(N.a.utils.formatEther(v)) * i, e.t12 = Number, e.next = 55, u.balanceOf(r.TREASURY_ADDRESS);
                                case 55:
                                    return e.t13 = e.sent, e.t14 = (0, e.t12)(e.t13), e.t15 = Math.pow(10, 18), I = e.t14 / e.t15, E = B + w + I, Q = "100%", e.next = 63, o.balanceOf(r.FIREPIT_ADDRESS);
                                case 63:
                                    return e.t16 = e.sent, e.t17 = Math.pow(10, 5), S = e.t16 / e.t17, e.next = 68, n.getBalance(r.SIF_ADDRESS);
                                case 68:
                                    return D = e.sent, e.next = 71, u.balanceOf(r.SIF_ADDRESS);
                                case 71:
                                    return e.t18 = e.sent, e.t19 = Math.pow(10, 18), F = e.t18 / e.t19, T = Number(N.a.utils.formatEther(D)) * i + Number(F), H = Math.pow(1.0002355, 35040) - 1, e.abrupt("return", {
                                        totalSupply: m,
                                        marketCap: f,
                                        currentBlock: s,
                                        dailyRate: g,
                                        circSupply: b,
                                        fiveDayRate: j,
                                        marketPrice: p,
                                        currentBlockTime: c,
                                        oneDayRate: C,
                                        lastRebasedTime: A,
                                        backedLiquidity: Q,
                                        bnbLiquidityValue: O,
                                        sifValue: T,
                                        firepitBalance: S,
                                        treasuryValue: E,
                                        currentApy: H
                                    }
                                    );
                                case 77:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                re = Object(Y.c)({
                    name: "app",
                    initialState: {
                        loading: !0
                    },
                    reducers: {
                        fetchAppSuccess: function(e, t) {
                            G(e, t.payload)
                        }
                    },
                    extraReducers: function(e) {
                        e.addCase(ie.pending, (function(e, t) {
                            e.loading = !0
                        })).addCase(ie.fulfilled, (function(e, t) {
                            G(e, t.payload), e.loading = !1
                        })).addCase(ie.rejected, (function(e, t) {
                            var a = t.error;
                            e.loading = !1, console.log(a)
                        }))
                    }
                }),
                se = re.reducer,
                ce = (re.actions.fetchAppSuccess, Object(X.a)((function(e) {
                    return e.app
                }), (function(e) {
                    return e
                })), a(644));
            a(602);
            var Ae = function() {
                    return Object(E.jsx)("div", {
                        className: "loader-wrap",
                        children: Object(E.jsx)(ce.a, {
                            size: 60,
                            color: "inherit"
                        })
                    })
                },
                oe = (a(603), a(650)),
                le = a(651),
                ue = a(648),
                de = a(649),
                pe = a.p + "static/media/hamburger.f09dcc2a.svg",
                me = a(645),
                be = a(646),
                fe = a(647);
            a(604);
            var je = function() {
                var e = Object(c.useState)(null),
                    t = Object(s.a)(e, 2),
                    a = t[0],
                    n = t[1],
                    i = window.ethereum,
                    r = Object(p.c)((function(e) {
                        return e.app && e.app.networkID || h
                    })),
                    A = x(r).SAFUU_ADDRESS,
                    o = function(e) {
                        n(a ? null : e.currentTarget)
                    },
                    d = Boolean(a);
                return Object(E.jsxs)("div", {
                    className: "time-menu-root",
                    onMouseEnter: function(e) {
                        return o(e)
                    },
                    onMouseLeave: function(e) {
                        return o(e)
                    },
                    children: [Object(E.jsx)("div", {
                        className: "time-menu-btn",
                        children: Object(E.jsx)("p", {
                            children: "SAFTI"
                        })
                    }), Object(E.jsx)(me.a, {
                        className: "time-menu-popper",
                        open: d,
                        anchorEl: a,
                        transition: !0,
                        children: function(e) {
                            var t, a, n = e.TransitionProps;
                            return Object(E.jsx)(be.a, Object(b.a)(Object(b.a)({}, n), {}, {
                                timeout: 200,
                                children: Object(E.jsxs)("div", {
                                    className: "tooltip",
                                    children: [Object(E.jsx)(fe.a, {
                                        className: "tooltip-item",
                                        href: "https://app.bogged.finance/bsc/swap?tokenIn=BNB&tokenOut=0x84952dd90cdc57170b13d2291a8afcedc8f97c71",
                                        target: "_blank",
                                        children: Object(E.jsx)("p", {
                                            children: "Buy on Bog Swap"
                                        })
                                    }), i && Object(E.jsxs)("div", {
                                        className: "add-tokens",
                                        children: [Object(E.jsx)("div", {
                                            className: "divider"
                                        }), Object(E.jsx)("p", {
                                            className: "add-tokens-title",
                                            children: "ADD TOKEN TO WALLET"
                                        }), Object(E.jsx)("div", {
                                            className: "divider"
                                        }), Object(E.jsx)("div", {
                                            className: "tooltip-item",
                                            onClick: (t = "SAFTI", a = A, Object(u.a)(l.a.mark((function e() {
                                                var n;
                                                return l.a.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (n = J(t.toLowerCase()), !window.ethereum) {
                                                                e.next = 10;
                                                                break
                                                            }
                                                            return e.prev = 2, e.next = 5, window.ethereum.request({
                                                                method: "wallet_watchAsset",
                                                                params: {
                                                                    type: "ERC20",
                                                                    options: {
                                                                        address: a,
                                                                        symbol: t,
                                                                        decimals: 5,
                                                                        image: n
                                                                    }
                                                                }
                                                            });
                                                        case 5:
                                                            e.next = 10;
                                                            break;
                                                        case 7:
                                                            e.prev = 7, e.t0 = e.catch(2), console.log(e.t0);
                                                        case 10:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e, null, [
                                                    [2, 7]
                                                ])
                                            })))),
                                            children: Object(E.jsx)("p", {
                                                children: "SAFTI"
                                            })
                                        })]
                                    })]
                                })
                            }))
                        }
                    })]
                })
            };
            a(605);
            var Ce = function() {
                    var e = S(),
                        t = e.connect,
                        a = e.disconnect,
                        n = e.connected,
                        i = e.web3,
                        r = e.providerChainID,
                        A = e.checkWrongNetwork,
                        o = (Object(p.b)(), Object(c.useState)(n)),
                        l = Object(s.a)(o, 2),
                        u = l[0],
                        d = l[1],
                        m = Object(p.c)((function(e) {
                            return e.pendingTransactions
                        })),
                        b = "Connect Wallet",
                        f = t,
                        j = {};
                    return u && (b = "Disconnect", f = a), m && m.length > 0 && (b = "".concat(m.length, " Pending "), f = function() {}), u && r !== h && (b = "Wrong network", j = {
                        backgroundColor: "rgb(255, 67, 67)"
                    }, f = function() {
                        A()
                    }), Object(c.useEffect)((function() {
                        d(n)
                    }), [i, n]), Object(E.jsxs)("div", {
                        className: "connect-button",
                        style: j,
                        onClick: f,
                        children: [Object(E.jsx)("p", {
                            children: b
                        }), m.length > 0 && Object(E.jsx)("div", {
                            className: "connect-button-progress",
                            children: Object(E.jsx)(ce.a, {
                                size: 15,
                                color: "inherit"
                            })
                        })]
                    })
                },
                ge = (a(606), 280),
                ye = 969,
                he = Object(ue.a)((function(e) {
                    var t;
                    return {
                        appBar: (t = {}, Object(m.a)(t, e.breakpoints.up("sm"), {
                            width: "100%",
                            padding: "20px 0 30px 0"
                        }), Object(m.a)(t, "justifyContent", "flex-end"), Object(m.a)(t, "alignItems", "flex-end"), Object(m.a)(t, "background", "transparent"), Object(m.a)(t, "backdropFilter", "none"), Object(m.a)(t, "zIndex", 10), t),
                        topBar: {
                            transition: e.transitions.create("margin", {
                                easing: e.transitions.easing.sharp,
                                duration: ye
                            }),
                            marginLeft: ge
                        },
                        topBarShift: {
                            transition: e.transitions.create("margin", {
                                easing: e.transitions.easing.easeOut,
                                duration: ye
                            }),
                            marginLeft: 0
                        }
                    }
                }));
            var Oe = function(e) {
                    var t = e.handleDrawerToggle,
                        a = e.drawe,
                        n = he(),
                        i = Object(de.a)("(max-width: 400px)");
                    return Object(E.jsx)("div", {
                        className: "".concat(n.topBar, " ").concat(!a && n.topBarShift),
                        children: Object(E.jsx)(oe.a, {
                            position: "sticky",
                            className: n.appBar,
                            elevation: 0,
                            children: Object(E.jsxs)(le.a, {
                                disableGutters: !0,
                                className: "dapp-topbar",
                                children: [Object(E.jsx)("div", {
                                    onClick: t,
                                    className: "dapp-topbar-slider-btn",
                                    children: Object(E.jsx)("img", {
                                        src: pe,
                                        alt: ""
                                    })
                                }), Object(E.jsxs)("div", {
                                    className: "dapp-topbar-btns-wrap",
                                    children: [!i && Object(E.jsx)(je, {}), Object(E.jsx)(Ce, {})]
                                })]
                            })
                        })
                    })
                },
                xe = a(667),
                we = a(665),
                ve = a(107),
                Be = a(652),
                Ie = ["title", "titleId"];

            function Ee() {
                return (Ee = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Qe(e, t) {
                if (null == e) return {};
                var a, n, i = function(e, t) {
                    if (null == e) return {};
                    var a, n, i = {},
                        r = Object.keys(e);
                    for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || (i[a] = e[a]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (i[a] = e[a])
                }
                return i
            }

            function Se(e, t) {
                var a = e.title,
                    n = e.titleId,
                    i = Qe(e, Ie);
                return c.createElement("svg", Ee({
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    width: "20pt",
                    height: "20pt",
                    viewBox: "0 0 20 20",
                    ref: t,
                    "aria-labelledby": n
                }, i), a ? c.createElement("title", {
                    id: n
                }, a) : null, c.createElement("g", {
                    id: "surface1"
                }, c.createElement("path", {
                    style: {
                        stroke: "none",
                        fillRule: "nonzero",
                        fill: "rgb(100%,100%,100%)",
                        fillOpacity: 1
                    },
                    d: "M 18.609375 6.992188 C 18.609375 8.164062 18.449219 9.167969 18.125 10 C 17.800781 10.832031 17.332031 11.472656 16.714844 11.921875 C 16.09375 12.367188 15.476562 12.691406 14.859375 12.894531 C 14.242188 13.09375 13.519531 13.242188 12.683594 13.332031 C 13.273438 13.828125 13.566406 14.613281 13.566406 15.695312 L 13.566406 19.859375 L 7.128906 19.859375 L 7.128906 16.851562 C 6.636719 16.945312 6.179688 16.992188 5.765625 16.992188 C 5.347656 16.992188 4.992188 16.953125 4.699219 16.875 C 4.40625 16.796875 4.144531 16.699219 3.910156 16.574219 C 3.679688 16.449219 3.496094 16.320312 3.355469 16.179688 C 3.21875 16.042969 3.101562 15.910156 3.007812 15.785156 C 2.917969 15.664062 2.855469 15.554688 2.824219 15.464844 L 2.777344 15.324219 C 2.59375 14.890625 2.382812 14.523438 2.152344 14.214844 C 1.921875 13.90625 1.726562 13.703125 1.574219 13.609375 L 1.34375 13.472656 C 1.003906 13.195312 0.832031 13 0.832031 12.894531 C 0.832031 12.785156 0.941406 12.714844 1.15625 12.683594 L 1.433594 12.683594 C 1.804688 12.714844 2.160156 12.839844 2.5 13.054688 C 2.839844 13.273438 3.070312 13.488281 3.195312 13.703125 L 3.425781 13.980469 C 4.257812 15.433594 5.507812 15.785156 7.175781 15.046875 C 7.269531 14.304688 7.546875 13.734375 8.007812 13.332031 C 7.175781 13.242188 6.449219 13.09375 5.832031 12.894531 C 5.214844 12.691406 4.605469 12.367188 4.003906 11.921875 C 3.402344 11.472656 2.933594 10.832031 2.59375 10 C 2.253906 9.167969 2.082031 8.164062 2.082031 6.992188 C 2.082031 5.664062 2.53125 4.523438 3.425781 3.566406 C 3.023438 2.546875 3.070312 1.40625 3.566406 0.140625 C 3.65625 0.167969 3.78125 0.160156 3.933594 0.117188 C 4.089844 0.0703125 4.476562 0.160156 5.09375 0.394531 C 5.710938 0.625 6.390625 0.988281 7.128906 1.480469 C 8.148438 1.203125 9.226562 1.050781 10.371094 1.019531 C 11.480469 1.050781 12.5625 1.203125 13.609375 1.480469 C 14.320312 0.988281 14.976562 0.632812 15.578125 0.417969 C 16.179688 0.199219 16.589844 0.09375 16.804688 0.09375 L 17.128906 0.140625 C 17.65625 1.40625 17.699219 2.546875 17.269531 3.566406 C 18.164062 4.523438 18.609375 5.664062 18.609375 6.992188 Z M 2.316406 13.265625 C 2.34375 13.1875 2.308594 13.125 2.199219 13.078125 C 2.089844 13.03125 2.023438 13.046875 1.992188 13.125 C 1.960938 13.203125 2 13.265625 2.105469 13.308594 C 2.214844 13.355469 2.285156 13.339844 2.316406 13.265625 Z M 2.847656 13.84375 C 2.925781 13.78125 2.910156 13.695312 2.800781 13.589844 C 2.691406 13.480469 2.601562 13.457031 2.523438 13.519531 C 2.445312 13.582031 2.460938 13.664062 2.570312 13.773438 C 2.675781 13.882812 2.769531 13.90625 2.847656 13.84375 Z M 3.332031 14.582031 C 3.425781 14.523438 3.425781 14.421875 3.332031 14.28125 C 3.242188 14.144531 3.148438 14.105469 3.054688 14.167969 C 2.964844 14.226562 2.964844 14.328125 3.054688 14.46875 C 3.148438 14.605469 3.242188 14.644531 3.332031 14.582031 Z M 4.050781 15.324219 C 4.128906 15.230469 4.105469 15.117188 3.980469 14.976562 C 3.859375 14.839844 3.75 14.816406 3.65625 14.90625 C 3.566406 15 3.589844 15.117188 3.726562 15.253906 C 3.867188 15.394531 3.972656 15.417969 4.050781 15.324219 Z M 5 15.71875 C 5.03125 15.609375 4.960938 15.523438 4.792969 15.464844 C 4.621094 15.402344 4.523438 15.433594 4.492188 15.554688 C 4.460938 15.679688 4.53125 15.765625 4.699219 15.808594 C 4.867188 15.855469 4.96875 15.824219 5 15.71875 Z M 5.785156 15.972656 C 5.972656 15.972656 6.066406 15.910156 6.066406 15.785156 C 6.066406 15.664062 5.972656 15.601562 5.785156 15.601562 C 5.601562 15.601562 5.507812 15.664062 5.507812 15.785156 C 5.507812 15.910156 5.601562 15.972656 5.785156 15.972656 Z M 6.804688 15.878906 C 6.898438 15.847656 6.96875 15.808594 7.015625 15.765625 C 7.058594 15.71875 7.066406 15.679688 7.035156 15.648438 C 7.035156 15.492188 6.945312 15.433594 6.757812 15.464844 C 6.667969 15.492188 6.597656 15.53125 6.550781 15.578125 C 6.503906 15.625 6.496094 15.679688 6.527344 15.742188 C 6.527344 15.863281 6.621094 15.910156 6.804688 15.878906 Z M 6.804688 15.878906 "
                })))
            }
            var De = c.forwardRef(Se),
                Fe = (a.p, ["title", "titleId"]);

            function Ne() {
                return (Ne = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Pe(e, t) {
                if (null == e) return {};
                var a, n, i = function(e, t) {
                    if (null == e) return {};
                    var a, n, i = {},
                        r = Object.keys(e);
                    for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || (i[a] = e[a]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (i[a] = e[a])
                }
                return i
            }

            function Me(e, t) {
                var a = e.title,
                    n = e.titleId,
                    i = Pe(e, Fe);
                return c.createElement("svg", Ne({
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    width: "20pt",
                    height: "20pt",
                    viewBox: "0 0 20 20",
                    ref: t,
                    "aria-labelledby": n
                }, i), a ? c.createElement("title", {
                    id: n
                }, a) : null, c.createElement("g", {
                    id: "surface1"
                }, c.createElement("path", {
                    style: {
                        stroke: "none",
                        fillRule: "nonzero",
                        fill: "rgb(100%,100%,100%)",
                        fillOpacity: 1
                    },
                    d: "M 19.703125 4.113281 C 19.007812 4.421875 18.257812 4.628906 17.472656 4.726562 C 18.285156 4.238281 18.890625 3.476562 19.179688 2.578125 C 18.417969 3.027344 17.585938 3.347656 16.714844 3.519531 C 16.128906 2.894531 15.355469 2.480469 14.511719 2.339844 C 13.667969 2.203125 12.800781 2.34375 12.046875 2.75 C 11.292969 3.152344 10.695312 3.792969 10.34375 4.574219 C 9.988281 5.351562 9.90625 6.226562 10.101562 7.058594 C 8.554688 6.984375 7.046875 6.582031 5.667969 5.882812 C 4.289062 5.183594 3.074219 4.203125 2.097656 3.003906 C 1.765625 3.578125 1.574219 4.246094 1.574219 4.953125 C 1.574219 5.59375 1.730469 6.222656 2.03125 6.789062 C 2.332031 7.351562 2.769531 7.832031 3.300781 8.1875 C 2.683594 8.167969 2.082031 8 1.542969 7.699219 L 1.542969 7.75 C 1.542969 8.648438 1.851562 9.515625 2.417969 10.210938 C 2.988281 10.902344 3.777344 11.378906 4.65625 11.558594 C 4.085938 11.710938 3.484375 11.734375 2.902344 11.625 C 3.152344 12.394531 3.632812 13.070312 4.285156 13.554688 C 4.933594 14.035156 5.71875 14.304688 6.527344 14.320312 C 5.152344 15.398438 3.457031 15.984375 1.707031 15.980469 C 1.398438 15.980469 1.089844 15.964844 0.78125 15.925781 C 2.554688 17.070312 4.621094 17.675781 6.730469 17.671875 C 13.871094 17.671875 17.777344 11.757812 17.777344 6.625 C 17.777344 6.460938 17.773438 6.292969 17.765625 6.125 C 18.523438 5.574219 19.179688 4.894531 19.699219 4.117188 Z M 19.703125 4.113281 "
                })))
            }
            var Re, ke = c.forwardRef(Me),
                Te = (a.p, ["title", "titleId"]);

            function He() {
                return (He = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Le(e, t) {
                if (null == e) return {};
                var a, n, i = function(e, t) {
                    if (null == e) return {};
                    var a, n, i = {},
                        r = Object.keys(e);
                    for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || (i[a] = e[a]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (i[a] = e[a])
                }
                return i
            }

            function We(e, t) {
                var a = e.title,
                    n = e.titleId,
                    i = Le(e, Te);
                return c.createElement("svg", He({
                    width: 20,
                    height: 20,
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeSmall",
                    focusable: "false",
                    "aria-hidden": "true",
                    ref: t,
                    "aria-labelledby": n
                }, i), a ? c.createElement("title", {
                    id: n
                }, a) : null, Re || (Re = c.createElement("path", {
                    d: "M18.1818 0H1.81818C0.813636 0 0 0.813636 0 1.81818V18.1818C0 19.1864 0.813636 20 1.81818 20H18.1818C19.1864 20 20 19.1864 20 18.1818V1.81818C20 0.813636 19.1864 0 18.1818 0ZM16.8564 15.4545H11.4645V15.1518L12.7273 14.0409V7.7L9.62636 15.4545H9.14182L5.68182 7.63909V13.1727L7.26364 15.1518V15.4545H3.14364V15.1518L4.77909 13.1727V6.58909L3.32545 4.77182C3.32545 4.77182 3.32545 4.50909 3.32545 4.55H7.30364L10.3936 11.2345L13.0591 4.55H16.8355V4.77182L15.4545 5.93273V14.0409L16.8564 15.1518V15.4545Z"
                })))
            }
            var Je = c.forwardRef(We),
                Ge = (a.p, ["title", "titleId"]);

            function Ue() {
                return (Ue = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Ve(e, t) {
                if (null == e) return {};
                var a, n, i = function(e, t) {
                    if (null == e) return {};
                    var a, n, i = {},
                        r = Object.keys(e);
                    for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || (i[a] = e[a]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (i[a] = e[a])
                }
                return i
            }

            function ze(e, t) {
                var a = e.title,
                    n = e.titleId,
                    i = Ve(e, Ge);
                return c.createElement("svg", Ue({
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    width: "20pt",
                    height: "20pt",
                    viewBox: "0 0 20 20",
                    ref: t,
                    "aria-labelledby": n
                }, i), a ? c.createElement("title", {
                    id: n
                }, a) : null, c.createElement("g", {
                    id: "surface1"
                }, c.createElement("path", {
                    style: {
                        stroke: "none",
                        fillRule: "nonzero",
                        fill: "rgb(100%,100%,100%)",
                        fillOpacity: 1
                    },
                    d: "M 16.929688 3.742188 C 15.65625 3.167969 14.289062 2.742188 12.859375 2.5 C 12.847656 2.5 12.835938 2.5 12.824219 2.507812 C 12.808594 2.511719 12.800781 2.519531 12.792969 2.53125 C 12.621094 2.839844 12.425781 3.238281 12.289062 3.558594 C 10.773438 3.332031 9.230469 3.332031 7.714844 3.558594 C 7.5625 3.207031 7.390625 2.863281 7.199219 2.53125 C 7.195312 2.519531 7.183594 2.511719 7.171875 2.503906 C 7.160156 2.5 7.148438 2.496094 7.136719 2.5 C 5.707031 2.742188 4.339844 3.167969 3.0625 3.742188 C 3.054688 3.746094 3.042969 3.753906 3.039062 3.765625 C 0.445312 7.578125 -0.265625 11.296875 0.0820312 14.96875 C 0.0820312 14.976562 0.0859375 14.984375 0.0898438 14.992188 C 0.09375 15 0.101562 15.007812 0.109375 15.011719 C 1.621094 16.117188 3.308594 16.953125 5.101562 17.496094 C 5.113281 17.5 5.128906 17.5 5.140625 17.496094 C 5.152344 17.492188 5.164062 17.484375 5.171875 17.476562 C 5.558594 16.957031 5.902344 16.414062 6.195312 15.839844 C 6.210938 15.804688 6.195312 15.765625 6.160156 15.753906 C 5.621094 15.550781 5.101562 15.304688 4.601562 15.019531 C 4.589844 15.015625 4.582031 15.007812 4.578125 15 C 4.574219 14.992188 4.570312 14.980469 4.570312 14.96875 C 4.566406 14.960938 4.570312 14.949219 4.574219 14.941406 C 4.578125 14.929688 4.585938 14.921875 4.59375 14.917969 C 4.699219 14.839844 4.804688 14.757812 4.902344 14.675781 C 4.914062 14.671875 4.921875 14.664062 4.933594 14.664062 C 4.945312 14.664062 4.957031 14.664062 4.96875 14.667969 C 8.242188 16.140625 11.785156 16.140625 15.019531 14.667969 C 15.03125 14.664062 15.042969 14.664062 15.054688 14.664062 C 15.066406 14.664062 15.074219 14.667969 15.085938 14.675781 C 15.183594 14.757812 15.289062 14.839844 15.394531 14.917969 C 15.402344 14.921875 15.410156 14.929688 15.414062 14.941406 C 15.417969 14.949219 15.421875 14.960938 15.421875 14.96875 C 15.421875 14.980469 15.417969 14.992188 15.410156 15 C 15.40625 15.007812 15.398438 15.015625 15.390625 15.019531 C 14.890625 15.308594 14.375 15.550781 13.828125 15.75 C 13.820312 15.753906 13.8125 15.757812 13.808594 15.765625 C 13.800781 15.773438 13.796875 15.78125 13.792969 15.789062 C 13.789062 15.796875 13.789062 15.804688 13.789062 15.8125 C 13.789062 15.824219 13.789062 15.832031 13.796875 15.839844 C 14.09375 16.410156 14.4375 16.957031 14.816406 17.472656 C 14.824219 17.484375 14.835938 17.492188 14.847656 17.496094 C 14.859375 17.5 14.875 17.5 14.886719 17.496094 C 16.679688 16.957031 18.371094 16.117188 19.886719 15.011719 C 19.894531 15.007812 19.902344 15 19.90625 14.992188 C 19.910156 14.984375 19.914062 14.976562 19.914062 14.96875 C 20.332031 10.722656 19.214844 7.035156 16.957031 3.765625 C 16.949219 3.757812 16.941406 3.746094 16.929688 3.742188 Z M 6.683594 12.730469 C 5.699219 12.730469 4.886719 11.839844 4.886719 10.75 C 4.886719 9.65625 5.683594 8.765625 6.683594 8.765625 C 7.691406 8.765625 8.496094 9.664062 8.480469 10.75 C 8.480469 11.839844 7.683594 12.730469 6.683594 12.730469 Z M 13.328125 12.730469 C 12.34375 12.730469 11.53125 11.839844 11.53125 10.75 C 11.53125 9.65625 12.328125 8.765625 13.328125 8.765625 C 14.335938 8.765625 15.140625 9.664062 15.125 10.75 C 15.125 11.839844 14.339844 12.730469 13.328125 12.730469 Z M 13.328125 12.730469 "
                })))
            }
            var Ke, Ye, Xe, Ze, qe, _e, $e = c.forwardRef(ze);
            a.p;

            function et() {
                return Object(E.jsxs)("div", {
                    className: "social-row",
                    children: [Object(E.jsx)(fe.a, {
                        href: "https://github.com/safutitano/safutitano.github.io",
                        target: "_blank",
                        children: Object(E.jsx)(Be.a, {
                            htmlColor: "#FFF",
                            component: De
                        })
                    }), Object(E.jsx)(fe.a, {
                        href: "https://twitter.com/safutitano",
                        target: "_blank",
                        children: Object(E.jsx)(Be.a, {
                            htmlColor: "#FFF",
                            component: ke
                        })
                    }), Object(E.jsx)(fe.a, {
                        href: "https://safutitano.medium.com/",
                        target: "_blank",
                        children: Object(E.jsx)(Be.a, {
                            htmlColor: "#FFF",
                            component: Je
                        })
                    }), Object(E.jsx)(fe.a, {
                        href: "https://discord.com/invite/bJbQFPeUhr/",
                        target: "_blank",
                        children: Object(E.jsx)(Be.a, {
                            htmlColor: "#FFF",
                            component: $e
                        })
                    })]
                })
            }
            var tt = ["title", "titleId"];

            function at() {
                return (at = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function nt(e, t) {
                if (null == e) return {};
                var a, n, i = function(e, t) {
                    if (null == e) return {};
                    var a, n, i = {},
                        r = Object.keys(e);
                    for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || (i[a] = e[a]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (i[a] = e[a])
                }
                return i
            }

            function it(e, t) {
                var a = e.title,
                    n = e.titleId,
                    i = nt(e, tt);
                return c.createElement("svg", at({
                    width: 18,
                    height: 19,
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeSmall",
                    focusable: "false",
                    "aria-hidden": "true",
                    ref: t,
                    "aria-labelledby": n
                }, i), a ? c.createElement("title", {
                    id: n
                }, a) : null, Ke || (Ke = c.createElement("path", {
                    d: "M17.1611 9.64107C17.1018 9.55208 17.1018 9.47792 17.1018 9.37409V1.75023C17.1018 0.800951 16.6716 0.252151 15.752 0.0148325C15.7372 0.0148325 15.7372 0 15.7224 0H1.37941C1.18659 0.0593297 0.978939 0.103827 0.80095 0.207654C0.415307 0.444973 0.163156 0.771286 0.0444971 1.21626C0.0296647 1.26076 0.0148324 1.32009 0 1.36458V15.7224C0.0296648 15.8262 0.0444973 15.9152 0.0741621 16.0042C0.296648 16.6716 0.889945 17.0869 1.63157 17.0869C4.19757 17.0869 6.74875 17.0869 9.31476 17.0869C9.44825 17.0869 9.59658 17.1166 9.7004 17.2056C12.919 19.1932 17.2204 17.2946 17.8879 13.5865C18.1697 12.1774 17.9176 10.8573 17.1611 9.64107ZM9.07744 1.21626C9.07744 1.0976 9.1071 1.0531 9.2406 1.0531C11.3171 1.0531 13.3937 1.0531 15.4702 1.0531C15.8262 1.0531 16.0487 1.26076 16.0487 1.6019V8.29132C16.0487 8.30616 16.0487 8.32099 16.0487 8.33582C13.7348 6.70425 11.421 6.70425 9.10711 8.33582C9.07744 8.30616 9.09227 8.26166 9.09227 8.21716C9.07744 5.87364 9.07744 3.54495 9.07744 1.21626ZM1.06793 1.63157C1.06793 1.27559 1.29042 1.06793 1.63157 1.06793C3.7081 1.06793 5.79948 1.06793 7.87601 1.06793C8.00951 1.06793 8.02434 1.0976 8.02434 1.23109C8.02434 2.34352 8.02434 3.45595 8.02434 4.56839C8.02434 5.66598 8.02434 6.77842 8.02434 7.87601C8.02434 8.00951 7.99467 8.03917 7.86118 8.03917C5.65115 8.03917 3.42629 8.03917 1.21626 8.03917C1.0976 8.03917 1.0531 8.00951 1.0531 7.89085C1.0531 5.79948 1.0531 3.7081 1.06793 1.63157ZM1.6909 16.0487C1.26076 16.0487 1.0531 15.8559 1.0531 15.4109C1.0531 13.364 1.0531 11.3171 1.0531 9.27026C1.0531 9.10711 1.0976 9.07744 1.26076 9.07744C3.45595 9.07744 5.65115 9.07744 7.83152 9.07744C7.97984 9.07744 8.02434 9.10711 8.02434 9.27026C8.02434 9.44825 7.97984 9.61141 7.89085 9.75973C6.71909 11.7028 6.86741 14.1205 8.26166 15.9152C8.29132 15.9448 8.33582 15.9745 8.33582 16.0487H1.6909ZM12.5779 16.9535C10.1602 16.9535 8.17266 14.9956 8.17266 12.5631C8.17266 10.1454 10.1305 8.15783 12.5631 8.15783C14.9807 8.15783 16.9683 10.1305 16.9683 12.5482C16.9683 14.9807 14.9956 16.9535 12.5779 16.9535Z"
                })), Ye || (Ye = c.createElement("path", {
                    d: "M14.3281 11.6879C14.3281 11.9994 14.0908 12.2071 13.7348 12.2071H12.5779C12.1774 12.2071 11.7917 12.2071 11.4061 12.2071C11.065 12.2071 10.8276 11.9846 10.8276 11.6879C10.8276 11.3765 11.065 11.154 11.4209 11.154C12.1922 11.154 12.9783 11.154 13.7496 11.154C14.0759 11.154 14.3281 11.3765 14.3281 11.6879Z"
                })), Xe || (Xe = c.createElement("path", {
                    d: "M14.328 13.4382C14.328 13.7497 14.0907 13.9721 13.7347 13.9721C12.9634 13.9721 12.1773 13.9721 11.406 13.9721C11.0501 13.9721 10.8127 13.7497 10.8127 13.4382C10.8127 13.1267 11.0501 12.919 11.406 12.919H12.563C12.9486 12.919 13.3491 12.919 13.7347 12.919C14.0759 12.919 14.3132 13.1267 14.328 13.4382Z"
                })), Ze || (Ze = c.createElement("path", {
                    d: "M6.30386 4.55355C6.30386 4.83537 6.06654 5.07269 5.78472 5.07269C5.5919 5.07269 5.38425 5.07269 5.19143 5.07269C5.10243 5.07269 5.07277 5.10235 5.07277 5.19135C5.07277 5.38417 5.07277 5.56216 5.07277 5.75498C5.07277 6.06646 4.85028 6.30378 4.55363 6.30378C4.25698 6.30378 4.01966 6.06646 4.01966 5.75498C4.01966 5.72532 4.01966 5.69565 4.01966 5.66599C4.00483 5.47317 4.10866 5.22101 3.99 5.11719C3.87134 4.99853 3.61919 5.08752 3.42637 5.08752C3.3967 5.08752 3.36704 5.08752 3.33737 5.08752C3.02589 5.07269 2.78857 4.8502 2.78857 4.56839C2.78857 4.27174 3.01106 4.04925 3.33737 4.03442C3.5302 4.03442 3.72302 4.03442 3.91584 4.03442C4.00483 4.03442 4.0345 4.00476 4.01966 3.93059C4.01966 3.73777 4.01966 3.54495 4.01966 3.35213C4.01966 3.04065 4.25698 2.80333 4.55363 2.80333C4.85028 2.80333 5.07277 3.04065 5.07277 3.35213C5.07277 3.44112 5.07277 3.53012 5.07277 3.61911C5.07277 4.03442 5.07277 4.03442 5.50291 4.03442C5.5919 4.03442 5.69573 4.03442 5.78472 4.03442C6.08137 4.01959 6.30386 4.25691 6.30386 4.55355Z"
                })), qe || (qe = c.createElement("path", {
                    d: "M14.1503 4.53872C14.1503 4.8502 13.913 5.05786 13.5718 5.05786C13.2455 5.05786 12.9043 5.05786 12.578 5.05786C12.2369 5.05786 11.8957 5.05786 11.5546 5.05786C11.2283 5.05786 10.991 4.83537 10.991 4.53872C10.991 4.22724 11.2283 4.00475 11.5694 4.00475C12.2369 4.00475 12.9192 4.00475 13.5866 4.00475C13.913 4.01959 14.1503 4.24207 14.1503 4.53872Z"
                })), _e || (_e = c.createElement("path", {
                    d: "M5.76985 13.0525C5.99234 13.2898 6.00717 13.6162 5.78468 13.8238C5.57703 14.0315 5.26555 14.0166 5.02823 13.809C4.89474 13.6755 4.76125 13.542 4.62775 13.4085C4.56843 13.3343 4.5091 13.3343 4.44977 13.4085C4.33111 13.542 4.18278 13.6755 4.04929 13.809C3.81197 14.0315 3.48566 14.0463 3.278 13.8238C3.07035 13.6162 3.08518 13.3047 3.30767 13.0674C3.44116 12.9339 3.57465 12.8004 3.70815 12.6669C3.78231 12.5927 3.78231 12.5482 3.70815 12.4889C3.55982 12.3554 3.4115 12.2071 3.278 12.0588C3.12968 11.8956 3.10002 11.6879 3.18901 11.4803C3.27801 11.2726 3.44116 11.1836 3.63398 11.1688C3.81197 11.1688 3.94546 11.2281 4.04929 11.332C4.18278 11.4655 4.31627 11.599 4.44977 11.7324C4.52393 11.8066 4.56843 11.8066 4.62775 11.7324C4.76125 11.599 4.89474 11.4655 5.02823 11.332C5.26555 11.1095 5.59186 11.0946 5.79952 11.3171C6.00717 11.5248 5.99234 11.8363 5.78468 12.0736C5.65119 12.2071 5.5177 12.3406 5.38421 12.4741C5.31005 12.5334 5.31005 12.5927 5.38421 12.6521C5.5177 12.7707 5.65119 12.919 5.76985 13.0525Z"
                })))
            }
            var rt, st = c.forwardRef(it),
                ct = (a.p, ["title", "titleId"]);

            function At() {
                return (At = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function ot(e, t) {
                if (null == e) return {};
                var a, n, i = function(e, t) {
                    if (null == e) return {};
                    var a, n, i = {},
                        r = Object.keys(e);
                    for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || (i[a] = e[a]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (i[a] = e[a])
                }
                return i
            }

            function lt(e, t) {
                var a = e.title,
                    n = e.titleId,
                    i = ot(e, ct);
                return c.createElement("svg", At({
                    width: 18,
                    height: 18,
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeSmall",
                    focusable: "false",
                    "aria-hidden": "true",
                    ref: t,
                    "aria-labelledby": n
                }, i), a ? c.createElement("title", {
                    id: n
                }, a) : null, rt || (rt = c.createElement("path", {
                    d: "M3.58591 12.537C4.90264 14.47 6.69564 15.4367 8.96491 15.4367C11.2341 15.4367 13.0271 14.47 14.3439 12.537C14.3159 11.7526 13.6855 11.0942 12.4528 10.5618C11.2201 10.0296 10.0576 9.76342 8.96491 9.76342C7.8723 9.76342 6.70966 10.0296 5.47697 10.5618C4.24428 11.0662 3.61392 11.7245 3.58591 12.537ZM10.856 3.50195C10.3236 2.96966 9.69331 2.7035 8.96491 2.7035C8.2365 2.7035 7.60616 2.96966 7.07385 3.50195C6.54156 4.03425 6.27541 4.6646 6.27541 5.393C6.27541 6.12141 6.54156 6.75177 7.07385 7.28406C7.60616 7.81636 8.2365 8.0825 8.96491 8.0825C9.69331 8.0825 10.3236 7.81636 10.856 7.28406C11.3882 6.75177 11.6544 6.12141 11.6544 5.393C11.6544 4.6646 11.3882 4.03425 10.856 3.50195ZM2.61937 2.66148C4.38435 0.8965 6.49953 0.0140076 8.96491 0.0140076C11.4303 0.0140076 13.5315 0.8965 15.2684 2.66148C17.0334 4.39845 17.9159 6.49963 17.9159 8.965C17.9159 11.4304 17.0334 13.5456 15.2684 15.3105C13.5315 17.0475 11.4303 17.916 8.96491 17.916C6.49953 17.916 4.38435 17.0475 2.61937 15.3105C0.8824 13.5456 0.013916 11.4304 0.013916 8.965C0.013916 6.49963 0.8824 4.39845 2.61937 2.66148Z"
                })))
            }
            var ut, dt = c.forwardRef(lt),
                pt = (a.p, ["title", "titleId"]);

            function mt() {
                return (mt = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function bt(e, t) {
                if (null == e) return {};
                var a, n, i = function(e, t) {
                    if (null == e) return {};
                    var a, n, i = {},
                        r = Object.keys(e);
                    for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || (i[a] = e[a]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (i[a] = e[a])
                }
                return i
            }

            function ft(e, t) {
                var a = e.title,
                    n = e.titleId,
                    i = bt(e, pt);
                return c.createElement("svg", mt({
                    width: 17,
                    height: 19,
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeSmall",
                    focusable: "false",
                    "aria-hidden": "true",
                    ref: t,
                    "aria-labelledby": n
                }, i), a ? c.createElement("title", {
                    id: n
                }, a) : null, ut || (ut = c.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16.049 6.86441C16.3783 6.86441 16.6252 7.0292 16.7899 7.35876C16.9545 7.60594 16.8723 7.9355 16.7076 8.18268L8.47588 18.0696C8.31124 18.3168 8.06429 18.3992 7.81733 18.3992C7.73502 18.3992 7.57039 18.3992 7.48807 18.3168C7.1588 18.2345 6.91184 17.8225 6.99417 17.4929L7.73502 11.8079H1.23196C0.902693 11.8079 0.655741 11.6431 0.491107 11.396C0.326472 11.0664 0.40879 10.7368 0.573424 10.4897L8.80515 0.602668C9.0521 0.273102 9.46368 0.19071 9.79295 0.355493C10.1222 0.437884 10.3692 0.849842 10.2869 1.17941L9.546 6.86441H16.049ZM9.46366 11.0657L8.96975 14.8557L14.238 8.51153H8.55817C8.39353 8.51153 8.14659 8.42914 7.98195 8.26436C7.89964 8.09958 7.81731 7.85241 7.81731 7.60523L8.2289 3.81523L2.9606 10.1594H8.64049C8.88744 10.1594 9.13439 10.2417 9.29902 10.4065C9.38135 10.5714 9.46366 10.8185 9.46366 11.0657Z"
                })))
            }
            var jt, Ct = c.forwardRef(ft),
                gt = (a.p, ["title", "titleId"]);

            function yt() {
                return (yt = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function ht(e, t) {
                if (null == e) return {};
                var a, n, i = function(e, t) {
                    if (null == e) return {};
                    var a, n, i = {},
                        r = Object.keys(e);
                    for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || (i[a] = e[a]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (i[a] = e[a])
                }
                return i
            }

            function Ot(e, t) {
                var a = e.title,
                    n = e.titleId,
                    i = ht(e, gt);
                return c.createElement("svg", yt({
                    width: 20,
                    height: 20,
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeSmall",
                    focusable: "false",
                    "aria-hidden": "true",
                    ref: t,
                    "aria-labelledby": n
                }, i), a ? c.createElement("title", {
                    id: n
                }, a) : null, jt || (jt = c.createElement("path", {
                    d: "M11.6172 19.0859L17.6562 15.5859C18.3438 15.1875 18.6719 14.8203 18.6719 14.2656C18.6719 13.7031 18.3438 13.3438 17.6562 12.9375L16.75 12.4141L17.6562 11.8906C18.3438 11.4922 18.6719 11.125 18.6719 10.5703C18.6719 10.0078 18.3438 9.64844 17.6562 9.25L16.5781 8.625L17.6562 8C18.3438 7.59375 18.6719 7.23438 18.6719 6.67969C18.6719 6.11719 18.3438 5.75781 17.6562 5.35156L11.6172 1.85156C11.1797 1.60156 10.8438 1.46875 10.4922 1.46875C10.1484 1.46875 9.8125 1.60156 9.375 1.85156L3.33594 5.35156C2.64844 5.75781 2.32031 6.11719 2.32031 6.67969C2.32031 7.23438 2.64844 7.59375 3.33594 8L4.41406 8.625L3.33594 9.25C2.64844 9.64844 2.32031 10.0078 2.32031 10.5703C2.32031 11.125 2.64844 11.4922 3.33594 11.8906L4.24219 12.4141L3.33594 12.9375C2.64844 13.3438 2.32031 13.7031 2.32031 14.2656C2.32031 14.8203 2.64844 15.1875 3.33594 15.5859L9.375 19.0859C9.8125 19.3359 10.1484 19.4688 10.4922 19.4688C10.8438 19.4688 11.1797 19.3359 11.6172 19.0859ZM10.4922 10C10.3984 10 10.3125 9.96875 10.2031 9.90625L4.64062 6.75C4.60156 6.73438 4.58594 6.71094 4.58594 6.67969C4.58594 6.64062 4.60156 6.61719 4.64062 6.60156L10.2031 3.44531C10.3125 3.38281 10.3984 3.35156 10.4922 3.35156C10.5859 3.35156 10.6719 3.38281 10.7891 3.44531L16.3516 6.60156C16.3828 6.61719 16.4062 6.64062 16.4062 6.67969C16.4062 6.71094 16.3828 6.73438 16.3516 6.75L10.7891 9.90625C10.6719 9.96875 10.5859 10 10.4922 10ZM10.4922 11.8828C10.8438 11.8828 11.1797 11.75 11.6172 11.5L14.8359 9.63281L16.3516 10.4922C16.3828 10.5156 16.4062 10.5312 16.4062 10.5703C16.4062 10.6016 16.3828 10.625 16.3516 10.6406L10.7891 13.8047C10.6719 13.8672 10.5859 13.8984 10.4922 13.8984C10.3984 13.8984 10.3125 13.8672 10.2031 13.8047L4.64062 10.6406C4.60156 10.625 4.58594 10.6016 4.58594 10.5703C4.58594 10.5312 4.60156 10.5156 4.64062 10.4922L6.15625 9.63281L9.375 11.5C9.8125 11.75 10.1484 11.8828 10.4922 11.8828ZM10.2031 17.4922L4.64062 14.3359C4.60156 14.3203 4.58594 14.2969 4.58594 14.2656C4.58594 14.2266 4.60156 14.2109 4.64062 14.1875L5.98438 13.4297L9.375 15.3906C9.8125 15.6406 10.1484 15.7734 10.4922 15.7734C10.8438 15.7734 11.1797 15.6406 11.6172 15.3906L15.0078 13.4297L16.3516 14.1875C16.3828 14.2109 16.4062 14.2266 16.4062 14.2656C16.4062 14.2969 16.3828 14.3203 16.3516 14.3359L10.7891 17.4922C10.6719 17.5547 10.5859 17.5859 10.4922 17.5859C10.3984 17.5859 10.3125 17.5547 10.2031 17.4922Z"
                })))
            }
            var xt, wt = c.forwardRef(Ot),
                vt = (a.p, a(607), ["title", "titleId"]);

            function Bt() {
                return (Bt = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function It(e, t) {
                if (null == e) return {};
                var a, n, i = function(e, t) {
                    if (null == e) return {};
                    var a, n, i = {},
                        r = Object.keys(e);
                    for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || (i[a] = e[a]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (i[a] = e[a])
                }
                return i
            }

            function Et(e, t) {
                var a = e.title,
                    n = e.titleId,
                    i = It(e, vt);
                return c.createElement("svg", Bt({
                    width: 16,
                    height: 19,
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeSmall",
                    focusable: "false",
                    "aria-hidden": "true",
                    ref: t,
                    "aria-labelledby": n
                }, i), a ? c.createElement("title", {
                    id: n
                }, a) : null, xt || (xt = c.createElement("path", {
                    d: "M3.58045 18.7183H14.7661C15.2801 18.7183 15.6569 18.3415 15.6569 17.8276C15.6569 17.3652 15.3486 17.0739 14.9802 16.8856C13.9525 16.3802 13.7555 14.8727 14.8432 13.8878C15.3572 13.4511 15.6483 13.0227 15.6483 12.1491V2.94192C15.6483 1.04053 14.6376 0.0127437 12.7449 0.0127437H3.59757C1.70474 0.0127437 0.694092 1.03195 0.694092 2.94192V15.8235C0.694092 17.6992 1.70474 18.7183 3.58045 18.7183ZM12.5393 1.97409C13.3101 1.97409 13.6869 2.37664 13.6869 3.11322V11.8323C13.6869 12.2091 13.4728 12.4232 13.0875 12.4232H4.94226V1.97409H12.5393ZM2.65544 12.6801V3.11322C2.65544 2.41947 2.9809 2.02549 3.65753 1.98266V12.4232C3.27211 12.4489 2.94664 12.5345 2.65544 12.6801ZM6.48393 5.75119H12.1368C12.4879 5.75119 12.7791 5.45999 12.7791 5.10884C12.7791 4.75767 12.4879 4.46647 12.1368 4.46647H6.48393C6.12421 4.46647 5.83301 4.75767 5.83301 5.10884C5.83301 5.45999 6.12421 5.75119 6.48393 5.75119ZM6.48393 8.16649H10.7664C11.1175 8.16649 11.4087 7.87528 11.4087 7.51556C11.4087 7.1644 11.1175 6.87319 10.7664 6.87319H6.48393C6.12421 6.87319 5.83301 7.1644 5.83301 7.51556C5.83301 7.87528 6.12421 8.16649 6.48393 8.16649ZM3.92304 16.9369C2.97234 16.9369 2.48414 16.3716 2.48414 15.5579C2.48414 14.7871 3.0323 14.2047 3.97442 14.2047H12.3423C12.4279 14.2047 12.5136 14.1961 12.5906 14.179C12.1539 15.1041 12.1881 16.1232 12.6506 16.9369H3.92304Z"
                })))
            }
            var Qt = c.forwardRef(Et),
                St = (a.p, a(86)),
                Dt = a.n(St);
            var Ft = function() {
                    var e, t = Object(c.useState)(),
                        a = Object(s.a)(t, 1)[0],
                        n = D(),
                        i = Object(c.useCallback)((function(e, t) {
                            var a = e.pathname.replace("/", "");
                            return a.indexOf("dashboard") >= 0 && "dashboard" === t || (a.indexOf("account") >= 0 && "account" === t || a.indexOf("calculator") >= 0 && "calculator" === t)
                        }), []);
                    return Object(E.jsx)("div", {
                        className: "dapp-sidebar",
                        children: Object(E.jsxs)("div", {
                            className: "dapp-sidebar-top",
                            children: [Object(E.jsxs)("div", {
                                className: "branding-header",
                                children: [Object(E.jsx)(fe.a, {
                                    href: "https://safutitano.com",
                                    // target: "_blank",
                                    children: Object(E.jsx)("img", {
                                        alt: "logo",
                                        className: "logo",
                                        src: W
                                    })
                                }), n && Object(E.jsx)("div", {
                                    className: "wallet-link",
                                    children: Object(E.jsx)(fe.a, {
                                        href: "https://bscscan.com/address/".concat(n),
                                        target: "_blank",
                                        children: Object(E.jsx)("p", {
                                            children: (e = n, e.length < 10 ? e : "".concat(e.slice(0, 6), "...").concat(e.slice(e.length - 4)))
                                        })
                                    })
                                })]
                            }), Object(E.jsx)("div", {
                                className: "dapp-menu-links",
                                children: Object(E.jsxs)("div", {
                                    className: "dapp-nav",
                                    children: [Object(E.jsx)(fe.a, {
                                        component: ve.b,
                                        to: "/dashboard",
                                        isActive: function(e, t) {
                                            return i(t, "dashboard")
                                        },
                                        className: Dt()("button-dapp-menu", {
                                            active: a
                                        }),
                                        children: Object(E.jsxs)("div", {
                                            className: "dapp-menu-item",
                                            children: [Object(E.jsx)(Be.a, {
                                                viewBox: "0 0 18 18",
                                                component: wt
                                            }), Object(E.jsx)("p", {
                                                children: "Dashboard"
                                            })]
                                        })
                                    }), Object(E.jsx)(fe.a, {
                                        component: ve.b,
                                        to: "/account",
                                        isActive: function(e, t) {
                                            return i(t, "account")
                                        },
                                        className: Dt()("button-dapp-menu", {
                                            active: a
                                        }),
                                        children: Object(E.jsxs)("div", {
                                            className: "dapp-menu-item",
                                            children: [Object(E.jsx)(Be.a, {
                                                viewBox: "0 0 18 18",
                                                component: dt
                                            }), Object(E.jsx)("p", {
                                                children: "Account"
                                            })]
                                        })
                                    }), Object(E.jsx)(fe.a, {
                                        component: ve.b,
                                        to: "/calculator",
                                        isActive: function(e, t) {
                                            return i(t, "calculator")
                                        },
                                        className: Dt()("button-dapp-menu", {
                                            active: a
                                        }),
                                        children: Object(E.jsxs)("div", {
                                            className: "dapp-menu-item",
                                            children: [Object(E.jsx)(Be.a, {
                                                viewBox: "0 0 18 18",
                                                component: st
                                            }), Object(E.jsx)("p", {
                                                children: "Calculator"
                                            })]
                                        })
                                    }), Object(E.jsx)(fe.a, {
                                        href: "https://app.bogged.finance/bsc/swap?tokenIn=BNB&tokenOut=0x84952dd90cdc57170b13d2291a8afcedc8f97c71",
                                        target: "_blank",
                                        className: Dt()("button-dapp-menu", {
                                            active: a
                                        }),
                                        children: Object(E.jsxs)("div", {
                                            className: "dapp-menu-item",
                                            children: [Object(E.jsx)(Be.a, {
                                                viewBox: "0 0 18 18",
                                                component: Ct
                                            }), Object(E.jsx)("p", {
                                                children: "Swap"
                                            })]
                                        })
                                    }), Object(E.jsx)(fe.a, {
                                        href: "https://safutitano.gitbook.io/safu-titano/",
                                        target: "_blank",
                                        className: Dt()("button-dapp-menu", {
                                            active: a
                                        }),
                                        children: Object(E.jsxs)("div", {
                                            className: "dapp-menu-item",
                                            children: [Object(E.jsx)(Be.a, {
                                                viewBox: "0 0 18 18",
                                                component: Qt
                                            }), Object(E.jsx)("p", {
                                                children: "Docs"
                                            })]
                                        })
                                    })]
                                })
                            }), Object(E.jsx)(et, {})]
                        })
                    })
                },
                Nt = Object(ue.a)((function(e) {
                    return {
                        drawer: Object(m.a)({}, e.breakpoints.up("md"), {
                            width: ge,
                            flexShrink: 0
                        }),
                        drawerPaper: {
                            width: ge,
                            borderRight: 0
                        }
                    }
                }));
            var Pt = function(e) {
                var t = e.mobileOpen,
                    a = e.handleDrawerToggle,
                    n = Nt();
                return Object(E.jsx)(we.a, {
                    variant: "temporary",
                    anchor: "left",
                    open: t,
                    onClose: a,
                    onClick: a,
                    classes: {
                        paper: n.drawerPaper
                    },
                    ModalProps: {
                        keepMounted: !0
                    },
                    children: Object(E.jsx)(Ft, {})
                })
            };
            var Mt = function() {
                    return Object(E.jsx)(we.a, {
                        variant: "permanent",
                        anchor: "left",
                        children: Object(E.jsx)(Ft, {})
                    })
                },
                Rt = "\n                      \n",
                kt = function(e, t, a) {
                    var n = Object(b.a)({
                        severity: t
                    }, a);
                    e.message = n
                },
                Tt = Object(Y.c)({
                    name: "messages",
                    initialState: {
                        message: null
                    },
                    reducers: {
                        error: function(e, t) {
                            kt(e, "error", t.payload)
                        },
                        info: function(e, t) {
                            kt(e, "info", t.payload)
                        },
                        warning: function(e, t) {
                            kt(e, "warning", t.payload)
                        },
                        success: function(e, t) {
                            kt(e, "success", t.payload)
                        },
                        close: function(e) {
                            e.message = null
                        }
                    }
                }),
                Ht = Tt.actions,
                Lt = Ht.error,
                Wt = (Ht.info, Ht.close),
                Jt = (Ht.warning, Ht.success, Tt.reducer),
                Gt = Object(Y.c)({
                    name: "pendingTransactions",
                    initialState: [],
                    reducers: {
                        fetchPendingTxns: function(e, t) {
                            e.push(t.payload)
                        },
                        clearPendingTxn: function(e, t) {
                            var a = e.find((function(e) {
                                return e.txnHash === t.payload
                            }));
                            a && e.splice(e.indexOf(a), 1)
                        }
                    }
                }),
                Ut = Gt.actions,
                Vt = (Ut.fetchPendingTxns, Ut.clearPendingTxn, Gt.reducer),
                zt = Object(Y.a)({
                    reducer: {
                        account: $,
                        app: se,
                        pendingTransactions: Vt,
                        messages: Jt
                    },
                    middleware: function(e) {
                        return e({
                            serializableCheck: !1
                        })
                    }
                }),
                Kt = ["Wrong network, please switch to mainnet"],
                Yt = function(e) {
                    Kt.includes(e) && zt.dispatch(Lt({
                        text: w,
                        error: e
                    })), console._error_old(e)
                };
            Yt.isInterceptor = !0, 1 != console.error.isInterceptor && (console._error_old = console.error, console.error = Yt);
            var Xt = a(108);
            var Zt = function() {
                    var e = Object(Xt.c)().enqueueSnackbar,
                        t = Object(p.c)((function(e) {
                            return e.messages
                        })),
                        a = Object(p.b)();
                    return Object(c.useEffect)((function() {
                        t.message && (e(JSON.stringify(t.message)), a(Wt()))
                    }), [t.message]), Object(E.jsx)("div", {})
                },
                qt = Object(ue.a)((function(e) {
                    return {
                        drawer: Object(m.a)({}, e.breakpoints.up("md"), {
                            width: ge,
                            flexShrink: 0
                        }),
                        content: {
                            padding: e.spacing(1),
                            transition: e.transitions.create("margin", {
                                easing: e.transitions.easing.sharp,
                                duration: ye
                            }),
                            height: "100%",
                            overflow: "auto",
                            marginLeft: ge
                        },
                        contentShift: {
                            transition: e.transitions.create("margin", {
                                easing: e.transitions.easing.easeOut,
                                duration: ye
                            }),
                            marginLeft: 0
                        }
                    }
                }));
            var _t = function(e) {
                    var t = e.children,
                        a = qt(),
                        n = Object(c.useState)(!1),
                        i = Object(s.a)(n, 2),
                        r = i[0],
                        A = i[1],
                        o = Object(de.a)("(max-width: 960px)"),
                        l = Object(de.a)("(max-width: 600px)"),
                        u = function() {
                            A(!r)
                        };
                    return Object(E.jsxs)("div", {
                        className: "view-base-root",
                        children: [Object(E.jsx)(Zt, {}), Object(E.jsx)(Oe, {
                            drawe: !o,
                            handleDrawerToggle: u
                        }), Object(E.jsxs)("div", {
                            className: a.drawer,
                            children: [Object(E.jsx)(xe.a, {
                                mdUp: !0,
                                children: Object(E.jsx)(Pt, {
                                    mobileOpen: r,
                                    handleDrawerToggle: u
                                })
                            }), Object(E.jsx)(xe.a, {
                                smDown: !0,
                                children: Object(E.jsx)(Mt, {})
                            })]
                        }), Object(E.jsxs)("div", {
                            className: "".concat(a.content, " ").concat(o && a.contentShift),
                            children: [!o && Object(E.jsx)("div", {
                                className: "cubes-top",
                                children: Object(E.jsx)("p", {
                                    children: Rt
                                })
                            }), !l && Object(E.jsx)("div", {
                                className: "cubes-bottom",
                                children: Object(E.jsx)("p", {
                                    children: Rt
                                })
                            }), t]
                        })]
                    })
                },
                $t = a(655),
                ea = a(656),
                ta = (a(609), a(657));
            var aa = function() {
                var e = Object(p.c)((function(e) {
                        return e.app.loading
                    })),
                    t = Object(p.c)((function(e) {
                        return e.app
                    })),
                    a = ae();
                return Object(E.jsx)("div", {
                    className: "dashboard-view",
                    children: Object(E.jsx)("div", {
                        className: "dashboard-infos-wrap",
                        children: Object(E.jsx)($t.a, {
                            in: !0,
                            children: Object(E.jsxs)("div", {
                                children: [Object(E.jsx)("div", {
                                    style: {
                                        backgroundColor: "rgb(9 22 12)",
                                        border: "1px solid rgb(98 116 94)",
                                        borderRadius: "10px"
                                    },
                                    children: Object(E.jsxs)(ea.a, {
                                        container: !0,
                                        children: [Object(E.jsx)(ea.a, {
                                            item: !0,
                                            lg: 4,
                                            md: 4,
                                            sm: 6,
                                            xs: 12,
                                            children: Object(E.jsxs)("div", {
                                                className: "dashboard-card",
                                                children: [Object(E.jsx)("p", {
                                                    className: "card-title",
                                                    children: "SAFTI Price"
                                                }), Object(E.jsx)("p", {
                                                    className: "card-value",
                                                    children: e ? Object(E.jsx)(ta.a, {
                                                        width: "100px"
                                                    }) : "$".concat(L(t.marketPrice, 2))
                                                })]
                                            })
                                        }), Object(E.jsx)(ea.a, {
                                            item: !0,
                                            lg: 4,
                                            md: 4,
                                            sm: 6,
                                            xs: 12,
                                            children: Object(E.jsxs)("div", {
                                                className: "dashboard-card",
                                                children: [Object(E.jsx)("p", {
                                                    className: "card-title",
                                                    children: "Market Cap"
                                                }), Object(E.jsx)("p", {
                                                    className: "card-value",
                                                    children: e ? Object(E.jsx)(ta.a, {
                                                        width: "160px"
                                                    }) : new Intl.NumberFormat("en-US", {
                                                        style: "currency",
                                                        currency: "USD",
                                                        maximumFractionDigits: 0,
                                                        minimumFractionDigits: 0
                                                    }).format(t.marketCap)
                                                })]
                                            })
                                        }), Object(E.jsx)(ea.a, {
                                            item: !0,
                                            lg: 4,
                                            md: 4,
                                            sm: 6,
                                            xs: 12,
                                            children: Object(E.jsxs)("div", {
                                                className: "dashboard-card",
                                                children: [Object(E.jsx)("p", {
                                                    className: "card-title",
                                                    children: "Circulating Supply"
                                                }), Object(E.jsx)("p", {
                                                    className: "card-value",
                                                    children: e ? Object(E.jsx)(ta.a, {
                                                        width: "250px"
                                                    }) : (new Intl.NumberFormat).format(Number("".concat(L(t.circSupply, 2))))
                                                })]
                                            })
                                        }), Object(E.jsx)(ea.a, {
                                            item: !0,
                                            lg: 4,
                                            md: 4,
                                            sm: 6,
                                            xs: 12,
                                            children: Object(E.jsxs)("div", {
                                                className: "dashboard-card",
                                                children: [Object(E.jsx)("p", {
                                                    className: "card-title",
                                                    children: "Backed Liquidity"
                                                }), Object(E.jsxs)("p", {
                                                    className: "card-value",
                                                    children: [e ? Object(E.jsx)(ta.a, {
                                                        width: "250px"
                                                    }) : "".concat(t.backedLiquidity), " "]
                                                })]
                                            })
                                        }), Object(E.jsx)(ea.a, {
                                            item: !0,
                                            lg: 4,
                                            md: 4,
                                            sm: 6,
                                            xs: 12,
                                            children: Object(E.jsxs)("div", {
                                                className: "dashboard-card",
                                                children: [Object(E.jsx)("p", {
                                                    className: "card-title",
                                                    children: "Next Rebase"
                                                }), Object(E.jsx)("p", {
                                                    className: "card-value",
                                                    children: "00:".concat(a[2], ":").concat(a[3])
                                                })]
                                            })
                                        }), Object(E.jsx)(ea.a, {
                                            item: !0,
                                            lg: 4,
                                            md: 4,
                                            sm: 6,
                                            xs: 12,
                                            children: Object(E.jsxs)("div", {
                                                className: "dashboard-card",
                                                children: [Object(E.jsx)("p", {
                                                    className: "card-title",
                                                    children: "Total Supply"
                                                }), Object(E.jsx)("p", {
                                                    className: "card-value",
                                                    children: e ? Object(E.jsx)(ta.a, {
                                                        width: "250px"
                                                    }) : (new Intl.NumberFormat).format(Number("".concat(L(t.totalSupply, 2))))
                                                })]
                                            })
                                        })]
                                    })
                                }), Object(E.jsx)("div", {
                                    children: Object(E.jsxs)(ea.a, {
                                        container: !0,
                                        spacing: 2,
                                        children: [Object(E.jsx)(ea.a, {
                                            item: !0,
                                            lg: 6,
                                            md: 6,
                                            sm: 6,
                                            xs: 12,
                                            children: Object(E.jsxs)("div", {
                                                className: "dashboard-individual-card",
                                                children: [Object(E.jsx)("p", {
                                                    className: "card-title",
                                                    children: "SAFTI Price"
                                                }), Object(E.jsx)("p", {
                                                    className: "card-value",
                                                    children: e ? Object(E.jsx)(ta.a, {
                                                        width: "100px"
                                                    }) : "$".concat(L(t.marketPrice*1e22, 21, console.log("fhfh")))
                                                })]
                                            })
                                        }), Object(E.jsx)(ea.a, {
                                            item: !0,
                                            lg: 6,
                                            md: 6,
                                            sm: 6,
                                            xs: 12,
                                            children: Object(E.jsxs)("div", {
                                                className: "dashboard-individual-card",
                                                children: [Object(E.jsx)("p", {
                                                    className: "card-title",
                                                    children: "Market Value of Treasury Asset"
                                                }), Object(E.jsx)("p", {
                                                    className: "card-value",
                                                    children: e ? Object(E.jsx)(ta.a, {
                                                        width: "250px"
                                                    }) : new Intl.NumberFormat("en-US", {
                                                        style: "currency",
                                                        currency: "USD",
                                                        maximumFractionDigits: 0,
                                                        minimumFractionDigits: 0
                                                    }).format(t.treasuryValue)
                                                })]
                                            })
                                        }), Object(E.jsx)(ea.a, {
                                            item: !0,
                                            lg: 6,
                                            md: 6,
                                            sm: 6,
                                            xs: 12,
                                            children: Object(E.jsxs)("div", {
                                                className: "dashboard-individual-card",
                                                children: [Object(E.jsx)("p", {
                                                    className: "card-title",
                                                    children: "Pool Value"
                                                }), Object(E.jsx)("p", {
                                                    className: "card-value",
                                                    children: e ? Object(E.jsx)(ta.a, {
                                                        width: "250px"
                                                    }) : new Intl.NumberFormat("en-US", {
                                                        style: "currency",
                                                        currency: "USD",
                                                        maximumFractionDigits: 0,
                                                        minimumFractionDigits: 0
                                                    }).format(t.bnbLiquidityValue)
                                                })]
                                            })
                                        }), Object(E.jsx)(ea.a, {
                                            item: !0,
                                            lg: 6,
                                            md: 6,
                                            sm: 6,
                                            xs: 12,
                                            children: Object(E.jsxs)("div", {
                                                className: "dashboard-individual-card",
                                                children: [Object(E.jsx)("p", {
                                                    className: "card-title",
                                                    children: "SAFTI Insurance Fund Value"
                                                }), Object(E.jsx)("p", {
                                                    className: "card-value",
                                                    children: e ? Object(E.jsx)(ta.a, {
                                                        width: "250px"
                                                    }) : new Intl.NumberFormat("en-US", {
                                                        style: "currency",
                                                        currency: "USD",
                                                        maximumFractionDigits: 0,
                                                        minimumFractionDigits: 0
                                                    }).format(t.sifValue)
                                                })]
                                            })
                                        }), Object(E.jsx)(ea.a, {
                                            item: !0,
                                            xs: 12,
                                            sm: 4,
                                            md: 4,
                                            lg: 4,
                                            children: Object(E.jsxs)("div", {
                                                className: "dashboard-individual-card",
                                                children: [Object(E.jsx)("p", {
                                                    className: "card-title",
                                                    children: "# Value of Auto Supply Control"
                                                }), Object(E.jsx)("p", {
                                                    className: "card-value",
                                                    children: (new Intl.NumberFormat).format(Number("".concat(L(t.firepitBalance, 2)))) + " SAFTI"
                                                })]
                                            })
                                        }), Object(E.jsx)(ea.a, {
                                            item: !0,
                                            xs: 12,
                                            sm: 4,
                                            md: 4,
                                            lg: 4,
                                            children: Object(E.jsxs)("div", {
                                                className: "dashboard-individual-card",
                                                children: [Object(E.jsx)("p", {
                                                    className: "card-title",
                                                    children: "$ Value of Auto Supply Control"
                                                }), Object(E.jsx)("p", {
                                                    className: "card-value",
                                                    children: e ? Object(E.jsx)(ta.a, {
                                                        width: "250px"
                                                    }) : new Intl.NumberFormat("en-US", {
                                                        style: "currency",
                                                        currency: "USD",
                                                        maximumFractionDigits: 0,
                                                        minimumFractionDigits: 0
                                                    }).format(t.firepitBalance * t.marketPrice)
                                                    
                                                })]
                                            })
                                        }), Object(E.jsx)(ea.a, {
                                            item: !0,
                                            xs: 12,
                                            sm: 4,
                                            md: 4,
                                            lg: 4,
                                            children: Object(E.jsxs)("div", {
                                                className: "dashboard-individual-card",
                                                children: [Object(E.jsx)("p", {
                                                    className: "card-title",
                                                    children: "% Supply Control : Supply "
                                                }), Object(E.jsxs)("p", {
                                                    className: "card-value",
                                                    children: [L(t.firepitBalance / t.totalSupply * 100, 2), "%"]
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                })
            };
            a(610);
            var na = function() {
                    return Object(E.jsx)("div", {
                        className: "not-found-page",
                        children: Object(E.jsx)("p", {
                            children: "Page not found"
                        })
                    })
                },
                ia = (a(611), a(666)),
                ra = a(658),
                sa = a(669);
            var ca = function() {
                    var e = Object(p.c)((function(e) {
                            return e.app.loading
                        })),
                        t = Object(p.c)((function(e) {
                            return e.app.marketPrice
                        })),
                        a = Object(p.c)((function(e) {
                            return e.app.currentApy
                        })),
                        n = Object(p.c)((function(e) {
                            return e.account.balances && e.account.balances.safuu
                        })),
                        i = L(100 * a, 1);
                    console.log("current apy", i);
                    var r = L(Number(n), 5),
                        A = L(t, 2),
                        o = Object(c.useState)(r),
                        l = Object(s.a)(o, 2),
                        u = l[0],
                        d = l[1],
                        m = Object(c.useState)(i),
                        b = Object(s.a)(m, 2),
                        f = b[0],
                        j = b[1],
                        C = Object(c.useState)(A),
                        g = Object(s.a)(C, 2),
                        y = g[0],
                        h = g[1],
                        O = Object(c.useState)(A),
                        x = Object(s.a)(O, 2),
                        w = x[0],
                        v = x[1],
                        B = Object(c.useState)(30),
                        I = Object(s.a)(B, 2),
                        Q = I[0],
                        S = I[1],
                        D = Object(c.useState)("0"),
                        F = Object(s.a)(D, 2),
                        N = F[0],
                        P = F[1],
                        M = Object(c.useState)("0"),
                        R = Object(s.a)(M, 2),
                        k = R[0],
                        T = R[1],
                        H = function() {
                            var e = Number(u) || 0,
                                t = parseFloat(y) || 0;
                            return L(e * t, 2)
                        },
                        W = Object(c.useState)(H()),
                        J = Object(s.a)(W, 2),
                        G = J[0],
                        U = J[1];
                    return Object(c.useEffect)((function() {
                        var e = H();
                        U(e)
                    }), [u, y]), Object(c.useEffect)((function() {
                        var e = function() {
                            var e = parseFloat(f) / 100;
                            e = Math.pow(e - 1, 1 / 35040) - 1 || 0;
                            for (var t = Number(u), a = 0; a < 96 * Q; a++) t += t * e;
                            return t
                        }();
                        P(L(e, 5));
                        var t = e * (parseFloat(w) || 0);
                        T(L(t, 5))
                    }), [Q, f, w, u]), Object(E.jsx)("div", {
                        className: "calculator-view",
                        children: Object(E.jsx)($t.a, {
                            in: !0,
                            children: Object(E.jsx)("div", {
                                className: "calculator-card",
                                children: Object(E.jsxs)(ea.a, {
                                    className: "calculator-card-grid",
                                    container: !0,
                                    direction: "column",
                                    spacing: 2,
                                    children: [Object(E.jsx)(ea.a, {
                                        item: !0,
                                        children: Object(E.jsxs)("div", {
                                            className: "calculator-card-header",
                                            children: [Object(E.jsx)("p", {
                                                className: "calculator-card-header-title",
                                                children: "Calculator"
                                            }), Object(E.jsx)("p", {
                                                className: "calculator-card-header-subtitle",
                                                children: "Estimate your returns"
                                            })]
                                        })
                                    }), Object(E.jsx)(ea.a, {
                                        item: !0,
                                        children: Object(E.jsx)("div", {
                                            className: "calculator-card-metrics",
                                            children: Object(E.jsxs)(ea.a, {
                                                container: !0,
                                                spacing: 2,
                                                children: [Object(E.jsx)(ea.a, {
                                                    item: !0,
                                                    xs: 12,
                                                    sm: 4,
                                                    md: 4,
                                                    lg: 4,
                                                    children: Object(E.jsxs)("div", {
                                                        className: "calculator-card-apy",
                                                        children: [Object(E.jsx)("p", {
                                                            className: "calculator-card-metrics-title",
                                                            children: "SAFTI Price"
                                                        }), Object(E.jsx)("p", {
                                                            className: "calculator-card-metrics-value",
                                                            children: e ? Object(E.jsx)(ta.a, {
                                                                width: "100px"
                                                            }) : "$".concat(A)
                                                        })]
                                                    })
                                                }), Object(E.jsx)(ea.a, {
                                                    item: !0,
                                                    xs: 6,
                                                    sm: 4,
                                                    md: 4,
                                                    lg: 4,
                                                    children: Object(E.jsxs)("div", {
                                                        className: "calculator-card-tvl",
                                                        children: [Object(E.jsx)("p", {
                                                            className: "calculator-card-metrics-title",
                                                            children: "Current APY"
                                                        }), Object(E.jsx)("p", {
                                                            className: "calculator-card-metrics-value",
                                                            children: e ? Object(E.jsx)(ta.a, {
                                                                width: "100px"
                                                            }) : Object(E.jsxs)(E.Fragment, {
                                                                children: [ "392,537%"]
                                                            })
                                                        })]
                                                    })
                                                }), Object(E.jsx)(ea.a, {
                                                    item: !0,
                                                    xs: 6,
                                                    sm: 4,
                                                    md: 4,
                                                    lg: 4,
                                                    children: Object(E.jsxs)("div", {
                                                        className: "calculator-card-index",
                                                        children: [Object(E.jsx)("p", {
                                                            className: "calculator-card-metrics-title",
                                                            children: "Your SAFTI Balance"
                                                        }), Object(E.jsx)("p", {
                                                            className: "calculator-card-metrics-value",
                                                            children: e ? Object(E.jsx)(ta.a, {
                                                                width: "100px"
                                                            }) : Object(E.jsxs)(E.Fragment, {
                                                                children: [r, " SAFTI"]
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        })
                                    }), Object(E.jsx)("div", {
                                        className: "calculator-card-area",
                                        children: Object(E.jsxs)("div", {
                                            children: [Object(E.jsx)("div", {
                                                className: "calculator-card-action-area",
                                                children: Object(E.jsxs)(ea.a, {
                                                    container: !0,
                                                    spacing: 3,
                                                    children: [Object(E.jsx)(ea.a, {
                                                        item: !0,
                                                        xs: 12,
                                                        sm: 6,
                                                        children: Object(E.jsxs)("div", {
                                                            className: "calculator-card-action-area-inp-wrap",
                                                            children: [Object(E.jsx)("p", {
                                                                className: "calculator-card-action-area-inp-wrap-title",
                                                                children: "SAFTI Amount"
                                                            }), Object(E.jsx)(ia.a, {
                                                                type: "number",
                                                                placeholder: "Amount",
                                                                className: "calculator-card-action-input",
                                                                value: u,
                                                                onChange: function(e) {
                                                                    return d(e.target.value)
                                                                },
                                                                labelWidth: 0,
                                                                endAdornment: Object(E.jsx)(ra.a, {
                                                                    position: "end",
                                                                    children: Object(E.jsx)("div", {
                                                                        onClick: function() {
                                                                            return d(r)
                                                                        },
                                                                        className: "stake-card-action-input-btn",
                                                                        children: Object(E.jsx)("p", {
                                                                            children: "Max"
                                                                        })
                                                                    })
                                                                })
                                                            })]
                                                        })
                                                    }), Object(E.jsx)(ea.a, {
                                                        item: !0,
                                                        xs: 12,
                                                        sm: 6,
                                                        children: Object(E.jsxs)("div", {
                                                            className: "calculator-card-action-area-inp-wrap",
                                                            children: [Object(E.jsx)("p", {
                                                                className: "calculator-card-action-area-inp-wrap-title",
                                                                children: "APY (%)"
                                                            }), Object(E.jsx)(ia.a, {
                                                                type: "number",
                                                                placeholder: "Amount",
                                                                className: "calculator-card-action-input",
                                                                value: f,
                                                                onChange: function(e) {
                                                                    return j(e.target.value)
                                                                },
                                                                labelWidth: 0,
                                                                endAdornment: Object(E.jsx)(ra.a, {
                                                                    position: "end",
                                                                    children: Object(E.jsx)("div", {
                                                                        onClick: function() {
                                                                            return j(i)
                                                                        },
                                                                        className: "stake-card-action-input-btn",
                                                                        children: Object(E.jsx)("p", {
                                                                            children: "Current"
                                                                        })
                                                                    })
                                                                })
                                                            })]
                                                        })
                                                    }), Object(E.jsx)(ea.a, {
                                                        item: !0,
                                                        xs: 12,
                                                        sm: 6,
                                                        children: Object(E.jsxs)("div", {
                                                            className: "calculator-card-action-area-inp-wrap",
                                                            children: [Object(E.jsx)("p", {
                                                                className: "calculator-card-action-area-inp-wrap-title",
                                                                children: "SAFTI Price at purchase ($)"
                                                            }), Object(E.jsx)(ia.a, {
                                                                type: "number",
                                                                placeholder: "Amount",
                                                                className: "calculator-card-action-input",
                                                                value: y,
                                                                onChange: function(e) {
                                                                    return h(e.target.value)
                                                                },
                                                                labelWidth: 0,
                                                                endAdornment: Object(E.jsx)(ra.a, {
                                                                    position: "end",
                                                                    children: Object(E.jsx)("div", {
                                                                        onClick: function() {
                                                                            return h(A)
                                                                        },
                                                                        className: "stake-card-action-input-btn",
                                                                        children: Object(E.jsx)("p", {
                                                                            children: "Current"
                                                                        })
                                                                    })
                                                                })
                                                            })]
                                                        })
                                                    }), Object(E.jsx)(ea.a, {
                                                        item: !0,
                                                        xs: 12,
                                                        sm: 6,
                                                        children: Object(E.jsxs)("div", {
                                                            className: "calculator-card-action-area-inp-wrap",
                                                            children: [Object(E.jsx)("p", {
                                                                className: "calculator-card-action-area-inp-wrap-title",
                                                                children: "Future SAFUU market price ($)"
                                                            }), Object(E.jsx)(ia.a, {
                                                                type: "number",
                                                                placeholder: "Amount",
                                                                className: "calculator-card-action-input",
                                                                value: w,
                                                                onChange: function(e) {
                                                                    return v(e.target.value)
                                                                },
                                                                labelWidth: 0,
                                                                endAdornment: Object(E.jsx)(ra.a, {
                                                                    position: "end",
                                                                    children: Object(E.jsx)("div", {
                                                                        onClick: function() {
                                                                            return v(A)
                                                                        },
                                                                        className: "stake-card-action-input-btn",
                                                                        children: Object(E.jsx)("p", {
                                                                            children: "Current"
                                                                        })
                                                                    })
                                                                })
                                                            })]
                                                        })
                                                    })]
                                                })
                                            }), Object(E.jsxs)("div", {
                                                className: "calculator-days-slider-wrap",
                                                children: [Object(E.jsx)("p", {
                                                    className: "calculator-days-slider-wrap-title",
                                                    children: "".concat(Q, " day").concat(Q > 1 ? "s" : "")
                                                }), Object(E.jsx)(sa.a, {
                                                    className: "calculator-days-slider",
                                                    min: 1,
                                                    max: 365,
                                                    value: Q,
                                                    onChange: function(e, t) {
                                                        return S(t)
                                                    }
                                                })]
                                            }), Object(E.jsxs)("div", {
                                                className: "calculator-user-data",
                                                children: [Object(E.jsxs)("div", {
                                                    className: "data-row",
                                                    children: [Object(E.jsx)("p", {
                                                        className: "data-row-name",
                                                        children: "Your initial investment"
                                                    }), Object(E.jsx)("p", {
                                                        className: "data-row-value",
                                                        children: e ? Object(E.jsx)(ta.a, {
                                                            width: "80px"
                                                        }) : Object(E.jsxs)(E.Fragment, {
                                                            children: ["$", G]
                                                        })
                                                    })]
                                                }), Object(E.jsxs)("div", {
                                                    className: "data-row",
                                                    children: [Object(E.jsx)("p", {
                                                        className: "data-row-name",
                                                        children: "Current wealth"
                                                    }), Object(E.jsx)("p", {
                                                        className: "data-row-value",
                                                        children: e ? Object(E.jsx)(ta.a, {
                                                            width: "80px"
                                                        }) : Object(E.jsxs)(E.Fragment, {
                                                            children: ["$", function() {
                                                                var e = Number(u) || 0,
                                                                    t = parseFloat(A);
                                                                return L(e * t, 2)
                                                            }()]
                                                        })
                                                    })]
                                                }), Object(E.jsxs)("div", {
                                                    className: "data-row",
                                                    children: [Object(E.jsx)("p", {
                                                        className: "data-row-name",
                                                        children: "SAFTI rewards estimation"
                                                    }), Object(E.jsx)("p", {
                                                        className: "data-row-value",
                                                        children: e ? Object(E.jsx)(ta.a, {
                                                            width: "80px"
                                                        }) : Object(E.jsxs)(E.Fragment, {
                                                            children: [N, " SAFTI"]
                                                        })
                                                    })]
                                                }), Object(E.jsxs)("div", {
                                                    className: "data-row",
                                                    children: [Object(E.jsx)("p", {
                                                        className: "data-row-name",
                                                        children: "Potential return"
                                                    }), Object(E.jsx)("p", {
                                                        className: "data-row-value",
                                                        children: e ? Object(E.jsx)(ta.a, {
                                                            width: "80px"
                                                        }) : Object(E.jsxs)(E.Fragment, {
                                                            children: ["$", k]
                                                        })
                                                    })]
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            })
                        })
                    })
                },
                Aa = a(659),
                oa = a(345),
                la = a(664),
                ua = a(344),
                da = (a(612), function() {
                    var e = Object(de.a)("(max-width: 650px)"),
                        t = Object(de.a)("(max-width: 379px)"),
                        a = Object(p.c)((function(e) {
                            return e.app.loading
                        })),
                        n = Object(p.c)((function(e) {
                            return e.account
                        })),
                        i = Object(p.c)((function(e) {
                            return e.app
                        })),
                        r = ae();
                    return Object(E.jsx)("div", {
                        id: "account-view",
                        className: "account-view ".concat(e && "smaller", " ").concat(t && "very-small"),
                        children: Object(E.jsxs)(Aa.a, {
                            style: {
                                paddingLeft: e || t ? "0" : "3.3rem",
                                paddingRight: e || t ? "0" : "3.3rem"
                            },
                            children: [Object(E.jsx)($t.a, {
                                in: !0,
                                children: Object(E.jsxs)(ea.a, {
                                    container: !0,
                                    spacing: 2,
                                    children: [Object(E.jsx)(ea.a, {
                                        item: !0,
                                        xs: 12,
                                        sm: 12,
                                        md: 12,
                                        lg: 4,
                                        children: Object(E.jsx)(oa.a, {
                                            className: "account-card",
                                            children: Object(E.jsxs)(la.a, {
                                                className: "data-column",
                                                children: [Object(E.jsx)(ua.a, {
                                                    children: "Your Balance"
                                                }), Object(E.jsxs)(ua.a, {
                                                    variant: "h4",
                                                    style: {
                                                        fontFamily: "Montserrat Medium",
                                                        color: "#133E36",
                                                        fontWeight: "bolder"
                                                    },
                                                    children: ["$", L(Number(n.balances.safuu * i.marketPrice), 2,console.log("i m " +i.marketPrice), console.log(i))]
                                                }), Object(E.jsxs)(ua.a, {
                                                    children: [n.balances.safuu, " SAFTI"]
                                                })]
                                            })
                                        })
                                    }), Object(E.jsx)(ea.a, {
                                        item: !0,
                                        xs: 12,
                                        sm: 12,
                                        md: 12,
                                        lg: 4,
                                        children: Object(E.jsx)(oa.a, {
                                            className: "account-card",
                                            children: Object(E.jsxs)(la.a, {
                                                className: "data-column",
                                                children: [Object(E.jsx)(ua.a, {
                                                    children: "APY"
                                                }), Object(E.jsxs)(ua.a, {
                                                    variant: "h4",
                                                    style: {
                                                        fontFamily: "Montserrat Medium",
                                                        color: "#133E36",
                                                        fontWeight: "bolder"
                                                    },
                                                    children: [(new Intl.NumberFormat).format(Number("".concat(L(100 * 3925.37, 2)))), "%"]
                                                }), Object(E.jsxs)(ua.a, {
                                                    // children: ["Daily ROI ", L(100 * i.dailyRate, 2), "%"]
                                                })]
                                            })
                                        })
                                    }), Object(E.jsx)(ea.a, {
                                        item: !0,
                                        xs: 12,
                                        sm: 12,
                                        md: 12,
                                        lg: 4,
                                        children: Object(E.jsx)(oa.a, {
                                            className: "account-card",
                                            children: Object(E.jsxs)(la.a, {
                                                className: "data-column",
                                                children: [Object(E.jsx)(ua.a, {
                                                    children: "Next Rebase:"
                                                }), Object(E.jsx)(ua.a, {
                                                    variant: "h4",
                                                    style: {
                                                        fontFamily: "Montserrat Medium",
                                                        color: "#133E36",
                                                        fontWeight: "bolder"
                                                    },
                                                    children: "00:".concat(r[2], ":").concat(r[3])
                                                }), Object(E.jsx)(ua.a, {
                                                    children: ""
                                                })]
                                            })
                                        })
                                    })]
                                })
                            }), Object(E.jsx)($t.a, {
                                in: !0,
                                children: Object(E.jsxs)(oa.a, {
                                    className: "account-card",
                                    children: [Object(E.jsxs)(la.a, {
                                        className: "data-row",
                                        children: [Object(E.jsx)(ua.a, {
                                            children: "Current SAFTI Price"
                                        }), Object(E.jsx)(ua.a, {
                                            variant: "h5",
                                            style: {
                                                fontFamily: "Montserrat Medium",
                                                fontWeight: "bolder"
                                            },
                                            children: a ? Object(E.jsx)(ta.a, {
                                                width: "80px"
                                            }) : Object(E.jsxs)(E.Fragment, {
                                                children: ["$", L(i.marketPrice,2)]
                                            })
                                        })]
                                    }), Object(E.jsxs)(la.a, {
                                        className: "data-row",
                                        children: [Object(E.jsx)(ua.a, {
                                            children: "Next Reward Amount"
                                        }), Object(E.jsx)(ua.a, {
                                            variant: "h5",
                                            style: {
                                                fontFamily: "Montserrat Medium",
                                                fontWeight: "bolder"
                                            },
                                            children: a ? Object(E.jsx)(ta.a, {
                                                width: "80px"
                                            }) : Object(E.jsxs)(E.Fragment, {
                                                children: [L(2355e-7 * Number(n.balances.safuu), 5), " SAFTI"]
                                            })
                                        })]
                                    }), Object(E.jsxs)(la.a, {
                                        className: "data-row",
                                        children: [Object(E.jsx)(ua.a, {
                                            children: "Next Reward Amount USD"
                                        }), Object(E.jsx)(ua.a, {
                                            variant: "h5",
                                            style: {
                                                fontFamily: "Montserrat Medium",
                                                fontWeight: "bolder"
                                            },
                                            children: a ? Object(E.jsx)(ta.a, {
                                                width: "80px"
                                            }) : Object(E.jsxs)(E.Fragment, {
                                                children: ["$", L(2355e-7 * Number(n.balances.safuu) * i.marketPrice, 5), " " ]
                                                
                                            })
                                        })]
                                    }), Object(E.jsxs)(la.a, {
                                        className: "data-row",
                                        children: [Object(E.jsx)(ua.a, {
                                            children: "Next Reward Yield"
                                        }), Object(E.jsx)(ua.a, {
                                            variant: "h5",
                                            style: {
                                                fontFamily: "Montserrat Medium",
                                                fontWeight: "bolder"
                                            },
                                            children: a ? Object(E.jsx)(ta.a, {
                                                width: "80px"
                                            }) : Object(E.jsxs)(E.Fragment, {
                                                children: [.00236, "%"]
                                            })
                                        })]
                                    }), Object(E.jsxs)(la.a, {
                                        className: "data-row",
                                        children: [Object(E.jsx)(ua.a, {
                                            children: "ROI(1-Day Rate) USD"
                                        }), Object(E.jsx)(ua.a, {
                                            variant: "h5",
                                            style: {
                                                fontFamily: "Montserrat Medium",
                                                fontWeight: "bolder"
                                            },
                                            children: a ? Object(E.jsx)(ta.a, {
                                                width: "80px"
                                            }) : Object(E.jsxs)(E.Fragment, {
                                                children: ["$", L(i.oneDayRate * Number(n.balances.safuu) * i.marketPrice, 4)]
                                            })
                                        })]
                                    }), Object(E.jsxs)(la.a, {
                                        className: "data-row",
                                        children: [Object(E.jsx)(ua.a, {
                                            children: "ROI(5-Day Rate)"
                                        }), Object(E.jsx)(ua.a, {
                                            variant: "h5",
                                            style: {
                                                fontFamily: "Montserrat Medium",
                                                fontWeight: "bolder"
                                            },
                                            children: a ? Object(E.jsx)(ta.a, {
                                                width: "80px"
                                            }) : Object(E.jsxs)(E.Fragment, {
                                                children: [L(12), " %"]
                                            })
                                        })]
                                    }), Object(E.jsxs)(la.a, {
                                        className: "data-row",
                                        children: [Object(E.jsx)(ua.a, {
                                            children: "ROI(5-Day Rate) USD"
                                        }), Object(E.jsx)(ua.a, {
                                            variant: "h5",
                                            style: {
                                                fontFamily: "Montserrat Medium",
                                                fontWeight: "bolder"
                                            },
                                            children: a ? Object(E.jsx)(ta.a, {
                                                width: "80px"
                                            }) : Object(E.jsxs)(E.Fragment, {
                                                children: ["$", L(i.fiveDayRate * Number(n.balances.safuu) * i.marketPrice, 4)]
                                            })
                                        })]
                                    })]
                                })
                            })]
                        })
                    })
                }),
                pa = (a(613), [{
                    name: "AAVE.e",
                    address: "0x63a72806098Bd3D9520cC43356dD78afe5D386D9",
                    img: a.p + "static/media/AAVE.e.b747f0c6.png",
                    decimals: 18
                }, {
                    name: "APE-X",
                    address: "0xd039C9079ca7F2a87D632A9C0d7cEa0137bAcFB5",
                    img: a.p + "static/media/Ape-X.27a99a93.png",
                    decimals: 9
                }, {
                    name: "APEIN",
                    address: "0x938FE3788222A74924E062120E7BFac829c719Fb",
                    img: a.p + "static/media/APEIN.d569384f.png",
                    decimals: 18
                }, {
                    name: "BIFI",
                    address: "0xd6070ae98b8069de6B494332d1A1a81B6179D960",
                    img: a.p + "static/media/BIFI.87b64be4.png",
                    decimals: 18
                }, {
                    name: "BLIZZ",
                    address: "0xB147656604217a03Fe2c73c4838770DF8d9D21B8",
                    img: a.p + "static/media/BLIZZ.ab3dbbd0.png",
                    decimals: 18
                }, {
                    name: "BNB",
                    isBnb: !0,
                    img: "data:image/png;base64,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",
                    address: "",
                    decimals: 18
                }, {
                    name: "BOOFI",
                    address: "0xB00F1ad977a949a3CCc389Ca1D1282A2946963b0",
                    img: a.p + "static/media/BOOFI.59648952.png",
                    decimals: 18
                }, {
                    name: "CHART",
                    address: "0xD769bDFc0CaEe933dc0a047C7dBad2Ec42CFb3E2",
                    img: a.p + "static/media/CHART.14c38fb6.png",
                    decimals: 18
                }, {
                    name: "DAI.e",
                    address: "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",
                    img: a.p + "static/media/DAI.e.849478a7.png",
                    decimals: 18
                }, {
                    name: "DREGG",
                    address: "0x88c090496125b751B4E3ce4d3FDB8E47DD079c57",
                    img: a.p + "static/media/DREGG.42db80f9.png",
                    decimals: 18
                }, {
                    name: "ELE",
                    address: "0xAcD7B3D9c10e97d0efA418903C0c7669E702E4C0",
                    img: a.p + "static/media/ELE.69996a2c.png",
                    decimals: 18
                }, {
                    name: "ELK",
                    address: "0xE1C110E1B1b4A1deD0cAf3E42BfBdbB7b5d7cE1C",
                    img: a.p + "static/media/ELK.ebff0dde.png",
                    decimals: 18
                }, {
                    name: "FRAX",
                    address: "0xDC42728B0eA910349ed3c6e1c9Dc06b5FB591f98",
                    img: "data:image/png;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QCMRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAMigAwAEAAAAAQAAAMgAAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/CABEIAMgAyAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAADAgQBBQAGBwgJCgv/xADDEAABAwMCBAMEBgQHBgQIBnMBAgADEQQSIQUxEyIQBkFRMhRhcSMHgSCRQhWhUjOxJGIwFsFy0UOSNIII4VNAJWMXNfCTc6JQRLKD8SZUNmSUdMJg0oSjGHDiJ0U3ZbNVdaSVw4Xy00Z2gONHVma0CQoZGigpKjg5OkhJSldYWVpnaGlqd3h5eoaHiImKkJaXmJmaoKWmp6ipqrC1tre4ubrAxMXGx8jJytDU1dbX2Nna4OTl5ufo6erz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAECAAMEBQYHCAkKC//EAMMRAAICAQMDAwIDBQIFAgQEhwEAAhEDEBIhBCAxQRMFMCIyURRABjMjYUIVcVI0gVAkkaFDsRYHYjVT8NElYMFE4XLxF4JjNnAmRVSSJ6LSCAkKGBkaKCkqNzg5OkZHSElKVVZXWFlaZGVmZ2hpanN0dXZ3eHl6gIOEhYaHiImKkJOUlZaXmJmaoKOkpaanqKmqsLKztLW2t7i5usDCw8TFxsfIycrQ09TV1tfY2drg4uPk5ebn6Onq8vP09fb3+Pn6/9sAQwAHBQUGBQQHBgYGCAcHCAsSCwsKCgsWDxANEhoWGxoZFhkYHCAoIhweJh4YGSMwJCYqKy0uLRsiMjUxLDUoLC0s/9sAQwEHCAgLCQsVCwsVLB0ZHSwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCws/9oADAMBAAIRAxEAAAH0jbVttW21bZpTvcDyFe1svAxV70f5+1fRyvnS9r27ef8AaU821bbVttW21bbVttWQz8frq/O22rbattq22rbas4b6vSvQ/nK/r3LV9hW21bbVttWYO/FKa0+mo3fJrg9MVtlUnLik7atp7+vP96BwFWntfz/e17phFrbatszrhvM3TWt3nB9vXrMoXXmXHe/Crz/ouj1UzXo9XnPDe/hrzL1OJrebej+Q1x22r0f0r5297p9tq3n/AKB4jXObattq6/17wD3unGzanNN5jy1ey2fg019Ibxr1ynMS3ry7h3jOttq3pvmXQV7jtqR87+8eB0nbVttXo3pfK9VW8c9S8AqNtW21bseOJX0bmD+vMPPfZPG622rFEuvoktTbVT+E+9+B0nbVlJ1e2dLyXW1zviH0L8/UPbVttWWg1e23zR3XN+Jew+PVttWINde53dRb0j53+i/EK53bVttXeeq/PH0BR/LPU0V8470Xg6bZR6behF9HpezKvNOGOCttqxRX9e2G2refegsq+e85bVp3plL9B2rZuzq0GTVV2BNW2rasshdea+c/SHndeZaYremec++U/wBtW21eb+bfRviNUPqHlyq+jw8Bz9A58Wrsek8q1ews/KtXY8mLV2Hrvzl1dezeYl84qNruup9NCattq22rV1jq8EqfoDx6qGNq22rbattq22rbapjXlNfbJsq22rbattq22rDJq838/wDohlXz3vUOSrnMZFIy9SMa7rnnHo/a1wXopdW21bbVttW21bbVttW21bbUivs9VOS01IXtW21bbVttW21bbV//2gAIAQEAAQUC/mioJa761jf6UsWi+tJGFBX+op7qG1RdeKYkOffr+drmklLr2RKuIwb7fwO18UxqdvdQXaP5xa0xo3HxLRzTyTyfzMU8kEm3eJmhaZUfzN5eRWMG57tNfyfzu3btPt8lnew30H37y8isbfcNwlvrj+fsL6WxuLK9ivrb7q1pjj3bcl39ywKvZNk94e97H7v9wJJeCmUkd+L2LZec962LlMinba9xXt91HImWL7niTcad9k2X3h8A952Hlu1sJ7xdt4X0RsO3of6IsGvYdvW7nwvpdWE9ovZNl5/ffNkCU8O3hrcKK73dwm0tLiVU0/bZt7No0qStPZEaIk/dlhjnjAADUoJTve8G9X2gkVFLZXKbyz7eKLvGP7mzbyqxWhaZUd7jdrG2P9JNudvu1jdHuTQb5vXvR+54Xuqjtvlxz90+5Z26rq6ghRbwO4uI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",
                    decimals: 18
                }, {
                    name: "GB",
                    address: "0x90842eb834cFD2A1DB0b1512B254a18E4D396215",
                    img: "data:image/png;base64,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",
                    decimals: 9
                }, {
                    name: "HAT",
                    address: "0x82FE038Ea4b50f9C957da326C412ebd73462077C",
                    img: a.p + "static/media/HAT.4a46bd42.png",
                    decimals: 18
                }, {
                    name: "HUSKY",
                    address: "0x65378b697853568dA9ff8EaB60C13E1Ee9f4a654",
                    img: a.p + "static/media/HUSKY.8038cdd3.png",
                    decimals: 18
                }, {
                    name: "ICE",
                    address: "0xe0Ce60AF0850bF54072635e66E79Df17082A1109",
                    img: "data:image/png;base64,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",
                    decimals: 18
                }, {
                    name: "JOE",
                    address: "0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd",
                    img: a.p + "static/media/JOE.db647b9d.png",
                    decimals: 18
                }, {
                    name: "KLO",
                    address: "0xb27c8941a7Df8958A1778c0259f76D1F8B711C35",
                    img: a.p + "static/media/KLO.177d0d0c.png",
                    decimals: 18
                }, {
                    name: "LINK.e",
                    address: "0x5947BB275c521040051D82396192181b413227A3",
                    img: a.p + "static/media/LINK.e.3889d378.png",
                    decimals: 18
                }, {
                    name: "MAI",
                    address: "0x3B55E45fD6bd7d4724F5c47E0d1bCaEdd059263e",
                    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAACN5SURBVHgB7Z15cBxVmuC/9zLrkmSrLNvcYBl8YNqNZXxItsEu9XRPNw3dwO5s7MTGzmJiozd2dmMDE7N/7G5EN/Zef21Ew187ER2xmImdnomYmMDQhoZuGovLkm0ay7jdBh9IGGPLl1yy7qrKfPN9LzPLkiypXmVdWVXvB6UqyZVVmS/zy+9832OgKQl9HR2tacuK48s2xjk9L2MAcQHQiq/j9NrGF9z5W3y2z2BCJG3Gktz5tV/Q35znJL78yhain3OeHIlGe9d3dSVBU3QYaAqCBCHFWBu37VbG2DohRBsOautcF32pwO9M4nf2SwFi7Bj+qUsLTuFoAcmT0x0dCchk2phh7LBJOzgaIbCQwOBTLwrP+8BY78qeni7QKKMFJAenNm0iEymBF9dTzLbb8O5cVs1QbMhsw2PoxZevC9vuWnXkSC9o5kQLyCxILSHEU3jXfTroGqJQDM770ZfpwmN9VWuXW9EC4uIJBQ7IznL7D0EBfSjyYbpsLSxZ6lpAjiYS8YVjY88Lw9iF5kZdCsVcSGERYh8GIF5e09PTD3VKXQoIaQsD4EVLiARocoLCIrXKqp6evVBn1I2AZLUFY7vq1YQqFIqIYV5mj4VmWL1olZoXkKxgAOyq9ghUUOAUOkatkgLYU+uCUrMCQoLRNDHxPNrRWmOUCDS96Gkvmqt7lteooNScgGiNURlQq+xFh77mNErNCIjWGJWHIl+oTfaiNtkDNUJNCMiZLVueBtv+uajxpF614DnztRD1qmoBOdnR0WoCvAI6XBtI8OLal2bshWo2uzhUKWc7Ol4M2fZRLRzBhUp1TCH66FxBlVJ1GoSSfOhnvKLNqeqC/JM0QGe1aZOq0iCn29t/jk8HtHBUH0IIMof7TleZNqkKDSJ9DSFew5dtoKl6qkmbBF6D9LW3Px8S4iho4agZpDbBc4oWwS4IOIHVIDKvMT5O6jjwg6gpiJdGYrE9QZ0aHEgB0SZVfUF5EwwHB9LkCpyJRVEqGb7VwlE3UNAFzegDctJawAiUgJC/gQbqAV1DVX/IyCSe+6DlTAIjIDQwGbRHQVPX2ELsPrt5c2CEpOI+iHj66fjZixepjmonaDQueGHuXXHo0HNQYSoqIDJSNTl5AGxb+xuaW+G8dyQS6axkhKtiAkIdCTM6UqXJAUch4UI8U6kJWRUREArjhtEhs3XJiEYBjpn3VIUy72V30qVwAGjh0CiDjru8ZujagTJTVg1CZpWtNYfGJ+6Mxc5ymltl0yDkkNuMvaaFQ+MXquEiv5WuJSgTZRMQilbZOlqlKZw2upYoPQBloCwCcqaj4xUdytUUDbyWzg4M/BzKQMkFhCbIoGrcCRpNEaFrqhxlKSV10ukAqHQANJrS8cLKQ4dKVqJUMgHpe/TRRCadPgAaTalhrLNUyzWUREAoXk3ly3ruuKZMJDOMrS9FIrHoPgiF4MJaODTlJW6WKPxbdAGhabI616GpAG1No6NFd9qLKiBnacKTnkOuqRSc7zq9ZUtRr7+i+SCu33FUN47WVJii+iNF0yAhp6GbFg5NpYm7DT+KQlEExE0GtoJGEwza3C6cBVOwieW26OkDjSZoFCE/UrAGoXwHaDQBhNHSGAVSkIBQKYnOd2iCCpn9aP7vhgLwbWJp00pTJRQU1fKtQUKMlaXcWKMpkHioAFPLlwY51dGxkxaxgQAhBBQdlv1Rwwj5f9FhARs3xvkzK7q790Ge+DqMM+3tfYHyPXBnbJA2Jyx88omssOR74r3ByFy+DONHjsh1wPnUf6g1XOGwccBimzaCedvt3p/zwhseEoob+98M5LhRg+zhWGx9vj22TMiTr7ZufTFlWa0QIJyTbEMGpeTOn/0MCmXyyz44u3Mn8IkJebJrUj6mCIcVjcLtf/VXELn/fiiUa2/sB5MLHDceqHGjG3rTxASVoezOZ7u8fBByzNOWtRMCiI3CkaYfRcC8bSlEN25EgRMlMT+CBB1jZMNGCN19NxSDtGWDKM5pKD5CPJ9vxW9eAhIWIrBhXTwtKCDFuZyNhgZoeGQDiFBY3mFrVUosPDYRi0Hjhg3AwmEoBnQOLBHYAYs3jY3lVcyoLCB9iUSrHeAG09JcKJKAAOfQvKUDjDvvkAJSi/JB/hodm3HXXXis7dKULAaBHy/G8tIiygJiTUwEat2GmQgo7o0+2roMog89hHdDJwBQa9BY0bFFVq3EY22FYlHs81AC4g2OL6KEkoCQ78HqbHkCZhjQ8vj3wQL3rlhDakS4Qk/H1bwjIY+1nuB5+CJKAhLm/EW7lq4QRRpWr4ZQ63JpjtQa5CeY9z8AC9vWQR2i7IvkFBDSHsKyElCHGA2N0NyZkJGeWtEiMuZA/geGYRc+9iiY8WaoR5iiL5JTQFD5Juq1INFoiMFCDPeKBQtqyg+Rx9Icl4EIZuadCqsJaHJfk4IvwhXeEGjnvNTEVq2A8N33uBqk+lWIF70y77gDGh9aA3UNapFcb5lXQKjmqt5nCoYWLYJFTz4JFplZ9IdqlhHXOSeTMf6DH4DR2Ah1jW3Hcy09zXP847OggUV/kgALIz12lWfWs6UlhgkteEwaWaM1r4U0p4BI51yIBGggcttt0LRtm5N5pj9Uo5S4zjlpwiZMDEbQxNLIMUnM56zPKSAhIXR/qyk0b9kCdihUtZl1qT3oORLB3Md20NxkPmd9PhPrKdBkaXx4LYQfeKBqQ71Z5/y+ZbCgTS/VMhWGicO5/m1WASHHRc81n07DihUQW7dOmllVV8CYLW1HQd+8EaIoJJqbUMh3Lmedz/HHunDOU8PDcKnnCKRHR3O+l/IFLd/9jlsCX11mlqyPQqHO4KMFo1fMzF1aYqVScOGjg5AZG4N6QDD29Gx/n1VA6sY5t2zo3/9rSA+PKL19wbe/DRydW5p2Um0CQoWJBuZzmlatVNpm8vp1OP/2uygoaagHmG3PqhRuEZC6Mq8wxjd+7hwMHvtM7e3opLc88UO8E1dPAaNw95WKLhf/83+mnDm/fPAwjJ37uuan5E9hVjPrFgFhdZb7oMvlmzffAWFZSu9f1LkDf8SrKqtOu8paWqC5o13p/XYmA5cOdIHJ6qtAFc/pLWbWLQLCGUtAnUB3R5NzGD15Ekb6+pW2idxzLzSsWSMdXhF0Z13cjF5FVq6EyJ1quY/hL07B2JmzKCC89ru6TIHPErmdJiCntm5ts2y7FeoIw2CQHhiAoRMnQCjMaTcXLoAmjATZmE+ohgJGOe8jGoPmx7bjvi/M+X4agysfd0PmwgUweB1JBziNHU5t2jQtBj5NQFgdlrWjfIBpZeDaxz2QUXTWm7djoo0qfIUItJB4pSUQi0JcsbTEnpiE64c/AZ6alGNTXyKCx895YurvM02sOksOMrwIGIQNDoO/ew8mL19W2iq2bBnEMNlGZRuBNbM85xz3ccFjj0Fk6VKlzcbOfQWjn34qx8QIWve3MmDMkIHpGkSIukuxMldION45r/UcUt6umWqz0EYP6hxsr7SEiiybt21V3u7qwUOoPVJyTOpQPojZTSwZ3mWs7laIomuAbO0Q2hNXfvM79ZzIuochQs66HUDxcHeJ9i2GuZuGBx9U2oyO/RpGr2gsaEzqUz6mh3tvapA61B4SRmrVEZBUfz9c/+T3SptRRKhp4yPZpg5BQ/pHqAKaNmyA0NIlStvQsacvXoQQCocpNUidighjWVnICggOxQ6oQ+gSoGBNiEKaQ0kY7O4Ba3Iy93aYNFxIU1YxMuSUckBg8Mw+agq3cOsW4ApN4SgPRMcurl2T4d06FQ0H2054L6f6IHVb4kkCIs0sfAwdPgKWYv1R07fWArQsvjlPJCB48z4MzNk0qppXQzfksZvCrmfzSoLHnm31IgWkr60tXu/VuyQkJv6YPNsHyWPHlbYxGhtg0Q++7xQwBiSa5e1GBh+Ln3wCeDSitF3ys+Py2OkmIdMfdSwhJAsXtm5dRq+lgGSi0bqfIEADYWBWPcQEXPjH15Rtppbv/Uk2JxIULUIajcXjsCihODFK0DHvk8duuksX1LWJhQxnMuvp2atcS0AQEJ79nN+l5pR9+LuBe10GaVu6MEiLUOnJ6NfnofG+e3NuT00dKFI02X2QwuTA6YMqdHV5Y0CBgwbM04QWL1bajo51+PhxiHLHMXe6LjJf9WbOPjgNrPNdvowBC8yiRdwwWulZCgie2HVBuPt5md/wypWwILEjr4VwLNvOu7u7EYnA0h89AfaG9U5ZhTtnIo1Oqo25ABVM1B63/5u/gLG1a2XmOQhYFL3auBF4RM28omO991/9SwjZltSidBgZHE/zrrvRRItCPtz9l/8OwpzJz8nF1IV3hrveh/SZM9P+XklIJujZE5BWEYCQXrbjOArIkp/8BEoN2ed3/PhJKAgct+ZNG+WjWlmw4gH5KAbL/sO/Bz+Mf3MBJk6dchOUlb8WmW1Lt0OKeVAcdG9ijxXE5JumpGTkuiLBqUpAhdFKz1xGsAKUQZf1Q1o+6g5LiECFy2me+pcYyeJBi2DZIpiZaU1pCeIMzUw6vYijrRUY7SGm/NRoAkAb92ytIOCE+OpwEoImkHVfjPO4SQ56kHaNogY3jnwCx//rT2GSVkxV1LvOOukAHf/nf4Mq6ZFROPv3/wBDn5+aVS7pm0PNcVjzl/8Wogo5BapnOvF/fwEj/edkNrpc4+rVgrVsaIOVf/4vQKVOfQRzH6f/5peQup6EmRMHvVqu5tWrYeW//nMwFLPxRPd//m/y81RzIBxD6mGMj08ePQrhgMkI7k6riSMbD0rhv5wjjvsyMTAA13+1HybwgrNVIhsU+cIfKVooPQ8BEVYGrn74EVw/2AOmcesppXJxavS8ZN1auPdHP8z5eYwy8eEwXNr3hqwOLtddkex3igItenAVqJ7Lwd8fhXP//5dg4hjzGRIio4kYKUlvvQz3/9nTeQnIxX2vK0+28gpFo/j+GD54yAya8dBs4kldFhjviMocMBVNA0YZ7YjFlD2SFGqbCZ5f7pZORtQwYGHYxAuaT7uTehn2iYwFF3/1ppKA0P7f+egWuPDXjRBKp6Swl/yM435SctNqbIK7O9ULsgfeehuaGI51JORouyn7STclGk8am3z3v9E0IWY6szRVoI+nsaexMnmwSuyF1CABQg6pVLmCmmdDhAZZMTY+yS0c3HxniDN5chpChhTKmSeHwo5UvDfc3Y1a7RJE77g95yc23HMP3P7oVpj88AP52aWWEAqMpvFu3/SdBEQU9o+gYxk5fBia8LhjpkGdbKb9O2mkSXcSWb5732By+YgodG/0ykrkKNHN0a0DCxBxU2bRISDQnYw6ADIG+Zh9XomKnz5OXhVvCLXP1C4eTtLSljtFd9OLb/8Glu/8i5yfZzQ1wpLvdMLFw4fAtC150kslIt5x25EwLO7cDmZDTGm7gbd/C2E0L6MoIGGpOafvo5e08zMnXY6lweXn5rs1y/4IBrgrcR60rhyebOT1kBuCL7KV3TM+U84RYVzWFIXxMYR33IlLuZs6kB/S+K01wBcvcYouqbKWQUke4HVsv+suaFq7Vummkrp2Da739DhmDXeEg886poXdNuW45ns8Ps9hKUGTX9TdPHRV6HzRXZRMjbE/npQN1VRoWL4cYt9eS61/S5fVETdLc2LfWqu8IM7QiZMw9vkXGDFiJdVutQBl03k9NmpQhbn2MTmQ9uAgJI8cUduOOsH/4PvZtkCliIF4HdvpO5Y+82Ml7UE402qvOrMG87Nk65F4wHyi4EHOo+ydhRfUpf1vga3Y7XzR9seA33VnaQrwhLecAUB41UpYsG6d0mZU1n757Xekf2BydotzrrkVLSA5kLF6d766ffUqJI//QW07tO8XbN4sI2FQZC3iJfLosxds6VDebvDTXhBXrkJIm1fKaAHJgRQQcMysCF70X73yN2CnFbXI974LDDPwan3j80M653ffA/HtatNqaZ/P/+0v8RicfIOeVquGFpBcMNfMci+s8dOnYPTc10qbxtD8iaxa5VaqFk+FOBPLACKrV0NsxQqlbUa/OgcTff2yWbfhJeS0hOREC4gCTkkEk2FRG0O9Q58eBZHJ5NwujNpjIbUotUW2Vqxg3Aw/TYmN/+n3wFzQpLRZkprCnf8GTUVDm1d5wDFRmATN/HjRLPxBfaOuHngfrPFxpU0XJXaAhYJVLA3iJQdFQyM0b1ab5ktd6699+BGEaJ459yoWQJObJNVXaAFRwItmhagBY88hGMO7sQpU/tG4ud2ZLed5137xOoagRop//08h1NystNlwXx8MdR/C6BUEZs53NcCkgGiUkdXGVJKSTsGV9z9Q3IhByxOPg80MNI1EofLhVDdHohDvTChvN3iwGwzZsb3OW4r6gKoMtAZRwCk/cZo6U+nJ4Acfy7kUKix4ZD2Yy+4r2MwS7rzt0AMPQAyz9SrQPg4dPOSUoHPnGLQCUaaf29rEygu6yKiOKfP1OeX1RMhZjz38sFxPxPbd4c7VIIYJjY88AmHF9QZpH8f7+pxiTKYNhnyQzQSFbX8FQUL4eJTruwHcBXfw1+FhSB75RKnBHHWCX9DeDqKx0TGzhMj7GG2v60c0JluKMoW5LzTDkfaR3bgBcmoHUz/OolDJc1kEcLj6zUA56eJmjZH767Tn+bBtf9lq2ibbi0vhBktehAz7YjRr8OMeSCWHIHpb7uXNqPRk4Be/gAxerOBj8Vj6XipDD694AJrWPay0TeraoNxH8n6YMBwTTWE7GgsqYzF8DKjtVhjTJK5cx8hmPpP5JyBIEbYhk6QEAoIXwoyiCbFUdlZUd2r9tAsyGxug9fn/BDAxDvks6Cr3k+ZM4AmNKi5OY8SisPy/7wExNubbB6DDC2FUjCnOnDSiUXjof+1GARF55z5oPI2WFhyjRsiHtf/vF9kSehWY+3Pw7/8ORjHwEaQcTYY0CJpYSdUBLzWeE8puvwMaNjwCpYaqbhesfQjKReNDa6Cc0JLVizZugHLitwXr1Td+5dStAQRm8VDMEfZzCIV6ISB4YcyMbhxXd5D5GKQlJAjOeZJbqEEgQNA0V0sLSN1hSR8LAsVINNrL1/T09Ael3MRx0FngWlBqSo8I2Emn/OD6rq6kV5bTDwHAsTy1dGgqDwpsPz1LAbE4PwZBQWd665LA1YcxJvODsi8Wxrt70fx7FgIAdVMafO8AfHjwMIxbNoZT1QxTiu+T7/LjD98FVVJDQ/DJz/4nXP+0120VKluFQL7Qdzfedx9s++uXIdSUu/x84uo1OPRffgojp067E5dm+17mFCbin5ds3ggb/8dPwWxoyPnZaUxgfvCT/wgTFy5C7s5UsyODJfhoWd8GmzBMbDaph3p/9dh3ZRRKNS5Kc1NiJofw+DjEgjRFhTEZvJICItVJEFb1AWfAzLFRWaJtZiy1BKvjvEDG8uHlJZPALl9yu/pB3gj3u8dHhuH6seNw27YtObcJNy+ERffeDWMffQzmHG2Lssl2bkC89V6Z01Dh0ocHIYWCZ+AYGsz/MdFydmIoCbbCvJep2AMD2U6Jua52r9MPwzS/nMgV8ivSJaGLfkgBSXPeawbBSXLvPNTyMsSF7Neqslf0npRlwXgmv6uB3h3Fu1dz2JBdHP2oeSHD0jZMTE5g1vogLG3fJPMr88FDIbhj+zYY/e27wIdvzH4hu+FuY1kr3PHoNqXkoDU2Dlff/R3EJschGjHxIuW+BITCrU7r0fxT/gtkt0bMHuA5VNnUqZB2uyoGqBSfIlj0LM8kRbJOtbf3swovxea1oKSaOmpjHHZvKCoaRNZHiXwH15klGDWd1qOc+xEQMoNwWzS0kgd7YPTPnoGm++/PuV0LJvCurVkNqU9/LxtCzLwwKFNPd/HGVStgoWIycxzv3mMn/ihbqVJLUYP5s+2p1IR5vXIhP6hq2BlPQ0mDTH0OShYdL6d+imDR6+ytDq/JXlFhAQF2s1lbPsiyCMHAx/XtdlCE7JzzfCGh5FR/hB8y1N8PQ72fKQkIrY4b3/4YXEYB4e5kLO+wZX0YatA0Pjdv2yo1jgrDn38B1sWL0Eh3cM58m1jyrm77awtkuMdicH/nIwjgbmeDVlm9jefifahSKnkess3lUBNRL16ajquayGlGf0Wg4z1bDZnsjXv77RDfqt7W58pv34MQEze7lhQ0MIWZ3FUqGw6cd2VfZv/oeu2a/PE6k5N5MXbycxj9Sq3rSbhlsZyOK2cJulNyhfuagncLtm0Dc9Eipc+iKcDDvb1y3keQbPmqBKO63susgKzs6enSDRz84XQ9cZxNMXgNBt58S0mLmBjNavluJ1jo1E+Nv8nX+G/xzh3Aw+Gcn0PfdeGN/QAYtjZd00aLh2+SJAveL9NCI0JrEX+4zjCFNg2Mpg0dOwaZ0VGF7TAHsHo1GIuXZHtnCXc+hXHbbdCwahWoQPmcG0d78bvTch90z6uCmCYDfMYvr4PGF15wgXr4jp04CSOnzyptJzvBY0LOdntn0YOiSE3bt0N4idpck9G+fhg7/gfZ+VH3vCqYaTIwTUAsw+gCjS+cpg5ONAwwt3HlfcWYB2645Kkfyxl8nvbI4IW+9IePgyo0a5CNjWQjR9r98I+w7a6pv08TkFUHD1Kotx80vpjaCX7g9f3KzeUWPrIeQsuWOVN/UUBia78N0WX3KW1Lc+IH3nhDNqTWPa8Kg3Pev+rIkblNLBdtZvlkWif4y5chefyE2naYVGvaukW2E6XOJ83UlEHxQr9+9DNIf3NBrtJraPOqIFCDd8382y0CgidmH2h8ke0Ez52Q76Vfv6PcCX7h1q0A6Kwb994HTRvUpsnSZ196521ZJhNyk4JaQPyDCvzVmX+7RUB0uLcA3OZyzrJtHIYxmjVyVs1Zb3roQQg9+CBEH34YGleqdWwfOfMljGDmPmRw3bG9QDCC2z81vOsxewUcY6+CxhdeNCuEL9Jfn4cbx9QW3AnF41JzxLc/CjwSUdrmxok/yiUNQjyQSyhXFYZbvTuTWcdUaDPLP149GZWepCZg4K1fK27H4M4fPQEt27aCKgP734SQnbnpe2jt4Rt7FvOKmFVApJnFuTazfOJEs0CWfYz94QSMKywfTYQXt4ChqD2otGQUzauw+116vUH/sDnMK2JOrYwe/cug8Q13y8Wpq/o3r70BxeY8fqaJmXPD4Fo4CkWIOSO3cwqIOTHxEmh8IWfJuQJCa6xf/+ADSCWLp5BpWu1Qd7eclBRycx9aRPyTZmzOa31OAVne25tkczgumhywm8u2kZk1efZLGEJTq1j9jJJoWqXOfT3dOdcS4gu8uXTRhMG5/n3ewAc663tA44ub80Tw7j42BkOf9uY9v3s2KPcx1IvJ3uEhZz67N7Fb44u5nHOPeQVEOut6gR3feBW+YTSzrvz6bUhdvQqFkhochEtv7Hecc679j0KgsqpVPT1753tPztA5ahHtrPtk6jyR9PnzMHTiJBRK8tNjYF0c0PM+ioGChZRTQMhZ11rEH1lnnbQIPq6+1wUi7d/Mom0vv/s76XuYXhcQ0PiBuolaCj52TgEhZ93SWsQf7GavLyoHGfnsOAyjw+4X2nbsiy+chgxcJwcLIZdz7qFUnRCORrUW8YkXzZJm1jfn4drHB31Hs2hb+8oVKWxae/iHo++WAlAKQCkJyPKuLq1F/OJGs2RbIduG6we7ITOiMB13BpmREbktn5hwJ0ZpB8QvmATfq6I9COX6Nq1F/ONNpCLTaBTzIWOoSfJlfOCS3Ja6c+p5H4VhKGoPQllASIvoiJY/ps4TYWOjcOnd9yBfLr39G7kttRMtvOdV/YLDtne5ovYg8qqQ1hEt/3C32yBNpLr6zruQGVObjkvQey+jgIRlU2hdmOgXKkpM55n8zktAKKIVVC3ihVTz3877r4S4H266Fb7WwAAM9vQob07vFZcG5LYGK/2sDzbjkde2AXaN0LR6dU0e2oPI+1j6Eom4NT5+tOJ9fKdAQSHq7j6WEdDw+OOQonW+51lXhMSBkmwhsGHiyCcQuZGU01aNUjaTdRsy0L6NZmzgqx+EcGurXLxyrqUrGTjRr1R/P9inPodG3Mew23O3lFchtR2atGyYXBiH8Pr1kDFDsvvjfO1IqfUqVQyMvvWW7A0cpu7uAZIUynusOHRoOeSJr0M4s3nz06hJXoOAIJcgQIGQF1/agsmMlXOlXDJTorITOZed0GXircTdlp39xIsP93Uc9zOFz2m8EOfaU9qbkLzwnH30hLjUTaFteYMRcgGjCRzLCVrIaJ7x9GZRRnAsG0ImRLjTNT9IAoLX63O5ykpmw/chnO7oOIBnPAEBQLh3Z3qk3WUDci0KSSfPdKttDTczXfITKpy1N9KuQNNFmGtFX4O5jbE5l9N4yxHe9cYz444lrX+SK3XD3f30usob5RhPdfatPHToGfCBCT7BDZ/DVD2ZWnGoMHQiDGBuwwSBdzDnbM53Z/aeWTnnU8iciDNfnXyJiHFzdVcx+9vdbHl5y9o9jSDXaaF+w+66KznHc0r5S5C0B978XgCfFHQYqEV24+i9CBpNUMGo1cqent3gk4Ll/Ex7e1+QHHaNxsMwzf77P/44b8d8KgXHDMn5AY0mgExaVicUSMEC4k6q0hl2TbBA0yrfnMesHwNF4nR7+1F8agONpsJQxnxFT09BppVH0dKyGcae0WUomoojRDINULBp5VE0ASF1JjjfAxpNJTGMophWHkWPVmNU6yWMaj0PGk2ZwRv0y6u6u3dBESl65ZsRi+3mM9Z502hKDdVajUYiu6HIlCTfebKjozVk20cxBFzxLLum9qH2PRZjncU0rTxKUjvt+iO+al80mryg0pZQ6LlSCAdRsskFsls2575rYDQaJWx7z8qPPuqCElHS2Tcru7tfAt2+VFMqqM7q8OHdUELKUnP55RNP7LWuXn0WNJoiIYR4ddXhwzuhxJRl1a7lodAuzrmObGmKA15L5RAO+VVQBti+fUk+Pt6pw7+aQjFQOEYikaJlynNR1mktfRj+tYU4YOvyeI0PqMbKAOhcXqKI1WyUdWFUOjCO8Wp89INGkwd0zaTLLBzye6HM0AGm8EC1kGhUoWuFrpk1ZRYO+d1QAehA8Ys7De24a3LTyyskHERFp9b3tbXF7VjsgG3beh6J5lZch3x9V1fFplEEovfEqY6OvUwInSfRZDGWLn11uWnuoggoVJDANGfRHVI0WYQoeYZclQB1L9JCUvfIpnjsBVmiFBACJSAECklCCPEK07mS+kKIJPocz8gi1wAROAEh5HwSTCjqflv1AVVYpBh7plKRqvmoSJg3FzRQRiy2XrcTqn3wJvjyjVisM4jCQQRSg0zl9JYtu5hlvahnJ9YYZFIZxp4g+RuzEXgBIaTJBXAAfZNW0NQCvZmAmlQzqQoB8ZBRLoAX/S6jrKkwGKWiFcqK3XmklFSVgBCkTSKh0AErlWoFTdVAlbh4W3suaFGqXFSdgHiQNsGdf1FobRJoGPoa1K+qkCUIKknVCghB80ssxn4ubPtp0AQPxrpooaXlVeBrzEVVC4jHqY6OnRwz8DpvEgyoiZvF+Quru7v3QZVTEwLigRpld1qIZ3UWvmIkUWu8PBKNvlTJCtxiUlMCQrhdHXdjtERXB5ePmhMMj5oTEI++RKI1PTGx2wB41taOfEnwHPBaFAyPmhUQD3Lk04zt5ra9Q/soxYHWgaF8homCsbxGBcOj5gXEg0wv1CYJ7oSGW0Hjh5o1peaibgRkKhT1wgN/FjPyCdDkBJN8Xah991Rbkq8Y1KWAeEiHnrFdYNtPafNrOozzJGrautIWs1HXAjIVmqiFg7ETtUrd+irkW9icv4rO97561BazoQVkFuSsRhQWg7EdNvkrtRoFo+JBIfqB89e1UMyOFpAcnNq0qQ3NjQS+fAqvpjao9nkpNA+DMepH9rpp213LjxzRvcnmQQtInpB2wQusjWHY2AZoC3rWnpYnoymt+Pw+hEK9pVxsphbRAlIgRxOJeNPEBDW+S3Ah1lFjbhIavCDLqmlk0o4x6n3ci2bhMfy9nzpXVnOhYBDQAlIiPMFBTRPHC5cEphUv3mYvAIAXcKsN8gTEGZlt5Ocw93Tga+E800Wf5OA60PiaCgFRAIboWdg2RZd6Q4aR1IJQGv4JUkFB3o0fmxUAAAAASUVORK5CYII=",
                    decimals: 18
                }, {
                    name: "MIM",
                    address: "0x130966628846BFd36ff31a822705796e8cb8C18D",
                    img: a.p + "static/media/MIM.9214b060.svg",
                    decimals: 18
                }, {
                    name: "mYAK",
                    address: "0xdDAaAD7366B455AfF8E7c82940C43CEB5829B604",
                    img: "data:image/png;base64,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",
                    decimals: 12
                }, {
                    name: "OLIVE",
                    address: "0x617724974218A18769020A70162165A539c07E8a",
                    img: a.p + "static/media/OLIVE.535e2a74.png",
                    decimals: 18
                }, {
                    name: "PEFI",
                    address: "0xe896CDeaAC9615145c0cA09C8Cd5C25bced6384c",
                    img: a.p + "static/media/PEFI.d20bf8df.png",
                    decimals: 18
                }, {
                    name: "PNG",
                    address: "0x60781C2586D68229fde47564546784ab3fACA982",
                    img: a.p + "static/media/PNG.6a7ba961.png",
                    decimals: 18
                }, {
                    name: "QI",
                    address: "0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5",
                    img: "data:image/png;base64,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",
                    decimals: 18
                }, {
                    name: "RELAY",
                    address: "0x78c42324016cd91D1827924711563fb66E33A83A",
                    img: "data:image/png;base64,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",
                    decimals: 18
                }, {
                    name: "SHERPA",
                    address: "0xa5E59761eBD4436fa4d20E1A27cBa29FB2471Fc6",
                    img: a.p + "static/media/SHERPA.4fa895bf.png",
                    decimals: 18
                }, {
                    name: "SHIBX",
                    address: "0x440aBbf18c54b2782A4917b80a1746d3A2c2Cce1",
                    img: a.p + "static/media/SHIBX.c2eb0fcb.png",
                    decimals: 18
                }, {
                    name: "SING",
                    address: "0xF9A075C9647e91410bF6C402bDF166e1540f67F0",
                    img: "data:image/png;base64,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",
                    decimals: 18
                }, {
                    name: "SNOB",
                    address: "0xC38f41A296A4493Ff429F1238e030924A1542e50",
                    img: a.p + "static/media/SNOB.d32bfe23.png",
                    decimals: 18
                }, {
                    name: "SPELL",
                    address: "0xCE1bFFBD5374Dac86a2893119683F4911a2F7814",
                    img: a.p + "static/media/SPELL.9c658b0e.png",
                    decimals: 18
                }, {
                    name: "SUSHI.e",
                    address: "0x37B608519F91f70F2EeB0e5Ed9AF4061722e4F76",
                    img: a.p + "static/media/SUSHI.e.4b15c8ee.png",
                    decimals: 18
                }, {
                    name: "SYN",
                    address: "0x1f1E7c893855525b303f99bDF5c3c05Be09ca251",
                    img: a.p + "static/media/SYN.eec9db06.png",
                    decimals: 18
                }, {
                    name: "TEBBY",
                    address: "0x094bd7B2D99711A1486FB94d4395801C6d0fdDcC",
                    img: a.p + "static/media/TEDDY.72430752.png",
                    decimals: 18
                }, {
                    name: "TIME",
                    address: "0xb54f16fB19478766A268F172C9480f8da1a7c9C3",
                    img: a.p + "static/media/favicon.a1889463.png",
                    decimals: 9
                }, {
                    name: "TSD",
                    address: "0x4fbf0429599460D327BD5F55625E30E4fC066095",
                    img: a.p + "static/media/TSD.2430fa58.png",
                    decimals: 18
                }, {
                    name: "USDC.e",
                    address: "0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664",
                    img: "data:image/png;base64,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",
                    decimals: 6
                }, {
                    name: "USDT.e",
                    address: "0x55d398326f99059fF775485246999027B3197955",
                    img: a.p + "static/media/USDT.e.006177e6.png",
                    decimals: 6
                }, {
                    name: "VSO",
                    address: "0x846D50248BAf8b7ceAA9d9B53BFd12d7D7FBB25a",
                    img: "data:image/png;base64,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",
                    decimals: 18
                }, {
                    name: "WAVAX",
                    address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
                    img: a.p + "static/media/WAVAX.f39a652e.png",
                    decimals: 18
                }, {
                    name: "WBTC.e",
                    address: "0x50b7545627a5162F82A992c33b87aDc75187B218",
                    img: a.p + "static/media/WBTC.e.9e7a5b91.png",
                    decimals: 8
                }, {
                    name: "WET",
                    address: "0xB1466d4cf0DCfC0bCdDcf3500F473cdACb88b56D",
                    img: a.p + "static/media/WET.450c6288.png",
                    decimals: 18
                }, {
                    name: "WETH.e",
                    address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
                    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlApw1AAACBFBMVEUAAADv7//09PTy8vXx9Pbz9Pjy9ffy9fjy9Pfx9Pfy9Pby9Pfx8/Xz8/Py8vTx9Pjv7/fy9Pfy9Pfy9ffz9ffy8/b09vjy9fXz9Pb09/ry9Pjz9fnv7/Tv9PTk5uiCg4Ssra9jZGWQkpTIycw7PDza296QkZIvMDBgYWK6vL21t7lHSUnm6OqEhojNz9Ly9PSztLednqB4envBw8Xv8vWen6Hv8/NsbW7x8/bP0NOpqqyJiovz8/dUVVXv7++lpqjy8/jz9Pbx9PZ9fn9bXF01NjYdHh4sLCw5Ojo0NTUwMTETExNucHBISElgYWE+Pz9zdHUaGhomJyfv7/oWFxckJSUtLi7x8vV4eXpRUlMhISHx8/Z1d3fy9PdnaGlERkaEhYZ6fHxrbW1AQUGDhYVWV1cqKipERUVOT1BcXV6LjI1iY2QyMzNMTU7Fx8lLTU2Sk5ba3N+HiIpKS0zW2Nt7fH4vLy+6vL6rrK6ChIXk5umfoKJYWVpXWVmQkpPd3+GTlJaXmJnOz9Lm5+qFhoepq6y6u77r7fB1dneRkpQ7PT2EhoeQkZPIysxISUnW2NrW19uztLa3uLqXmJp4enpTVVVvcHKsrrBmZ2g8PT2eoKJsbm+en6A9PT7v8/dsbm7BwsXd3+KEhYfx8/fy9fbP0dPx9Pjx8/bv8veJiozy9fnv8vQEFD2BAAAArHRSTlMAEDBQcI+fr7/f7/+AQGDPIJ9g33+vb1CPX+9/MDD//////////////////////2D/////UP9A/5D///9A/xD/r8/P/////////////////////zD///+g////sP/f/////////////////////////////////////////////////////////////////////////////////////0D/////gK//cO9g/1BgIk4dsgAACKdJREFUeNrM1YV1wEAMA9BjsMJOGfYfszBA0YnyJ5De6fmcPR9iyqW23gWfpPfWypBi8O7afEi5Cb4gLafxouGnPOOH5hyXa4Ufc8cvzWu8SvrUBH9Tt4U/nIZ/aZt3PGMW/JusI206MKIbIf4uMKTr4s60ZIG1EyssKwwYVGCMh19hFxxI09GHU3EwjUeu5wYGeDu6FRig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",
                    decimals: 18
                }, {
                    name: "XAVA",
                    address: "0xd1c3f94DE7e5B45fa4eDBBA472491a9f4B166FC4",
                    img: a.p + "static/media/XAVA.daea44f1.png",
                    decimals: 18
                }, {
                    name: "YAK",
                    address: "0x59414b3089ce2AF0010e7523Dea7E2b35d776ec7",
                    img: a.p + "static/media/YAK.ec1f1f43.png",
                    decimals: 18
                }]),
                ma = pa;
            var ba = function() {
                var e = Object(p.c)((function(e) {
                        return e.account.loading
                    })),
                    t = Object(p.c)((function(e) {
                        return e.account.tokens
                    })),
                    a = Object(c.useState)(ma),
                    n = Object(s.a)(a, 2),
                    i = n[0],
                    r = n[1];
                return Object(c.useEffect)((function() {
                    var e = pa.flatMap((function(e) {
                        return t[e.name] ? Object.assign(e, t[e.name]) : e
                    })).concat().sort((function(e, t) {
                        return e.balance > t.balance ? -1 : t.balance > e.balance ? 1 : 0
                    }));
                    r(e)
                }), [t, e]), {
                    tokens: i,
                    loading: e
                }
            };
            var fa = function() {
                var e = Object(p.b)(),
                    t = S(),
                    a = t.provider,
                    n = t.chainID,
                    i = t.connected,
                    r = D(),
                    s = Object(p.c)((function(e) {
                        return e.app.loading
                    })),
                    A = Object(p.c)((function(e) {
                        return !Boolean(e.app.marketPrice)
                    }));

                function o(e) {
                    return m.apply(this, arguments)
                }

                function m() {
                    return (m = Object(u.a)(l.a.mark((function e(t) {
                        var n;
                        return l.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = a, "app" === t && b(n), "account" !== t || !r || !i) {
                                        e.next = 7;
                                        break
                                    }
                                    if (f(n), !A) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 6:
                                    b(n);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                ba().tokens;
                var b = Object(c.useCallback)((function(t) {
                        e(ie({
                            networkID: n,
                            provider: t
                        }))
                    }), [i]),
                    f = Object(c.useCallback)((function(t) {
                        e(q({
                            networkID: n,
                            address: r,
                            provider: t
                        }))
                    }), [i]);
                return Object(c.useEffect)((function() {
                    i && (o("app"), o("account"))
                }), [i]), Object(c.useEffect)((function() {
                    o("app"), o("account")
                }), [i]), s ? Object(E.jsx)(Ae, {}) : Object(E.jsx)(_t, {
                    children: Object(E.jsxs)(d.d, {
                        children: [Object(E.jsx)(d.b, {
                            exact: !0,
                            path: "/dashboard",
                            children: Object(E.jsx)(aa, {})
                        }), Object(E.jsx)(d.b, {
                            exact: !0,
                            path: "/",
                            children: Object(E.jsx)(d.a, {
                                to: "/dashboard"
                            })
                        }), Object(E.jsx)(d.b, {
                            path: "/account",
                            children: Object(E.jsx)(da, {})
                        }), Object(E.jsx)(d.b, {
                            path: "/calculator",
                            children: Object(E.jsx)(ca, {})
                        }), Object(E.jsx)(d.b, {
                            component: na
                        })]
                    })
                })
            };
            var ja = function() {
                    var e = Object(c.useState)(!0),
                        t = Object(s.a)(e, 2),
                        a = t[0],
                        n = t[1];
                    return Object(c.useEffect)((function() {
                        K().then((function() {
                            return n(!1)
                        }))
                    }), []), a ? Object(E.jsx)(Ae, {}) : (console.log("get marketPrice finished"), Object(E.jsx)(ve.a, {
                        children: Object(E.jsx)(fa, {})
                    }))
                },
                Ca = a(654),
                ga = a(660),
                ya = a(661),
                ha = a(663),
                Oa = a(662),
                xa = a(339),
                wa = a.n(xa),
                va = a(338),
                Ba = a.n(va),
                Ia = a(165),
                Ea = a.n(Ia),
                Qa = a(337),
                Sa = a.n(Qa),
                Da = a(335),
                Fa = a.n(Da),
                Na = a(336),
                Pa = a.n(Na),
                Ma = a(334),
                Ra = Object(ue.a)((function(e) {
                    var t;
                    return {
                        root: (t = {}, Object(m.a)(t, e.breakpoints.up("sm"), {
                            minWidth: "344px !important"
                        }), Object(m.a)(t, "maxWidth", 500), t),
                        card: {
                            width: "100%"
                        },
                        error: {
                            backgroundColor: "#d32f2f"
                        },
                        info: {
                            backgroundColor: "#2979ff"
                        },
                        warning: {
                            backgroundColor: "#ffa000"
                        },
                        success: {
                            backgroundColor: "#43a047"
                        },
                        typography: {
                            color: "#54F7CF",
                            fontFamily: "Montserrat SemiBold"
                        },
                        actionRoot: {
                            padding: "8px 8px 8px 16px",
                            justifyContent: "space-between",
                            color: "#54F7CF"
                        },
                        icons: {
                            marginLeft: "auto"
                        },
                        expand: {
                            padding: "8px 8px",
                            transform: "rotate(0deg)",
                            transition: e.transitions.create("transform", {
                                duration: e.transitions.duration.shortest
                            }),
                            color: "#54F7CF"
                        },
                        expandOpen: {
                            transform: "rotate(180deg)"
                        },
                        collapse: {
                            padding: 16
                        },
                        checkIcon: {
                            fontSize: 20,
                            color: "#b3b3b3",
                            paddingRight: 4
                        },
                        checkIconCopy: {
                            color: "#43a047"
                        },
                        button: {
                            padding: 0,
                            textTransform: "none"
                        },
                        errorWrap: {
                            marginTop: 10
                        },
                        errorText: {
                            whiteSpace: "pre-wrap",
                            maxHeight: 300,
                            overflow: "auto",
                            background: "rgba(0,0,0,0.1)",
                            padding: 5,
                            borderRadius: 5
                        }
                    }
                })),
                ka = Object(c.forwardRef)((function(e, t) {
                    var a = Ra(),
                        n = Object(Xt.c)().closeSnackbar,
                        i = Object(c.useState)(!1),
                        r = Object(s.a)(i, 2),
                        A = r[0],
                        o = r[1],
                        l = Object(c.useState)(!1),
                        u = Object(s.a)(l, 2),
                        d = u[0],
                        p = u[1],
                        b = Object(c.useCallback)((function() {
                            o((function(e) {
                                return !e
                            }))
                        }), []),
                        f = Object(c.useCallback)((function() {
                            n(e.id)
                        }), [e.id, n]);
                    return Object(E.jsx)(Xt.a, {
                        ref: t,
                        className: a.root,
                        children: Object(E.jsxs)(ga.a, {
                            className: Dt()(a.card, a[e.message.severity]),
                            children: [Object(E.jsxs)(ya.a, {
                                classes: {
                                    root: a.actionRoot
                                },
                                children: [function(e) {
                                    switch (e) {
                                        case "error":
                                            return Object(E.jsx)(Fa.a, {
                                                color: "inherit"
                                            });
                                        case "info":
                                            return Object(E.jsx)(Pa.a, {
                                                color: "inherit"
                                            });
                                        case "success":
                                            return Object(E.jsx)(Ea.a, {
                                                color: "inherit"
                                            });
                                        case "warning":
                                            return Object(E.jsx)(Sa.a, {
                                                color: "inherit"
                                            });
                                        default:
                                            return Object(E.jsx)("div", {})
                                    }
                                }(e.message.severity), Object(E.jsx)(ua.a, {
                                    variant: "subtitle2",
                                    className: a.typography,
                                    children: e.message.text
                                }), Object(E.jsxs)("div", {
                                    className: a.icons,
                                    children: [e.message.error && Object(E.jsx)(Oa.a, {
                                        "aria-label": "Show more",
                                        className: Dt()(a.expand, Object(m.a)({}, a.expandOpen, A)),
                                        onClick: b,
                                        children: Object(E.jsx)(Ba.a, {
                                            color: "inherit"
                                        })
                                    }), Object(E.jsx)(Oa.a, {
                                        className: a.expand,
                                        onClick: f,
                                        children: Object(E.jsx)(wa.a, {
                                            color: "inherit"
                                        })
                                    })]
                                })]
                            }), Object(E.jsx)(Ca.a, {
                                in: A,
                                timeout: "auto",
                                unmountOnExit: !0,
                                children: Object(E.jsxs)(oa.a, {
                                    className: a.collapse,
                                    children: [Object(E.jsx)(Ma.CopyToClipboard, {
                                        text: JSON.stringify(e.message.error),
                                        onCopy: function() {
                                            return p(!0)
                                        },
                                        children: Object(E.jsxs)(ha.a, {
                                            size: "small",
                                            className: a.button,
                                            children: [Object(E.jsx)(Ea.a, {
                                                className: Dt()(a.checkIcon, Object(m.a)({}, a.checkIconCopy, d))
                                            }), "Copy to clipboard"]
                                        })
                                    }), Object(E.jsxs)("div", {
                                        className: a.errorWrap,
                                        children: [Object(E.jsx)(ua.a, {
                                            children: "Error message: "
                                        }), Object(E.jsx)(ua.a, {
                                            className: a.errorText,
                                            children: JSON.stringify(e.message.error, null, 2)
                                        })]
                                    })]
                                })
                            })]
                        })
                    })
                }));
            r.a.render(Object(E.jsx)(Xt.b, {
                maxSnack: 4,
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                },
                content: function(e, t) {
                    return Object(E.jsx)(ka, {
                        id: e,
                        message: JSON.parse(t)
                    })
                },
                autoHideDuration: 1e4,
                children: Object(E.jsx)(p.a, {
                    store: zt,
                    children: Object(E.jsx)(F, {
                        children: Object(E.jsx)(ja, {})
                    })
                })
            }), document.getElementById("root"))
        }
    },
    [
        [616, 1, 2]
    ]
]);