import React from "react";
import { shallow } from "enzyme";
import { __AppView as AppView } from "../../components/App";

describe('App component tests', ()=>{
    it("should render App component when no error produced", () => {
        const apiInfo = {
            professions: ['prof1', 'prof2', 'prof3'],
            hair_colors: ['hair1', 'hair2', 'hair3']
        };
        const filterInfo = {
            profession: 'prof',
            hair: 'hair',
            genre: 'genre'
        };
        const disableButton = false;
        const that = {
            handleSubmit: jest.fn(),
            onProfessionChange: jest.fn(),
            onHairChange: jest.fn(),
            onGenreChange: jest.fn()
        };
    
        const wrapper = shallow(<AppView
            apiInfo={apiInfo}
            filterInfo={filterInfo}
            disableButton={disableButton}
            that={that} />);
    
        expect(wrapper).toMatchSnapshot();
    });
    
    it('should render ErrorMessage component when produced error on App component', ()=>{
        const apiInfo = {
            error: true
        };

        const wrapper = shallow(<AppView apiInfo={apiInfo}/>)

        expect(wrapper).toMatchSnapshot();
    });
});


