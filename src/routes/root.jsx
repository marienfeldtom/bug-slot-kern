import { KernAlert } from "@kern-ux/react";
import {  Link } from "react-router-dom";

export default function Root() {
  return (
    <div className="Root">
      <KernAlert _label="Alert" _variant="card" _type="success">
       Link:
<kern-link
_href="https://www.kern-ux.de/design-system/components"
_label="kern-ux.de/design-system/components"
></kern-link>
</KernAlert> <br />
      <Link to={`page1`}>Zur anderen Seite navigieren</Link>
    </div>
  );
}
