import { shallow } from 'enzyme';
import Header from './header';

describe("Header Test", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Header />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
