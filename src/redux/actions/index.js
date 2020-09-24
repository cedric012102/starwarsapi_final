/**
 * Action Types
 */
export const IncreaseOne = 'IncreaseOne';
export const IncreaseTwo = 'IncreaseTwo';

export const Quotes_IncreaseOne = 'Quotes_IncreaseOne';
export const Quotes_IncreaseTwo = 'Quotes_IncreaseTwo';

/**
 * Action Creators
 */
export const increaseOneCounter = () => ({ type: IncreaseOne});
export const increaseTwoCounter = () => ({ type: IncreaseTwo});