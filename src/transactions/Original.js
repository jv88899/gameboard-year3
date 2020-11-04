import React from "react";
import TransactionList from "../TransactionList";

const Original = ({ companyName }) => (
  <>
    <TransactionList activeStep={`001`} />
    <div className="board-wrapper">
      {/* customer section */}
      <div className="customer-wrapper">
        <div className="customer-wrapper-customers">
          <h5 className="green" style={{ margin: `0px` }}>
            Customers
          </h5>
          <ul>
            <li>Members</li>
            <li>Employers</li>
            <li>Government</li>
          </ul>
          <span className="item-total">40</span>
        </div>
        <div className="customer-wrapper-wells-fargo-bank">
          <h5 className="green">
            Wells Fargo <br /> Bank
          </h5>
          <span className="item-total">5</span>
        </div>
        <div className="customer-wrapper-us-bank">
          <h5 className="green">Us Bank</h5>
          <span className="item-total">4</span>
        </div>
      </div>
      {/* income statement and balance sheet section */}
      <div className="income-balance-wrapper">
        <div className="rdi-brand-wrapper">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="arrow-right w-6 h-6 blue"
            style={{ height: `50px` }}
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <h1 className="blue">{companyName}</h1>
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="arrow-right w-6 h-6 blue"
            style={{ height: `50px` }}
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="income-balance-inner-wrapper">
          <div className="income-statement">
            <h3>Income Statement</h3>
            <ul>
              <li>
                <span className="item-name">Premium Revenue</span>
                <span className="item-total">0</span>
              </li>
              <li>
                <span className="item-name red">Pharmacy Expense</span>
                <span className="item-total">0</span>
              </li>
              <li>
                <span className="item-name red">Medical Expense</span>
                <span className="item-total">0</span>
              </li>
              <li>
                <span className="item-name red">Administrative Expense</span>
                <span className="item-total">0</span>
              </li>
              <li>
                <span className="item-name red">Broker Expense</span>
                <span className="item-total">0</span>
              </li>
              <li>
                <span className="item-name red">Premium Tax Expense</span>
                <span className="item-total">0</span>
              </li>
              <li>
                <span className="item-name red">Depreciation Expense</span>
                <span className="item-total">0</span>
              </li>
              <li>
                <span className="item-name">Investment Income</span>
                <span className="item-total">0</span>
              </li>
              <li>
                <span className="item-name red">
                  Federal Income Tax Expense
                </span>
                <span className="item-total">0</span>
              </li>
            </ul>
            <div className="totals-wrapper">
              <span className="item-total expense bg-red white">0</span>
              <span className="item-total revenue bg-black white">0</span>
            </div>
          </div>

          {/* Balance Sheet Section */}
          <div className="balance-sheet">
            <h3>Balance Sheet</h3>
            <div className="balance-sheet-inner-wrapper">
              {/* Assets Section */}
              <div className="assets-liability-wrapper">
                <div className="assets-wrapper">
                  <h5>Assets</h5>
                  <ul className="balance-sheet-assets">
                    <li>
                      <span className="item-name green">Cash</span>
                      <span className="item-total">6</span>
                    </li>
                    <li>
                      <span className="item-name blue">Investments</span>
                      <span className="item-total">6</span>
                    </li>
                    <li>
                      <span className="item-name blue">
                        Premiums Receivable
                      </span>
                      <span className="item-total">2</span>
                    </li>
                    <li>
                      <span className="item-name blue">
                        Property & Equipment
                      </span>
                      <span className="item-total">5</span>
                    </li>
                  </ul>
                </div>
                {/* Liabilities Section */}
                <div>
                  <h5>Liabilities</h5>
                  <ul className="balance-sheet-liabilities">
                    <li>
                      <span className="item-name blue">Claims Payable</span>
                      <span className="item-total">1</span>
                    </li>
                    <li>
                      <span className="item-name blue">IBNR</span>
                      <span className="item-total">2</span>
                    </li>
                    <li>
                      <span className="item-name blue">Salary Payable</span>
                      <span className="item-total">0</span>
                    </li>
                    <li>
                      <span className="item-name blue">Broker Payable</span>
                      <span className="item-total">1</span>
                    </li>
                    <li>
                      <span className="item-name blue">Accounts Payable</span>
                      <span className="item-total">1</span>
                    </li>
                    <li>
                      <span className="item-name blue">
                        Income Taxes Payable
                      </span>
                      <span className="item-total">0</span>
                    </li>
                    <li>
                      <span className="item-name blue">Loan Payable</span>
                      <span className="item-total">0</span>
                    </li>
                    <li>
                      <span className="item-name blue">Unearned Premiums</span>
                      <span className="item-total">10</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="net-assets">
              <h5>Net Assets</h5>
              <div className="net-assets-inner-wrapper">
                <span className="item-total">0</span>
                <span className="item-total">4</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Operating Section */}
      <div className="operating-wrapper">
        <div className="operating-wrapper-inner">
          <h5 className="green">Operating</h5>
          <ul className="operating-inner-list">
            <li>
              <span className="item-name red">Pharmacies</span>
              <span className="item-total">0</span>
            </li>
            <li>
              <span className="item-name red">Medical Providers</span>
              <span className="item-total">0</span>
            </li>
            <li>
              <span className="item-name red">Employees</span>
              <span className="item-total">0</span>
            </li>
            <li>
              <span className="item-name red">Brokers</span>
              <span className="item-total">0</span>
            </li>
            <li>
              <span className="item-name red">Vendors</span>
              <span className="item-total">0</span>
            </li>
            <li>
              <span className="item-name red">Taxing Authority</span>
              <span className="item-total">0</span>
            </li>
          </ul>
        </div>
        <div className="investing-inner">
          <h5 className="green">Investing</h5>
          <ul className="investing-inner-list">
            <li>
              <span className="item-name red">Carslon Properties</span>
              <span className="item-total">0</span>
            </li>
          </ul>
        </div>
        <div className="financing-inner">
          <h5 className="green">Financing</h5>
          <ul className="financing-inner-list">
            <li>
              <span className="item-name red">Wells Fargo Bank</span>
              <span className="item-total">0</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
);

export default Original;
