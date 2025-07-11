import React from "react";
import { Container } from "react-bootstrap";

const QueryFeatures = () => (
  <section className="section">
    <Container>
      <h1 className="mb-4 display-4 text-center">Query Features</h1>
      <h2>Feature Group</h2>
      <p>SafeBench provides detailed profiling for each query from both the query-level and the cluster-level perspectives. Each query is uniquely identified by a query ID with a submission timestamp and is annotated with metadata such as cluster name, total CPU time, and a binary label indicating whether memory overload occurred. Each query is further represented by a 163-dimensional feature vector, comprising 147 query-level features and 16 cluster-level features.</p>
      <p>The query-level features characterize structural and statistical aspects of query plans, including operator types, cardinalities, memory-intensive operators, and user-specified execution modes. The cluster-level features describe system-level context, such as resource utilization metrics, static hardware configurations, and historical memory overload signals. Notably, all eight cluster resource metrics are collected at a one-minute granularity, a design choice intended to minimize the monitoring overhead on the data warehouse system. For example, if a query is issued at 08:03:30, its corresponding cluster resource metrics are taken from the snapshot recorded at 08:03:00. These features offer a holistic view of query execution behaviors and system conditions, enabling robust detection and analysis of MO patterns.</p>
      {/* <h3>Feature Group Table</h3> */}
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
            <tr><td>feature_10</td><td>The total estimated number of input rows across all exchange nodes.</td></tr>
            <tr><td>feature_11</td><td>The maximum estimated number of input rows across all exchange nodes.</td></tr>
            <tr><td>feature_12</td><td>The total estimated number of output rows across all exchange nodes.</td></tr>
            <tr><td>feature_13</td><td>The maximum estimated number of output rows across all exchange nodes.</td></tr>
            <tr><td>feature_14</td><td>The total estimated input size across all exchange nodes.</td></tr>
            <tr><td>feature_15</td><td>The maximum estimated input size across all exchange nodes.</td></tr>
            <tr><td>feature_16</td><td>The total estimated output size across all exchange nodes.</td></tr>
            <tr><td>feature_17</td><td>The maximum estimated output size across all exchange nodes.</td></tr>
            <tr><td>feature_18</td><td>The number of join nodes.</td></tr>
            <tr><td>feature_19</td><td>The total estimated number of input rows across all join nodes.</td></tr>
            <tr><td>feature_20</td><td>The maximum estimated number of input rows across all join nodes.</td></tr>
            <tr><td>feature_21</td><td>The total estimated number of output rows across all join nodes.</td></tr>
            <tr><td>feature_22</td><td>The maximum estimated number of output rows across all join nodes.</td></tr>
            <tr><td>feature_23</td><td>The total estimated input size across all join nodes.</td></tr>
            <tr><td>feature_24</td><td>The maximum estimated input size across all join nodes.</td></tr>
            <tr><td>feature_25</td><td>The total estimated output size across all join nodes.</td></tr>
            <tr><td>feature_26</td><td>The maximum estimated output size across all join nodes.</td></tr>
            <tr><td>feature_27</td><td>The number of remoteSource nodes.</td></tr>
            <tr><td>feature_28</td><td>The total estimated number of input rows across all remoteSource nodes.</td></tr>
            <tr><td>feature_29</td><td>The maximum estimated number of input rows across all remoteSource nodes.</td></tr>
            <tr><td>feature_30</td><td>The total estimated number of output rows across all remoteSource nodes.</td></tr>
            <tr><td>feature_31</td><td>The maximum estimated number of output rows across all remoteSource nodes.</td></tr>
            <tr><td>feature_32</td><td>The total estimated input size across all remoteSource nodes.</td></tr>
            <tr><td>feature_33</td><td>The maximum estimated input size across all remoteSource nodes.</td></tr>
            <tr><td>feature_34</td><td>The total estimated output size across all remoteSource nodes.</td></tr>
            <tr><td>feature_35</td><td>The maximum estimated output size across all remoteSource nodes.</td></tr>
            <tr><td>feature_36</td><td>The number of tablecommit nodes.</td></tr>
            <tr><td>feature_37</td><td>The total estimated number of input rows across all  tablecommit nodes.</td></tr>
            <tr><td>feature_38</td><td>The maximum estimated number of input rows across all tablecommit nodes.</td></tr>
            <tr><td>feature_39</td><td>The total estimated number of output rows across all tablecommit nodes.</td></tr>
            <tr><td>feature_40</td><td>The maximum estimated number of output rows across all tablecommit nodes.</td></tr>
            <tr><td>feature_41</td><td>The total estimated input size across all tablecommit nodes.</td></tr>
            <tr><td>feature_42</td><td>The maximum estimated input size across all tablecommit nodes.</td></tr>
            <tr><td>feature_43</td><td>The total estimated output size across all tablecommit nodes.</td></tr>
            <tr><td>feature_44</td><td>The maximum estimated output size across all tablecommit nodes.</td></tr>
            <tr><td>feature_45</td><td>The number of tablescan nodes.</td></tr>
            <tr><td>feature_46</td><td>The total estimated number of input rows across all tablescan nodes.</td></tr>
            <tr><td>feature_47</td><td>The maximum estimated number of input rows across all tablescan nodes.</td></tr>
            <tr><td>feature_48</td><td>The total estimated number of output rows across all tablescan nodes.</td></tr>
            <tr><td>feature_49</td><td>The maximum estimated number of output rows across all tablescan nodes.</td></tr>
            <tr><td>feature_50</td><td>The total estimated input size across all tablescan nodes.</td></tr>
            <tr><td>feature_51</td><td>The maximum estimated input size across all tablescan nodes.</td></tr>
            <tr><td>feature_52</td><td>The total estimated output size across all tablescan nodes.</td></tr>
            <tr><td>feature_53</td><td>The maximum estimated output size across all tablescan nodes.</td></tr>
            <tr><td>feature_54</td><td>The number of tablewriter nodes.</td></tr>
            <tr><td>feature_55</td><td>The total estimated number of input rows across all tablewriter nodes.</td></tr>
            <tr><td>feature_56</td><td>The maximum estimated number of input rows across all tablewriter nodes.</td></tr>
            <tr><td>feature_57</td><td>The total estimated number of output rows across all tablewriter nodes.</td></tr>
            <tr><td>feature_58</td><td>The maximum estimated number of output rows across all tablewriter nodes.</td></tr>
            <tr><td>feature_59</td><td>The total estimated input size across all tablewriter nodes.</td></tr>
            <tr><td>feature_60</td><td>The maximum estimated input size across all tablewriter nodes.</td></tr>
            <tr><td>feature_61</td><td>The total estimated output size across all tablewriter nodes.</td></tr>
            <tr><td>feature_62</td><td>The maximum estimated output size across all tablewriter nodes.</td></tr>
            <tr><td>feature_63</td><td>The number of window nodes.</td></tr>
            <tr><td>feature_64</td><td>The total estimated number of input rows across all window nodes.</td></tr>
            <tr><td>feature_65</td><td>The maximum estimated number of input rows across all window nodes.</td></tr>
            <tr><td>feature_66</td><td>The total estimated number of output rows across all window nodes.</td></tr>
            <tr><td>feature_67</td><td>The maximum estimated number of output rows across all window nodes.</td></tr>
            <tr><td>feature_68</td><td>The total estimated input size across all window nodes.</td></tr>
            <tr><td>feature_69</td><td>The maximum estimated input size across all window nodes.</td></tr>
            <tr><td>feature_70</td><td>The total estimated output size across all window nodes.</td></tr>
            <tr><td>feature_71</td><td>The maximum estimated output size across all window nodes.</td></tr>
            <tr><td>feature_72</td><td>The number of markDistinct nodes.</td></tr>
            <tr><td>feature_73</td><td>The total estimated number of input rows across all markDistinct nodes.</td></tr>
            <tr><td>feature_74</td><td>The maximum estimated number of input rows across all markDistinct nodes.</td></tr>
            <tr><td>feature_75</td><td>The total estimated number of output rows across all markDistinct nodes.</td></tr>
            <tr><td>feature_76</td><td>The maximum estimated number of output rows across all markDistinct nodes.</td></tr>
            <tr><td>feature_77</td><td>The total estimated input size across all markDistinct nodes.</td></tr>
            <tr><td>feature_78</td><td>The maximum estimated input size across all markDistinct nodes.</td></tr>
            <tr><td>feature_79</td><td>The total estimated output size across all markDistinct nodes.</td></tr>
            <tr><td>feature_80</td><td>The maximum estimated output size across all markDistinct nodes.</td></tr>
            <tr><td>feature_81</td><td>The number of topn nodes.</td></tr>
            <tr><td>feature_82</td><td>The total estimated number of input rows across all topn nodes.</td></tr>
            <tr><td>feature_83</td><td>The maximum estimated number of input rows across all topn nodes.</td></tr>
            <tr><td>feature_84</td><td>The total estimated number of output rows across all topn nodes.</td></tr>
            <tr><td>feature_85</td><td>The maximum estimated number of output rows across all topn nodes.</td></tr>
            <tr><td>feature_86</td><td>The total estimated input size across all topn nodes.</td></tr>
            <tr><td>feature_87</td><td>The maximum estimated input size across all topn nodes.</td></tr>
            <tr><td>feature_88</td><td>The total estimated output size across all topn nodes.</td></tr>
            <tr><td>feature_89</td><td>The maximum estimated output size across all topn nodes.</td></tr>
            <tr><td>feature_90</td><td>The number of limit nodes.</td></tr>
            <tr><td>feature_91</td><td>The total estimated number of input rows across all limit nodes.</td></tr>
            <tr><td>feature_92</td><td>The maximum estimated number of input rows across all limit nodes.</td></tr>
            <tr><td>feature_93</td><td>The total estimated number of output rows across all limit nodes.</td></tr>
            <tr><td>feature_94</td><td>The maximum estimated number of output rows across all limit nodes.</td></tr>
            <tr><td>feature_95</td><td>The total estimated input size across all limit nodes.</td></tr>
            <tr><td>feature_96</td><td>The maximum estimated input size across all limit nodes.</td></tr>
            <tr><td>feature_97</td><td>The total estimated output size across all limit nodes.</td></tr>
            <tr><td>feature_98</td><td>The maximum estimated output size across all limit nodes.</td></tr>
            <tr><td>feature_99</td><td>The number of topnRowNumber nodes.</td></tr>
            <tr><td>feature_100</td><td>The total estimated number of input rows across all topnRowNumber nodes.</td></tr>
            <tr><td>feature_101</td><td>The maximum estimated number of input rows across all topnRowNumber nodes.</td></tr>
            <tr><td>feature_102</td><td>The total estimated number of output rows across all topnRowNumber nodes.</td></tr>
            <tr><td>feature_103</td><td>The maximum estimated number of output rows across all topnRowNumber nodes.</td></tr>
            <tr><td>feature_104</td><td>The total estimated input size across all topnRowNumber nodes.</td></tr>
            <tr><td>feature_105</td><td>The maximum estimated input size across all topnRowNumber nodes.</td></tr>
            <tr><td>feature_106</td><td>The total estimated output size across all topnRowNumber nodes.</td></tr>
            <tr><td>feature_107</td><td>The maximum estimated output size across all topnRowNumber nodes.</td></tr>
            <tr><td>feature_108</td><td>The number of sort nodes.</td></tr>
            <tr><td>feature_109</td><td>The total estimated number of input rows across all sort nodes.</td></tr>
            <tr><td>feature_110</td><td>The maximum estimated number of input rows across all sort nodes.</td></tr>
            <tr><td>feature_111</td><td>The total estimated number of output rows across all sort nodes.</td></tr>
            <tr><td>feature_112</td><td>The maximum estimated number of output rows across all sort nodes.</td></tr>
            <tr><td>feature_113</td><td>The total estimated input size across all sort nodes.</td></tr>
            <tr><td>feature_114</td><td>The maximum estimated input size across all sort nodes.</td></tr>
            <tr><td>feature_115</td><td>The total estimated output size across all sort nodes.</td></tr>
            <tr><td>feature_116</td><td>The maximum estimated output size across all sort nodes.</td></tr>
            <tr><td>feature_117</td><td>The number of filter nodes</td></tr>
            <tr><td>feature_118</td><td>The number of output nodes</td></tr>
            <tr><td>feature_119</td><td>The number of project nodes</td></tr>
            <tr><td>feature_120</td><td>The number of sipConsumer nodes</td></tr>
            <tr><td>feature_121</td><td>The number of sipProducer nodes</td></tr>
            <tr><td>feature_122</td><td>The number of scalar nodes</td></tr>
            <tr><td>feature_123</td><td>The number of runtimeCollect nodes</td></tr>
            <tr><td>feature_124</td><td>The number of runtimeFilter nodes</td></tr>
            <tr><td>feature_125</td><td>The number of values nodes</td></tr>
            <tr><td>feature_126</td><td>The number of runtimeScan nodes</td></tr>
            <tr><td>feature_127</td><td>The total number of INNER-type joins among all join nodes.</td></tr>
            <tr><td>feature_128</td><td>The total number of FULL-type joins among all join nodes.</td></tr>
            <tr><td>feature_129</td><td>The total number of LEFT-type joins among all join nodes.</td></tr>
            <tr><td>feature_130</td><td>The total number of RIGHT-type joins among all join nodes.</td></tr>
            <tr><td>feature_131</td><td>The total number of join nodes with a REPLICATED distribution type.</td></tr>
            <tr><td>feature_132</td><td>The total number of join criteria across all join nodes.</td></tr>
            <tr><td>feature_133</td><td>The total number of output symbols of type VARCHAR across all join nodes.</td></tr>
            <tr><td>feature_134</td><td>The total number of join keys with data type VARCHAR in the join conditions across all join nodes.</td></tr>
            <tr><td>feature_135</td><td>The total number of output symbols across all join nodes.</td></tr>
            <tr><td>feature_136</td><td>The total estimated output size of the left child nodes across all join nodes.</td></tr>
            <tr><td>feature_137</td><td>The total estimated output size of the right child nodes across all join nodes.</td></tr>
            <tr><td>feature_138</td><td>The total number of grouping keys across all aggregation nodes.</td></tr>
            <tr><td>feature_139</td><td>The total sum of grouping-set count across all aggregation nodes.</td></tr>
            <tr><td>feature_140</td><td>The total number of grouping keys of type VARCHAR across all aggregation nodes.</td></tr>
            <tr><td>feature_141</td><td>The total number of aggregation nodes with step type PARTIAL.</td></tr>
            <tr><td>feature_142</td><td>The total number of partitionBy keys across all window nodes.</td></tr>
            <tr><td>feature_143</td><td>The total number of orderBy keys across all window nodes.</td></tr>
            <tr><td>feature_144</td><td>The total number of ordering directions across all window nodes.</td></tr>
            <tr><td>feature_145</td><td>The total number of orderBy keys across all sort nodes.</td></tr>
            <tr><td>feature_146</td><td>The number of queries processed per second by the DB cluster.</td></tr>
            <tr><td>feature_147</td><td>The average utilization ratio of the general resource pool in the DB cluster.</td></tr>
            <tr><td>feature_148</td><td>The average utilization ratio of the system resource pool in the DB cluster.</td></tr>
            <tr><td>feature_149</td><td>The maximum observed utilization ratio of the general resource pool in the DB cluster.</td></tr>
            <tr><td>feature_150</td><td>The maximum observed utilization ratio of the system resource pool in the DB cluster.</td></tr>
            <tr><td>feature_151</td><td>The percentage of CPU resources currently utilized by the DB cluster.</td></tr>
            <tr><td>feature_152</td><td>The percentage of memory resources currently utilized by the DB cluster.</td></tr>
            <tr><td>feature_153</td><td>The average query response time, measured in milliseconds, for queries executed on the DB cluster.</td></tr>
            <tr><td>feature_154</td><td>The total number of CPU cores allocated to the DB cluster.</td></tr>
            <tr><td>feature_155</td><td>The number of CPU cores dedicated to query execution within the DB cluster.</td></tr>
            <tr><td>feature_156</td><td>The number of CPU cores allocated to worker threads.</td></tr>
            <tr><td>feature_157</td><td>The number of front-end nodes in the DB cluster.</td></tr>
            <tr><td>feature_158</td><td>The user-configured garbage collection level in the DB cluster.</td></tr>
            <tr><td>feature_159</td><td>The degree of query parallelism.</td></tr>
            <tr><td>feature_160</td><td>Resource group ID of the DB cluster.</td></tr>
            <tr><td>feature_161</td><td>The number of Out-of-Memory (OOM) events that occurred in the database cluster associated with the query on the previous day.</td></tr>
            <tr><td>feature_162</td><td>Whether the query specifies batch execution mode.</td></tr>
          </tbody>
        </table>
      </div>
    </Container>
  </section>
);

export default QueryFeatures; 