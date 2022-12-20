# Project screenshot


![screen_1_wallet_prtoject](https://user-images.githubusercontent.com/19823154/208690785-7027e7d1-5faf-4bc9-8894-db0dd979cd7b.PNG)
![screen_short_wallet_2](https://user-images.githubusercontent.com/19823154/208690820-baa92b79-59f6-492e-8c93-cad5d2a6a1f7.PNG)
![screen_shot_3](https://user-images.githubusercontent.com/19823154/208690843-069a81f4-d89a-4e8a-be8c-779f1a43103e.PNG)
![screen_short_4](https://user-images.githubusercontent.com/19823154/208690855-285204aa-101a-482b-832f-3d824c57f242.PNG)
![screenshot_5](https://user-images.githubusercontent.com/19823154/208690874-b021d1bb-d248-409b-a504-13ccc2047a90.PNG)
![screenshort_6](https://user-images.githubusercontent.com/19823154/208690888-1dfe3a97-8a78-4421-8917-dfadb9bf7ae0.PNG)

# Create react project

npm create vite@latest => to install a react or other project

go to the project file

npm install => to install node module

npm run dev => launch the project on localhost 5173


# Include solidity in React

npm install ethers hardhat @nomiclabs/hardhat-waffle  @nomiclabs/ethereum-waffle chai  @nomiclabs/hardhat-ethers => to install dependencies and interactions with the front end

npx hardhat => to install smartcontract in the project

npx hardhat compile => to compile the artifacts on the path described in the config note in order for the command to work I must remove the type: "module" in the package.json 

npx hardhat node => will allow us to display the public and private keys of our smartcontract to create fake accounts on metamask to simulate transactions

npx hardhat run scripts/deploy.js --network localhost => to deploy the smartcontract


