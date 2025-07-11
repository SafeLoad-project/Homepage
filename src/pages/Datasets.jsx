import React from "react";
import { Container } from "react-bootstrap";

const Datasets = () => (
  <section className="section">
    <Container>
      <h1 className="mb-4 display-4 text-center">Datasets</h1>
      <h2>File Description</h2>
      <p>The SafeBench datasets can be found <a href="https://www.kaggle.com/datasets/onefanwu/safebench" target="_blank" rel="noopener noreferrer">here</a> at Kaggle. We take the three files from the A1 dataset as examples. The files <b>A1_positive_samples.parquet</b> and <b>A1_negative_samples.parquet</b> store the positive and negative samples, respectively, for the A1 dataset. Both Parquet files share an identical schema, comprising three columns: <code>processid_createtime</code>, <code>instance_name</code>, and <code>feat_vec</code>.</p>
      <p>The first two columns, <code>processid_createtime</code> and <code>instance_name</code>, are of <b>string type</b>. <code>processid_createtime</code> serves as a query identifier, while <code>instance_name</code> denotes the database cluster name. The third column, <code>feat_vec</code>, is a <b>float array</b> that holds a 163-dimensional feature vector. It is noteworthy that the latter part of the <code>processid_createtime</code> string, following the hyphen (<code>-</code>), represents the timestamp when the query occurred.</p>
      <p>The file <b>A1_cputime.parquet</b> contains the actual total CPU time consumed by each query. This file has two columns: <code>processid_createtime</code> and <code>wall_time</code>. The <code>processid_createtime</code> column serves as the query identifier, while <code>wall_time</code> represents the CPU time consumed by the respective query.</p>
    </Container>
  </section>
);

export default Datasets; 