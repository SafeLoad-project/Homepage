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
          <p>
            SafeBench is an industrial-grade benchmark open-sourced by the Alibaba Cloud AnalyticDB team, aiming to advance academic research on preemptively identifying memory-overloading (MO) queries. The dataset covers three days, over 150 million real production queries, and contains rich query-level and cluster-level features.
          </p>
          <h2 className="mt-5">Dataset Specification</h2>
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
          <p>
            The SafeBench dataset is divided into three subsets: A1, A2, and A3, covering 800+ production clusters and 150M+ queries. G1 and G2 are recommended training/testing splits.
          </p>
          <h2 className="mt-5">Feature Groups</h2>
          <ul>
            <li>Query-level features: structural and statistical features, memory-intensive operators, execution configuration, etc. (147 dimensions)</li>
            <li>Cluster-level features: resource utilization, hardware configuration, historical OOM, etc. (16 dimensions)</li>
          </ul>
          <h2 className="mt-5">Dataset Download</h2>
          <p>
            Download link: <a href="https://www.kaggle.com/datasets/onefanwu/safebench" target="_blank" rel="noopener noreferrer">Kaggle SafeBench</a>
          </p>
          <h2 className="mt-5">Citation & Rule Library</h2>
          <p>
            Rule library: <a href="https://github.com/SafeLoad-project/SafeBench/blob/main/rule_library.txt" target="_blank" rel="noopener noreferrer">rule_library.txt</a><br/>
            SafeBench homepage: <a href="https://safeload-project.github.io/SafeBench/" target="_blank" rel="noopener noreferrer">https://safeload-project.github.io/SafeBench/</a>
          </p>
          <h2 className="mt-5">License</h2>
          <p>
            SafeBench is licensed under CC BY-NC 4.0, allowing non-commercial use with attribution.<br/>
            <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC 4.0 License</a>
          </p>
        </Container>
      </section>
    </>
  );
};
// #endregion

export default Home;
