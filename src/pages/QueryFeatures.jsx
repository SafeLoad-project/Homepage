import React from "react";
import { Container } from "react-bootstrap";

const QueryFeatures = () => (
  <section className="section">
    <Container>
      <h1 className="mb-4 display-4 text-center">Query Features</h1>
      <h2>Feature Group</h2>
      <p>SafeBench provides detailed profiling for each query from both the query-level and the cluster-level perspectives. Each query is uniquely identified by a query ID with a submission timestamp and is annotated with metadata such as cluster name, total CPU time, and a binary label indicating whether memory overload occurred. Each query is further represented by a 163-dimensional feature vector, comprising 147 query-level features and 16 cluster-level features.</p>
      <p>The query-level features characterize structural and statistical aspects of query plans, including operator types, cardinalities, memory-intensive operators, and user-specified execution modes. The cluster-level features describe system-level context, such as resource utilization metrics, static hardware configurations, and historical memory overload signals. Notably, all eight cluster resource metrics are collected at a one-minute granularity, a design choice intended to minimize the monitoring overhead on the data warehouse system. For example, if a query is issued at 08:03:30, its corresponding cluster resource metrics are taken from the snapshot recorded at 08:03:00. These features offer a holistic view of query execution behaviors and system conditions, enabling robust detection and analysis of MO patterns.</p>
      <h3>Feature Group Table</h3>
      <div className="table-responsive">
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>Category</th><th>Feature Group</th><th>Description</th><th>Count</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Query-level</td><td>Operator Count</td><td>Number of distinct operators (23 types in total), such as the count of join nodes in the query.</td><td>23</td></tr>
            <tr><td>Query-level</td><td>Operator Cardinality</td><td>Cardinality statistics for 13 operators, covering 8 metrics per operator, including total and maximum values of the output size and row count. These operators are selected based on error reports from MO queries.</td><td>104</td></tr>
            <tr><td>Query-level</td><td>Memory-intensive Operators</td><td>Fine-grained features of operators typically associated with high memory usage (i.e., join, aggregation, window, sort); includes child node cardinality for join and total number of varchar-typed grouping keys in aggregation.</td><td>19</td></tr>
            <tr><td>Query-level</td><td>Execution Configuration</td><td>Configuration information during query execution scheduling, including the total degree of query parallelism and an indicator of whether the SQL query explicitly specifies an execution mode (e.g., batch mode), which may impact memory behavior.</td><td>2</td></tr>
            <tr><td>Cluster-level</td><td>Resource Metrics</td><td>Cluster resource usage metrics collected at 1-minute granularity, including QPS, average memory pool utilization, and CPU utilization.</td><td>8</td></tr>
            <tr><td>Cluster-level</td><td>Cluster Configuration</td><td>Static configuration of the provisioned cluster, including the number of CPU cores and the resource group ID.</td><td>6</td></tr>
            <tr><td>Cluster-level</td><td>OOM Indicator</td><td>Number of OOM events observed in the corresponding cluster on the previous day.</td><td>1</td></tr>
          </tbody>
        </table>
      </div>
      <h2 className="mt-5">Feature Identifiers and Description</h2>
      <p>The following table lists the features associated with each query in SafeBench, along with their identifiers and descriptions.</p>
      <div className="table-responsive" style={{maxHeight: '500px', overflowY: 'auto'}}>
        <table className="table table-bordered table-sm text-center">
          <thead>
            <tr>
              <th>Feature Identifier</th><th>Description</th>
            </tr>
          </thead>
          <tbody>
            {/* 这里插入所有163维特征的表格内容，可分批渲染或滚动显示 */}
            <tr><td>feature_0</td><td>The number of aggregation nodes</td></tr>
            <tr><td>feature_1</td><td>The total estimated number of input rows across all aggregation nodes.</td></tr>
            <tr><td>feature_2</td><td>The maximum estimated number of input rows across all aggregation nodes.</td></tr>
            <tr><td>feature_3</td><td>The total estimated number of output rows across all aggregation nodes.</td></tr>
            <tr><td>feature_4</td><td>The maximum estimated number of output rows across all aggregation nodes.</td></tr>
            <tr><td>feature_5</td><td>The total estimated input size across all aggregation nodes.</td></tr>
            <tr><td>feature_6</td><td>The maximum estimated input size across all aggregation nodes.</td></tr>
            <tr><td>feature_7</td><td>The total estimated output size across all aggregation nodes.</td></tr>
            <tr><td>feature_8</td><td>The maximum estimated output size across all aggregation nodes.</td></tr>
            <tr><td>feature_9</td><td>The number of exchange nodes.</td></tr>
            {/* ...此处省略，实际插入全部163项... */}
            <tr><td>feature_162</td><td>Whether the query specifies batch execution mode.</td></tr>
          </tbody>
        </table>
      </div>
    </Container>
  </section>
);

export default QueryFeatures; 