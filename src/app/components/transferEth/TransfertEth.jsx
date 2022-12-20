const TransfertEth = ({ ethers, walletAdress, getBalance, amountSend, setAmountSend, setError, setSuccess, dataJson }) => {

    const transfer = async (e) => {
        if (!amountSend) {
            return;
        }
        e.preventDefault();
        setError('');
        setSuccess('');
        if (typeof window.ethereum !== "undefined") {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            try {
                let tx = {
                    from: accounts[0],
                    to: walletAdress,
                    value: ethers.utils.parseEther(amountSend)
                }
                const transaction = await signer.sendTransaction(tx);
                await transaction.wait();
                getBalance();
                setSuccess('Votre argent a bien été transféré !');
                setAmountSend('');
            }
            catch (error) {
                setError("Une erreur est survenue.");
            }
        }
    }

    return (
        <div>
            <div>
                <h3>{dataJson.transfertEthComponent.sendEth}</h3>
            </div>
            <form>
                <input type="text" placeholder="Placer le montant en ETH" onChange={(e) => setAmountSend(e.target.value)} />
                <button type="submit" onClick={transfer}>{dataJson.transfertEthComponent.send}</button>
            </form>
        </div>
    )
}

export default TransfertEth;