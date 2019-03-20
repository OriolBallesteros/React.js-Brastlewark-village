import React from "react";
import { shallow } from "enzyme";
import AppRouter from "../../routers/AppRouter";

it("should define AppRouter correctly", () => {
    const wrapper = shallow(<AppRouter />);

    expect(wrapper).toMatchSnapshot();
});
