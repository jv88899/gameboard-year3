import React, { useState } from "react";
import Transaction from "./Transaction";

const TransactionList = ({ activeStep, canHighlightCashTransactions }) => {
  const [transactions, setTransactions] = useState([
    {
      stepNumber: `1`,
      transactionNumber: `001`,
      route: `001`,
      description: `Collect $35 for sale to customers for Year 3; increase due to expansion into new IFB states`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false,
    },
    {
      stepNumber: `2`,
      transactionNumber: `002`,
      route: `004`,
      description: `Collect $22 cash from customers for Year 3 sales`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false,
    },
    {
      stepNumber: `3`,
      transactionNumber: `003`,
      route: `007`,
      description: `Pay $1 for known claims from Year 2 in Year 3`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false,
    },
    {
      stepNumber: `4`,
      transactionNumber: `004`,
      route: `010`,
      description: `$15 of actual medical expenses for visits; claim received`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false,
    },
    {
      stepNumber: `5`,
      transactionNumber: `005`,
      route: `012`,
      description: `$3 of actual prescription filled; claim received`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false,
    },
    {
      stepNumber: `6`,
      transactionNumber: `006`,
      route: `014`,
      description: `Pay actual claims of $1 received in Year 3 for Year 2 (IBNR Estimate); less than expected`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false,
    },
    {
      stepNumber: `7`,
      transactionNumber: `007`,
      route: `018`,
      description: `Pay $17 for pharmacy claims and known medical claims for Year 3`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false,
    },
    {
      stepNumber: `8`,
      transactionNumber: `008`,
      route: `022`,
      description: `Estimated claims for $6 not received for Year 3`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false,
    },
    {
      stepNumber: `9`,
      transactionNumber: `009`,
      route: `024`,
      description: `Pay $1 to Medica's employees`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false,
    },
    {
      stepNumber: `10`,
      transactionNumber: `010`,
      route: `027`,
      description: `Pay $2 of premium taxes to the Iowa Department of Revenue`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false,
    },
    {
      stepNumber: `11`,
      transactionNumber: `011`,
      route: `030`,
      description: `Collect $1 on "old" premiums receivable; Fail to collect remaining $1 on "old" premiums receivable`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false,
    },
    {
      stepNumber: `12`,
      transactionNumber: `012`,
      route: `034`,
      description: `Pay bill of $1 for postage from Year 2`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false,
    },
    {
      stepNumber: `13`,
      transactionNumber: `013`,
      route: `037`,
      description: `Reimburse employees for $1 of travel and client dining expenses Year 3`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false,
    },
    {
      stepNumber: `14`,
      transactionNumber: `014`,
      route: `040`,
      description: `Owe $1 to brokers for selling Commercial, IFB and Medicare policies`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false,
    },
    {
      stepNumber: `15`,
      transactionNumber: `015`,
      route: `042`,
      description: `Use 1/5th of 401 and 301 Carlson Parkway buildings for Year 3`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false,
    },
    {
      stepNumber: `16`,
      transactionNumber: `016`,
      route: `044`,
      description: `Receive $1 dividend from investments`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false,
    },
    {
      stepNumber: `17`,
      transactionNumber: `017`,
      route: `046`,
      description: `Receive $5 cash from customers for Year 4`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false,
    },
    {
      stepNumber: `18`,
      transactionNumber: `018`,
      route: `049`,
      description: `Pay federal income taxes of $1 to the IRS`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false,
    },
  ]);
  const [highlightCashTransactions, setHighlightCashTransactions] = useState(
    false
  );

  return (
    <div className="transaction-list-wrapper">
      <div className="transaction-list">
        <div className="transaction-items-headers">
          <span className="transaction-items-header-description bold center">
            <h3
              onClick={() => {
                if (canHighlightCashTransactions)
                  setHighlightCashTransactions(!highlightCashTransactions);
              }}
            >
              Year 3 Transactions
            </h3>
          </span>
        </div>
        {transactions.map((transaction) => (
          <Transaction
            description={transaction.description}
            key={transaction.transactionNumber}
            transactionNumber={transaction.transactionNumber}
            route={transaction.route}
            activeStep={activeStep}
            stepNumber={transaction.stepNumber}
            highlightCashTransactions={highlightCashTransactions}
            isCashTransaction={transaction.isCashTransaction}
          />
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
