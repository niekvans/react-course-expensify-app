import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with 2 expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={235532452} />);
    expect(wrapper).toMatchSnapshot();
});