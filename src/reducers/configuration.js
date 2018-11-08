import { ADD_ITEM, REMOVE_ITEM } from '../actions';

const INITIAL_STATE = {
  data: [
    {
      product: 'Bacon',
      quantity: 0,
      src: 'https://baconmockup.com/300/200/bacon',
    },
    {
      product: 'Bacon and Eggs',
      quantity: 0,
      src: 'https://baconmockup.com/300/200/bacon-eggs',
    },
    {
      product: 'Sirloin',
      quantity: 0,
      src: 'https://baconmockup.com/300/200/sirloin',
    },
    {
      product: 'Drumsticks',
      quantity: 0,
      src: 'https://baconmockup.com/300/200/drumstick',
    },
    {
      product: 'The Whole Platter',
      quantity: 0,
      src: 'https://baconmockup.com/300/200/family-style-bbq',
    }
  ],
  items: []
};

export const configuration = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      action.item.quantity = action.item.quantity + 1;
      const add = state.items.filter(
        item => item.product !== action.item.product
      );

      return {
        ...state,
        items: [...add, action.item]
      };
    case REMOVE_ITEM:
      action.item.quantity = action.item.quantity - 1;
      const remove = state.items.filter(
        item => item.product !== action.item.product
      );

      return {
        ...state,
        items: [...remove, action.item].filter(item => item.quantity > 0)
      };
    default:
      return state;
  }
};
