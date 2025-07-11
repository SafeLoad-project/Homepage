import React from "react";
import { Container } from "react-bootstrap";

const Datasets = () => (
  <section className="section">
    <Container>
      <h1 className="mb-4 display-4 text-center">Datasets</h1>
      <p>SafeBench consists of three datasets: <b>A1</b>, <b>A2</b>, and <b>A3</b>. Each dataset contains two Parquet files: one for positive samples and one for negative samples. For example, the A1 dataset includes <b>A1_positive_samples.parquet</b> (positive samples) and <b>A1_negative_samples.parquet</b> (negative samples). The same structure applies to A2 and A3.</p>
      <div className="table-responsive">
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>Subset</th><th>#Queries</th><th>#Clusters</th><th>#Pos.</th><th>G1</th><th>G2</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>A1</td><td>52,080,130</td><td>854</td><td>4,014</td><td>training</td><td></td></tr>
            <tr><td>A2</td><td>50,856,068</td><td>862</td><td>2,508</td><td>testing</td><td>training</td></tr>
            <tr><td>A3</td><td>48,821,677</td><td>856</td><td>2,331</td><td></td><td>testing</td></tr>
          </tbody>
        </table>
      </div>
      <p>This table outlines the specifications of SafeBench, which is constructed from real-world production data collected from Alibaba Cloud's data warehouse, AnalyticDB. The dataset spans three continuous days, forming three distinct subsets: SafeBench A1 (Day 1), A2 (Day 2), and A3 (Day 3). These subsets include over 150 million analytical queries executed across more than 800 production database clusters. The average CPU time per query is 7.9 seconds (A1), 8.6 seconds (A2), and 8.6 seconds (A3), respectively.</p>
      <p>To assess the effectiveness of MO query detection methods, we divide the datasets into two evaluation groups. Group G1 uses A1 for training and A2 for testing, while Group G2 uses A2 for training and A3 for testing. By default, SafeBench uses the data from the previous day for training and the data from the current day for testing, reflecting the practical deployment setting in AnalyticDB where both models and heuristic rules are updated on a daily basis. Of course, researchers are free to combine data from A1, A2, and A3 as training or testing sets according to their own experimental needs.</p>
      <h2>File Description</h2>
      <p>The SafeBench datasets can be found <a href="https://www.kaggle.com/datasets/onefanwu/safebench" target="_blank" rel="noopener noreferrer">here</a> at Kaggle. We take the three files from the A1 dataset as examples. The files <b>A1_positive_samples.parquet</b> and <b>A1_negative_samples.parquet</b> store the positive and negative samples, respectively, for the A1 dataset. Both Parquet files share an identical schema, comprising three columns: <code>processid_createtime</code>, <code>instance_name</code>, and <code>feat_vec</code>.</p>
      <p>The first two columns, <code>processid_createtime</code> and <code>instance_name</code>, are of <b>string type</b>. <code>processid_createtime</code> serves as a query identifier, while <code>instance_name</code> denotes the database cluster name. The third column, <code>feat_vec</code>, is a <b>float array</b> that holds a 163-dimensional feature vector. It is noteworthy that the latter part of the <code>processid_createtime</code> string, following the hyphen (<code>-</code>), represents the timestamp when the query occurred.</p>
      <p>The file <b>A1_cputime.parquet</b> contains the actual total CPU time consumed by each query. This file has two columns: <code>processid_createtime</code> and <code>wall_time</code>. The <code>processid_createtime</code> column serves as the query identifier, while <code>wall_time</code> represents the CPU time consumed by the respective query.</p>
    </Container>
  </section>
);

export default Datasets; 