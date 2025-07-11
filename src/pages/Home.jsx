import React from "react";
// 移除未使用的import
// Components
import { Container } from "react-bootstrap";
import { updateTitle } from "../utils";

// #region component
const Home = () => {
  // SafeBench introduction
  React.useEffect(() => {
    updateTitle(`SafeBench | Benchmark Homepage`);
  }, []);

  return (
    <>
      <section className="section">
        <Container>
          <h1 className="mb-4 display-4 text-center">SafeBench</h1>
          <p><b>SafeBench</b> is an industrial-grade benchmark open-sourced to advance academic research on preemptively identifying memory-overloading (MO) queries. SafeBench was curated by the Alibaba Cloud <a href="https://www.alibabacloud.com/en/product/analyticdb-for-mysql" target="_blank" rel="noopener noreferrer">AnalyticDB</a> team following rigorous data quality assessment and thorough removal of anomalous data. </p>
          <div className="d-flex justify-content-center my-4">
            <a href="https://www.kaggle.com/datasets/onefanwu/safebench" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg px-5 py-3" style={{fontSize: '1.5rem', fontWeight: 'bold'}}>Download Dataset</a>
          </div>
        </Container>
      </section>
    </>
  );
};
// #endregion

export default Home;
