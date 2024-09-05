import { KernTasklist, KernTasklistGroup, KernTasklistItem, KernAlert, KernHeading, KernAccordion, KernAccordionGroup, KernFieldset, KernInputCheckbox } from "@kern-ux/react";
import {  Link } from "react-router-dom";

export default function Page1() {
  return (
    <div className="Page1">
Beispielseite <br />


<Link to={`/`}>Zurück zur Komponenten Seite</Link>
    </div>
  );
}
