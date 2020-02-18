import React from 'react';
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Gift from './Gift';

configure({ adapter: new Adapter() });

describe('gift', ()=>{
    const mockRemove = jest.fn();
    const id = 1;
    const props = {gift:{id}, removeGift: mockRemove};
    const app = shallow(<Gift {...props}/>);
    it('render correctly', ()=>{
        expect(app).toMatchSnapshot();
    })

    it('initializes a person and present in `state`', ()=>{
        expect(app.state()).toEqual({person:'', present:''})
    })

    describe('when typing into the person input',()=>{
        beforeEach(()=>{
            app.find('.input-person').simulate('change', { target: {value: 'Uncle'}})
        });

        it('update the person in `state`', ()=>{
            expect(app.state().person).toEqual('Uncle');
        })
    })

    describe('when typing into the present input', ()=>{
        beforeEach(()=>{
            app.find('.input-present').simulate('change', {target: {value: 'watch'}})
        });

        it('update the present in `state`', ()=>{
            expect(app.state().present).toEqual('watch');
        })
    })

    describe('when clicking the remove gift button', ()=>{
        beforeEach(()=>{
            app.find('.btn-remove').simulate('click');
        })

        it('calls the removeGift callback', ()=>{
            expect(mockRemove).toHaveBeenCalledWith(id);
        });
    })

})