import React, { useState, useEffect } from 'react';
import styles from '../styles/App.module.scss';
import dataJson from "../data/data.json";
import { ethers } from 'ethers';
import  Wallet  from '../artifacts/contracts/Wallet.sol/Wallet.json';
import TransfertEth from './transferEth/TransfertEth';
import WithdrawEth from './withdrawEth/WithdrawEth';
import BalanceEth from './balanceEth/BalanceEth';
import Header from './header/Header';

let walletAdress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const Home = () => {
    const [balance, setBalance] = useState(0);
    const [amountSend, setAmountSend] = useState();
    const [amountWithdraw, setAmountWithdraw] = useState();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        getBalance();
    }, [])

    const getBalance = async () => {
        if(typeof window.ethereum !== "undefined") {
            const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const contract = new ethers.Contract(walletAdress, Wallet.abi, provider);

            try {
                let overrides = {
                    from: accounts[0]
                }
                const data = await contract.getBalance(overrides);
                setBalance(String(data));
            }
            catch(error){
                setError("Une erreur est survenue");
            }
        }
    }

    return(
        <React.Fragment>
            <header>
                <Header dataJson={dataJson} />
            </header>
            <section>
                <BalanceEth balance={balance} error={error} success={success} styles={styles} dataJson={dataJson} />
                <div className={styles.wallet_container}>
                    <TransfertEth ethers={ethers} walletAdress={walletAdress} getBalance={getBalance} amountSend={amountSend} setAmountSend={setAmountSend} setSuccess={setSuccess} setError={setError} dataJson={dataJson} />
                    <WithdrawEth ethers={ethers} walletAdress={walletAdress} Wallet={Wallet} getBalance={getBalance} amountWithdraw={amountWithdraw} setAmountWithdraw={setAmountWithdraw} setSuccess={setSuccess} setError={setError} dataJson={dataJson} />
                </div>
            </section>
        </React.Fragment>
    )
}

export default Home;