import React from "react";
import renderer from "react-test-renderer";
import Mistakes from "./mistakes.jsx";

describe(`Mistakes should render correctly`, () => {
  it(`With zero count`, () => {
    const tree = renderer.create(<Mistakes count={0} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`With non-zero count`, () => {
    const tree = renderer.create(<Mistakes count={1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
