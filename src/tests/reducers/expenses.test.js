import moment from 'moment';

import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '007',
        description: 'test adding expense',
        note: 'some note here',
        amount: 100,
        createdAt: moment(100)
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const expense = {
        description: 'changed this description'
    };
    const action = {
        id: expenses[0].id,
        type: 'EDIT_EXPENSE',
        updates: expense
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe('changed this description');
});

test('should not edit expense if expense not found', () => {
    const expense = {
        description: 'changed this description'
    };
    const action = {
        id: '007',
        type: 'EDIT_EXPENSE',
        updates: expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});