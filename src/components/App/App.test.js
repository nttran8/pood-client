import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

it("App renders without crashing", () => {
  const div = document.createElement("div");
  const component = (
    <Router>
      <App />
    </Router>
  );
  ReactDOM.render(component, div);
  ReactDOM.unmountComponentAtNode(div);
});

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// // import { mount } from 'enzyme'
// // import { MemoryRouter } from 'react-router-dom'
// // import PersonContext from '../../Context/PersonContext'

// describe(`App Route`, () => {
//   it("renders without crashing", () => {
//     const div = document.createElement("div");
//     ReactDOM.render(<App />, div);
//     ReactDOM.unmountComponentAtNode("div");
//   });
// }); // import React from "react";
// // import App from "./App";
// // import { mount } from "enzyme";
// // import { MemoryRouter } from "react-router-dom";
// // import PoodContext from "../../contexts/PoodContext";
// // Enzyme.configure({ adapter: new Adapter() });

// // describe(`App route`, () => {
// //   it("Renders by default", () => {
// //     const value = {
// //       logList: [],
// //       log: {},
// //       user: {},
// //       error: null,
// //       setError: () => {},
// //       clearError: () => {},
// //       clearLogList: () => {},
// //       updateLogList: () => {},
// //       removeLog: () => {},
// //       setLog: () => {},
// //       clearLog: () => {},
// //       updateNickname: () => {},
// //       updateStyle: () => {},
// //       updateColor: () => {},
// //       updateAmount: () => {},
// //       updateNote: () => {},
// //       addLog: () => {},
// //       setUser: () => {},
// //       updateUser: () => {},
// //       clearUser: () => {},
// //       fetchLogList: () => {},
// //       handleLogout: () => {}
// //     };
// //     mount(
// //       <MemoryRouter>
// //         <PoodContext.Provider value={value}>
// //           <App />
// //         </PoodContext.Provider>
// //       </MemoryRouter>
// //     );
// //   });
// // });
