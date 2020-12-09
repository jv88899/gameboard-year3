import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Transaction001 from "./transactions/Transaction001";
import Transaction002 from "./transactions/Transaction002";
import Transaction003 from "./transactions/Transaction003";
import Transaction004 from "./transactions/Transaction004";
import Transaction005 from "./transactions/Transaction005";
import Transaction006 from "./transactions/Transaction006";
import Transaction007 from "./transactions/Transaction007";
import Transaction008 from "./transactions/Transaction008";
import Transaction009 from "./transactions/Transaction009";
import Transaction010 from "./transactions/Transaction010";
import Transaction011 from "./transactions/Transaction011";
import Transaction012 from "./transactions/Transaction012";
import Transaction013 from "./transactions/Transaction013";
import Transaction014 from "./transactions/Transaction014";
import Transaction015 from "./transactions/Transaction015";
import Transaction016 from "./transactions/Transaction016";
import Transaction017 from "./transactions/Transaction017";
import Transaction018 from "./transactions/Transaction018";
import Transaction019 from "./transactions/Transaction019";
import Transaction020 from "./transactions/Transaction020";
import Transaction021 from "./transactions/Transaction021";
import Transaction022 from "./transactions/Transaction022";
import Transaction023 from "./transactions/Transaction023";
import Transaction024 from "./transactions/Transaction024";
import Transaction025 from "./transactions/Transaction025";
import Transaction026 from "./transactions/Transaction026";
import Transaction027 from "./transactions/Transaction027";
import Transaction028 from "./transactions/Transaction028";
import Transaction029 from "./transactions/Transaction029";
import Transaction030 from "./transactions/Transaction030";
import Transaction031 from "./transactions/Transaction031";

const Router = () => {
  const companyName = "Medica";
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Transaction001 companyName={companyName} />
        </Route>
        <Route path="/001" exact>
          <Transaction001 companyName={companyName} />
        </Route>
        <Route path="/002" exact>
          <Transaction002 companyName={companyName} />
        </Route>
        <Route path="/003" exact>
          <Transaction003 companyName={companyName} />
        </Route>
        <Route path="/004" exact>
          <Transaction004 companyName={companyName} />
        </Route>
        <Route path="/005" exact>
          <Transaction005 companyName={companyName} />
        </Route>
        <Route path="/006" exact>
          <Transaction006 companyName={companyName} />
        </Route>
        <Route path="/007" exact>
          <Transaction007 companyName={companyName} />
        </Route>
        <Route path="/008" exact>
          <Transaction008 companyName={companyName} />
        </Route>
        <Route path="/009" exact>
          <Transaction009 companyName={companyName} />
        </Route>
        <Route path="/010" exact>
          <Transaction010 companyName={companyName} />
        </Route>
        <Route path="/011" exact>
          <Transaction011 companyName={companyName} />
        </Route>
        <Route path="/012" exact>
          <Transaction012 companyName={companyName} />
        </Route>
        <Route path="/013" exact>
          <Transaction013 companyName={companyName} />
        </Route>
        <Route path="/014" exact>
          <Transaction014 companyName={companyName} />
        </Route>
        <Route path="/015" exact>
          <Transaction015 companyName={companyName} />
        </Route>
        <Route path="/016" exact>
          <Transaction016 companyName={companyName} />
        </Route>
        <Route path="/017" exact>
          <Transaction017 companyName={companyName} />
        </Route>
        <Route path="/018" exact>
          <Transaction018 companyName={companyName} />
        </Route>
        <Route path="/019" exact>
          <Transaction019 companyName={companyName} />
        </Route>
        <Route path="/020" exact>
          <Transaction020 companyName={companyName} />
        </Route>
        <Route path="/021" exact>
          <Transaction021 companyName={companyName} />
        </Route>
        <Route path="/022" exact>
          <Transaction022 companyName={companyName} />
        </Route>
        <Route path="/023" exact>
          <Transaction023 companyName={companyName} />
        </Route>
        <Route path="/024" exact>
          <Transaction024 companyName={companyName} />
        </Route>
        <Route path="/025" exact>
          <Transaction025 companyName={companyName} />
        </Route>
        <Route path="/026" exact>
          <Transaction026 companyName={companyName} />
        </Route>
        <Route path="/027" exact>
          <Transaction027 companyName={companyName} />
        </Route>
        <Route path="/028" exact>
          <Transaction028 companyName={companyName} />
        </Route>
        <Route path="/029" exact>
          <Transaction029 companyName={companyName} />
        </Route>
        <Route path="/030" exact>
          <Transaction030 companyName={companyName} />
        </Route>
        <Route path="/031" exact>
          <Transaction031 companyName={companyName} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
