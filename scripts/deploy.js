async function main() {
  const [deployer] = await ethers.getSigners();

//   console.log("Deploying contracts with the account:", deployer.address);

  const TicketSale = await ethers.getContractFactory("TicketSale");
  const ticketSale = await TicketSale.deploy(
    100,
    ethers.utils.parseEther("0.1")
  ); // Example: 100 tickets, 0.1 ETH price per ticket

  console.log("TicketSale contract deployed to:", ticketSale.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
