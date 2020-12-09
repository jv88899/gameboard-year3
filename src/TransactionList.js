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
      isCashTransaction: false
    },
    {
      stepNumber: `2`,
      transactionNumber: `002`,
      route: `004`,
      description: `Repay $5 loan to Wells Fargo`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `3`,
      transactionNumber: `003`,
      route: `007`,
      description: `Pay $1 for known claims for Year 2 in Year 3`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `4`,
      transactionNumber: `004`,
      route: `010`,
      description: `$18 of actual medical visits; claims received after renegotiating contracts with providers`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `5`,
      transactionNumber: `005`,
      route: `012`,
      description: `Pay $3 for prescriptions filled`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `6`,
      transactionNumber: `006`,
      route: `015`,
      description: `Pay actual claims of $1 received in Year 3 for Year 2 (IBNR estimate); less than expected`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `7`,
      transactionNumber: `007`,
      route: `019`,
      description: `Pay $18 of medical claims for Year 3`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `8`,
      transactionNumber: `008`,
      route: `022`,
      description: `Estimate claims for $2 not received for Year 3`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `9`,
      transactionNumber: `009`,
      route: `024`,
      description: `Pay $3 to Medica's employees`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `10`,
      transactionNumber: `010`,
      route: `027`,
      description: `Owe $2 to brokers for selling Commercial, IFB and Medicare policies for Year 3`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `11`,
      transactionNumber: `011`,
      route: `029`,
      description: `Use 1/5th of 401 and 301 Carlson Parkway buildings for Year 3`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `12`,
      transactionNumber: `012`,
      route: `031`,
      description: `Buy investments (primarily bonds but some stocks) with excess cash of $3`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `13`,
      transactionNumber: `013`,
      route: `034`,
      description: `Receive $1 dividend from stock`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `14`,
      transactionNumber: `014`,
      route: `037`,
      description: `Pay $1 of federal income taxes to the IRS; Pay $2 of premium taxes to Iowa Dept of Revenue`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    }
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
        {transactions.map(transaction => (
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
