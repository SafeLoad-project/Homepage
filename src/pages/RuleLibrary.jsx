import React from "react";
import { Container } from "react-bootstrap";

const RuleLibrary = () => (
  <section className="section">
    <Container>
      <h1 className="mb-4 display-4 text-center">Rule Library</h1>
      <h2>Single-feature Rule</h2>
      <p>
        A <b>single-feature rule</b> is a threshold-based comparison on a single feature, such as "Table Scan output size &gt; 1 MB", formally written as <code>table_scan_output_size &gt; 1048576</code>.<br/>
        Based on prior deployment experience in AnalyticDB and feature importance analysis, three key feature types are identified as highly effective for detecting MO queries:
      </p>
      <ul>
        <li><b>Operator Count</b></li>
        <li><b>Operator Cardinality</b></li>
        <li><b>OOM Indicator</b></li>
      </ul>
      <p>
        (See detailed explanations in the <a href="https://safeload-project.github.io/Homepage/#/query-features">Query Features</a> page.)<br/>
        SafeBench provides a public library of single-feature rules targeting these features, with thresholds derived from extensive business deployment experience.
      </p>
      <h2>Discriminative Rule</h2>
      <p>
        A <b>discriminative rule</b> is a logical combination of up to four single-feature rules, connected by <b>AND</b>/<b>OR</b> operators. This design ensures that rule generation can be completed within one hour, which is practical for offline deployment.
      </p>
      <h2>Value of the Rule Library</h2>
      <ul>
        <li>The rule library provides efficient and interpretable means for automatic detection and interception of memory-overloading queries.</li>
        <li>Researchers and engineers can directly reuse these rules or extend/adapt them for their own scenarios.</li>
        <li>All rules and thresholds are available in the <a href="https://github.com/SafeLoad-project/SafeBench/blob/main/rule_library.txt" target="_blank" rel="noopener noreferrer">SafeBench Rule Library</a>.</li>
      </ul>
    </Container>
  </section>
);

export default RuleLibrary; 