import React from "react";
// State
import { useGetUsersQuery } from "../app/apiSlice";
// Components
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import BackToTop from "../components/BackToTop";
// Config
import { filteredProjects, moreInfo } from "../config";
// Utils
import { updateTitle } from "../utils";
import { Container } from "react-bootstrap";

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
          <p><b>SafeBench</b> is an industrial-grade benchmark open-sourced to advance academic research on preemptively identifying memory-overloading (MO) queries. SafeBench was curated by the Alibaba Cloud <a href="https://www.alibabacloud.com/en/product/analyticdb-for-mysql" target="_blank" rel="noopener noreferrer">AnalyticDB</a> team following rigorous data quality assessment and thorough removal of anomalous data. The <a href="https://safeload-project.github.io/SafeBench/" target="_blank" rel="noopener noreferrer">homepage</a> of SafeBench is now live. <b>The datasets can be downloaded <a href="https://www.kaggle.com/datasets/onefanwu/safebench" target="_blank" rel="noopener noreferrer">here</a>.</b></p>
          <div className="d-flex justify-content-center my-4">
            <a href="https://www.kaggle.com/datasets/onefanwu/safebench" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg px-5 py-3" style={{fontSize: '1.5rem', fontWeight: 'bold'}}>Download Dataset</a>
          </div>
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
        </Container>
      </section>
    </>
  );
};
// #endregion

export default Home;
