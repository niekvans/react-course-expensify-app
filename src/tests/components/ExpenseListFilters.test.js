import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with altFilter correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const textChange = 'newText here';
    wrapper.find('input').simulate('change', { target: { value: textChange } });
    expect(setTextFilter).toHaveBeenLastCalledWith(textChange);
});

test('should sort by date', () => {
    const sortChange = 'date';
    wrapper.find('select').simulate('change', { target: { value: sortChange } });
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
    const sortChange = 'amount';
    wrapper.find('select').simulate('change', { target: { value: sortChange } });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
    const startDate = moment(100);
    const endDate = moment(30000);
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', () => {
    const focusChange = 'startDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(focusChange);
    expect(wrapper.state('calendarFocused')).toBe(focusChange);
});