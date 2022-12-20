const BalanceEth = ({ balance, error, success, styles, dataJson }) => {
    return(
        <div className={styles.wallet_container_balance}>
            <div>
                {error && <p className={styles.error}>{error}</p>}
                {success && <p className={styles.success}>{success}</p>}
            </div>
            <div>
                <h2>{balance / 10**18} <span className={styles.uppercase}>{dataJson.balanceComponent.symbol}</span></h2>
            </div>
        </div>
    )
}

export default BalanceEth;