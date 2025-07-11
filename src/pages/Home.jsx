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
          <p><b>SafeBench</b> is an industrial-grade benchmark open-sourced to advance academic research on preemptively identifying memory-overloading (MO) queries. SafeBench was curated by the Alibaba Cloud <a href="https://www.alibabacloud.com/en/product/analyticdb-for-mysql" target="_blank" rel="noopener noreferrer">AnalyticDB</a> team following rigorous data quality assessment and thorough removal of anomalous data. SafeBench is released under the Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0). </p>
          <div className="d-flex justify-content-center my-4">
            <a href="https://www.kaggle.com/datasets/onefanwu/safebench" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg px-5 py-3" style={{fontSize: '1.5rem', fontWeight: 'bold'}}>Download Dataset</a>
          </div>
          
          <div className="row mt-5">
            <div className="col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-lg" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
                <div className="card-body text-white text-center p-4">
                  <h3 className="card-title mb-3">
                    <i className="fas fa-database me-2"></i>
                    150M+ Real-World Queries
                  </h3>
                  <p className="card-text">
                    Comprehensive dataset containing over 150 million analytical queries from real production environments, providing unprecedented scale for memory-overloading detection research.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-lg" style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}>
                <div className="card-body text-white text-center p-4">
                  <h3 className="card-title mb-3">
                    <i className="fas fa-cube me-2"></i>
                    163-Dimensional Feature Vector
                  </h3>
                  <p className="card-text">
                    Rich feature representation combining query plan characteristics (147 dimensions) and cluster-level metrics (16 dimensions), enabling comprehensive analysis of memory usage patterns.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-lg" style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'}}>
                <div className="card-body text-white text-center p-4">
                  <h3 className="card-title mb-3">
                    <i className="fas fa-clock me-2"></i>
                    Real CPU Time & OOM Labels
                  </h3>
                  <p className="card-text">
                    Each query includes actual CPU execution time and memory overflow (OOM) annotations, providing ground truth for training and evaluating detection models.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-lg" style={{background: 'linear-gradient(135deg, #d4af37 0%, #f4e4bc 100%)'}}>
                <div className="card-body text-white text-center p-4">
                  <h3 className="card-title mb-3">
                    <i className="fas fa-cloud me-2"></i>
                    Alibaba Cloud Production Data
                  </h3>
                  <p className="card-text">
                    Authentic data sourced directly from Alibaba Cloud's AnalyticDB data warehouse, ensuring real-world relevance and practical applicability for production systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
// #endregion

export default Home;
