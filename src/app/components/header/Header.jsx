import logo from "../../assets/eth.png";

const Header = ({ dataJson }) => {
    return(
        <div>
            <img src={logo} alt="ethereum logo" />
            <h1>{dataJson.headerComponent.title}</h1>
        </div>
    )
}

export default Header;