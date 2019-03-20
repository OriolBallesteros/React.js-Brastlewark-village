import React from "react";
import { shallow } from "enzyme";
import { __PeopleListView as PeopleListView } from "../../components/PeopleList";
import { dummyData } from "../dummyData";

it("should render PeopleList component correctly", () => {
  const wrapper = shallow(<PeopleListView filteredHabitants={dummyData} />);

  expect(wrapper).toMatchSnapshot();
});
