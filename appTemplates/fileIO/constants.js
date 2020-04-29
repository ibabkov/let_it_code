export const LOREM_IPSUM = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
 of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
 electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
 sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
 versions of Lorem Ipsum`;

export const CSV_MOCK = `name,class,dorm,room,GPA
Sally Whittaker,2018,McCarren House,312,3.75
Belinda Jameson,2017,Cushing House,148,3.52
Jeff Smith,2018,Prescott House,17-D,3.20
Sandy Allen,2019,Oliver House,108,3.48`;

export const XML_MOCK = `<?xml version="1.0" encoding="UTF-8"?>
<root>
  <row>
    <name>Sally Whittaker</name>
    <class>2018</class>
    <dorm>McCarren House</dorm>
    <room>312</room>
    <GPA>3.75</GPA>
  </row>
  <row>
    <name>Belinda Jameson</name>
    <class>2017</class>
    <dorm>Cushing House</dorm>
    <room>148</room>
    <GPA>3.52</GPA>
  </row>
  <row>
    <name>Jeff Smith</name>
    <class>2018</class>
    <dorm>Prescott House</dorm>
    <room>17-D</room>
    <GPA>3.20</GPA>
  </row>
  <row>
    <name>Sandy Allen</name>
    <class>2019</class>
    <dorm>Oliver House</dorm>
    <room>108</room>
    <GPA>3.48</GPA>
  </row>
</root>`;

export const HTML_MOCK = `<!DOCTYPE html>
<html>
<head>
  <style>
    html, body {
      margin: 0;
      padding: 0;
    }
    #app {
      min-height: 100vh;
      padding: 24px 20px;
      margin: 0 auto;
      box-sizing: border-box;
    }

    .text {
      display: inline-block;
      color: #121212;
      text-align: center;
    }
  </style>
  <script src="main.js"></script>
</head>
<body>
<div id="app">
</div>
</body>
<script>
  (() => {
    const main = new Main();
    main.render();
  })();
</script>
</html>`;

