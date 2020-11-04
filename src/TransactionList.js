import React, { useState } from "react";
import Transaction from "./Transaction";

const TransactionList = ({ activeStep, canHighlightCashTransactions }) => {
  const [transactions, setTransactions] = useState([
    {
      stepNumber: `1`,
      transactionNumber: `001`,
      route: `001`,
      description: `Sale of $10 to customers for Year 2; Recognize $10 received in Year 1 for Year 2`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `2`,
      transactionNumber: `002`,
      route: `004`,
      description: `Collect $10 cash from customers`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `3`,
      transactionNumber: `003`,
      route: `007`,
      description: `Pay $1 of known claims from Year 1 in Year 2`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `4`,
      transactionNumber: `004`,
      route: `010`,
      description: `Pay actual claims for $3 received in Year 2 for Year 1 (IBNR estimate); more than expected`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `5`,
      transactionNumber: `005`,
      route: `014`,
      description: `Actual prescription filled for $2; claim received`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `6`,
      transactionNumber: `006`,
      route: `016`,
      description: `$13 of actual medical expenses for visits; claim received`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `7`,
      transactionNumber: `007`,
      route: `018`,
      description: `Estimated claims for $4 not received for Year 2`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `8`,
      transactionNumber: `008`,
      route: `020`,
      description: `Sell $6 of investments given the large payable balances`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `9`,
      transactionNumber: `009`,
      route: `022`,
      description: `Pay $14 of pharmacy claims and known medical claims for Year 2`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `10`,
      transactionNumber: `010`,
      route: `026`,
      description: `Pay $1 to Medica's employees`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `11`,
      transactionNumber: `011`,
      route: `029`,
      description: `Receive $1 postage bill for mailing materials to Medicare members for Annual Enrollment Period Year 2`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `12`,
      transactionNumber: `012`,
      route: `031`,
      description: `Pay $1 bill from KSTP for ad space for "We've got you covered" commercials Year 1`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `13`,
      transactionNumber: `013`,
      route: `034`,
      description: `Take out a loan for $5 from Wells Fargo Bank`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `14`,
      transactionNumber: `014`,
      route: `037`,
      description: `Pay $1 to brokers for selling Medica policies for Year 2; Pay $1 broker fees from Year 1`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `15`,
      transactionNumber: `015`,
      route: `041`,
      description: `Pay premium taxes of $1 to the Nebraska Department of Revenue`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `16`,
      transactionNumber: `016`,
      route: `044`,
      description: `Use 1/5th of the 401 and 301 Carlson Parkway buildings for Year 2`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `17`,
      transactionNumber: `017`,
      route: `046`,
      description: `Receive $8 cash from customers for Year 3`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `18`,
      transactionNumber: `018`,
      route: `049`,
      description: `Buy investments (primarily bonds and some stocks) with excess cash of $3`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `19`,
      transactionNumber: `019`,
      route: `051`,
      description: `Repay loan of $5 to Wells Fargo Bank`,
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
              Year 2 Transactions
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
