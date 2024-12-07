import web3 from "../web3";
import ticketSale from "../ticketSale";

const buyTicket = async (ticketId) => {
  try {
    const accounts = await web3.eth.getAccounts();
    const price = await ticketSale.methods.ticketPrice().call();

    await ticketSale.methods.buyTicket(ticketId).send({
      from: accounts[0],
      value: price, // Ticket price in Wei
    });

    alert("Purchase successful!");
  } catch (error) {
    console.error("Purchase failed:", error);
    alert("Purchase failed: " + error.message);
  }
};
const offerSwap = async (ticketId) => {
  try {
    const accounts = await web3.eth.getAccounts();

    await ticketSale.methods.offerSwap(ticketId).send({
      from: accounts[0],
    });

    alert("Swap offer submitted successfully!");
  } catch (error) {
    console.error("Swap offer failed:", error);
    alert("Swap offer failed: " + error.message);
  }
};
const acceptSwap = async (myTicketId) => {
  try {
    const accounts = await web3.eth.getAccounts();

    await ticketSale.methods.acceptSwap(myTicketId).send({
      from: accounts[0],
    });

    alert("Swap accepted successfully!");
  } catch (error) {
    console.error("Swap acceptance failed:", error);
    alert("Swap acceptance failed: " + error.message);
  }
};
const getTicketNumber = async (address) => {
  try {
    const ticketId = await ticketSale.methods.getTicketOf(address).call();
    alert(`Ticket ID: ${ticketId}`);
  } catch (error) {
    console.error("Failed to fetch ticket number:", error);
    alert("Error fetching ticket number: " + error.message);
  }
};
const returnTicket = async () => {
  try {
    const accounts = await web3.eth.getAccounts();

    await ticketSale.methods.returnTicket().send({
      from: accounts[0],
    });

    alert("Ticket returned successfully! Refund processed.");
  } catch (error) {
    console.error("Failed to return ticket:", error);
    alert("Failed to return ticket: " + error.message);
  }
};
export { buyTicket, offerSwap, acceptSwap, getTicketNumber, returnTicket };
