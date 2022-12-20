const WithdrawEth = ({ ethers, walletAdress, Wallet, getBalance, amountWithdraw, setAmountWithdraw, setSuccess, setError, dataJson }) => {

    const withdraw = async (e) =>  {
        if(!amountWithdraw) {
            return;
        }
        e.preventDefault();
        setError('');
        setSuccess('');
        if(typeof window.ethereum !== "undefined") {
            const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(walletAdress, Wallet.abi, signer);

            try {
                const transaction = await contract.withdrawMoney(accounts[0], ethers.utils.parseEther(amountWithdraw));
                await transaction.wait();
                getBalance();
                setSuccess('Votre argent a bien été retiré !');
                setAmountWithdraw('');
            }
            catch(error) {
                setError("une erreur est survenue.");
            }
        }
    }

    return (
        <div>
            <div>
                <h3>{dataJson.withdrawEthComponent.withdrawEth}</h3>
            </div>
            <form>
                <input type="text" placeholder="Placer le montant en ETH" onChange={(e) => setAmountWithdraw(e.target.value)} />
                <button type="submit" onClick={withdraw}>{dataJson.withdrawEthComponent.withdraw}</button>
            </form>
        </div>
    )
}

export default WithdrawEth;